import { useState } from "react";
import Paper from "@mui/material/Paper";
import "./SearchResult.css";

export default function Searchresult(props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // console.log(props.stateSearch);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  
  return (
    <Paper className="list">
      <div
        className={
          props.stateSearch === 0 ? "list-blank" : "list-blank list-blank__hide"
        }
      >
        여기에 검색결과가 표시됩니다
      </div>
      <ul>
        {props.list.map((item, index) => (
          <div
            key={index}
            onClick={(event) => handleListItemClick(event, { index })}
            className={
              selectedIndex.index === index ? "list-item active" : "list-item"
            }
          >
            <span>{item}</span>
          </div>
        ))}
      </ul>
    </Paper>
  );
}
