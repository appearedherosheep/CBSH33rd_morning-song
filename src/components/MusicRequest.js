import qs from "qs";
import axios from "axios";
import moment from "moment";

import * as React from "react";

let searchResult, title, artist, musicList;

export default function MusicRequest() {
  const [isSearchDisabled, setSearchDisabled] = React.useState(false);
  const [isApplyDisabled, setApplyDisabled] = React.useState(true);

  const [dormitory, setDormitory] = React.useState("사름");
  const [searchQuery, setSearchQuery] = React.useState("");

  const [date, setDate] = React.useState(moment(new Date()).add(1, "days"));
  const [selectedMusic, setSelectedMusic] = React.useState("");

  const handleSearch = () => {
    setSearchDisabled(true);

    if (searchQuery.length != 0) {
      searchLastFM(searchQuery).then((data) => {
        setMusicList(showMusicData(data));
        setSearchDisabled(false);
      });
    } else {
      console.log("검색할 내용을 입력해주세요");
      setSearchDisabled(false);
    }
  };

  const handleTargetMusicTitle = (title) => {
    setSelectedMusic(title);
    setApplyDisabled(false);
  };

  const handleApply = () => {
    setApplyDisabled(true);
    checkAndApply(
      dormitory == "사름" ? "saReum" : "chungWoon",
      date.format("YYYYMMDD"),
      selectedMusic
    );
  };

  function handleSubmit(event) {
    event.preventDefault();
    handleSearch();
  }

  return <div></div>;
}

function showMusicData(data) {
  searchResult = data["results"]["trackmatches"]["track"];
  title = searchResult.map((x) => x["name"]);
  artist = searchResult.map((x) => x["artist"]);

  musicList = title.map(function (x, i) {
    return x.concat(" - ", artist[i]);
  });

  return musicList;
}

function searchLastFM(query) {
  const promise = axios.post(
    "https://ws.audioscrobbler.com/2.0",
    qs.stringify({
      method: "track.search",
      limit: 5,
      track: query,
      api_key: "a5e3ccdd0f753262a11189919706befe",
      format: "json",
    })
  );

  return promise.then((response) => response.data);
}
