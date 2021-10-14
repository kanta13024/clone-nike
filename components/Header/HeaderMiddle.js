import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import MenuModal from "./MenuModal";
import SearchModal from "./SearchModal";
import SidebarDrawer from "./SidebarDrawer";
import SearchIcon from "@mui/icons-material/Search";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import DehazeIcon from "@mui/icons-material/Dehaze";
import { IconButton } from "@mui/material";

function HeaderMiddle() {
  const newReleases = ["title", "title", "title"];
  const menus = ["NEW RELEASES", "MEN", "WOMEN", "KIDS", "CUSTOMIZE"];
  const [isMenu, setIsMenu] = useState("NEW RELEASES");
  const [showModal, setShowModal] = useState(false);
  const [searchInput, setSearchInput] = useState("");

  console.log(isMenu);
  console.log(menus[0]);

  return (
    <div className="py-3 pr-10 bg-white">
      <div className="flex items-center justify-between">
        {/* Right */}
        <Link className="click hover:animate-pulse" href="/">
          <a>
            <Image
              src={
                "https://guntaro.blog/wp-content/uploads/2021/09/logoNew%E3%81%8F%E3%82%99%E3%82%93%E3%81%9F%E3%82%8D-1.png"
              }
              objectFit
              width={150}
              height={50}
            />
          </a>
        </Link>

        {/* Left */}
        <div className="hidden md:flex space-x-6">
          {menus.map((menu, i) => {
            if (menus[i] == isMenu) {
              return (
                <p
                  key={i}
                  onClick={() => {
                    setIsMenu(menu);
                    setShowModal(true);
                  }}
                  className="click border-b font-semibold"
                >
                  {menu}
                </p>
              );
            } else {
              return (
                <p
                  key={i}
                  onClick={() => {
                    setIsMenu(menu);
                    setShowModal(true);
                  }}
                  className="click font-semibold"
                >
                  {menu}
                </p>
              );
            }
          })}
        </div>

        <div className="flex items-center space-x-1">
          <div
            onClick={() => setSearchInput(true)}
            className="bg-gray-100 rounded-full items-center "
          >
            <IconButton>
              <SearchIcon />
            </IconButton>
            <input
              type="text"
              onChange={(e) => setSearchInput(e.target.value)}
              className="hidden lg:inline-block mr-4 bg-transparent outline-none"
              placeholder="検索"
            />
          </div>

          <IconButton className="hidden sm:inline-flex">
            <FavoriteBorderIcon />
          </IconButton>
          <IconButton className="hidden sm:inline-flex items-center">
            <ShoppingCartIcon />
          </IconButton>
          <div className="sm:hidden">
            <SidebarDrawer />
          </div>
        </div>
      </div>

      {showModal && <MenuModal setShowModal={setShowModal} />}
      {searchInput && <SearchModal setSearchInput={setSearchInput} />}
    </div>
  );
}

export default HeaderMiddle;
