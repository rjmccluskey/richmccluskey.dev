import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center p-24">
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
