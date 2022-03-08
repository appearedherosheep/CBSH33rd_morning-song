// import "../SearchResult.css";
// import { useState } from "react";

export default function ListItem({ item, index, onClick, selectedIndex }) {
  return (
    <div
      onClick={onClick}
      className={selectedIndex === index ? "list-item active" : "list-item"}
    >
      <span key={index}>{item}</span>
    </div>
  );
}
