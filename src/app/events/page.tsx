"use client"

import { useRouter } from "next/navigation";

const Events = () => {
    const router = useRouter()
    return (<>
        <div className="w-52 h-32 bg-[#ff9d97] rounded-lg cursor-pointer text-xl font-bold border-4 border-black flex justify-center items-center m-5 text-center" onClick={()=>{router.push('/events/workshops')}}>
            Workshops
        </div>
    </>)
}
export default Events;
