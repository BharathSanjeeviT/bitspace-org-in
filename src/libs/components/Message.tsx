"use client"

import React from "react";
import CloseIcon from '@mui/icons-material/Close';

const Messages = ({ message , setMessage , sucess, data }: {message:boolean , data : string , sucess : boolean , setMessage:React.Dispatch<React.SetStateAction<boolean>>}) => {
    return (message ? <>
    { sucess ? 
        <div className="w-full h-full bg-[rgba(0,0,0,0.5)] fixed top-0 left-0 flex justify-center items-center mt-7">
            <div className="fixed top-0 flex items-center justify-center w-16 h-16 mt-32 text-white bg-[rgba(0,0,0,0.7)] rounded-full right-8">
                <button onClick={()=>{setMessage(false)}}><CloseIcon fontSize="large"/></button>
            </div>
            <div className={`w-9/12 h-20 bg-[#8ae9b0] text-xl font-bold border-4 border-black flex justify-center items-center text-black text-center`}>
                {data}
            </div>
        </div> :
        <div className="w-full h-full bg-[rgba(0,0,0,0.5)] fixed top-0 left-0 flex justify-center items-center mt-7">
            <div className="fixed top-0 flex items-center justify-center w-16 h-16 mt-32 text-white bg-[rgba(0,0,0,0.7)] rounded-full right-8">
                <button onClick={()=>{setMessage(false)}}><CloseIcon fontSize="large"/></button>
            </div>
            <div className={`w-9/12 h-20 bg-[#e98a8a] text-xl font-bold border-4 border-black flex justify-center items-center text-black text-center`}>
                {data}
            </div>
        </div>
    }
        </> : null)
}
export default Messages;
