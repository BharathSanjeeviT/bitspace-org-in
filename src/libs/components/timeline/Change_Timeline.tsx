"use client"
import CloseIcon from '@mui/icons-material/Close';
import AddIcon from '@mui/icons-material/Add';
import axios from 'axios';
import parse from 'html-react-parser';
import React, { useState } from 'react';
import { API_URL } from '@/libs/constants';

type IMonth = {
    date: Date;
    content: Array<string>;
    title: string;
    id: number;
}

const Change_Timeline = ({ change, setChange, setDelete, data, setData, newDate }: {
    change: boolean,
    newDate: boolean,
    setChange: React.Dispatch<React.SetStateAction<boolean>>,
    setDelete: React.Dispatch<React.SetStateAction<boolean>>,
    setData: React.Dispatch<React.SetStateAction<IMonth>>,
    data: {
        content: Array<string>,
        date: Date,
        id: number,
        title: string
    }
}) => {

    const [title, setTitle] = useState<string>(data.title)
    const [contents, setContents] = useState<Array<string>>(data.content)
    const [index, setIndex] = useState(0)
    const [date, setDate] = useState<Date>(data.date)

    const handleChange = async (e: React.ChangeEvent<HTMLTextAreaElement>, idx: number) => {
        const content = [...contents]
        content[idx] = e.target.value
        if (!(idx == index)) { setIndex(idx) }
        setContents(content)
    }

    const removeEvent = (idx: number) => {
        if (contents.length === 1) {
            alert("Atleast you should have an event for day, you can delete the entire day either")
        } else {
            const temp_cpy = [...contents]
            temp_cpy.splice(idx, 1)
            setContents(temp_cpy)
            setIndex(0)
        }
    }

    const deleteEvent = async () => {
        setDelete(true)
       await axios.delete(`${API_URL}/timeline`, {
            data: { id: data.id },
            withCredentials: true
        })
    }

    const changeEvent = async () => {
        if (newDate) {
            await axios.post(`${API_URL}/timeline`, {
                title, date, content: contents
            }, {
                withCredentials: true
            })
            window.location.reload()
            setTitle("")
            setContents([""])
            setChange(false)
        } else {
            const datum = { id: data.id, content: contents, title: title, date: date }
            setData(datum)
            setChange(false)
            await axios.put(`${API_URL}/timeline`, {
                id: data.id, title, content: contents
            }, {
                withCredentials: true
            })
        }
    }

    return (change ?
        <div className="w-full h-full bg-[rgba(0,0,0,0.4)] fixed top-0 left-0 flex justify-end">
            <div className='flex items-center justify-center w-1/2 h-full'>
                <div className='card'>{parse((contents[index]))}</div>
            </div>
            <div className="w-1/2 h-full bg-[#d9d9d9] flex flex-col justify-center items-center">
                <button onClick={() => setChange(false)} className='fixed top-[4.5rem] right-2'><CloseIcon /></button>
                <div className='flex flex-col items-center'>
                    <span className='mt-6 text-3xl font-bold'>Title</span><input onChange={(e: React.ChangeEvent<HTMLInputElement>) => setTitle(e.target.value)} value={title}
                        className='w-[30vw] h-12 font-semibold p-5 m-5 overflow-y-scroll text-black bg-white border-2 text-xl border-black rounded-lg target:border-2' />
                    {newDate && <input type='date' onChange={(e: React.ChangeEvent<HTMLInputElement>) => setDate(new Date(e.target.value))}
                        className='w-[30vw] h-12 px-3 mb-5 bg-white border-2 font-semibold border-black rounded-lg'></input>}
                </div>
                {
                    contents.map((ele, idx) => {
                        return (<>
                            <div className='text-center' key={idx}>
                                <div className='flex items-center justify-between'><span className='text-2xl font-semibold'>Event {idx + 1}</span>
                                    <button onClick={() => removeEvent(idx)} className=''><CloseIcon /></button></div>
                                <textarea key={idx} onChange={(e: React.ChangeEvent<HTMLTextAreaElement>) => handleChange(e, idx)}
                                    value={ele} className='w-[30vw] m-5 text-black bg-white border-black rounded-lg h-36 border-2 p-2 font-medium' />
                            </div>
                        </>)
                    })
                }
                <button onClick={() => {
                    const temp_cpy = [...contents]
                    temp_cpy[contents.length] = ""
                    setContents(temp_cpy)
                }}
                    className='h-10 text-white bg-black w-36'
                >
                    <AddIcon /> Add an Event
                </button>
                <button onClick={changeEvent} className='bg-[#009b02] w-36 h-10 text-white my-5'>Confirm</button>
                <button onClick={deleteEvent} className='h-10 text-white bg-[#db341b] w-36'>Delete Day</button>
            </div>
        </div>
        : null)
}
export default Change_Timeline;
