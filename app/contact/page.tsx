import { Github, Linkedin, Mail } from 'lucide-react';
import Link from 'next/link';

const contacts = [
  {
    icon: <Linkedin size={20} />,
    href: 'https://www.linkedin.com/in/rjmccluskey',
    label: 'Linkedin',
    handle: 'Rich McCluskey',
  },
  {
    icon: <Mail size={20} />,
    href: 'mailto:hello@richmccluskey.dev',
    label: 'Email',
    handle: 'hello@richmccluskey.dev',
  },
  {
    icon: <Github size={20} />,
    href: 'https://github.com/rjmccluskey',
    label: 'GitHub',
    handle: 'rjmccluskey',
  },
];

export default function Contact() {
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
        Contact
      </h1>
      <div className="flex w-full flex-col items-stretch justify-center sm:flex-row sm:flex-wrap sm:items-start">
        {contacts.map((contact) => (
          <Link href={contact.href} target="_blank" key={contact.href}>
            <section
              key={contact.label}
              className="m-6 p-4 shadow-xl shadow-slate-500/10 duration-200 hover:scale-105 hover:brightness-200"
            >
              <h2 className="flex items-center">
                {contact.icon}{' '}
                <span className="ml-2 text-sm text-slate-500">
                  {contact.label}
                </span>
              </h2>
              <p className="mt-3 text-xl font-bold">{contact.handle}</p>
            </section>
          </Link>
        ))}
      </div>
    </main>
  );
}
