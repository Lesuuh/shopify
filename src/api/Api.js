import { useEffect, useState } from "react";

const ProductsData = () => {
  // State to store the fetched data
  const [productsData, setProductsData] = useState([]);
  console.log(productsData)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(
          "https://fakestoreapiserver.reactbd.com/products"
        );
        const data = await response.json();
        // Update state with the fetched data
        setProductsData(data);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  // Return the fetched data
  return productsData;
};

export default ProductsData;
