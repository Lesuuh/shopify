import { useSelector } from "react-redux";

const Cart = () => {
  const productData = useSelector((state) => state.bazaar.productData);

  return (
    <div>
      {productData.map((cartItem) => {
        return (
          <div key={cartItem._id}>
            <img src={cartItem.image} alt="" />
          </div>
        );
      })}
    </div>
  );
};

export default Cart;
