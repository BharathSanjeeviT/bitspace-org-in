"use client"
import React, { useState } from "react";
import CloseIcon from '@mui/icons-material/Close';
import DoneIcon from '@mui/icons-material/Done';
import { SlotType } from "../utills/types";
import axios from "axios";
import API_URL from "../utills/API_URL";
import Messages from "./Message";

const WorkshopSlot = ({ slot , setSlot , data } : {slot : boolean , setSlot:React.Dispatch<React.SetStateAction<boolean>> , data : Array<SlotType>}) => {
    const [ slot_id , setSlot_id ] = useState<number>(data[0].id)
    const [ message , setMessage ] = useState(false)
    const [ sucess , setSucess ] = useState(false)
    const [ loading , setLoading ] = useState(false)
    const [ msg , setMsg ] = useState<string>("")

    const rsvp = async () => {
        setLoading(true)
        const { data } = await axios.post(`${API_URL}/event/workshop`, { slot_id } , { withCredentials : true } )
        setLoading(false)
        setSucess(data.status)
        setMsg(data.data)
        setMessage(true)
    }
    return ( slot ?
        <div className="w-full h-full bg-[rgba(0,0,0,0.5)] fixed top-0 left-0 flex justify-center items-center mt-7">
        {
            loading ?
                <div className="flex items-center justify-center w-full h-full">
                    <div className="w-20 h-20 border-[7px] border-[#9482da] rounded-full border-t-white animate-spin"></div>
                </div>
            :
            <div>
            <div className="fixed top-0 flex items-center justify-center w-16 h-16 mt-32 text-white bg-[rgba(0,0,0,0.7)] rounded-full right-8">
                <button onClick={()=>{setSlot(false)}}><CloseIcon fontSize="large"/></button>
            </div>
            <div className="flex justify-center items-center w-[90vw]  m-3 h-[85vh] bg-white border-2 border-white flex-wrap overflow-auto">
                {
                    data.map((ele,idx)=>{
                        const avail = ele.max_count - ele.count
                        const color = ( avail > ele.max_count*0.75 ? "[#3bd80d]" :
                        ( avail > ele.max_count*0.25 ) ? "[#ff9406]" : "[#f73d40]")
                        return ( <>
                        <div key={idx} className={`${ avail > ele.max_count*0.75 ? "bg-[#8ae9b0]" :
                            ( avail > ele.max_count*0.25 ) ? "bg-[#e9df8a]" : "bg-[#e98a8a]"}
                            my-3 w-[20rem] h-[26rem] border-[4px] text-lg font-semibold flex flex-col justify-center mx-10 items-center relative `}
                            onClick={()=>{setSlot_id(ele.id)}}>
                            { ( slot_id == ele.id ) &&
                                <div className="absolute flex items-center justify-center w-10 h-10 bg-white rounded-full left-4 top-4" ><DoneIcon/> </div>
                            }
                                <div className="mb-3 text-2xl">SLOT {idx+1}</div>
                                <div>DATE</div>
                                <div>{ele.date.slice(0,10)}</div>
                                <div className="mt-3">TIME</div>
                                <div className="mb-3">{ele.date.slice(11,16)}</div>
                                <div className="mt-3">VENUE</div><div className="mb-3">{ele.venue}</div>
                                <div className="mt-3">AVAILABILITY</div>
                                <div className={`text-${color}`}>{avail}</div>
                        </div>
                        </>)
                    })
                }
                <div className="flex justify-center w-full">
                    <button className="w-32 h-14 text-2xl font-medium bg-[#9785df] border-4 border-black" onClick={()=>{rsvp()}}>RSVP</button>
                </div>
            </div>
            <Messages message={message} data={msg} setMessage={setMessage} sucess={sucess}/>
            </div>
        }
        </div>
        : null
    )
}
export default WorkshopSlot;
