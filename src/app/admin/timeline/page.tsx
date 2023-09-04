'use client'
<<<<<<< HEAD
import {useEffect, useState} from "react"
import axios from "axios";
import {API_URL} from "@/libs/constants";
=======
import { useEffect, useState } from "react"
import axios from "axios";
import { API_URL } from "@/libs/constants";
>>>>>>> upstream/master
import Toggle from "@/libs/components/timeline/Toggle";
import Change_Timeline from "@/libs/components/timeline/Change_Timeline";
const TimelineAdmin = () => {
    interface IData {
<<<<<<< HEAD
        year : number;
        events : Array<{
            date : Date;
           content : Array<string>;
            title : string;
=======
        year: number;
        events: Array<{
            date: Date;
            content: Array<string>;
            title: string;
>>>>>>> upstream/master
            id: number;
        }>
    }
    const [data, setData] = useState<Array<IData>>([])
    const [date, setDate] = useState<string>('')
<<<<<<< HEAD
    const [bool,setBool] = useState(false)
    const [new_data, setNew_data] = useState<{ date : Date , content : Array<string> ; title : string ; id : number }>({
        date : new Date(),
        content : [ "" ],
        title : "",
        id : 100
    })
    useEffect(()=>{
=======
    const [bool, setBool] = useState(false)
    const [new_data, setNew_data] = useState<{ date: Date, content: Array<string>; title: string; id: number }>({
        date: new Date(),
        content: [""],
        title: "",
        id: 100
    })
    useEffect(() => {
>>>>>>> upstream/master
        const getData = async () => {
            const { data }: { data: Array<IData> } = await axios.get(`${API_URL}/timeline`)
            setData(data)
        }
        getData();
    }, [])

    return (<>
<<<<<<< HEAD
        { data.length === 0 &&
=======
        {data.length === 0 &&
>>>>>>> upstream/master
            <div className="fixed top-[50%] right-[50%]">
                <div className='w-20 h-20 border-8 border-[#ddd5fd] rounded-full border-t-[#9c89e7] animate-spin'></div>
            </div>
        }
        <div className="fixed w-full h-20 bg-white">
<<<<<<< HEAD
            <button className="fixed h-16 m-5 text-xl font-semibold w-36 bg-red" onClick={()=>setBool(true)}>Add a Day</button>
        </div>
        <Change_Timeline change={bool} setChange={setBool} data={new_data} setData={setNew_data} setDelete={setBool} newDate={true}/>
        <div className="h-[100vh] mt-20 overflow-y-scroll">
            { data.map( (ele,idx) => (
                <div key={idx}>
                   <div className="my-5 ml-6 font-bold">
                        <span className="text-5xl">{ele.year}</span>
                    </div>
                    <div key={idx}>{
                        ele.events.map( (month, idx) => (
                            <Toggle date={date} setDate={setDate} key={idx} datum={month} idx={idx}/>
                       ) )
=======
            <button className="fixed h-16 m-5 text-xl font-semibold w-36 bg-red" onClick={() => setBool(true)}>Add a Day</button>
        </div>
        <Change_Timeline change={bool} setChange={setBool} data={new_data} setData={setNew_data} setDelete={setBool} newDate={true} />
        <div className="h-[100vh] mt-20 overflow-y-scroll">
            {data.map((ele, idx) => (
                <div key={idx}>
                    <div className="my-5 ml-6 font-bold">
                        <span className="text-5xl">{ele.year}</span>
                    </div>
                    <div key={idx}>{
                        ele.events.map((month, idx) => (
                            <Toggle date={date} setDate={setDate} key={idx} datum={month} idx={idx} />
                        ))
>>>>>>> upstream/master
                    }</div>
                </div>
            ))}
        </div>
    </>)
}

export default TimelineAdmin
