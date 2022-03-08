import { useState } from "react";
import Searchresult from "./SearchResult";
import "./Searchbox.css";

import qs from "qs";
import axios from "axios";

import Paper from "@mui/material/Paper";
import InputBase from "@mui/material/InputBase";
import IconButton from "@mui/material/IconButton";
import SearchIcon from "@mui/icons-material/Search";

let searchResult, title, artist, musicList;

function showMusicData(data) {
  searchResult = data["results"]["trackmatches"]["track"];
  title = searchResult.map((x) => x["name"]);
  artist = searchResult.map((x) => x["artist"]);
  musicList = title.map(function (x, i) {
    return x.concat(" - ", artist[i]);
  });
  // console.log(musicList);

  return musicList;
}

function searchLastFM(query) {
  const promise = axios.post(
    "https://ws.audioscrobbler.com/2.0",
    qs.stringify({
      method: "track.search",
      limit: 10,
      track: query,
      api_key: "a5e3ccdd0f753262a11189919706befe",
      format: "json",
    })
  );

  return promise.then((response) => response.data);
}

export default function Searchbox() {
  const [isSearchDisabled, setSearchDisabled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [musicList, setMusicList] = useState([]);

  const [stateSearch, setStateSearch] = useState(0);
  // console.log(stateSearch);

  const onChange = (event) => setSearchQuery(event.target.value);

  function onSubmit(event) {
    event.preventDefault();
    handleSearch();
  }
  const handleSearch = () => {
    setSearchDisabled(true);
    if (searchQuery.length !== 0) {
      searchLastFM(searchQuery).then((data) => {
        setMusicList(showMusicData(data));
        console.log(musicList);
        setStateSearch(1);
        if (musicList.length == 0) {
          setStateSearch(0);
        } 
        // else {
        //   setStateSearch(1);
        // }
        setSearchDisabled(false);
        // console.log(stateSearch);
      });
    } else {
      console.log("내용 입력");
      setSearchDisabled(false);
      setStateSearch(0);
    }
  };

  return (
    <div>
      <Paper
        onSubmit={onSubmit}
        component="form"
        className="searchbox"
        // sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400,margin: 0 }}
      >
        <InputBase
          sx={{ ml: 1, flex: 1 }}
          placeholder="노래 제목 / 가수를 입력하세요"
          onChange={onChange}
          disabled={isSearchDisabled}
        />
        <IconButton
          type="submit"
          sx={{ p: "10px" }}
          disabled={isSearchDisabled}
        >
          <SearchIcon />
        </IconButton>
      </Paper>
      <Searchresult list={musicList} stateSearch={stateSearch} />
    </div>
  );
}
