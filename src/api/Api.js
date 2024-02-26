import { useEffect, useState } from "react";

const ProductsData = () => {
  const [ProductsData, setProductsData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapiserver.reactbd.com/products"
        );
        const data = await response.json();
        setProductsData(data);
      } catch (error) {
        console.error("Error fetching Data:", error);
      }
    };
    fetchData();
  }, []);
  return ProductsData;
};

export default ProductsData;
