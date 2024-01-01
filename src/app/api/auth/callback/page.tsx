'use client'
import { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation"
import axios from "axios";
import { API_URL } from "@/libs/constants";
import { useUserStore } from "@/libs/stores";
import { useRouter } from "next/navigation";
import { Loading } from "@/libs/components/ban/loading/message";

const AuthCallBackPage = () => {
    const US = useSearchParams()
    console.log(US);
    const [msg, setMsg] = useState("AUTHENTICATING");
    const code = US.get("code");
    const userStore = useUserStore((state) => state.setUser);
    const router = useRouter()

    useEffect(() => {
        const handleAuth = async () => {
            try {
                await axios.post(API_URL + "/auth/access_token_github", { code }, { withCredentials: true });
                console.log(code);
                setMsg("SIGNING IN");
                const { data } = await axios.get(API_URL + "/me", { withCredentials: true });
                if (!data) {
                    setMsg("CREATING USER");
                    const { data: user } = await axios.post(API_URL + "/me", {}, { withCredentials: true });
                    userStore(user);
                } else {
                    userStore(data);
                }
                router.push("/u/me")
            } catch (error) {
                console.error("Authentication error:", error);
            }
        };
        handleAuth();
    }, [code]);

    return <Loading msg={msg} sub_msg="PLEASE STAND BY" />;
}

export default AuthCallBackPage;
