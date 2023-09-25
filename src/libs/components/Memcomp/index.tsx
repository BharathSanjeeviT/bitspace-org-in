"use client"
import Image from "next/image";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import { useState } from "react";
import Pop from "../ban/popup";
import { User as Users } from "../../utills/types";

const Memcomp = (data: Users) => {

    const [show, setShow] = useState(false)
    const [udata, setUdata] = useState<{ ban: boolean, username: string, id: string }>({ ban: false, username: "Mike Oxlong", id: "BS23001" })
    const [ban, setBan] = useState(data.is_ban)
    const [up, setUp] = useState(false)
    const [down, setDown] = useState(false)

    const doBan = () => {
        setUdata({ ban: data.is_ban, username: data.username, id: data.id })
        setShow(true)
    }

    return (<div className="flex flex-col w-11/12 my-5">
        <div className="bg-[#dbd4f8] flex justify-start items-center rounded">
            <Image src="https://cdn.discordapp.com/attachments/1058000101919948901/1134158247968911360/image.png"
                width={65} height={65} className="mx-4 my-4 ml-5 rounded-full basis-1" alt="Sorry" />
            <div className="basis-3/4">
                <span className="text-3xl font-extrabold">{data.username}</span><br />
            </div>
            <div className="flex basis-1">
                {ban ?
                    <button className="h-16 w-28 bg-[#8ae9b0] border-black border-[4px] text-xl font-extrabold mr-3" onClick={doBan}>UNBAN</button> :
                    <button className="h-16 w-28 bg-[#fe8d8d] border-black border-[4px] text-xl font-extrabold mr-3" onClick={doBan}>BAN</button>
                }
                <Pop show={show} setShow={setShow} data={udata} setBan={setBan} />
                <button className="h-16 w-16 bg-[#8ae9b0] border-black border-[4px] text-xl font-extrabold mr-3" onClick={() => {
                    if (down) {
                        setDown(false)
                        setUp(true)
                    }
                    else if (up) setUp(false)
                    else setUp(true)
                }}>
                    <ArrowUpwardIcon fontSize="large" /></button>
                <button className="h-16 w-16 bg-[#fe8d8d] border-black border-[4px] text-xl font-extrabold mr-3" onClick={() => {
                    if (up) {
                        setUp(false)
                        setDown(true)
                    }
                    else if (down) setDown(false)
                    else setDown(true)
                }}>
                    <ArrowDownwardIcon fontSize="large" /></button>
            </div>
        </div>
    </div>)
}
export default Memcomp;
