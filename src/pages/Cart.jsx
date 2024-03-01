import { useSelector } from "react-redux";
import CartItems from "../components/CartItems";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

const Cart = () => {
  const productData = useSelector((state) => state.bazaar.productData);
  const [totalAmt, setTotalAmt] = useState(0);

  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item.price * item.quantity;
      return price;
    });
    setTotalAmt(price.toFixed(2));
  }, [productData]);

  return (
    <div>
      {productData.length > 0 ? ( // Check if productData has items
        <div className="px-5 sm:px-16 py-10 flex flex-col sm:flex-row w-full gap-10 items-start">
          <div className="max-w-screen-xl">
            <CartItems productData={productData} />
          </div>
          {/* Cart Summary */}
          <div className="w-1/3 bg-[#fafafa] p-5 rounded-xl flex flex-col gap-5 h-auto">
            <h3 className="text-xl font-semibold">Cart Summary</h3>
            <div>
              <h3 className="py-2">
                Sub-total: <span className="font-bold">$ {totalAmt}</span>
              </h3>
              <p>
                Shipping:{" "}
                <span>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Possimus doloremque in suscipit!
                </span>
              </p>
            </div>
            <hr className="w-full border-1 h-[2px] bg-gray-600"></hr>
            <div className="flex justify-between items-center">
              <h3>Total:</h3>
              <h2 className="font-semibold">$ {totalAmt} </h2>
            </div>
            <button className="bg-gray-950 text-white py-2 rounded-xl">
              Proceed to Checkout
            </button>
          </div>
        </div>
      ) : (
        // If productData is empty
        <div className="flex justify-center items-center py-10 h-[50vh]">
          <p className="text-center">
            Your Basket dey Empty! <br />{" "}
            <Link to="/">
              <h3 className="font-semibold text-gray-900 text-2xl">
                Go dey shop
              </h3>
            </Link>
          </p>
        </div>
      )}
    </div>
  );
};

export default Cart;
