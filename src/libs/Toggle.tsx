import ReactMarkdown from 'markdown-to-jsx';
import EditIcon from '@mui/icons-material/Edit';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { SetStateAction, useState } from 'react';

type IMonth = {
    date : string;
    content : Array<string>;
    title: string;
    id: number;
}

const Toggle = ({ month ,idx , date, setDate } : { month : IMonth , idx : number, date: string , setDate: React.Dispatch<SetStateAction<string>> }) => {

    const handleChange = () => {
        if ( date == month.date ) setDate('')
        else setDate(month.date)
        console.log(month.id)
    }

    const [show,setShow] = useState(false)

    return (<>
        <div key={idx}><span className="ml-5 text-3xl font-bold">
            { show ? <ExpandLessIcon fontSize="large" className="cursor-pointer" onClick={()=>setShow((e)=>!e)} />  :
            <ExpandMoreIcon fontSize="large" className="cursor-pointer" onClick={()=>setShow((e)=>!e)} /> }
            {month.date.slice(0,10)}<EditIcon onClick={handleChange} className='mb-1 ml-2 text-xl cursor-pointer' /></span>
            { show &&
                <div>
                    { month.content.map( (event , idx ) => (
                        <ReactMarkdown key={idx} className="card">{event}</ReactMarkdown>
                    ) ) }
                </div>
            }
        </div>
    </>)
}
export default Toggle;
