import Image from "next/image";
import profile from "@/content/profile.json";

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

const toolsCount =
  profile.skills.software.length + profile.skills.gis.length + profile.skills.visualization.length;

const currentTeaching = profile.experience.teaching.find((item) => item.period === "Actualidad");

const projectCards = profile.projects.map((project, index) => ({
  index: String(index + 1).padStart(2, "0"),
  title: project.title,
  description: project.note,
  tags: [project.institution, project.period],
  link: project.link,
}));

const publicationItems = [
  ...profile.publications.articles.map((article) => ({
    type: `Artículo · ${article.year}`,
    title: article.reference,
    link: article.link,
  })),
  {
    type: `Libro · ${profile.publications.book.year}`,
    title: profile.publications.book.reference,
    link: profile.publications.book.link,
  },
];

const experienceCards = [
  ...profile.experience.professional.map((item) => ({
    title: `${item.role} · ${item.organization}`,
    description:
      item.period === "Periodo no especificado" ? item.detail : `${item.detail} (${item.period})`,
  })),
  ...profile.experience.teaching.map((item) => ({
    title: `${item.role} · ${item.institution}`,
    description:
      item.period === "Periodo no especificado" ? item.subjects : `${item.subjects} (${item.period})`,
  })),
];

const trainingItems = profile.courses.map((course) => ({
  year: course.duration,
  title: course.title,
  note: course.institution,
}));

