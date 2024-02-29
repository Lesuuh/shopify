import { useEffect, useState } from "react";

const ProductsData = () => {
  const [productsData, setProductsData] = useState([]);
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
  return productsData;
};

export default ProductsData;
