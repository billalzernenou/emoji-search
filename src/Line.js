import emojiList from "./emojiList.json";
import { useState } from "react";

const Line = ({ searched }) => {
  const [isCopyShown, setIsCopyShown] = useState(false);
  let result;
  if (searched.length === 0) {
    result = emojiList;
  } else {
    result = emojiList.filter((elem, index) => {
      let regex = new RegExp(searched, "i");
      if (regex.test(elem.keywords)) {
        return elem;
      }
    });
  }

  return (
    <div className="emoji-list">
      {result.map((emoji, index) => {
        return (
          <div className="line">
            <div>
              <span>{emoji.symbol}</span>
              <span>{emoji.title}</span>
            </div>
            <div>
              <span
                className="copy-span"
                onClick={() => {
                  navigator.clipboard.writeText(emoji.symbol);
                }}
              >
                Click to copy !
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Line;
