const ProductCard = ({ product }) => {
  return (
    <div>
      <div className="py-5">
        <div className="h-[300px] bg-gray-200 rounded-xl">
          <div className="h-[250px] w-full">
            <img
              src={product.image}
              alt=""
              className="rounded-xl object-cover w-full h-full"
            />
          </div>
          <div className="">
            <div className="px-2 flex products-center justify-between">
              <h3 className="text-sm font-semibold py-2">
                {product.title.slice(0, 20)}...
              </h3>
              <p className="font-semibold ">${product.price}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
