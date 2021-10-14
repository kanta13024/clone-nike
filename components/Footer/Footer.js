import { IconButton } from "@mui/material";
import TwitterIcon from "@mui/icons-material/Twitter";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";
import BookIcon from "@mui/icons-material/Book";

function Footer() {
  return (
    <footer className="flex justify-between bg-black py-10 px-8">
      <small className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <ul className="text-white space-y-3 text-sm font-thin mb-2">
          <li className="click">
            <a href="guntaro.blog/line-creater-challenge">Guntaroギフトカード</a>
          </li>
          <li className="click">
            <a href="https://guntaro.blog">ブログの閲覧カード</a>{" "}
          </li>
          <li className="click">最寄りのぐんたろん家</li>
          <li className="click">フォローする</li>
          <li className="click">ぐんたろのファン会員</li>
          <li className="click">最新ぐんたろ情報を受け取る</li>
          <li className="click">お問い合わせ</li>
        </ul>

        <ul className="mb-2 text-gray-400 text-xs space-y-3 ">
          <p className="mb-2 text-sm text-white click">ヘルプ</p>
          <li className="click">
            <a href="https://guntaro.blog/web-design-nike-online-shop/">閲覧履歴</a>{" "}
          </li>
          <li className="click">返品</li>
          <li className="click">交換</li>
          <li className="click">支払いオプション</li>
          <li className="click">
            <a href="https://guntaro.blog/about-contact/">お問い合わせ</a>
          </li>
        </ul>

        <ul className="mb-2 text-gray-400 text-xs space-y-3 ">
          <p className="mb-2 text-sm text-white click">ぐんたろん家について</p>
          <li className="click">ニュース</li>
          <li className="click">ブログ</li>
          <li className="click">採用</li>
          <li className="click">
            <a href="https://guntaro.blog">Guntaroカード</a>
          </li>
          <li className="click">
            {" "}
            <a href="https://guntaro.blog/about-contact/">お問い合わせ</a>
          </li>
        </ul>
      </small>
      <div className="space-x-1">
        <IconButton size="small" color="info">
          <a href="https://twitter.com/gunta_gunma">
            <TwitterIcon />
          </a>
        </IconButton>
        <IconButton size="small" color="info" className="bg-gray-400">
          <a href="https://www.instagram.com/guntaro_gunma/reels/?hl=ja">
            <InstagramIcon className="text-pink-400" />
          </a>
        </IconButton>
        <IconButton size="small" color="info" className="bg-gray-400">
          <a href="https://www.youtube.com/channel/UCKOgDGUgEJtkRFQMha9TyDQ">
            <YouTubeIcon className="text-red-500" />
          </a>
        </IconButton>
        <IconButton size="small" color="success" className="bg-gray-400">
          <a href="https://guntaro.blog">
            <BookIcon />
          </a>
        </IconButton>
      </div>
    </footer>
  );
}

export default Footer;
