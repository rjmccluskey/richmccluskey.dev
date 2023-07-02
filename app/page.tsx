import Link from 'next/link';

const navigation = [
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
];

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
      <nav className="my-16">
        <ul className="flex items-center justify-center gap-4">
          {navigation.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="text-sm text-zinc-500 duration-500 hover:text-zinc-300"
            >
              {item.name}
            </Link>
          ))}
        </ul>
      </nav>
      <h1
        className={`
          bg-gradient-to-r
          from-sky-500
          to-emerald-500
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
        <p className="text-sm text-zinc-500 ">
          Hi 👋, my name is Rich. I&apos;m a software engineer from California,
          currently working on the platform team at{' '}
          <Link
            target="_blank"
            href="https://www.dozuki.com"
            className="underline duration-500 hover:text-zinc-300"
          >
            Dozuki
          </Link>
          . In my spare time, I hack on a couple side projects for fun.
        </p>
      </div>
    </main>
  );
}
