import Link from 'next/link';
import Image from 'next/image';
import { Project } from '@/types/project';

export default function ProjectCard({ project }: { project: Project }) {
  return (
    <Link
      href={`/projects/${project.slug}`}
      className="group block overflow-hidden rounded-2xl border border-warm-200 bg-white shadow-[0_12px_30px_rgba(17,14,10,0.08)] transition duration-300 hover:-translate-y-1 hover:shadow-[0_20px_46px_rgba(17,14,10,0.14)]"
    >
      <div className="relative h-72 overflow-hidden">
        <Image src={project.coverImage} alt={project.title} fill className="object-cover transition duration-700 group-hover:scale-[1.04]" />
      </div>
      <div className="p-6">
        <p className="text-[11px] uppercase tracking-[0.2em] text-caramel">{project.category} · {project.year}</p>
        <h3 className="mt-2 font-serif text-3xl leading-tight text-warm-900">{project.title}</h3>
        <p className="mt-3 text-sm leading-relaxed text-warm-700">{project.description}</p>
      </div>
    </Link>
  );
}
