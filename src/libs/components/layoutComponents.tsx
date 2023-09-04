"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

type NavLinkParams = {
  href: string;
  children: string;
};

function NavLink({ href, children }: NavLinkParams) {
  const pathname = usePathname();
  return (
    <Link href={href}>
      <span
        className={`font-extrabold ${
          pathname.match("/(.*)$")![0] === href ? "text-accent" : "text-black"
        }
        transition-colors ease-in-out hover:text-accent
        `}
      >
        {children}
      </span>
    </Link>
  );
}

export function WHeader() {
  return (
    <header
      id="Wheader"
      className="fixed z-40 flex items-center justify-between w-screen px-4 overflow-hidden text-lg bg-white border-b-4 h-header border-bsprime shadow-bsprime " //shadow-[0px_0px_9px_#000000]
    >
      <div>
        <span className="text-3xl font-glb">:bs</span>
      </div>
      <nav className="flex gap-10">
        <NavLink href="/">HOME</NavLink>
        <NavLink href="/events">EVENTS</NavLink>
        <NavLink href="/timeline">TIMELINE</NavLink>
        <NavLink href="/faq">FAQ</NavLink>
        <NavLink href="/socials">SOCIALS</NavLink>
        <NavLink href="/team">TEAM</NavLink>
      </nav>
      <div>
        <button className="px-5 py-1 border-2 shadow-xl bg-accent">
          Login
        </button>
      </div>
    </header>
  );
}
