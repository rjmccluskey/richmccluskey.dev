import Link from 'next/link';
import { Particles } from '@/components';

const navigation = [
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
];

export default function Home() {
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
        p-6
        text-slate-400
        sm:p-12
        md:p-24
      `}
    >
      <Particles className="absolute inset-0 -z-10" quantity={50} />
      <nav className="my-16">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <li key={item.href}>
              <Link
                href={item.href}
                className="text-sm duration-500 hover:text-slate-300"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
      <h1
        className={`
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
          md:text-5xl
          lg:text-7xl
        `}
      >
        Rich McCluskey
      </h1>
      <div className="my-16 max-w-2xl text-center">
        <p className="text-sm">
          Hi 👋, my name is Rich. I&apos;m a software engineer from California,
          currently working on the platform team at{' '}
          <Link
            target="_blank"
            href="https://www.dozuki.com"
            className="underline duration-500 hover:text-slate-300"
          >
            Dozuki
          </Link>
          . In my spare time, I hack on a couple side projects for fun.
        </p>
      </div>
    </main>
  );
}
