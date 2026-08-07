import Link from "next/link";
import profile from "@/content/profile.json";

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

export default function BlogLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <header className="site-header">
        <Link className="brand" href="/" aria-label="Ir al inicio">
          <span>{profile.initials}</span>
          <b>{profile.shortName}</b>
        </Link>
        <nav aria-label="Navegación principal">
          <Link href="/#proyectos">Proyectos</Link>
          <Link href="/#publicaciones">Publicaciones</Link>
          <Link href="/#docencia">Experiencia</Link>
          <Link href="/#blog">Blog</Link>
        </nav>
        <Link className="header-cta" href="/#contacto">Hablemos <Arrow /></Link>
      </header>

      {children}

      <footer>
        <div className="brand"><span>{profile.initials}</span><b>{profile.shortName}</b></div>
        <p>
          Economía con evidencia. Decisiones con contexto.
          <br />
          Sponsor: <a href={profile.sponsor.url} target="_blank" rel="noopener noreferrer">{profile.sponsor.name}</a>
        </p>
        <div><Link href="/#inicio">Ir al portafolio ↑</Link></div>
      </footer>
    </main>
  );
}
