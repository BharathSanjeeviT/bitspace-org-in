"use client"
import InfoIcon from '@mui/icons-material/Info';
import { SetStateAction, useEffect, useState } from 'react';

const Toast = ({ data , setView }: { data: string , setView : React.Dispatch<SetStateAction<boolean>>}) => {

    useEffect(() => {
        setTimeout(() => {
            setView(false);
        }, 2000);
    }, []);

    return (
        <div className="fixed top-[10%] left-[1%] slide-in">
            <div className="min-w-[300px] min-h-[70px] bg-[#9a8ae2] max-w-[90vw] flex items-center border-[3.5px] border-black text-xl font-semibold text-white">
                <div className="pl-3">
                    <InfoIcon fontSize='medium'/>
                </div>
                <div className="px-5 py-3">
                    {data}
                </div>
            </div>
        </div>
    )
};

export default Toast;
