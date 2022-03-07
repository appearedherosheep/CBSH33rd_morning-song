import { useState } from "react";
import { toast } from "react-toastify";
import Searchresult from "./SearchResult";

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
  console.log(searchResult);

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
        setSearchDisabled(false);
      });
    } else {
      toast.error("검색할 내용을 입력해주세요");
      console.log("내용 입력");
      setSearchDisabled(false);
    }
  };

  return (
    <div>
      <Paper
        onSubmit={onSubmit}
        component="form"
        sx={{ p: "2px 4px", display: "flex", alignItems: "center", width: 400 }}
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
      <Searchresult list={musicList} />

    </div>
  );
}
