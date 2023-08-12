"use client";
import API_URL from "@/libs/API_URL";
import { useEffect, useState } from "react";
import TimelineToggle from "@/libs/TimelineToggle";
import axios from "axios";

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

  useEffect(() => {
    const getData = async () => {
      const { data }: { data: Array<IData> } = await axios.get(
        `${API_URL}/timeline`,
      );
      setData(data);
    };
    getData();
  }, []);

  return (
    <>
      <div className="h-[100vh] w-1/2 overflow-y-scroll rtl">
        {data.map((ele, idx) => (
          <div key={idx} className="ltr">
            <div className="my-5 ml-6 font-bold">
              <span className="text-5xl">{ele.year}</span>
            </div>
            <div key={idx}>
              {ele.events.map((month, idx) => (
                <TimelineToggle key={idx} month={month} idx={idx} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Timeline;
