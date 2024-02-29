import PropTypes from "prop-types"; // Import PropTypes
import { FaArrowRight } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../redux/bazaarSlice";

const ProductCard = ({ product }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const _id = product.title;
  const idString = _id.toString().toLowerCase().split(" ").join("");

  const handleClick = () => {
    navigate(`/products/${idString}`, {
      state: {
        item: product,
      },
    });
  };

  return (
    <div className="group">
      <div className="h-[auto] relative bg-gray-200 rounded-xl">
        <div onClick={handleClick} className="h-[250px] w-full overflow-hidden">
          <img
            src={product.image}
            alt=""
            className="rounded-xl object-cover w-full h-full group-hover:scale-110 duration-500"
          />
        </div>
        <div className="px-2 gap-1/2 flex items-center w-full justify-between">
          <h3 className="text-sm font-semibold py-2">
            {product.title.substring(0, 15)}...
          </h3>
          <div className="relative w-[100px] flex items-center overflow-hidden text-sm  justify-end">
            <div className="flex gap-1 group-hover:translate-x-32 transition-transform duration-500">
              <p className="line-through text-gray-500">{product.oldPrice}</p>
              <p className="font-semibold ">${product.price}</p>
            </div>
            <p
              onClick={() =>
                dispatch(
                  addToCart({
                    _id: product._id,
                    title: product.title,
                    image: product.image,
                    price: product.price,
                    quantity: 1,
                    description: product.description,
                  })
                )
              }
              className="absolute z-20 w-[100px] top-0 right-0 font-semibold text-sm text-gray-500 hover:text-red-950 transform -translate-x-32  group-hover:translate-x-0 transition-transform duration-500 cursor-pointer"
            >
              Add to Cart{" "}
              <span>
                <FaArrowRight size={20} />
              </span>
            </p>
          </div>
        </div>
        <div className="px-2 pb-2">{product.category}</div>
        <div className="absolute top-5 right-0  z-20 bg-black px-2 rounded-l-xl text-white">
          {product.isNew && <div>New</div>}
        </div>
      </div>
    </div>
  );
};

// Define propTypes for ProductCard
ProductCard.propTypes = {
  product: PropTypes.shape({
  _id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    oldPrice: PropTypes.number,
    description: PropTypes.string,
    category: PropTypes.string.isRequired,
    isNew: PropTypes.bool.isRequired,
  }).isRequired,
};

export default ProductCard;
