import parse from 'html-react-parser';
import EditIcon from '@mui/icons-material/Edit';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { SetStateAction, useState } from 'react';
import Change_Timeline from './Change_Timeline';

type IMonth = {
    date : Date;
    content : Array<string>;
    title: string;
    id: number;
}

const Toggle = ({ datum ,idx , date, setDate } : {
        datum: IMonth , idx : number, date: string ,
        setDate: React.Dispatch<SetStateAction<string>> ,
}) => {

    const handleChange = () => {
        if ( date == (data.date).toString() ) setDate('')
        else setDate((data.date).toString())
        setEdit(true)
    }

    const [deleted,setDeleted] = useState(false)
    const [edit, setEdit] = useState(false)
    const [show,setShow] = useState(true)
    const [data , setData] = useState<IMonth>(datum)

    return ( !deleted ? <>
        <div key={idx}><span className="ml-5 text-3xl font-bold">
            { show ? <ExpandLessIcon fontSize="large" className="cursor-pointer" onClick={()=>setShow((e)=>!e)} />  :
            <ExpandMoreIcon fontSize="large" className="cursor-pointer" onClick={()=>setShow((e)=>!e)} /> }
            <span className='text-xl'>{((data.date).toString()).slice(0,10)}</span><EditIcon onClick={handleChange} className='mb-1 ml-2 text-xl cursor-pointer' /></span>
            { show &&
                <div>
                <div className='py-2 ml-5 text-xl font-semibold'>{data.title}</div>
                    { data.content.map( (event , idx ) => (
                        <div className="card" key={idx}>{parse(event)}</div>
                    ) ) }
                </div>
            }
            <Change_Timeline change={edit} setChange={setEdit} setDelete={setDeleted} data={data} setData={setData} newDate={false}/>
        </div>
    </> : null )
}
export default Toggle;
