import ProductCard from "./ProductCard";

const Products = ({ products }) => {
  return (
    <div className="sm:px-16 lg:px-36 px-5 py-10 w-full h-auto">
      <div className="flex flex-col justify-center items-center">
        <h2 className="font-semibold text-xl py-2 bg-gray-950 flex items-center px-10 text-white justify-center text-center">
          Everyday Shopping
        </h2>
        <div className="w-14 h-1 bg-black mt-5"></div>
        <p className="px-5 lg:px-[250px] text-center pt-3 text-sm">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur
          repudiandae pariatur fugiat voluptatibus velit quibusdam fugit
          officiis assumenda?
        </p>
      </div>
      <div className="max-w-screen-xl mx-auto grid grid-cols-4 py-5 gap-5">
        {products.map((item) => {
          return <ProductCard key={item.id} product={item} />;
        })}
      </div>
    </div>
  );
};

export default Products;
