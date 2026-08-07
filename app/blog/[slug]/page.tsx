import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import profile from "@/content/profile.json";
import { blogPosts } from "../posts";

export function generateStaticParams() {
  return profile.blog.map((post) => ({ slug: post.slug }));
}

function getPost(slug: string) {
  const meta = profile.blog.find((post) => post.slug === slug);
  const content = blogPosts[slug];
  if (!meta || !content) return null;
  return { meta, content };
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const post = getPost(params.slug);
  if (!post) return {};
  return {
    title: `${post.meta.title} | ${profile.shortName}`,
    description: post.meta.title,
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = getPost(params.slug);
  if (!post) notFound();

  return (
    <>
      <div className="article-header">
        <p className="section-kicker">{post.meta.category}</p>
        <h1>{post.meta.title}</h1>
        <div className="article-meta">
          <span>{profile.professionalName}</span>
          <span>{post.meta.date}</span>
        </div>
      </div>
      <Link className="article-back" href="/#blog">← Volver al blog</Link>
      <article className="article-body">{post.content.body}</article>
    </>
  );
}
