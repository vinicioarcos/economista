import json
from pathlib import Path
from reportlab.lib import colors
from reportlab.lib.enums import TA_LEFT
from reportlab.lib.pagesizes import A4
from reportlab.lib.styles import ParagraphStyle, getSampleStyleSheet
from reportlab.lib.units import mm
from reportlab.platypus import BaseDocTemplate, Frame, KeepInFrame, PageTemplate, Paragraph, Spacer, Table, TableStyle

ROOT = Path(__file__).resolve().parents[1]
OUTPUT = ROOT / "output" / "pdf" / "hoja-de-vida-economista.pdf"
PUBLIC = ROOT / "public" / "downloads" / "hoja-de-vida-economista.pdf"
OUTPUT.parent.mkdir(parents=True, exist_ok=True)
PUBLIC.parent.mkdir(parents=True, exist_ok=True)

profile = json.loads((ROOT / "content" / "profile.json").read_text(encoding="utf-8"))

INK = colors.HexColor("#17211B")
GREEN = colors.HexColor("#1B4D3E")
LIME = colors.HexColor("#D7F05B")
MUTED = colors.HexColor("#647067")
PAPER = colors.HexColor("#F4F1E8")
WHITE = colors.white

styles = getSampleStyleSheet()
styles.add(ParagraphStyle(name="Name", fontName="Helvetica-Bold", fontSize=23, leading=25, textColor=WHITE, spaceAfter=4))
styles.add(ParagraphStyle(name="Headline", fontName="Helvetica", fontSize=9.5, leading=13, textColor=colors.HexColor("#DCE8E3")))
styles.add(ParagraphStyle(name="Section", fontName="Helvetica-Bold", fontSize=8, leading=11, textColor=GREEN, tracking=1.2, spaceBefore=10, spaceAfter=5))
styles.add(ParagraphStyle(name="BodySmall", fontName="Helvetica", fontSize=8.4, leading=12.2, textColor=INK))
styles.add(ParagraphStyle(name="Muted", fontName="Helvetica", fontSize=7.5, leading=10.5, textColor=MUTED))
styles.add(ParagraphStyle(name="EntryTitle", fontName="Helvetica-Bold", fontSize=10.5, leading=13, textColor=INK, spaceAfter=2))
styles.add(ParagraphStyle(name="SideSection", fontName="Helvetica-Bold", fontSize=8, leading=11, textColor=LIME, tracking=1, spaceBefore=12, spaceAfter=5))
styles.add(ParagraphStyle(name="Side", fontName="Helvetica", fontSize=7.7, leading=11, textColor=WHITE))

def header(canvas, doc):
    width, height = A4
    canvas.saveState()
    canvas.setFillColor(GREEN)
    canvas.rect(0, height - 42 * mm, width, 42 * mm, stroke=0, fill=1)
    canvas.setFillColor(LIME)
    canvas.rect(16 * mm, height - 43 * mm, 35 * mm, 2 * mm, stroke=0, fill=1)
    canvas.setFont("Helvetica", 6.5)
    canvas.setFillColor(MUTED)
    canvas.drawRightString(width - 16 * mm, 10 * mm, "HOJA DE VIDA · SINTETIZADA A PARTIR DE INFORMACIÓN VERIFICADA POR EL TITULAR")
    canvas.restoreState()

doc = BaseDocTemplate(
    str(OUTPUT), pagesize=A4, leftMargin=16 * mm, rightMargin=16 * mm,
    topMargin=49 * mm, bottomMargin=16 * mm, title=f"Hoja de vida - {profile['name']}"
)
frame = Frame(doc.leftMargin, doc.bottomMargin, doc.width, doc.height, id="main", leftPadding=0, rightPadding=0, topPadding=0, bottomPadding=0)
doc.addPageTemplates([PageTemplate(id="cv", frames=[frame], onPage=header)])

story = []
contact_line = f"{profile['location']}  ·  {profile['email']}"
if profile.get("phone"):
    contact_line += f"  ·  {profile['phone']}"
name_block = Table([
    [Paragraph(profile["professionalName"], styles["Name"])],
    [Paragraph(profile["headline"], styles["Headline"])],
    [Paragraph(contact_line, styles["Headline"])],
], colWidths=[178 * mm])
name_block.setStyle(TableStyle([("BACKGROUND", (0,0), (-1,-1), GREEN), ("LEFTPADDING", (0,0), (-1,-1), 0), ("RIGHTPADDING", (0,0), (-1,-1), 0), ("TOPPADDING", (0,0), (-1,-1), 0), ("BOTTOMPADDING", (0,0), (-1,-1), 2)]))
story.append(name_block)
story.append(Spacer(1, 11 * mm))

def period_suffix(period):
    return "" if period == "Periodo no especificado" else f" ({period})"

left = []

left += [Paragraph("PERFIL", styles["Section"]), Paragraph(profile["summary"], styles["BodySmall"])]

left += [Paragraph("FORMACIÓN", styles["Section"])]
for entry in profile["education"]:
    left += [
        Paragraph(entry["credential"], styles["EntryTitle"]),
        Paragraph(f"{entry['institution']}{period_suffix(entry['period'])}", styles["Muted"]),
        Paragraph(entry["detail"], styles["BodySmall"]),
        Spacer(1, 2 * mm),
    ]

