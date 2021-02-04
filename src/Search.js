import Line from "./Line";
import { useState } from "react";
const Search = () => {
  const [searched, setSearched] = useState("");
  return (
    <div className="search">
      <div></div>
      <h1>😎 EmojiSearch 😎</h1>

      <input
        type="text"
        value={searched}
        placeholder="What emoji are you looking for ?"
        onChange={(event) => {
          setSearched(event.target.value);
        }}
      />
      <Line searched={searched} />
    </div>
  );
};

export default Search;
