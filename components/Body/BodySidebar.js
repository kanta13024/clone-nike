import { useState } from "react";
import { IconButton } from "@mui/material";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import CheckIcon from "@mui/icons-material/Check";

function BodySidebar() {
  const [isGender, setIsGender] = useState(false);
  const [isColor, setIsColor] = useState(false);
  const [choiceColor, setChoiceColor] = useState("");
  const [isSize, setIsSize] = useState(false);
  const [choiceSize, setChoiceSize] = useState("");

  const categories = [
    "シューズ",
    "スポーツブラ",
    "トップス＆Tシャツ",
    "パーカー＆トレーナー",
    "アウター＆ベスト",
    "パンツ＆タイツ",
    "ハーフパンツ/ショートパンツ",
    "ジャージ",
    "スカート & ドレス",
    "ソックス",
  ];

  const colorfuls = [
    { name: "パープル", color: "purple-500" },
    { name: "ブラック", color: "black" },
    { name: "レッド", color: "red-500" },
    { name: "オレンジ", color: "yellow-500" },
    { name: "ブルー", color: "blue-500" },
    { name: "ホワイト", color: "white" },
    { name: "ブラウン", color: "red-800" },
    { name: "グリーン", color: "green-500" },
    { name: "イエロー", color: "yellow-400" },
    { name: "グレー", color: "gray-400" },
    { name: "ピンク", color: "pink-400" },
  ];

  const sizes = [
    "23.0",
    "23.5",
    "24.0",
    "24.5",
    "25.0",
    "25.5",
    "26.0",
    "26.5",
    "27.0",
    "27.5",
    "28.0",
    "28.5",
    "29.0",
    "S",
    "M",
    "L",
    "XL",
    "3XL",
  ];
  return (
    <div className="p-4 px-10 h-screen w-[280px] overflow-y-scroll ">
      <ul className="space-y-2 py-4 mb-4">
        {categories.map((name, i) => (
          <li key={i} className="category active:text-blue-500">
            {name}
          </li>
        ))}
      </ul>

      <hr className="border-b-2" />

      <div className="my-4">
        <div className="flex items-center justify-between">
          <p>性別</p>

          <IconButton
            onClick={() => {
              setIsGender(!isGender);
            }}
          >
            {isGender ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
        </div>

        {isGender && (
          <ul className="space-y-4 my-4">
            <li className="flex items-center space-x-4">
              <input type="checkbox" id="mens" />
              <label for="mens">メンズ</label>
            </li>

            <li className="flex items-center space-x-4">
              <input type="checkbox" id="wimens" />
              <label for="wimens">ウィメンズ</label>
            </li>
          </ul>
        )}
      </div>

      <hr className="border-b-2" />

      <div className="my-4">
        <div className="flex items-center justify-between">
          <p>カラー</p>
          <IconButton onClick={() => setIsColor(!isColor)}>
            {isColor ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
        </div>
      </div>
      {isColor && (
        <ul className="grid grid-cols-3 text-xs gap-1">
          {colorfuls.map((colorful, i) => {
            if (colorfuls[i].name == choiceColor) {
              return (
                <li key={i} className="flex flex-col items-center my-2">
                  <button
                    onClick={() => setChoiceColor(colorful.name)}
                    className={
                      "rounded-full mb-2 outline-none w-8 h-8 text-center hover:shadow-md active:scale-90 transtion transform duration-200 bg-" +
                      colorful.color
                    }
                  >
                    <CheckIcon className="text-white" />
                  </button>
                  {colorful.name}
                </li>
              );
            } else {
              return (
                <li key={i} className="flex flex-col items-center my-2">
                  <button
                    onClick={() => setChoiceColor(colorful.name)}
                    className={
                      "rounded-full mb-2 outline-none w-8 h-8 text-center hover:shadow-md active:scale-90 transtion transform duration-200 bg-" +
                      colorful.color
                    }
                  >
                    <CheckIcon className="text-transparent" />
                  </button>
                  {colorful.name}
                </li>
              );
            }
          })}
        </ul>
      )}

      <div className="hidden bg-white bg-black bg-purple-500 bg-red-500 bg-yellow-500 bg-blue-500 bg-red-800 bg-yellow-400 bg-gray-400 bg-pink-400 bg-green-500" />

      <hr className="border-b-2" />

      <div className="my-4">
        <div className="flex justify-between items-center mb-4">
          <p>サイズ</p>

          <IconButton onClick={() => setIsSize(!isSize)}>
            {isSize ? <ExpandLessIcon /> : <ExpandMoreIcon />}
          </IconButton>
        </div>
        {isSize && (
          <ul className="grid grid-cols-3 gap-1">
            {sizes.map((size, i) => {
              if (sizes[i] == choiceSize) {
                return (
                  <button
                    onClick={() => setChoiceSize(size)}
                    key={i}
                    className="border-2 border-black w-full py-1 rounded-b-md outline-none bg-black text-white hover:opacity-50 click"
                  >
                    {size}
                  </button>
                );
              } else {
                return (
                  <button
                    onClick={() => setChoiceSize(size)}
                    key={i}
                    className="border-2 w-full py-1 rounded-b-md outline-none click hover:opacity-50"
                  >
                    {size}
                  </button>
                );
              }
            })}
          </ul>
        )}
      </div>
    </div>
  );
}

export default BodySidebar;
