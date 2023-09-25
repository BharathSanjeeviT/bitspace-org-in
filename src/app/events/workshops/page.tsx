"use client"

import Fee from "@/libs/components/Fee";
import { API_URL } from "@/libs/constants";
import { WorkshopType } from "@/libs/utills/types";
import axios from "axios";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Workshops = () => {

    const router = useRouter()
    const [ upcomming, setUpcomming ] = useState<Array<WorkshopType>>([]);
    const [ past, setPast] = useState<Array<WorkshopType>>([]);
    const [ loading , setLoading ] = useState(true)

    useEffect(()=>{
        const getData = async () => {
            const { data } = await axios.get(`${API_URL}/event/workshops`)
            setUpcomming(data.events.upcomming)
            setPast(data.events.past)
            setLoading(false)
        }
        getData();
    },[])

    return (<>{ loading ?
        <div className="flex items-center justify-center w-full h-full">
            <div className="w-20 h-20 border-[7px] border-[#9482da] rounded-full border-t-white animate-spin"></div>
        </div> :
        <div className="p-10">
            <div>
                <span className="text-2xl font-semibold">Upcomming</span>
            <div className="flex">
                {
                    upcomming.map(( event , idx )=>{
                        return (
                        <div key={idx} className="m-5">
                            <div>
                            {event.paid ? <Fee type="paid"/> :  <Fee type="free"/> }
                                <Image src={event.poster} alt="Sorry" width={350} height={350} priority={true} className="rounded-lg cursor-pointer"
                                onClick={()=>{ router.push(`/events/workshops/${event.id}`) }}/>
                            </div>
                        </div>)
                    })
                }
            </div>
            </div>
            <div>

               <span className="text-2xl font-semibold">Past</span>
            </div>
            <div>
                {
                    past.map(( event , idx )=>{
                        return (
                        <div key={idx} className="m-5">
                            <Image src={event.poster} alt="Sorry" width={350} height={350} priority={true} className="rounded-lg"/>
                        </div>)
                    })
                }
            </div>
        </div>
    }</>)
}
export default Workshops;
