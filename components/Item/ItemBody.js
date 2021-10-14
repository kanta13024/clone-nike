import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/effect-cards";
import { useState, useEffect } from "react";
import StarIcon from "@mui/icons-material/Star";
import Accordion from "../Accordion";

function ItemBody({ itemInfo }) {
  const [choiceSize, setChoiceSize] = useState("");
  const [width, setWidth] = useState(window.innerWidth);
  const updateWidth = (e) => {
    setWidth(window.innerWidth);
  };

  const WIDTH_THRESHOLD = 768;

  useEffect(() => {
    window.addEventListener(`resize`, updateWidth, {
      capture: false,
      passive: true,
    });
    return () => window.removeEventListener(`resize`, updateWidth);
  }, []);

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
    "2XL",
    "3XL",
  ];

  if (width < WIDTH_THRESHOLD) {
    return (
      <div className="flex flex-col items-center">
        <div className="flex flex-col items-start w-4/5 p-4">
          <h1 className="text-xl ">{itemInfo.name}</h1>
          <p className="mb-4">{itemInfo.category}</p>
          <p className="font-bold">¥{itemInfo.price}</p>
          <p className="text-gray-400">(税込)</p>
        </div>

        <Swiper
          className="my-4 max-w-[500px] mx-auto"
          modules={[Navigation, Pagination, Scrollbar, A11y]}
          spaceBetween={50}
          slidesPerView={1}
          navigation={{ clickable: true }}
          pagination={{ clickable: true }}
          onSwiper={(swiper) => console.log(swiper)}
          onSlideChange={() => console.log("slide change")}
        >
          {itemInfo.image.map((photo, i) => (
            <SwiperSlide key={i}>
              <div className="items-center bg-gray-100">
                <Image src={photo} width={500} height={500} />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>

        <div className="mt-10 w-4/5 p-4">
          <div className="flex justify-between mx-10 mb-3">
            <p>サイズ</p>
            <p className="text-gray-400 click">ぐんたろサイズ表</p>
          </div>

          <div className="grid grid-cols-3 gap-2 w-4/5 mx-auto">
            {sizes.map((size, i) => {
              if (choiceSize == size) {
                return (
                  <button
                    key={i}
                    onClick={() => setChoiceSize(size)}
                    className="border-2 border-black w-full py-3 rounded-md outline-none bg-black text-white hover:opacity-50 click"
                  >
                    {size}
                  </button>
                );
              } else {
                return (
                  <button
                    key={i}
                    onClick={() => setChoiceSize(size)}
                    className="border-2 w-full py-3 rounded-md outline-none text-black hover:opacity-50 click"
                  >
                    {size}
                  </button>
                );
              }
            })}
          </div>
        </div>

        <button className="bg-black w-3/4 p-4 text-white rounded-full outline-none transform transition duration-200 hover:opacity click">
          カートに追加
        </button>

        <div className="my-2" />

        <button className="w-3/4 p-4 border-2 rounded-full outline-none trasform transtion duration-200 hover:opacity-50 click">
          お気に入り
        </button>

        <p className="mt-10 p-2  leading-8 w-4/5">
          ぐんたろんちの商品は架空のものです。またカートにいれたとて、買い物もできません。買い物をしたかったらナイキの公式ショップへGO！ぐんたろのブログを見たかったらブログへGO！！このページを見てくださった方はありがとうございます！
        </p>

        <hr className="border-b-2 w-4/5 border-gray-300 my-5" />

        <Accordion title={"配送および返品が無料"}>
          <div className="mt-4 w-4/5">
            <p>
              ぐんたろん家のメンバーはいつでもくだらないYoutubeを見ることができます。Youtubeの「チャンネル登録ボタン」を押せばいつでもぐんたろん家のYoutubeを見ることが可能です！
            </p>
            <div className="my-5" />
          </div>
        </Accordion>

        <hr className="border-b-2 w-4/5 border-gray-300 my-5" />

        <Accordion title={"レビュー"}>
          <div className="mt-4 w-4/5">
            <StarIcon className="text-yellow-400" />
            <StarIcon className="text-yellow-400" />
            <StarIcon className="text-yellow-400" />
            <StarIcon className="text-yellow-400" />
            <StarIcon className="text-yellow-400" />

            <div className="my-1" />

            <p>
              ご意見をお聞かせください。Youtubeやブログにあなたの最初のレビューを投稿しましょう！
            </p>

            <div className="my-5" />
          </div>
        </Accordion>
      </div>
    );
  }

  return (
    <div className="flex w-5/6 mx-auto my-10 space-x-4">
      {/* Left */}
      <div className="flex-grow">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2">
          {itemInfo.image.map((photo, i) => (
            <Image key={i} className="bg-gray-200" src={photo} width={400} height={400} />
          ))}
        </div>
      </div>
      {/* Right */}
      <div className="max-w-[480px] flex flex-col items-center">
        <div className="mt-4 mb-5">
          <h2 className="text-xl">{itemInfo.name}</h2>
          <p className="mb-5">{itemInfo.category}</p>
          <p className="font-bold">¥{itemInfo.price}</p>
          <p className="text-gray-400">(税込)</p>
          <div className="mt-4 flex space-x-1">
            {itemInfo.image.map((photo, i) => (
              <div className="click">
                <Image key={i} className="bg-gray-200" src={photo} width={50} height={50} />
              </div>
            ))}
          </div>
        </div>

        <div className="flex justify-between mx-10 mb-3 w-4/5">
          <p>サイズ</p>
          <p className="text-gray-400 click">ぐんたろサイズ表</p>
        </div>

        <div className="grid grid-cols-3 gap-2 w-4/5 mx-auto">
          {sizes.map((size, i) => {
            if (choiceSize == size) {
              return (
                <button
                  key={i}
                  onClick={() => setChoiceSize(size)}
                  className="border-2 border-black w-full py-2 rounded-b-md outline-none bg-black text-white hover:opacity-50 click"
                >
                  {size}
                </button>
              );
            } else {
              return (
                <button
                  key={i}
                  onClick={() => setChoiceSize(size)}
                  className="border-2 w-full py-2 rounded-b-md outline-none text-black hover:opacity-50 click"
                >
                  {size}
                </button>
              );
            }
          })}
        </div>

        <div className="my-5" />

        <button className="bg-black w-3/4 p-4 text-white rounded-full outline-none trasform transtion duration-200 hover:opacity-50 click">
          カートに追加
        </button>

        <div className="my-2" />

        <button className="w-3/4 p-4 border-2 rounded-full outline-none trasform transtion duration-200 hover:opacity-50 click">
          お気に入り
        </button>

        <div className="my-5" />

        <p className="mt-10 p-2  leading-8 w-4/5">
          ぐんたろんちの商品は架空のものです。またカートにいれたとて、買い物もできません。買い物をしたかったらナイキの公式ショップへGO！ぐんたろのブログを見たかったらブログへGO！！このページを見てくださった方はありがとうございます！
        </p>

        <hr className="border-b-2 w-4/5 border-gray-300 my-5" />

        <Accordion title={"配送および返品が無料"}>
          <div className="mt-4 w-4/5">
            <p>
              ぐんたろん家のメンバーはいつでもくだらないYoutubeを見ることができます。Youtubeの「チャンネル登録ボタン」を押せばいつでもぐんたろん家のYoutubeを見ることが可能です！
            </p>

            <div className="my-5" />
          </div>
        </Accordion>

        <hr className="border-b-2 w-4/5 border-gray-300 my-5" />

        <Accordion title={"レビュー"}>
          <div className="mt-4 w-4/5">
            <StarIcon className="text-yellow-400" />
            <StarIcon className="text-yellow-400" />
            <StarIcon className="text-yellow-400" />
            <StarIcon className="text-yellow-400" />
            <StarIcon className="text-yellow-400" />

            <div className="my-1" />

            <p>
              ご意見をお聞かせください。Youtubeやブログにあなたの最初のレビューを投稿しましょう！
            </p>

            <div className="my-5" />
          </div>
        </Accordion>
      </div>
    </div>
  );
}

export default ItemBody;