const posts = [
  { date: "Sin fecha", title: "Artículo por redactar y verificar", category: "Tema pendiente" },
  { date: "Sin fecha", title: "Artículo por redactar y verificar", category: "Tema pendiente" },
  { date: "Sin fecha", title: "Artículo por redactar y verificar", category: "Tema pendiente" },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#inicio" aria-label="Ir al inicio">
          <span>{profile.initials}</span>
          <b>{profile.shortName}</b>
        </a>
        <nav aria-label="Navegación principal">
          <a href="#proyectos">Proyectos</a>
          <a href="#publicaciones">Publicaciones</a>
          <a href="#docencia">Experiencia</a>
          <a href="#blog">Blog</a>
        </nav>
        <a className="header-cta" href="#contacto">Hablemos <Arrow /></a>
      </header>

      <section className="hero" id="inicio">
        <div className="hero-copy">
          <p className="eyebrow"><span /> Economista · Docente · Investigador</p>
          <h1>{profile.shortName} <em>Economía con evidencia.</em></h1>
          <p className="hero-lead">{profile.summary}</p>
          <div className="hero-actions">
            <a className="button primary" href="/downloads/hoja-de-vida-economista.pdf" download>Descargar hoja de vida <Arrow /></a>
            <a className="button secondary" href="/downloads/formulario-datos-portafolio.docx" download>Formulario Word</a>
          </div>
        </div>
        <aside className="hero-card" aria-label="Perfil profesional resumido">
          <div className="portrait">
            <Image src="/images/portrait-economista-demo.png" alt={`Retrato ficticio generado por IA para demostrar la composición; debe sustituirse por la fotografía autorizada de ${profile.shortName}`} fill sizes="(max-width: 900px) 90vw, 30vw" priority />
            <span className="demo-label">Imagen de demostración generada por IA</span>
          </div>
          <div className="availability"><i /> {currentTeaching ? `${currentTeaching.role} · ${currentTeaching.institution}` : "Estado profesional por confirmar"}</div>
          <div className="hero-stats">
            <div><strong>{profile.education.length}</strong><span>Títulos y programas en curso</span></div>
            <div><strong>{profile.projects.length}</strong><span>Proyectos de investigación</span></div>
            <div><strong>{toolsCount}</strong><span>Herramientas y software</span></div>
          </div>
        </aside>
        <div className="hero-foot">
          <span>{profile.location}</span>
          <span>{profile.languages.map((language) => `${language.name} (${language.level})`).join(" · ")}</span>
          <span>CV disponible para descargar</span>
        </div>
      </section>

      <section className="manifesto section-pad">
        <p className="section-kicker">01 · Perfil</p>
        <div>
          <h2>Evidencia econométrica al servicio de la política pública.</h2>
          <p>
            Este portafolio reúne la formación, la investigación y la docencia de {profile.shortName},
            documentadas a partir de su hoja de vida verificada. La presentación distingue con claridad la
            formación académica, los proyectos de investigación, las publicaciones y la experiencia
            profesional y docente.
          </p>
          <div className="expertise">
            {profile.skills.researchLines.map((line) => <span key={line}>{line}</span>)}
          </div>
        </div>
      </section>

      <section className="editorial-image" aria-label="Imagen editorial de demostración">
        <Image src="/images/economist-editorial-demo.png" alt="Escritorio de análisis económico generado por IA como recurso visual de demostración" fill sizes="100vw" />
        <span>Recurso visual de demostración · generado por IA</span>
      </section>

      <section className="projects section-pad dark-section" id="proyectos">
        <div className="section-heading">
          <div><p className="section-kicker">02 · Proyectos</p><h2>Trabajo seleccionado</h2></div>
          <p>Proyectos de investigación aplicada desarrollados en la Universidad Técnica de Cotopaxi, con acceso público en OSF.</p>
        </div>
        <div className="project-grid">
          {projectCards.map((project) => (
            <article className="project-card" key={project.title}>
              <div className="project-number">{project.index}</div>
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <div className="tag-list">{project.tags.map((tag) => <span key={tag}>{tag}</span>)}</div>
              <a href={project.link} target="_blank" rel="noopener noreferrer" aria-label={`Ver repositorio de ${project.title}`}>Ver en OSF <Arrow /></a>
            </article>
          ))}
        </div>
      </section>

      <section className="research section-pad" id="publicaciones">
        <div className="section-heading">
          <div><p className="section-kicker">03 · Publicaciones</p><h2>Investigación en curso</h2></div>
          <p>Artículos y libro con referencia, año y enlace verificables, tal como constan en la hoja de vida del titular.</p>
        </div>
        <div className="research-list">
          {publicationItems.map((item, index) => (
            <article key={item.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div><p>{item.type}</p><h3>{item.title}</h3></div>
              <a href={item.link} target="_blank" rel="noopener noreferrer" aria-label={`Abrir enlace de ${item.type}`}><Arrow /></a>
            </article>
          ))}
        </div>
      </section>

      <section className="teaching section-pad" id="docencia">
        <div className="section-heading">
          <div><p className="section-kicker">04 · Experiencia</p><h2>Experiencia profesional y docente</h2></div>
          <p>Cargos y funciones tal como constan en la hoja de vida; las fechas se muestran únicamente cuando el documento las especifica.</p>
        </div>
        <div className="course-grid">
          {experienceCards.map((item, index) => (
            <article key={item.title}><span>{String(index + 1).padStart(2, "0")}</span><h3>{item.title}</h3><p>{item.description}</p></article>
          ))}
        </div>
      </section>

      <section className="training section-pad" id="capacitaciones">
        <div className="section-heading">
          <div><p className="section-kicker">05 · Capacitaciones</p><h2>Actualización profesional</h2></div>
          <p>Cursos y capacitaciones completados, con institución y duración; los certificados originales están pendientes de entrega.</p>
        </div>
        <div className="timeline">
          {trainingItems.map((item) => (
            <article key={item.title}><span>{item.year}</span><div><h3>{item.title}</h3><p>{item.note}</p></div></article>
          ))}
        </div>
      </section>

      <section className="blog section-pad" id="blog">
        <div className="section-heading">
          <div><p className="section-kicker">06 · Blog</p><h2>Notas desde el escritorio</h2></div>
          <p>El blog permanecerá como plantilla hasta que existan textos originales del titular.</p>
        </div>
        <div className="post-grid">
          {posts.map((post) => (
            <article key={post.title}><div><span>{post.category}</span><time>{post.date}</time></div><h3>{post.title}</h3><a href="#contacto">Próximamente <Arrow /></a></article>
          ))}
        </div>
      </section>

      <section className="contact section-pad" id="contacto">
        <p className="section-kicker">07 · Contacto</p>
        <div>
          <h2>Hablemos sobre investigación, docencia o consultoría económica.</h2>
          <p>
            <a href={`mailto:${profile.email}`}>{profile.email}</a> · <a href={`tel:${profile.phone}`}>{profile.phone}</a>
          </p>
          <p>
            <a href={profile.links.website} target="_blank" rel="noopener noreferrer">Sitio web</a> ·{" "}
            <a href={profile.links.services} target="_blank" rel="noopener noreferrer">Servicios</a> ·{" "}
            <a href={profile.links.github} target="_blank" rel="noopener noreferrer">GitHub Pages</a> ·{" "}
            <a href={`https://orcid.org/${profile.links.orcid}`} target="_blank" rel="noopener noreferrer">ORCID</a> ·{" "}
            <a href={profile.links.osf} target="_blank" rel="noopener noreferrer">OSF</a>
          </p>
          <div className="download-actions">
            <a className="button light" href="/downloads/formulario-datos-portafolio.docx" download>Descargar formulario Word <Arrow /></a>
            <a className="button outline-light" href="/downloads/hoja-de-vida-economista.pdf" download>Descargar hoja de vida <Arrow /></a>
          </div>
          <small>LinkedIn y las fechas exactas de algunos cargos siguen pendientes de confirmación por el titular.</small>
        </div>
      </section>

      <footer>
        <div className="brand"><span>{profile.initials}</span><b>{profile.shortName}</b></div>
        <p>Economía con evidencia. Decisiones con contexto.</p>
        <div><a href="#inicio">Volver arriba ↑</a></div>
      </footer>
    </main>
  );
}
