import {useState,} from "react";
import Paper from "@mui/material/Paper";
import "./SearchResult.css";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";

function Searchresult(props) {
  const [selectedIndex, setSelectedIndex] = useState(0);
  console.log(selectedIndex);

  const handleListItemClick = (event, index) => {
    setSelectedIndex(index);
  };
  return (
    <Paper className="list">
      <ul>
        {/* <h1>노래</h1> */}
        {props.list.map((item, index) => (
          // <div className="list-item">
          //   <span  key={index}>
          //     {item}
          //   </span>
          // </div>
          <ListItemButton
            selected={selectedIndex.index === index}
            onClick={(event) => handleListItemClick(event, { index })}
          >
            <ListItemText primary={item} />
          </ListItemButton>
        ))}
      </ul>
    </Paper>
  );
}

export default Searchresult;

// import * as React from 'react';
//   import Box from '@mui/material/Box';
//   import ListItemIcon from '@mui/material/ListItemIcon';
//   import Divider from '@mui/material/Divider';
//   import InboxIcon from '@mui/icons-material/Inbox';
//   import DraftsIcon from '@mui/icons-material/Drafts';

//   export default function SearchResult() {

//     return (
//       <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
//       {/* <List component="nav" aria-label="secondary mailbox folder"> */}
//         <ListItemButton
//           selected={selectedIndex === 2}
//           onClick={(event) => handleListItemClick(event, 2)}
//           >
//           <ListItemText primary="Trash" />
//         </ListItemButton>
//         <ListItemButton
//           selected={selectedIndex === 3}
//           onClick={(event) => handleListItemClick(event, 3)}
//         >
//           <ListItemText primary="Spam" />
//         </ListItemButton>
//       {/* </List> */}
//     </Box>
//   );
// }
