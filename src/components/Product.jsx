import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FaStar, FaStarHalfAlt } from "react-icons/fa";

const Product = () => {
  const [details, setDetails] = useState({});
  const Location = useLocation();

  useEffect(() => {
    setDetails(Location.state.item);
  }, []);

  //   considering the ratings
  const starFunction = () => {
    const rating = details.rating;
    const fullStar = Math.floor(rating);
    const halfStar = rating - fullStar >= 0.25 && rating - fullStar < 0.75;

    let star = [];
    for (let i = 0; i <= fullStar; i++) {
      star.push(<FaStar key={i} />);
    }

    if (halfStar) {
      star.push(<FaStarHalfAlt key={star.length} />);
    }

    return star;
  };

  return (
    <div className="px-5 py-10 sm:px-36 flex justify-between  w-full gap-10">
      <div className="w-[60%] h-[400px] relative">
        <img
          src={details.image}
          alt=""
          className="w-full h-full object-cover rounded-xl"
        />
        <div>
          {details.isNew && (
            <span className="absolute top-5 right-0 bg-gray-950 px-2 py-1 rounded-l-xl text-white">
              Sale
            </span>
          )}
        </div>
      </div>
      <div className="flex flex-col  gap-5">
        <h1 className="text-4xl font-bold">{details.title}</h1>
        <div className="flex gap-2">
          <p className="line-through text-gray-500 text-xl">
            {details.oldPrice}
          </p>
          <p className="font-semibold text-2xl">${details.price}</p>
        </div>
        <div className="flex gap-2 items-center">
          <p className="flex">{starFunction()}</p>
          <p className="text-xs">(1 customer review)</p>
        </div>
        <div>
          <p className="text-gray-700">{details.description}</p>
        </div>
        <div className="flex gap-5">
          <div className="flex border-[1px] rounded-xl px-4 py-2 gap-10">
            <p className="text-gray-500 text-sm">Quantity</p>
            <div className="flex gap-2">
              <button className="bg-gray-200 px-2 hover:bg-gray-300">-</button>
              {0}
              <button className="bg-gray-200 px-2 hover:bg-gray-300">+</button>
            </div>
          </div>
          <button className="bg-gray-900 px-4 py-2 text-white font-semibold rounded-xl hover:bg-gray-950">
            Add to Cart
          </button>
        </div>
        <div>
          <h3 className="text-gray-500">Category: {details.category}</h3>
        </div>
      </div>
    </div>
  );
};

export default Product;
