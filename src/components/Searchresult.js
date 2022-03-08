import { useState } from "react";
import Paper from "@mui/material/Paper";
// import { makeStyles } from "@mui/styles";
import "./SearchResult.css";

export default function Searchresult(props) {
  const [selectedIndex, setSelectedIndex] = useState(-1);
  // const [existList, setExistList] = useState(0);
  console.log(props.stateSearch);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
    // setExistList(1);
  };
  return (
    // <Paper className={existList.index === 1 ? "list" : "list list-blank"}>
    <Paper className="list">
      {/* {existList == 0  ( */}
      <div
        // className="list-blank"
        className={
          props.stateSearch === 0 ? "list-blank" : "list-blank list-blank__hide"
        }
      >
        {/* <span>여기에 검색결과가 표시됩니다</span> */}
        여기에 검색결과가 표시됩니다
      </div>
      {/* )} */}
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
