import { useState } from "react";
import Paper from "@mui/material/Paper";
import "./SearchResult.css";

export default function Searchresult(props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  console.log(selectedIndex);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  return (
    <Paper className="list">
      <ul>
        {props.list.map((item, index) => (
          <div
            className="list-item"
            onClick={(event) => handleListItemClick(event, { index })}
            className={
              selectedIndex.index === index ? "list-item active" : "list-item"
            }
          >
            <span key={index}>{item}</span>
          </div>
        ))}
      </ul>
    </Paper>
  );
}