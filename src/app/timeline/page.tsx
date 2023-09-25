"use client";
import { API_URL } from "@/libs/constants";
import { useEffect, useState } from "react";
import axios from "axios";
import Toggle from "@/libs/Toggle";
import { Loading } from "@/libs/components/ban/loading/message";

const Timeline = () => {
    interface IData {
        year: number;
        events: Array<{
            date: string;
            content: Array<string>;
            title: string;
            id: number;
        }>;
    }

    const [data, setData] = useState<Array<IData>>([]);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const getData = async () => {
            const { data }: { data: Array<IData> } = await axios.get(
                `${API_URL}/timeline`,
            );
            setData(data);
            setLoading(false);
        };
        getData();
    }, []);

    if (loading) return <Loading msg="FETCHING TIMELINE" />

    return (
        <>
            <div className="w-full h-full overflow-y-scroll rtl">
                {data.map((ele, idx) => (
                    <div key={idx} className="ltr pb-5 border-l-[20px] boder-black">
                        <div className="mb-5 pt-5 -ml-[20px] pl-5 font-black border-l-[20px] border-accent">
                            <span className="text-5xl">{ele.year}</span>
                        </div>
                        <div key={idx}>
                            {ele.events.map((month, idx) => (
                                <Toggle idx={idx} key={idx} month={month} date={month.date} isAdmin={false} />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default Timeline;
