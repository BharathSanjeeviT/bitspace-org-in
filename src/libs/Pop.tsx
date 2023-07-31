import CloseIcon from '@mui/icons-material/Close';
import { useState } from 'react';

const Pop = ({show,setShow,data,setBan}:any) => {

    const [ banned , setBanned ] = useState(false)

    const banUser = () => {
        setBanned((e)=>!e)
        setBan(e=>!e)
    }
    return show && ( <>

        <div className="h-[100vh] w-full bg-[rgba(0,0,0,0.6)] fixed top-0 left-0 flex justify-center items-center">
            <div className="flex flex-col items-center justify-between bg-white border-4 border-black h-52 w-96">
                { banned ? <span className='px-3 pt-8 text-lg font-semibold text-center'>{ data.username } is { data.ban ? 'UNBAN' : 'BAN' }ED</span> :
                <div className='flex flex-col items-center justify-center w-72'>
                <span className='px-3 pt-8 mb-3 text-lg font-semibold text-center basis-1'>Are you sure want to { data.ban ? 'UNBAN' : 'BAN' } {data.username}? </span>
                <button className='h-32 text-white bg-black basis-3 w-36' onClick={banUser} >{ data.ban ? 'UNBAN' : 'BAN' }</button>
                </div>
                }
                <button className="pb-3" onClick={()=>setShow(false)}><CloseIcon fontSize='large'/></button>
            </div>
        </div>
    </> )
}
export default Pop;
