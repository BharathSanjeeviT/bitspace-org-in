'use client'
import API_URL from "@/libs/API_URL";
import {useEffect, useState} from "react"
import Toggle from "@/libs/Toggle";
import axios from "axios";

const TimelineAdmin = () => {
    interface IData {
        year : number;
        events : Array<{
            date : string ;
            content : Array<string>;
            title : string;
            id: number;
        }>
    }

    const [data, setData] = useState<Array<IData>>([])
    const [date, setDate] = useState<string>('')

    useEffect(()=>{
        const getData = async () => {
            const { data } = await axios.get(`${API_URL}/timeline`)
            console.log(data)
            setData(data)
        }
        getData();
    },[])

    return (<>
        <div className="h-[100vh] w-1/2 overflow-y-scroll rtl">
            { data.map( (ele,idx) => (
                <div key={idx} className="ltr">
                    <div className="my-5 ml-6 font-bold">
                        <span className="text-5xl">{ele.year}</span>
                    </div>
                    <div key={idx}>{
                        ele.events.map( (month, idx) => (
                            <Toggle date={date} setDate={setDate} key={idx} month={month} idx={idx}/>
                        ) )
                    }</div>
                </div>
            ) ) }
        </div>
    </>)
}

export default TimelineAdmin
