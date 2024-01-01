'use client'
import { API_URL, JOIN_DISCORD_URL } from "@/libs/constants"
import axios from "axios"
import { useState, ChangeEvent } from "react"
import { useUserStore } from "@/libs/stores";
import Image from "next/image"
import GitHubIcon from '@mui/icons-material/GitHub';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import EditIcon from '@mui/icons-material/Edit';
import Link from 'next/link'
import { User, Role } from "@/libs/utills/types"
import { useRouter } from "next/navigation"
import Cookies from "js-cookie"

const Me = () => {
    const router = useRouter();

    const user = useUserStore((state) => state.user);

    const [data, setData] = useState<User | null>(user)
    const [show, setShow] = useState(false)
    const [curr, setCurr] = useState<User | null>(data)

    if (!user || !data || !curr) {
        router.push("/");
        return;
    }


    const call = async () => {
        await axios.put(`${API_URL}/user`, curr, { withCredentials: true })
    }

    const handle = (e: React.SyntheticEvent) => {
        e.preventDefault()
        let lst: Role[] = []
        curr.Role.forEach(ele => {
            lst.push({ ...ele, username: curr.username })
        })
        setData({ ...curr, init: curr.username, Role: lst })
        setCurr({ ...curr, init: curr.username, Role: lst })
        call()
    }

    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        //@ts-ignore
        setCurr((e: User) => {
            return {
                ...e, username: event.target.value
            }
        })
    }

    const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
        //@ts-ignore
        setCurr((e: User) => {
            return {
                ...e, title: event.target.value
            }
        })
    }

    const handleGithubChange = (event: ChangeEvent<HTMLInputElement>) => {
        //@ts-ignore
        setCurr((e: User) => {
            return {
                ...e, username: event.target.value
            }
        })
    }

    const handleDiscordChange = (event: ChangeEvent<HTMLInputElement>) => {
        //@ts-ignore
        setCurr((e: User) => {
            return {
                ...e, discord_id: event.target.value
            }
        })
    }

    const handleLogout = () => {
        Cookies.remove("bs_access_token");
        window.location.href = "/";
    }

    return (
        <div className="flex items-start justify-around h-full w-full">
            <div className="flex flex-col items-center pt-[8vh] -mt-16 w-full">
                <br />
                <Image className="rounded-full border-2 border-black shadow-md" src={`https://github.com/${data.github_id}.png`} alt="Image couldn't be loaded." width='200' height='200' />
                <div className="flex flex-row items-center justify-center">
                    <div className="text-[50px] inline font-bold">{data.username}</div>&nbsp;&nbsp;
                    <EditIcon onClick={() => setShow(e => !e)} className="cursor-pointer inlinescale-[1.25] mt-2" />
                </div>
                {data.discord_id ? (
                    <>
                        <div className="mb-6 -mt-2 font-bold text-accent text-xl">&#34; {data.title} &#34;</div>
                        <div className="mb-6 flex flex-row gap-2">
                            {data.Role.map(((value, idx) => (
                                <div key={idx} className="bg-[#DED6FE] rounded-full px-2 flex flex-row items-center justify-center">
                                    <div className="w-[10px] h-[10px] rounded-full bg-accent" />
                                    <div className="font-bold px-2">{value.role}</div>
                                </div>
                            )))}
                        </div>
                        <div className="flex flex-row gap-4">
                            <Link href={`https://github.com/${data.username}`}>
                                {(
                                    <div className="mb-2 relative">
                                        <GitHubIcon className="peer" />
                                        <div className="absolute left-0 -ml-5 text-lg font-bold peer-hover:flex hidden">github</div>
                                    </div>
                                )}
                            </Link>
                            {data.discord_id && (
                                <Link href={`https://discordapp.com/users/${data.discord_id}`}>
                                    <div className="mb-2 relative">
                                        <svg className="peer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px">
                                            <path d="M19.952,5.672c-1.904-1.531-4.916-1.79-5.044-1.801c-0.201-0.017-0.392,0.097-0.474,0.281 c-0.006,0.012-0.072,0.163-0.145,0.398c1.259,0.212,2.806,0.64,4.206,1.509c0.224,0.139,0.293,0.434,0.154,0.659 c-0.09,0.146-0.247,0.226-0.407,0.226c-0.086,0-0.173-0.023-0.252-0.072C15.584,5.38,12.578,5.305,12,5.305S8.415,5.38,6.011,6.872 c-0.225,0.14-0.519,0.07-0.659-0.154c-0.14-0.225-0.07-0.519,0.154-0.659c1.4-0.868,2.946-1.297,4.206-1.509 c-0.074-0.236-0.14-0.386-0.145-0.398C9.484,3.968,9.294,3.852,9.092,3.872c-0.127,0.01-3.139,0.269-5.069,1.822 C3.015,6.625,1,12.073,1,16.783c0,0.083,0.022,0.165,0.063,0.237c1.391,2.443,5.185,3.083,6.05,3.111c0.005,0,0.01,0,0.015,0 c0.153,0,0.297-0.073,0.387-0.197l0.875-1.202c-2.359-0.61-3.564-1.645-3.634-1.706c-0.198-0.175-0.217-0.477-0.042-0.675 c0.175-0.198,0.476-0.217,0.674-0.043c0.029,0.026,2.248,1.909,6.612,1.909c4.372,0,6.591-1.891,6.613-1.91 c0.198-0.172,0.5-0.154,0.674,0.045c0.174,0.198,0.155,0.499-0.042,0.673c-0.07,0.062-1.275,1.096-3.634,1.706l0.875,1.202 c0.09,0.124,0.234,0.197,0.387,0.197c0.005,0,0.01,0,0.015,0c0.865-0.027,4.659-0.667,6.05-3.111 C22.978,16.947,23,16.866,23,16.783C23,12.073,20.985,6.625,19.952,5.672z M8.891,14.87c-0.924,0-1.674-0.857-1.674-1.913 s0.749-1.913,1.674-1.913s1.674,0.857,1.674,1.913S9.816,14.87,8.891,14.87z M15.109,14.87c-0.924,0-1.674-0.857-1.674-1.913 s0.749-1.913,1.674-1.913c0.924,0,1.674,0.857,1.674,1.913S16.033,14.87,15.109,14.87z" /></svg>
                                        <div className="absolute left-0 -ml-5 text-lg font-bold peer-hover:flex hidden">discord</div>
                                    </div>
                                </Link>
                            )}
                            <Link href="https://leaderboard.bitspace.org.in">
                                <div className="flex flex-col items-center justify-center mb-2 ">
                                    <LeaderboardIcon className="peer" />
                                    <div className="text-lg font-bold peer-hover:flex hidden">{data.points}</div>
                                </div>
                            </Link>
                        </div>
                    </>
                ) : (
                    <div className="w-full flex flex-col items-center justify-center">
                        <div className="w-full flex flex-row items-center justify-center">
                            <svg className="inline scale-[2]" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px">
                                <path d="M19.952,5.672c-1.904-1.531-4.916-1.79-5.044-1.801c-0.201-0.017-0.392,0.097-0.474,0.281 c-0.006,0.012-0.072,0.163-0.145,0.398c1.259,0.212,2.806,0.64,4.206,1.509c0.224,0.139,0.293,0.434,0.154,0.659 c-0.09,0.146-0.247,0.226-0.407,0.226c-0.086,0-0.173-0.023-0.252-0.072C15.584,5.38,12.578,5.305,12,5.305S8.415,5.38,6.011,6.872 c-0.225,0.14-0.519,0.07-0.659-0.154c-0.14-0.225-0.07-0.519,0.154-0.659c1.4-0.868,2.946-1.297,4.206-1.509 c-0.074-0.236-0.14-0.386-0.145-0.398C9.484,3.968,9.294,3.852,9.092,3.872c-0.127,0.01-3.139,0.269-5.069,1.822 C3.015,6.625,1,12.073,1,16.783c0,0.083,0.022,0.165,0.063,0.237c1.391,2.443,5.185,3.083,6.05,3.111c0.005,0,0.01,0,0.015,0 c0.153,0,0.297-0.073,0.387-0.197l0.875-1.202c-2.359-0.61-3.564-1.645-3.634-1.706c-0.198-0.175-0.217-0.477-0.042-0.675 c0.175-0.198,0.476-0.217,0.674-0.043c0.029,0.026,2.248,1.909,6.612,1.909c4.372,0,6.591-1.891,6.613-1.91 c0.198-0.172,0.5-0.154,0.674,0.045c0.174,0.198,0.155,0.499-0.042,0.673c-0.07,0.062-1.275,1.096-3.634,1.706l0.875,1.202 c0.09,0.124,0.234,0.197,0.387,0.197c0.005,0,0.01,0,0.015,0c0.865-0.027,4.659-0.667,6.05-3.111 C22.978,16.947,23,16.866,23,16.783C23,12.073,20.985,6.625,19.952,5.672z M8.891,14.87c-0.924,0-1.674-0.857-1.674-1.913 s0.749-1.913,1.674-1.913s1.674,0.857,1.674,1.913S9.816,14.87,8.891,14.87z M15.109,14.87c-0.924,0-1.674-0.857-1.674-1.913 s0.749-1.913,1.674-1.913c0.924,0,1.674,0.857,1.674,1.913S16.033,14.87,15.109,14.87z" /></svg>
                            <Link href={`${JOIN_DISCORD_URL}?token_id=${user.id}`} className="outline-none">
                                <span className="text-[40px] ml-6 font-black underline cursor cursor-pointer">
                                    Connect your discord account!!!
                                </span>
                            </Link>
                        </div>
                        <span className="text-[20px] font-black">
                            To view your profile
                        </span>
                    </div>
                )}
                <button onClick={handleLogout} className="w-[150px] px-8 py-2 text-sm font-black border-2 border-black bg-accent absolute bottom-10">
                    LOGOUT
                </button>
            </div>
            {show && (
                <div className="h-full w-[60%]">
                    <form onSubmit={handle} className="bg-[#9D8AE8] min-w-full h-full border-x-2 border-black p-10">
                        <div className="w-full">
                            <div className="w-full flex flex-col items-start justify-between">
                                <input className="w-full text-box -mt-[0.5px]" placeholder="USERNAME" value={curr.username} onChange={handleNameChange} type="text" />
                            </div>
                            <div className="w-full flex flex-col items-start justify-between mt-4">
                                <input className="w-full text-box -mt-[0.5px]" placeholder="BIO" value={curr.title} onChange={handleTitleChange} type="text" />
                            </div>
                        </div>
                        <div className="flex justify-around w-full">
                            {data.discord_id && (
                                <div className="text-box-icon-container ml-2">
                                    <svg className="inline" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px">    <path d="M19.952,5.672c-1.904-1.531-4.916-1.79-5.044-1.801c-0.201-0.017-0.392,0.097-0.474,0.281 c-0.006,0.012-0.072,0.163-0.145,0.398c1.259,0.212,2.806,0.64,4.206,1.509c0.224,0.139,0.293,0.434,0.154,0.659 c-0.09,0.146-0.247,0.226-0.407,0.226c-0.086,0-0.173-0.023-0.252-0.072C15.584,5.38,12.578,5.305,12,5.305S8.415,5.38,6.011,6.872 c-0.225,0.14-0.519,0.07-0.659-0.154c-0.14-0.225-0.07-0.519,0.154-0.659c1.4-0.868,2.946-1.297,4.206-1.509 c-0.074-0.236-0.14-0.386-0.145-0.398C9.484,3.968,9.294,3.852,9.092,3.872c-0.127,0.01-3.139,0.269-5.069,1.822 C3.015,6.625,1,12.073,1,16.783c0,0.083,0.022,0.165,0.063,0.237c1.391,2.443,5.185,3.083,6.05,3.111c0.005,0,0.01,0,0.015,0 c0.153,0,0.297-0.073,0.387-0.197l0.875-1.202c-2.359-0.61-3.564-1.645-3.634-1.706c-0.198-0.175-0.217-0.477-0.042-0.675 c0.175-0.198,0.476-0.217,0.674-0.043c0.029,0.026,2.248,1.909,6.612,1.909c4.372,0,6.591-1.891,6.613-1.91 c0.198-0.172,0.5-0.154,0.674,0.045c0.174,0.198,0.155,0.499-0.042,0.673c-0.07,0.062-1.275,1.096-3.634,1.706l0.875,1.202 c0.09,0.124,0.234,0.197,0.387,0.197c0.005,0,0.01,0,0.015,0c0.865-0.027,4.659-0.667,6.05-3.111 C22.978,16.947,23,16.866,23,16.783C23,12.073,20.985,6.625,19.952,5.672z M8.891,14.87c-0.924,0-1.674-0.857-1.674-1.913 s0.749-1.913,1.674-1.913s1.674,0.857,1.674,1.913S9.816,14.87,8.891,14.87z M15.109,14.87c-0.924,0-1.674-0.857-1.674-1.913 s0.749-1.913,1.674-1.913c0.924,0,1.674,0.857,1.674,1.913S16.033,14.87,15.109,14.87z" /></svg>
                                    <input className="inline text-box-icon w-[100%]" value={curr.discord_id} onChange={handleDiscordChange} type="number" /><br />
                                </div>
                            )}
                        </div>
                        <button type='submit' className="w-full px-3 py-3 my-4 text-white bg-bsprime font-bold">Edit</button>
                    </form>
                </div>
            )}
        </div>
    )
}

export default Me
