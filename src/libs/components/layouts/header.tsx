"use client";

import { GITHUB_OAUTH_AUTH_URL, GITHUB_OAUTH_CLIENT_ID, GITHUB_OAUTH_REDIRECT_URL, GITHUB_SCOPE } from "@/libs/constants";
import { useUserStore } from "@/libs/stores";
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
                className={`font-extrabold ${pathname.match("/(.*)$")![0] === href ? "text-accent" : "text-black"
                    }
        transition-colors ease-in-out hover:text-accent
        `}
            >
                {children}
            </span>
        </Link>
    );
}

export function Header() {
    const userStore = useUserStore((state) => state.user);
    const handleProfile = async () => {
        const urlParams = new URLSearchParams({
            client_id: GITHUB_OAUTH_CLIENT_ID || "",
            redirect_uri: GITHUB_OAUTH_REDIRECT_URL || "",
            scope: GITHUB_SCOPE || "",
            state: "random",
        });
        console.log(urlParams.toString());
        console.log(GITHUB_OAUTH_AUTH_URL);
        const url = `${GITHUB_OAUTH_AUTH_URL}?${urlParams.toString()}`;
        console.log(url);
        window.location.href = url;
    }

    return (
        <header
            id="Wheader"
            className="fixed z-40 flex items-center justify-between w-screen px-4 overflow-hidden text-lg bg-white border-b-2 shadow-md h-header border-bsprime"
        >
            <div className="w-1/6">
                <Link href="/" className="text-3xl font-glb">:bs</Link>
            </div>
            <nav className="flex flex-row items-center justify-center w-4/6 gap-10">
                <NavLink href="/">HOME</NavLink>
                <NavLink href="/timeline">TIMELINE</NavLink>
                <NavLink href="/socials">SOCIALS</NavLink>
                <NavLink href="/team">TEAM</NavLink>
            </nav>
            <div className="flex flex-col items-end justify-center w-1/6">
                {!userStore ? <button onClick={handleProfile} className="px-8 py-2 text-sm font-black border-2 border-black bg-accent">
                    PROFILE
                </button> : (
                    <Link href="/u/me">
                        <img className="w-[30px] h-[30px] rounded-full" src={`https://github.com/${userStore.username}.png`} />
                    </Link>
                )}
            </div>
        </header>
    );
}

