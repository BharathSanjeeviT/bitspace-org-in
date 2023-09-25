import parse from 'html-react-parser';
import EditIcon from '@mui/icons-material/Edit';
import ExpandLessIcon from '@mui/icons-material/ExpandLess';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import { SetStateAction, useState } from 'react';

type IMonth = {
    date: string;
    content: Array<string>;
    title: string;
    id: number;
}

const Toggle = ({ month, idx, date, setDate, isAdmin = true }: { month: IMonth, idx: number, date: string, setDate?: React.Dispatch<SetStateAction<string>>, isAdmin: boolean }) => {

    const handleChange = () => {
        if (date == month.date) {
            if (setDate) setDate("")
        }
        else {
            if (setDate) setDate(month.date)
        }
    }

    const months: Array<string> = [
        "January",
        "February",
        "March",
        "April",
        "May",
        "June",
        "July ",
        "August",
        "September",
        "October",
        "November",
        "December",
    ];
    const d: string = `${new Date(month.date).getDate()}`
    const dt = d[d.length - 1] == '1' ? "st" : d[d.length - 1] == '2' ? "nd" : d[d.length - 1] == '3' ? "rd" : "th";
    const m = months[new Date(month.date).getUTCMonth()]

    const [show, setShow] = useState(true)
    const [ani, setAni] = useState("cardIn");
    return (<>
        <div key={idx}><span className="ml-4 text-3xl font-bold">
            {show ? <ExpandLessIcon fontSize="medium" className="cursor-pointer font-black" onClick={() => {
                setAni("cardOut");
                setTimeout(() => {
                    setShow((e) => !e);
                }, 300);
            }} /> :
                <ExpandMoreIcon fontSize="medium" className="cursor-pointer font-black" onClick={() => {
                    setAni("cardIn");
                    setShow((e) => !e);
                }} />}
            <span className="text-[20px]">
                {d}{dt} &nbsp;
                {m}
            </span>
            {isAdmin && <EditIcon onClick={handleChange} className='mb-1 ml-2 text-xl cursor-pointer' />}
        </span>
            {show &&
                <div>
                    {month.content.map((event, idx) => (
                        <div className={`card ${ani}`} key={idx}>{parse(event)}</div>
                    ))}
                </div>
            }
        </div>
    </>)
}
export default Toggle;
