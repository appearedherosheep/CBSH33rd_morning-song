// import React from "react";
// import { TextField, Button, IconButton } from "@mui/material";
// import SearchIcon from "@mui/icons-material/Search";

// function Searchbox() {
//   return (
//     <div>
//       <TextField
//         variant="outlined"
//         size="normal"
//         label="노래 제목 / 가수를 입력하세요"
//       >
//         <IconButton type="submit" sx={{ p: "10px" }} aria-label="search">
//           <SearchIcon />
//         </IconButton>
//       </TextField>

//       <Button>검색</Button>
//     </div>
//   );
// }

// export default Searchbox;

import * as React from "react";
import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import Divider from "@mui/material/Divider";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import SearchIcon from "@mui/icons-material/Search";
import DirectionsIcon from "@mui/icons-material/Directions";

export default function Searchbox() {
  return (
    <Paper
      component="form"
      sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
    >
      <InputBase
        sx={{ ml: 1, flex: 1 }}
        placeholder="노래 제목 / 가수를 입력하세요"
        // inputProps={{ "aria-label": "search google maps" }}
      />
      <IconButton
        type="submit"
        sx={{ p: "10px" }}
        //  aria-label="search"
      >
        <SearchIcon />
      </IconButton>
    </Paper>
  );
}
