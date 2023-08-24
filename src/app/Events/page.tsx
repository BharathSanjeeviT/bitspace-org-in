"use client"
import { useRouter } from 'next/navigation'
const Events = () => {
    const router = useRouter()
    return (<>
        <div className="p-10 cursor-pointer" onClick={()=>{router.push('/Events/workshops')}}>
            <div className="flex items-end bg-[#b88bff] rounded-2xl h-52 w-72">
                <div className="w-full h-16 bg-[#d5d5d6] flex items-center justify-center text-2xl font-semibold rounded-b-2xl">
                   WORKSHOPS
                </div>
            </div>
        </div>
    </>)
}
export default Events;
