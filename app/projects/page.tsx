import { compareDesc } from 'date-fns';
import { allProjects } from 'contentlayer/generated';
import { ProjectCard } from './ProjectCard';

export default function Projects() {
  const projects = allProjects.sort((a, b) =>
    compareDesc(new Date(a.date), new Date(b.date))
  );

  return (
    <main
      className={`
        flex
        min-h-screen
        flex-col
        items-center
        justify-center
        bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))]
        from-gray-900
        to-transparent
        p-1
        text-slate-400
        sm:p-12
        md:p-24
      `}
    >
      <h1
        className={`
          mb-16
          bg-gradient-to-r
          from-sky-600
          from-10%
          to-amber-600
          bg-clip-text
          text-center
          text-4xl
          font-extrabold
          uppercase
          tracking-widest
          text-transparent
        `}
      >
        Projects
      </h1>
      <div className="flex w-full flex-col items-stretch justify-center sm:flex-row sm:flex-wrap sm:items-start">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </main>
  );
}
