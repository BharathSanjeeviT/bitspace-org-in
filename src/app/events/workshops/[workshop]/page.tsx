"use client"
import Messages from "@/libs/components/Message";
import WorkshopSlot from "@/libs/components/Slots";
import { API_URL } from "@/libs/constants";
import { SlotType, WorkshopType } from "@/libs/utills/types";
import axios from "axios";
import Image from "next/image";
import { useEffect, useState } from "react";
import { useUserStore } from "@/libs/stores";

const WorkshopSlug = ( { params }  : { params :  { workshop : string } } ) => {

    const userStore = useUserStore((state) => state.user);

    const [ data , setData ] = useState<WorkshopType>()
    const [ loading , setLoading ] = useState(true)
    const [ slot , setSlot ] = useState(false)
    const [ slotData , setSlotData ] = useState<Array<SlotType>>()
    const [ message , setMessage ] = useState(false)
    const [ errorMsg , setError ] = useState("")

    useEffect(()=>{
        const getData = async () => {
            const { data } = await axios.get(`${API_URL}/event?work_id=${params.workshop}`)
            setData(data)
            setSlotData(data.Slots)
            setLoading(false)
        }
        getData()
    },[])

    const viewSlot = () => {
        let bool = false
        data?.Slots.forEach((ele)=>{
            if( ele.count < ele.max_count )
                bool = true
        })
        if( userStore === null ){
            setError("Please Login")
            setMessage(true)
        }else{
            setSlot(bool)
            if ( bool === false ){
                setError("Sorry Slots are full")
                setMessage(true)
            }
        }
    }

    return ( <> { loading ?
        <div className="flex items-center justify-center w-full h-full">
            <div className="w-20 h-20 border-[7px] border-[#9482da] rounded-full border-t-white animate-spin"></div>
        </div> :
        <div>
         <div className="w-full h-36 bg-[#b998ff] flex flex-col items-center justify-center mb-5">
                <div className="text-5xl font-bold">{data?.type} {data?.id}</div>
                <div className="text-xl font-semibold">{data?.name}</div>
            </div>
            <div className="lg:px-[20rem] md:px-5 px-3 pt-3">
                <div className="flex justify-center">
                    <Image src={data?.poster!} alt="sorry" width={350} height={350} priority={true} className="my-5 rounded-lg"/>
                </div>
            <div>
                <span className="mb-3 text-xl font-medium">Description</span> <br/>
                {data?.description}
            </div>
            <div className="py-3">
                <span className="text-xl font-medium">Agenda</span> <br/>
                {data?.agenda}
            </div>
            <div>
                <span className="text-xl font-medium">Register</span> <br/>
                {data?.register}
            </div>
            </div>
            <div className="flex justify-center m-3">
                <button className="w-56 h-[4rem] bg-[#9785df] text-2xl font-semibold border-[4px] border-black" onClick={()=>viewSlot()}>
                    Im Interested
                </button>
            </div>
            <WorkshopSlot slot={slot} setSlot={setSlot} data={slotData!}/>
            <Messages message={message} setMessage={setMessage} data={errorMsg} sucess={false}/>
        </div> }
    </>)
}
export default WorkshopSlug;
