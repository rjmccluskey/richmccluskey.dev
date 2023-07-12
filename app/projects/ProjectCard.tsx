import Link from 'next/link';
import { Project } from 'contentlayer/generated';

export type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Link href={`/projects/${project.slug}`}>
      <section
        className={`
          m-6
          rounded
          bg-black
          p-4
          shadow-xl
          shadow-slate-500/10
          duration-200
          hover:scale-105
          hover:brightness-200
        `}
      >
        <h2 className="flex items-center">
          <span className="text-xl font-bold">{project.title}</span>
        </h2>
        <p className="mt-3 text-sm text-slate-500">{project.description}</p>
      </section>
    </Link>
  );
}
