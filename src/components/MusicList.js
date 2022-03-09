import { useState } from "react";
import Paper from "@mui/material/Paper";
import "./MusicList.css";
import { dbGet, dbUpdate } from "../utils/firebase";

export default function List() {
  const [dormitory, setDormitory] = useState("saReum");

  //   const [date, setDate] = useState(moment(new Date()).add(1, "days"));
  const [musicList, setMusicList] = useState([]);

  const handleDormitoryChange = (e) => {
    setDormitory(e.target.value);
  };
  //   const getMusicData =() => {
  //       console.log(dbGet("wakeMusic/sareum/queue/0/title"))
  //     //   setMusicList(dbGet("wakeMusic/sareum/queue/0/title"))
  //   }
  const getMusicData = () => {
      // dbGet("temporaryMusics/" + dormitory + "/" + date.format("YYYYMMDD"))
      dbGet("wakeMusic/sareum/queue/")
      .then((snapshot) => {
          if (snapshot.exists()) {
              setMusicList(snapshot.val().map((x) => x["title"]));
            } else {
                setMusicList(["목록이 비어 있어요"]);
            }
        })
        .catch((error) => {
            // toast.error("예상하지 못한 에러가 발생했어요");
            console.error(error.code);
        });
    };
    // getMusicData();
    // console.log(musicList);


  //   if (musicList.length == 0) getMusicData();
  return (
    <Paper className="list-container">
      <h1>this is h111111111111111111111111111111111111111111111111111</h1>
      <button onClick={getMusicData} >F5</button>
      <ul>
        {musicList.map((item, index) => (
          <div
            key={index}
          >
            <span>{item}</span>
          </div>
        ))}
      </ul>
    </Paper>
  );
}