left += [Paragraph("EXPERIENCIA PROFESIONAL", styles["Section"])]
for entry in profile["experience"]["professional"]:
    left += [
        Paragraph(f"{entry['role']} · {entry['organization']}", styles["EntryTitle"]),
        Paragraph(entry["detail"] + period_suffix(entry["period"]), styles["BodySmall"]),
        Spacer(1, 2 * mm),
    ]

teaching = profile["experience"]["teaching"]
current = next((t for t in teaching if t["period"] == "Actualidad"), None)
other_institutions = [t["institution"] for t in teaching if t is not current]
left += [Paragraph("DOCENCIA", styles["Section"])]
if current:
    left += [Paragraph(f"Docente investigador (actualidad) · {current['institution']}", styles["EntryTitle"]),
              Paragraph(current["subjects"], styles["BodySmall"]), Spacer(1, 2 * mm)]
left += [Paragraph(
    "Experiencia docente adicional en: " + "; ".join(other_institutions) + ".",
    styles["BodySmall"],
), Spacer(1, 2 * mm)]

left += [Paragraph("PROYECTOS DE INVESTIGACIÓN", styles["Section"])]
for project in profile["projects"]:
    left += [
        Paragraph(project["title"], styles["EntryTitle"]),
        Paragraph(f"{project['institution']}{period_suffix(project['period'])} · {project['link']}", styles["Muted"]),
        Spacer(1, 2 * mm),
    ]

left += [Paragraph("PUBLICACIONES Y PRODUCTOS ACADÉMICOS", styles["Section"])]
for article in profile["publications"]["articles"]:
    left += [Paragraph(f"{article['year']} — {article['reference']}", styles["BodySmall"]),
              Paragraph(article["link"], styles["Muted"]), Spacer(1, 1.5 * mm)]
book = profile["publications"]["book"]
left += [Paragraph(f"{book['year']} — {book['reference']}", styles["BodySmall"]),
          Paragraph(book["link"], styles["Muted"])]

right = []
right += [Paragraph("CONTACTO", styles["SideSection"]),
           Paragraph(f"{profile['email']}<br/>{profile['phone']}<br/>{profile['location']}", styles["Side"])]
right += [Paragraph("ENLACES", styles["SideSection"]),
           Paragraph(
               f"{profile['links']['website']}<br/>ORCID {profile['links']['orcid']}<br/>"
               f"{profile['links']['github']}<br/>{profile['links']['osf']}<br/>{profile['links']['services']}",
               styles["Side"],
           )]
tools = profile["skills"]["software"] + profile["skills"]["gis"] + profile["skills"]["visualization"]
right += [Paragraph("HERRAMIENTAS", styles["SideSection"]), Paragraph("<br/>".join(tools), styles["Side"])]
right += [Paragraph("COMPETENCIAS", styles["SideSection"]), Paragraph("<br/>".join(profile["skills"]["methods"]), styles["Side"])]
right += [Paragraph("LÍNEAS DE INVESTIGACIÓN", styles["SideSection"]), Paragraph("<br/>".join(profile["skills"]["researchLines"]), styles["Side"])]
right += [Paragraph("IDIOMAS", styles["SideSection"])]
for language in profile["languages"]:
    right += [Paragraph(f"{language['name']} · {language['level']}", styles["Side"])]
right += [Paragraph("CURSOS Y CAPACITACIONES", styles["SideSection"]),
           Paragraph(f"{len(profile['courses'])} cursos y capacitaciones completados en econometría, docencia universitaria, programación estadística y formulación de proyectos. Detalle completo en el portafolio web.", styles["Side"])]

frame_height = A4[1] - doc.topMargin - doc.bottomMargin
header_height = 34 * mm  # name block + spacer above the two-column content
available_height = frame_height - header_height
left_boxed = KeepInFrame(123 * mm - 9 * mm, available_height, left, mode="shrink")
right_boxed = KeepInFrame(47 * mm - 13 * mm, available_height, right, mode="shrink")

content = Table([[left_boxed, right_boxed]], colWidths=[123 * mm, 47 * mm], hAlign=TA_LEFT)
content.setStyle(TableStyle([
    ("VALIGN", (0,0), (-1,-1), "TOP"),
    ("BACKGROUND", (1,0), (1,0), GREEN),
    ("LEFTPADDING", (0,0), (0,0), 0), ("RIGHTPADDING", (0,0), (0,0), 9 * mm),
    ("LEFTPADDING", (1,0), (1,0), 7 * mm), ("RIGHTPADDING", (1,0), (1,0), 6 * mm),
    ("TOPPADDING", (0,0), (0,0), 0), ("TOPPADDING", (1,0), (1,0), 5 * mm),
    ("BOTTOMPADDING", (1,0), (1,0), 6 * mm),
]))
story.append(content)
doc.build(story)
PUBLIC.write_bytes(OUTPUT.read_bytes())
print(f"Generated: {OUTPUT}")
print(f"Published: {PUBLIC}")
