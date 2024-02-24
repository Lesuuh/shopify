import { useState } from "react";
import {
  RxHamburgerMenu,
  IoClose,
  FaHome,
  FaElementor,
  FaBlog,
  FaShoppingCart,
  FaBookOpen,
  GrCart,
  FaShopware,
} from "../assets/index";

const Header = () => {
  const [menu, setMenu] = useState(false);

  const toggleMenu = () => {
    setMenu(!menu);
  };
  return (
    <div className="w-full px-5 h-20 bg-white border-b-[1px] border-bg-gray-800 font">
      <div className=" max-w-screen-lg mx-auto h-full flex items-center justify-between">
        <div className="text-black font-bold text-xl flex items-center cursor-pointer">
          <FaShopware className=" text-xl" />
          Shopify
        </div>
        {/* navlinks */}
        <div className="flex flex-row justify-between items-start md:block">
          <ul
            className={`flex flex-col items-start gap-10 sm:gap-7 sm:flex-row sm:relative absolute bg-gray-800 sm:bg-transparent w-[80%] h-full top-0 ${
              menu ? "left-[0]" : "left-[-100%]"
            } duration-700 px-10 py-10 sm:left-0`}
          >
            <li className="transform hover:translate-x-2  flex items-center justify-center gap-1 text-base text-white sm:text-black font-semibold hover:text-orange-800 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duraion-300">
              <FaHome className="sm:hidden" />
              Home
            </li>
            <li className="transform hover:translate-x-2  flex items-center justify-center gap-1 text-base text-white sm:text-black  font-semibold hover:text-orange-800 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              <FaBookOpen className="sm:hidden" />
              Pages
            </li>
            <li className="transform hover:translate-x-2  flex items-center justify-center gap-1 text-base text-white sm:text-black  font-semibold hover:text-orange-800 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              <FaShoppingCart className="sm:hidden" />
              Shop
            </li>
            <li className="transform hover:translate-x-2  flex items-center justify-center gap-1 text-base text-white sm:text-black  font-semibold hover:text-orange-800 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              <FaElementor className="sm:hidden" />
              Element
            </li>
            <li className="transform hover:translate-x-2  flex items-center justify-center gap-1 text-base text-white sm:text-black  font-semibold hover:text-orange-800 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300">
              <FaBlog className="sm:hidden" />
              Blog
            </li>

            <div
              onClick={toggleMenu}
              className={`sm:hidden absolute cursor-pointer right-0 px-5 text-white font-semibold text-2xl`}
            >
              <IoClose />
            </div>
            <div className="hidden relative sm:flex items-center">
              <GrCart className="text-xl" />
              <span className="absolute right-0 bottom-2/4 text-red-700 font-semibold text-sm">
                0
              </span>
            </div>
            <div>
              <img
                src=""
                className="w-8 h-8 rounded-full border-[1px]"
                alt=""
              />
            </div>
          </ul>
        </div>
        <div
          onClick={toggleMenu}
          className="sm:hidden cursor-pointer text-black text-2xl"
        >
          <RxHamburgerMenu />
        </div>
      </div>
    </div>
  );
};

export default Header;
