import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Products from "../components/Products";

const Home = () => {
  const data = useLoaderData();
  console.log(data);
  return (
    <div>
      <Banner />
      <Products  products={data}/>
    </div>
  );
};

export default Home;
