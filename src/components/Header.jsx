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
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const [menu, setMenu] = useState(false);

  const productData = useSelector((state) => state.bazaar.productData);
  const userInfo = useSelector((state) => state.bazaar.userInfo);

  const toggleMenu = () => {
    setMenu(!menu);
  };
  return (
    <div className="w-full px-5 h-[70px] bg-white flex items-center border-b-[1px] border-bg-gray-800 font">
      <div className="max-w-screen-xl mx-auto h-[70px] px-16 flex items-center justify-end w-full">
        <Link to="/" className="flex items-center mr-auto">
          <div className="font-semibold gap-1 flex items-center">
            <FaShopware className=" text-xl" />
            Shopify
          </div>
        </Link>
        {/* navlinks */}
        <div className="flex items-center h-[70px]  md:block">
          <ul
            className={`flex flex-col items-center gap-10 sm:gap-7 sm:flex-row sm:relative absolute bg-gray-800 sm:bg-transparent w-full h-full top-0 ${
              menu ? "left-[0]" : "left-[-100%]"
            } duration-700 py-10 sm:left-0`}
          >
            <Link to="/">
              <li className="transform hover:translate-x-2  flex items-center justify-center gap-1 text-base text-white sm:text-black font-semibold hover:text-orange-800 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duraion-300">
                <FaHome className="sm:hidden" />
                Home
              </li>
            </Link>
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
            <Link to="/cart">
              <div className="hidden relative sm:flex items-center">
                <GrCart className="text-xl" />
                <span className="absolute right-0 bottom-2/4 text-red-700 font-semibold text-sm">
                  {productData.length}
                </span>
              </div>
            </Link>
            <Link to="/login">
              <h3 className={`font-semibold ${userInfo ? "hidden" : "flex"}`}>
                Login
              </h3>
            </Link>
            <Link to="login">
              <div className="flex items-center gap-1 -ml-8">
                <img
                  src={userInfo ? userInfo.image : ""}
                  alt=""
                  className="w-8 h-8 rounded-full"
                />
                {userInfo && <p className="flex ">{userInfo.name}</p>}
              </div>
            </Link>

            {/* <div>
              <img
                src=""
                className="w-8 h-8 rounded-full border-[1px]"
                alt=""
              />
            </div> */}
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
