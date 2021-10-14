// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/a11y";

function HeaderBottom() {
  return (
    <div className="bg-gray-200 p-2 mx-auto text-gray-400">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
        spaceBetween={50}
        autoplay={{
          delay: 2000,
        }}
        slidesPerView={1}
        navigation
        loop={true}
      >
        <SwiperSlide>
          <div className="flex max-w-md mx-auto items-center justify-center space-x-2">
            <p className="w-52 text-sm md:text-base">最新のプロダクト特別なプロダクトをお届け</p>
            <a className="link text-xs md:text-sm" href="https://guntaro.blog">
              ぐんたろのブログをチェック
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex max-w-md mx-auto items-center justify-center space-x-2">
            <p className="w-52 text-sm md:text-base">
              YoutubeではWebデザインやイラストの動画を配信
            </p>
            <a className="link text-xs md:text-sm" href="https://guntaro.blog">
              ぐんたろん家のYoutubeをチェック
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex max-w-md mx-auto items-center justify-center space-x-2">
            <p className="w-52 text-sm md:text-base">最新のプロダクト特別なプロダクトをお届け</p>
            <a
              className="link text-xs md:text-sm"
              href="https://www.youtube.com/channel/UCKOgDGUgEJtkRFQMha9TyDQ"
            >
              ぐんたろのブログをチェック
            </a>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex max-w-md mx-auto items-center justify-center space-x-2">
            <p className="w-52 text-sm md:text-base">
              ブログはだらだらと活動中。 疲れたら更新しません
            </p>
            <a className="link text-xs md:text-sm" href="https://guntaro.blog">
              ぐんたろのブログをチェック
            </a>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
}

export default HeaderBottom;
