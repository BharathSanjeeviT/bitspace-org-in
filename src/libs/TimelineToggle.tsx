import ReactMarkdown from "markdown-to-jsx";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useState } from "react";
import { document } from "postcss";

type IMonth = {
  date: string;
  content: Array<string>;
  title: string;
  id: number;
};

const TimelineToggle = ({ month, idx }: { month: IMonth; idx: number }) => {
  const [show, setShow] = useState(true);
  const [ani, setAni] = useState("comeBaby");

  return (
    <>
      <div key={idx}>
        <span className="ml-5 text-3xl font-bold">
          {show ? (
            <ExpandLessIcon
              fontSize="large"
              className="cursor-pointer"
              onClick={() => {
                setAni("goBaby");
                setTimeout(() => {
                  setShow((e) => !e);
                }, 300);
              }}
            />
          ) : (
            <ExpandMoreIcon
              fontSize="large"
              className="cursor-pointer"
              onClick={() => {
                setAni("comeBaby");
                setShow((e) => !e);
              }}
            />
          )}
          {month.date.slice(0, 10)}
        </span>
        {show && (
          <div className={ani}>
            {month.content.map((event, idx) => (
              <ReactMarkdown key={idx} className="card">
                {event}
              </ReactMarkdown>
            ))}
          </div>
        )}
      </div>
    </>
  );
};
export default TimelineToggle;
