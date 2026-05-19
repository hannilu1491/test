import Link from 'next/link';
import ProjectGrid from './ProjectGrid';
import SectionTitle from './SectionTitle';
import { Project } from '@/types/project';

export default function FeaturedProjects({ projects }: { projects: Project[] }) {
  return (
    <section className="mx-auto max-w-[1240px] px-6 py-16 md:py-20">
      <div className="mb-8 flex items-end justify-between gap-4">
        <SectionTitle
          eyebrow="Featured Projects"
          title="Selected works with strategy, craft, and measurable outcomes"
          desc="A curated set of case studies spanning product design, brand systems, and editorial web experience."
        />
        <Link href="/projects" className="hidden border-b border-warm-900/40 pb-1 text-xs uppercase tracking-[0.18em] text-warm-900 md:block">
          View All Projects →
        </Link>
      </div>
      <ProjectGrid projects={projects} />
    </section>
  );
}
