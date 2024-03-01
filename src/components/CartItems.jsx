import { MdDelete } from "react-icons/md";
import { ToastContainer, toast } from "react-toastify";
import {
  increment,
  decrement,
  deleteItem,
  resetCart,
} from "../redux/bazaarSlice";
import { useDispatch } from "react-redux";
const CartItems = ({ productData }) => {
  const dispatch = useDispatch();
  return (
    <div className="flex gap-5 flex-col">
      {" "}
      {productData.map((cartItem) => {
        return (
          <div
            key={cartItem._id}
            className="flex gap-5 w-full items-center border-2 py-2 px-5    rounded-xl"
          >
            <div
              onClick={() => {
                dispatch(deleteItem(cartItem._id));
                toast.error(`${cartItem.title} removed from cart`);
              }}
              className="bg-transparent group hover:bg-gray-300 transition-transform duration-300 px-2 py-2 rounded-full"
            >
              <MdDelete
                size={20}
                className="cursor-pointer transition-transform group-hover:rotate-45 duration-700"
              />
            </div>
            <img
              src={cartItem.image}
              alt=""
              className="w-32 h-32 object-cover rounded-xl"
            />
            <h3 className="w-52">{cartItem.title}</h3>
            <p className="w-10">${cartItem.price}</p>
            <div className="flex border-[1px]  rounded-xl px-4 py-2 gap-10">
              <p>Quantity</p>
              <div className="flex gap-3">
                <button
                  onClick={() =>
                    dispatch(
                      decrement({
                        _id: cartItem._id,
                        title: cartItem.title,
                        image: cartItem.image,
                        price: cartItem.price,
                        quantity: 1,
                        description: cartItem.description,
                      })
                    )
                  }
                  className="bg-gray-200 px-2 hover:bg-gray-300"
                >
                  -
                </button>
                {cartItem.quantity}
                <button
                  onClick={() =>
                    dispatch(
                      increment({
                        _id: cartItem._id,
                        title: cartItem.title,
                        image: cartItem.image,
                        price: cartItem.price,
                        quantity: 1,
                        description: cartItem.description,
                      })
                    )
                  }
                  className="bg-gray-200 px-2 hover:bg-gray-300"
                >
                  +
                </button>
              </div>
            </div>
            <h3 className="font-semibold w-10">
              ${cartItem.price * cartItem.quantity}
            </h3>
          </div>
        );
      })}
      <div>
        <button
          onClick={() => dispatch(resetCart())}
          className="rounded-xl bg-red-600 text-white px-4 py-2"
        >
          Clear Cart
        </button>
      </div>
      <ToastContainer
        position="top-left"
        pauseOnFocusLoss
        pauseOnHover
        hideProgressBar={false}
        autoClose={3000}
        closeOnClick
        theme="dark"
      />
    </div>
  );
};

export default CartItems;
