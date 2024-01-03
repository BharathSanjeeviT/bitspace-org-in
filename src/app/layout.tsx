"use client";
import { Header } from "@/libs/components/layouts/header";
import "jos-animation/dist/jos.css";
import "./globals.css";
import "../libs/assets/fonts/Inter/inter.css";
import { useUserStore } from "@/libs/stores";
import Cookies from 'js-cookie';
import axios from "axios";
import { API_URL } from "@/libs/constants";
import { useEffect, useState } from "react";
import jos from "jos-animation/dist/jos.min.js";

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    const accessToken = Cookies.get("bs_access_token");

    const userStore = useUserStore((state) => state.user);
    const setUserStore = useUserStore((state) => state.setUser);

    const [loading, setLoading] = useState(true);

    const jos_options = {
        debugMode: false,
        passive: true,
        animation: "fade",
        duration: 0.4,
        rootMargin: "20% 0% 30% 0%",
    };

    useEffect(() => {
        const fetchUser = async () => {
            if (accessToken && !userStore) {
                try {
                    const { data } = await axios.get(API_URL + "/me", {
                        withCredentials: true,
                    });
                    setUserStore(data);
                } catch (error) {
                    console.log(error);
                } finally {
                    setLoading(false);
                }
            } else {
                setLoading(false);
            }
        };

        fetchUser();
    }, [accessToken, userStore]);

    useEffect(() => console.log(loading), [loading]);

    useEffect(() => {
        jos.init(jos_options);
    }, []);

    useEffect(() => {
        jos.refresh();
    });

    return (
        <html lang="en">
            <head>
                <meta charSet="utf-8" />
                <meta name="theme-color" content="#000000" />
                <meta
                    name="description"
                    content="Bit Space (@bitspaceorg) : A community started by students from Chennai Institute of Technology. Aims in building community for awareness and positive impact on open source projects."
                />
                <meta
                    name="keywords"
                    content="bitspaceorg, bitspace cit, cit bitspace, open source, :bitspace"
                />
                <meta name="author" content="Bit Space" />
                <meta name="viewport" content="width=device-width, initial-scale=1" />
                <meta name="theme-color" content="#000000" />
                <meta name="twitter:card" content="summary_large_image" />
                <meta name="twitter:site" content="@bitspaceorg" />
                <meta name="twitter:creator" content="@bitspaceorg" />
                <meta name="twitter:title" content="Bit Space" />
                <meta
                    name="twitter:description"
                    content="A community started by students from Chennai Institute of Technology. Aims in building community for awareness and positive impact on open source projects."
                />
                <meta
                    name="twitter:image"
                    content="https://cdn.discordapp.com/attachments/1106935324556406866/1122462968311992350/metaimg1x1.png"
                />
                <meta property="og:title" content="Bit Space" />
                <meta
                    property="og:description"
                    content="A community started by students from Chennai Institute of Technology. Aims in building community for awareness and positive impact on open source projects."
                />
                <meta
                    property="og:image"
                    content="https://cdn.discordapp.com/attachments/1106935324556406866/1122462968311992350/metaimg1x1.png"
                />
                <meta property="og:url" content="https://bitspace.org" />
                <meta property="og:site_name" content="Bit Space" />
                <meta property="og:type" content="website" />
                <meta property="og:locale" content="en_US" />
                <meta property="og:locale:alternate" content="en_US" />

                <link rel="icon" href="./favicon.ico" />
            </head>
            <body className="relative flex flex-col items-stretch bg-white font-inter">
                {loading ? (
                    <div className="flex flex-col items-center justify-center w-screen h-screen">
                        <img
                            className="w-[100px] animate-bounce"
                            src="https://media.discordapp.net/attachments/1106935324556406866/1128657375260311583/logocir.png?width=1242&height=1024"
                        />
                    </div>
                ) : (
                    <>
                        <Header />
                        <main className="h-main mt-[8vh]">
                        {children}
                        </main>
                    </>
                )}
            </body>
        </html>
    );
}
