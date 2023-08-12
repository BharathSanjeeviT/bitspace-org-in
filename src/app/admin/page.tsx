"use client"
import axios from "axios";
import { useEffect, useState } from "react"
import { Rank } from '@/libs/utills/types'
import { API_URL } from "@/libs/constants";
import Memcomp from "@/libs/components/admin/Memcomp";

const Admin = () => {

    useEffect(()=>{
        const getData = async () => {
            const  { data } = await axios.get(`${API_URL}/admin`)
            setData(data)
        }
        getData()
    },[])

    const [data, setData] = useState<Array<Rank>>([])

    return (<>

        <div className="fixed w-[100vw] py-3 text-3xl font-semibold text-center border border-b-4 border-black bg-white">
            ADMIN
        </div>
        <div className="pt-20">
            {
                data.map(( rank , idx )=>{
                    return (<>
                        <div key={idx} className="flex flex-col items-center w-[97vw]">
                            <div className="text-3xl font-bold">{ rank.r_name }</div>
                            { rank.Users.map((user, idx)=>(
                                <Memcomp {...user} key={idx}/>
                            )) }
                        </div>
                    </>)
                })
            }
        </div>

    </>)
}
export default Admin;
