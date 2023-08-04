"use client"

import API_URL from "@/libs/API_URL";
import Memcomp from "@/libs/Memcomp";
import axios from "axios";
import { useEffect, useState } from "react"

const Admin = () => {

    useEffect(()=>{
        const getData = async () => {
            const  { data } = await axios.get(`${API_URL}`)
            setData(data.data)
            setRoles(data.roles)
        }
        getData()
    },[])

    const [ data , setData ] = useState<any>([])
    const [ roles , setRoles] = useState<any>([])

    return (<>

        <div className="fixed w-[100vw] py-3 text-3xl font-semibold text-center border border-b-4 border-black bg-white">
            ADMIN
        </div>
        <div className="pt-20">
            {
                roles.map( (element, idx) => {
                    return (
                        <div key={idx} className="flex flex-col items-center w-[97vw]">
                        <div className="text-3xl font-bold">{ element.role }</div>
                        { data.filter((data)=> data.rank == element.rank ).map((ele , idx)=>(
                            <Memcomp data={ele} key={idx} roles={roles}/>
                        )) }
                        </div>
                    )
                })
            }
        </div>

    </>)
}
export default Admin;
