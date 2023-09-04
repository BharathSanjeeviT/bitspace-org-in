'use client'
import { API_URL } from "@/libs/constants"
import axios from "axios"
import { ChangeEventHandler, useEffect, useState, ChangeEvent, FormEventHandler } from "react"
import {useUserStore} from "@/libs/stores";
import Image from "next/image"
import GitHubIcon from '@mui/icons-material/GitHub';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import AddSharpIcon from '@mui/icons-material/AddSharp';
import EditIcon from '@mui/icons-material/Edit';
import Link from 'next/link'
import { User, Role } from "@/libs/utills/types"

const Me = () => {
    const user = useUserStore((state) => state.user);
    const { id } = user ? user : { id: null }
    // console.log(user, id)
    const [data, setData] = useState<User>({
        id: "",
        username: "",
        rank: 123,
        is_ban: false,
        title: "Founder/President",
        is_joined_discord: true,
        created_at: new Date(Date.now()),
        discord_id: "",
        github_id: "",
        strike: 0,
        points: 0,
        Role: [],
        init: "",
})
    const [show, setShow] = useState(false)
    const [curr, setCurr] = useState<User>(data)
    const [roles, setRoles] = useState<Role[]>([])
    const [current, setCurrent] = useState('')

    const call = async () => {
        const { data } = await axios.put(`${API_URL}/user`, curr)
    }

    const handleAdd = () => {
        if (current.length == 0) return
        const temp = { role: current, username: data.username }
        let boolean = false
        curr.Role.forEach(element => {
            if (element.role === current) boolean = true 
        });
        // ROLE ALREADY EXISTS
        if (boolean) {
            setCurrent('')
            return
        }
        boolean = true
        roles.forEach(element => {
            if (element.role == current) boolean = false
        })
        // INVALID ROLE
        if (boolean) {
            setCurrent('')
            return
        }
        setCurr(e => {
            return {
                ...e, Role: [...e.Role, temp]
            }
        })
        setCurrent('')
    }

    const handle =  (e: React.SyntheticEvent) => {
        e.preventDefault()
        let lst: Role[] = []
        curr.Role.forEach(ele => {
            lst.push({ ...ele, username: curr.username })
        })
        setData({ ...curr, init: curr.username, Role: lst })
        setCurr({ ...curr, init: curr.username, Role: lst })
        call()
    }

    const handleClose = (index: number) => {
        setCurr((e: User) => {
            return {
                ...e, Role: [...e.Role.slice(0, index), ...e.Role.slice(index + 1)]
            }
        })
    }

    const handleRankChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCurr((e: User) => {
            return {
                ...e, rank: event.target.value
            }
        })
    }

    const handleNameChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCurr((e: User) => {
            return {
                ...e, github_id: event.target.value
            }
        })
    }

    const handleTitleChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCurr((e: User) => {
            return {
                ...e, title: event.target.value
            }
        })
    }

    const handleGithubChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCurr((e: User) => {
            return {
                ...e, username: event.target.value
            }
        })
    }

    const handleDiscordChange = (event: ChangeEvent<HTMLInputElement>) => {
        setCurr((e: User) => {
            return {
                ...e, discord_id: event.target.value
            }
        })
    }

    const handlePoints = (event: ChangeEvent<HTMLInputElement>) => {
        setCurr((e: User) => {
            return {
                ...e, points: event.target.value
            }
        })
    }

    useEffect(() => {
        if (!id) return
        console.log(id)
        const fetch = async () => {
            let { data } = await axios.get(`${API_URL}/user/${id}`)
            data = { ...data, init: data.username }
            console.log(data)
            setData(data)
            setCurr(data)
        }
        const getRoles = async () => {
            const { data } = await axios.get(`${API_URL}/roles`)
            setRoles(data)
        }
        getRoles()
        fetch()
    }, [id])

    if (data.rank === 123) return null

    if (typeof data === "string") return (
        <div className="w-full h-full text-center">USER NOT JOINED DISCORD YET...</div>
    )

    return (
        <div className="flex justify-around">
            <div className="flex flex-col items-center w-full">
                <br />
                <Image className="rounded-full" src={`https://github.com/${data.github_id}.png`} alt="Image couldn't be loaded." width='200' height='200'/>
                <div>
                    <div className="text-[50px] inline font-bold">{data.github_id}</div>&nbsp;&nbsp;
                    <EditIcon onClick={() => setShow(e => !e)} className="cursor-pointer inline mb-4 scale-[1.25]" />
                </div>
                <div className="mb-2 font-extrabold text-[#9D8AE8] text-xl">{data.title}</div>
                <div>
                    <Link className="inline" href={`https://github.com/${data.username}`}>
                    {(
                        <div className="inline">
                            <GitHubIcon className="inline mb-2" />&nbsp;
                            <div className="inline text-xl font-extrabold underline">{data.username}</div>
                        </div>
                    )}
                    </Link>
                    &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
                    <Link className="inline" href={`https://discordapp.com/users/${data.discord_id}`}>
                    {(
                        <div className="inline">
                            <svg className="inline mb-1" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px">    <path d="M19.952,5.672c-1.904-1.531-4.916-1.79-5.044-1.801c-0.201-0.017-0.392,0.097-0.474,0.281 c-0.006,0.012-0.072,0.163-0.145,0.398c1.259,0.212,2.806,0.64,4.206,1.509c0.224,0.139,0.293,0.434,0.154,0.659 c-0.09,0.146-0.247,0.226-0.407,0.226c-0.086,0-0.173-0.023-0.252-0.072C15.584,5.38,12.578,5.305,12,5.305S8.415,5.38,6.011,6.872 c-0.225,0.14-0.519,0.07-0.659-0.154c-0.14-0.225-0.07-0.519,0.154-0.659c1.4-0.868,2.946-1.297,4.206-1.509 c-0.074-0.236-0.14-0.386-0.145-0.398C9.484,3.968,9.294,3.852,9.092,3.872c-0.127,0.01-3.139,0.269-5.069,1.822 C3.015,6.625,1,12.073,1,16.783c0,0.083,0.022,0.165,0.063,0.237c1.391,2.443,5.185,3.083,6.05,3.111c0.005,0,0.01,0,0.015,0 c0.153,0,0.297-0.073,0.387-0.197l0.875-1.202c-2.359-0.61-3.564-1.645-3.634-1.706c-0.198-0.175-0.217-0.477-0.042-0.675 c0.175-0.198,0.476-0.217,0.674-0.043c0.029,0.026,2.248,1.909,6.612,1.909c4.372,0,6.591-1.891,6.613-1.91 c0.198-0.172,0.5-0.154,0.674,0.045c0.174,0.198,0.155,0.499-0.042,0.673c-0.07,0.062-1.275,1.096-3.634,1.706l0.875,1.202 c0.09,0.124,0.234,0.197,0.387,0.197c0.005,0,0.01,0,0.015,0c0.865-0.027,4.659-0.667,6.05-3.111 C22.978,16.947,23,16.866,23,16.783C23,12.073,20.985,6.625,19.952,5.672z M8.891,14.87c-0.924,0-1.674-0.857-1.674-1.913 s0.749-1.913,1.674-1.913s1.674,0.857,1.674,1.913S9.816,14.87,8.891,14.87z M15.109,14.87c-0.924,0-1.674-0.857-1.674-1.913 s0.749-1.913,1.674-1.913c0.924,0,1.674,0.857,1.674,1.913S16.033,14.87,15.109,14.87z"/></svg>
                            &nbsp;
                            <div className="inline text-xl font-extrabold underline">{data.discord_id}</div>
                        </div>
                    )}
                    </Link>
                </div>
                <div>
                    <LeaderboardIcon className="inline mb-2"/>&nbsp;
                    <div className="inline text-xl font-extrabold">Leaderboard points: {data.points} pts</div>
                </div>
                <div className="text-xl font-extrabold">Hierarchy Rank: {data.rank}</div>
            </div>
            { show && (
                <div className="h-[86vh] w-[60%] rounded-xl border border-4 border-black p-2 m-4">
                    <form onSubmit={handle} className="bg-[#9D8AE8] min-w-full h-full rounded-xl border border-3 border-black p-10">
                        <div className="w-full">
                            <div className="flex items-center justify-between">
                                <div className="font-extrabold text-[20px]">Username:</div> <input className="w-[60%] text-box" value={curr.github_id} onChange={handleNameChange} type="text"/>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="font-extrabold text-[20px]">Title:</div> <input className="w-[60%] text-box" value={curr.title} onChange={handleTitleChange} type="text"/>
                            </div>
                        </div>
                        <div className="flex justify-around w-full">
                            <GitHubIcon className="inline mt-6" />
                            <input className="inline text-box w-[100%]" value={curr.username} onChange={handleGithubChange} type="text"/><br />
                            <svg className="inline mt-6 scale-[2.5] m-2" xmlns="http://www.w3.org/2000/svg"  viewBox="0 0 24 24" width="24px" height="24px">    <path d="M19.952,5.672c-1.904-1.531-4.916-1.79-5.044-1.801c-0.201-0.017-0.392,0.097-0.474,0.281 c-0.006,0.012-0.072,0.163-0.145,0.398c1.259,0.212,2.806,0.64,4.206,1.509c0.224,0.139,0.293,0.434,0.154,0.659 c-0.09,0.146-0.247,0.226-0.407,0.226c-0.086,0-0.173-0.023-0.252-0.072C15.584,5.38,12.578,5.305,12,5.305S8.415,5.38,6.011,6.872 c-0.225,0.14-0.519,0.07-0.659-0.154c-0.14-0.225-0.07-0.519,0.154-0.659c1.4-0.868,2.946-1.297,4.206-1.509 c-0.074-0.236-0.14-0.386-0.145-0.398C9.484,3.968,9.294,3.852,9.092,3.872c-0.127,0.01-3.139,0.269-5.069,1.822 C3.015,6.625,1,12.073,1,16.783c0,0.083,0.022,0.165,0.063,0.237c1.391,2.443,5.185,3.083,6.05,3.111c0.005,0,0.01,0,0.015,0 c0.153,0,0.297-0.073,0.387-0.197l0.875-1.202c-2.359-0.61-3.564-1.645-3.634-1.706c-0.198-0.175-0.217-0.477-0.042-0.675 c0.175-0.198,0.476-0.217,0.674-0.043c0.029,0.026,2.248,1.909,6.612,1.909c4.372,0,6.591-1.891,6.613-1.91 c0.198-0.172,0.5-0.154,0.674,0.045c0.174,0.198,0.155,0.499-0.042,0.673c-0.07,0.062-1.275,1.096-3.634,1.706l0.875,1.202 c0.09,0.124,0.234,0.197,0.387,0.197c0.005,0,0.01,0,0.015,0c0.865-0.027,4.659-0.667,6.05-3.111 C22.978,16.947,23,16.866,23,16.783C23,12.073,20.985,6.625,19.952,5.672z M8.891,14.87c-0.924,0-1.674-0.857-1.674-1.913 s0.749-1.913,1.674-1.913s1.674,0.857,1.674,1.913S9.816,14.87,8.891,14.87z M15.109,14.87c-0.924,0-1.674-0.857-1.674-1.913 s0.749-1.913,1.674-1.913c0.924,0,1.674,0.857,1.674,1.913S16.033,14.87,15.109,14.87z"/></svg>
                            <input className='inline text-box w-[100%]' value={curr.discord_id} onChange={handleDiscordChange} type="number"/><br />
                        </div>
                        <div className="w-full">
                            <div className="flex items-center justify-between">
                                <div className="font-extrabold text-[20px]">Leaderboard pts:</div> <input className="text-box w-[30%]" value={curr.points} onChange={handlePoints} type="number"/>
                            </div>
                            <div className="flex items-center justify-between">
                                <div className="font-extrabold text-[20px]">Rank:</div> <input className=" text-box w-[30%]" value={curr.rank} onChange={handleRankChange} type="number"/>
                            </div>
                        </div>
                        <div>
                        <div className="flex items-center justify-between w-full">
                            <div className="font-extrabold text-[20px]">Roles:</div>
                            <div className="w-full">
                                <input className="w-[60%] text-box" value={current} onChange={(e) => setCurrent(e.target.value)}/>
                                <AddSharpIcon onClick={handleAdd} className="font-extrabold scale-[1.5] m-1" />
                            </div>
                        </div>
                        <div className="pt-3 pb-3 bg-white border border-4 border-black rounded">
                            {curr.Role.map((ele: any, i: any) => {
                                return (
                                    <div className="p-2 border border-2 border-black rounded-md w-[125px] font-bold inline m-1" key={i}>{ele.role.substr(0, 9)+' '}{(<CancelOutlinedIcon onClick={(e) => handleClose(i)} />)}</div>
                                )
                            })}
                        </div>
                            <button type='submit' className="px-2 py-1 my-3 text-white bg-black rounded-xl">Edit</button>
                        </div>
                    </form>
                </div>
            )}
        </div>
    )
}

export default Me
