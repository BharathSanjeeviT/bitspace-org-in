'use client'
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation"
import axios from "axios";
import { API_URL } from "@/libs/constants";
import { useUserStore } from "@/libs/stores";
import { useRouter } from "next/navigation";

const AuthCallBackPage = () => {
    const [dot, setDot] = useState(".");
    const [msg, setMsg] = useState("AUTHENTICATING");
    const code = useSearchParams().get("code");
    const userStore = useUserStore((state) => state.setUser);
    const router = useRouter()

    useEffect(() => {
        const handleAuth = async () => {
            try {
                await axios.post(API_URL + "/auth/access_token_github", { code }, { withCredentials: true });
                setMsg("SIGNING IN");
                const { data } = await axios.get(API_URL + "/me", { withCredentials: true });
                if (!data) {
                    setMsg("CREATING USER");
                    const { data: user } = await axios.post(API_URL + "/me", {}, { withCredentials: true });
                    userStore(user);
                } else {
                    userStore(data);
                }
                router.push("/")
            } catch (error) {
                console.error("Authentication error:", error);
            }
        };

        const intervalId = setInterval(() => {
            setDot(prevDot => prevDot === "..." ? "." : prevDot + ".");
        }, 500);

        handleAuth();

        return () => {
            clearInterval(intervalId);
        };
    }, [code]);

    return (
        <div className="flex flex-col items-center justify-center w-full h-full">
            <div className="font-black text-[40px]">
                {msg}{dot}
            </div>
            <div>
                <span className="font-black text-accent">*</span> <span className="font-black">PLEASE STAND BY</span> <span className="font-black text-accent">*</span>
            </div>
        </div>
    );
}

export default AuthCallBackPage;
