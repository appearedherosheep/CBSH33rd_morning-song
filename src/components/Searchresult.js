import React from "react";
import Paper from "@mui/material/Paper";

function Searchresult(props) {
  return (
    <Paper
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400,height: 600 ,marginTop: 3}}
    >
      <ul>
        {props.list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </Paper>
  );
}

export default Searchresult;
