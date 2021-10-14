function MenuModal({ setShowModal }) {
  return (
    <div
      className="fixed z-50 bg-black bg-opacity-50 h-full w-full"
      onClick={() => setShowModal(false)}
    >
      <div className="grid sm:grid-cols-3 md:grid-cols-4 gap-4 px-32 py-14 bg-white ">
        <div className="">
          <h2 className="mb-4 ">注目コレクション</h2>
          <ul className="text-gray-400 text-sm space-y-1">
            <li className="transform transition duration-200 hover:text-black click">トップス</li>
            <li className="transform transition duration-200 hover:text-black click">ボトムス</li>
            <li className="transform transition duration-200 hover:text-black click">シューズ</li>
            <li className="transform transition duration-200 hover:text-black click">アイテム</li>
          </ul>
        </div>

        <div className="">
          <h2 className="mb-4 ">新着情報</h2>
          <ul className="text-gray-400 text-sm space-y-1">
            <li className="transform transition duration-200 hover:text-black click">トップス</li>
            <li className="transform transition duration-200 hover:text-black click">ボトムス</li>
            <li className="transform transition duration-200 hover:text-black click">シューズ</li>
            <li className="transform transition duration-200 hover:text-black click">アイテム</li>
          </ul>
        </div>

        <div className="">
          <h2 className="mb-4 ">MENS</h2>
          <ul className="text-gray-400 text-sm space-y-1">
            <li className="transform transition duration-200 hover:text-black click">トップス</li>
            <li className="transform transition duration-200 hover:text-black click">ボトムス</li>
            <li className="transform transition duration-200 hover:text-black click">シューズ</li>
            <li className="transform transition duration-200 hover:text-black click">アイテム</li>
          </ul>
        </div>

        <div className="">
          <h2 className="mb-4 ">WOMENS</h2>
          <ul className="text-gray-400 text-sm space-y-1">
            <li className="transform transition duration-200 hover:text-black click">トップス</li>
            <li className="transform transition duration-200 hover:text-black click">ボトムス</li>
            <li className="transform transition duration-200 hover:text-black click">シューズ</li>
            <li className="transform transition duration-200 hover:text-black click">アイテム</li>
          </ul>
        </div>

        <div className="">
          <h2 className="mb-4 ">KIDS</h2>
          <ul className="text-gray-400 text-sm space-y-1">
            <li className="transform transition duration-200 hover:text-black click">トップス</li>
            <li className="transform transition duration-200 hover:text-black click">ボトムス</li>
            <li className="transform transition duration-200 hover:text-black click">シューズ</li>
            <li className="transform transition duration-200 hover:text-black click">アイテム</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default MenuModal;
