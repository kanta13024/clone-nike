import Image from "next/image";
import { IconButton } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import BackspaceIcon from "@mui/icons-material/Backspace";

function SearchModal({ setSearchInput }) {
  return (
    <div
      onClick={() => setSearchInput(false)}
      className="fixed z-50 bg-black bg-opacity-30 top-0 left-0 h-full w-full"
    >
      <div className="bg-white">
        <div className="flex items-center w-full p-4">
          <Image
            src={
              "https://guntaro.blog/wp-content/uploads/2021/09/logoNew%E3%81%8F%E3%82%99%E3%82%93%E3%81%9F%E3%82%8D-1.png"
            }
            objectFit
            width={150}
            height={50}
          />

          <form className="flex flex-grow bg-gray-100 max-w-2xl p-3 rounded-full mx-auto">
            <SearchIcon />
            <input
              type="text"
              className="bg-transparent outline-none ml-2"
              onChane={(e) => setSearchInput(e.target.value)}
              placeholder="検索"
              autoFocus={true}
            />
          </form>

          <div className="hdden sm:inline-block">
            <IconButton onClick={() => setSearchInput("")}>
              <BackspaceIcon />
            </IconButton>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4 px-40 py-14 mx-auto">
          <div className="">
            <h2 className="mb-4 text-gray-400">人気検索ワード</h2>
            <ul className="text-lg space-y-1">
              <li className="transform transition duration-200 hover:text-gray-300 click">
                Air Gutaro
              </li>
              <li className="transform transition duration-200 hover:text-gray-300 click">Stamp</li>
              <li className="transform transition duration-200 hover:text-gray-300 click">
                Animal Stamps
              </li>
              <li className="transform transition duration-200 hover:text-gray-300 click">
                Youtube
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchModal;
