import Image from "next/image";
import Link from "next/link";

function HeaderTop() {
  return (
    <div className="hidden sm:flex justify-between items-center px-10 pt-1 bg-gray-200">
      <div className="hover:animate-pulse active:scale-95 transform transition duration-200">
        <Link href="/">
          <a>
            <Image
              src={"https://guntaro.blog/wp-content/uploads/2021/09/dog-3-1-1.png"}
              width={25}
              height={25}
            />
          </a>
        </Link>
      </div>

      <div className="flex space-x-2 text-xs">
        <p className="link">Help</p>
        <span>|</span>
        <p className="link">ここからはじめよう</p>
        <span>|</span>
        <p className="link">ログイン</p>
      </div>
    </div>
  );
}

export default HeaderTop;
