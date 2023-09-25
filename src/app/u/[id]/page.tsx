'use client'
import { API_URL } from "@/libs/constants"
import axios from "axios"
import { useEffect, useState } from "react"
import Image from "next/image"
import GitHubIcon from '@mui/icons-material/GitHub';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import Link from 'next/link'
import { User } from "@/libs/utills/types"
import { useRouter } from "next/navigation";
import { Loading } from "@/libs/components/ban/loading/message"
import { useUserStore } from "@/libs/stores"

const User = ({ params }: { params: { id: string } }) => {


    const user = useUserStore((state) => state.user);

    const { id } = params
    const [data, setData] = useState<User | null>(null)
    const [loading, setLoading] = useState<boolean>(true)
    const router = useRouter()

    useEffect(() => {
        const fetch = async () => {
            if (user?.username === id) router.push('/u/me')
            const { data } = await axios.get(`${API_URL}/user/${id}`)
            setData(data)
            setLoading(false)
        }
        fetch()
    }, [])

    if (loading) return <Loading msg="FETCHING USER" />;

    if (!data) {
        router.push('/404')
        return;
    };

    return (
        <div className="flex items-start justify-around w-full h-full">
            <div className="flex flex-col items-center pt-[8vh] -mt-16 w-full">
                <br />
                <Image className="border-2 border-black rounded-full shadow-md" src={`https://github.com/${data.github_id}.png`} alt="Image couldn't be loaded." width='200' height='200' />
                <div className="flex flex-row items-center justify-center">
                    <div className="text-[50px] inline font-bold">{data.username}</div>&nbsp;&nbsp;
                </div>
                <>
                    <div className="mb-6 -mt-2 text-xl font-bold text-accent">&quot; {data.title} &quot;</div>
                    {data.Role.length > 0 &&
                        <div className="flex flex-row mb-6 gap-2">
                            {data.Role.map(((value, idx) => (
                                <div key={idx} className="bg-[#DED6FE] rounded-full px-2 flex flex-row items-center justify-center">
                                    <div className="w-[10px] h-[10px] rounded-full bg-accent" />
                                    <div className="px-2 font-bold">{value.role}</div>
                                </div>
                            )))}
                        </div>
                    }
                    <div className="flex flex-row gap-4">
                        <Link href={`https://github.com/${data.username}`}>
                            {(
                                <div className="relative mb-2">
                                    <GitHubIcon className="peer" />
                                    <div className="absolute left-0 hidden -ml-5 text-lg font-bold peer-hover:flex">github</div>
                                </div>
                            )}
                        </Link>
                        {data.discord_id && (
                            <Link href={`https://discordapp.com/users/${data.discord_id}`}>
                                <div className="relative mb-2">
                                    <svg className="peer" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24px" height="24px">
                                        <path d="M19.952,5.672c-1.904-1.531-4.916-1.79-5.044-1.801c-0.201-0.017-0.392,0.097-0.474,0.281 c-0.006,0.012-0.072,0.163-0.145,0.398c1.259,0.212,2.806,0.64,4.206,1.509c0.224,0.139,0.293,0.434,0.154,0.659 c-0.09,0.146-0.247,0.226-0.407,0.226c-0.086,0-0.173-0.023-0.252-0.072C15.584,5.38,12.578,5.305,12,5.305S8.415,5.38,6.011,6.872 c-0.225,0.14-0.519,0.07-0.659-0.154c-0.14-0.225-0.07-0.519,0.154-0.659c1.4-0.868,2.946-1.297,4.206-1.509 c-0.074-0.236-0.14-0.386-0.145-0.398C9.484,3.968,9.294,3.852,9.092,3.872c-0.127,0.01-3.139,0.269-5.069,1.822 C3.015,6.625,1,12.073,1,16.783c0,0.083,0.022,0.165,0.063,0.237c1.391,2.443,5.185,3.083,6.05,3.111c0.005,0,0.01,0,0.015,0 c0.153,0,0.297-0.073,0.387-0.197l0.875-1.202c-2.359-0.61-3.564-1.645-3.634-1.706c-0.198-0.175-0.217-0.477-0.042-0.675 c0.175-0.198,0.476-0.217,0.674-0.043c0.029,0.026,2.248,1.909,6.612,1.909c4.372,0,6.591-1.891,6.613-1.91 c0.198-0.172,0.5-0.154,0.674,0.045c0.174,0.198,0.155,0.499-0.042,0.673c-0.07,0.062-1.275,1.096-3.634,1.706l0.875,1.202 c0.09,0.124,0.234,0.197,0.387,0.197c0.005,0,0.01,0,0.015,0c0.865-0.027,4.659-0.667,6.05-3.111 C22.978,16.947,23,16.866,23,16.783C23,12.073,20.985,6.625,19.952,5.672z M8.891,14.87c-0.924,0-1.674-0.857-1.674-1.913 s0.749-1.913,1.674-1.913s1.674,0.857,1.674,1.913S9.816,14.87,8.891,14.87z M15.109,14.87c-0.924,0-1.674-0.857-1.674-1.913 s0.749-1.913,1.674-1.913c0.924,0,1.674,0.857,1.674,1.913S16.033,14.87,15.109,14.87z" /></svg>
                                    <div className="absolute left-0 hidden -ml-5 text-lg font-bold peer-hover:flex">discord</div>
                                </div>
                            </Link>
                        )}
                        <Link href="https://leaderboard.bitspace.org.in">
                            <div className="flex flex-col items-center justify-center mb-2 ">
                                <LeaderboardIcon className="peer" />
                                <div className="hidden text-lg font-bold peer-hover:flex">{data.points}</div>
                            </div>
                        </Link>
                    </div>
                </>
            </div>
        </div>
    )
}

export default User

