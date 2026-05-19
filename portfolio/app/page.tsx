import Hero from '@/components/Hero';
import FeaturedProjects from '@/components/FeaturedProjects';
import DesignApproach from '@/components/DesignApproach';
import { projects } from '@/data/projects';

export default function Home() {
  const featured = projects.slice(0, 4);

  return (
    <main id="top">
      <Hero />
      <FeaturedProjects projects={featured} />
      <section className="mx-auto max-w-[1240px] px-6 py-16 md:py-20">
        <DesignApproach />
      </section>
    </main>
  );
}
