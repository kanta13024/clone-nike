import Image from "next/image";
import Link from "next/link";

function ItemCard({ id, image, tag, name, category, color, price }) {
  return (
    <div
      href={"" + id}
      className="items-center space-y-1 hover:opacity-50 trasition tranform duration-200 click"
    >
      <Link href={"" + id}>
        <a>
          <div className="bg-gray-100 mb-4">
            <Image src={image} objectFit="contain" width={400} height={400} />
          </div>
          <p className="text-red-500">{tag}</p>
          <p>{name}</p>
          <p className="text-gray-400">{category}</p>
          <p className="text-gray-400">{color}カラー</p>
          <p className="font-bold">¥{price}</p>
          <p className="text-gray-400">（税込）</p>
        </a>
      </Link>
    </div>
  );
}

export default ItemCard;
