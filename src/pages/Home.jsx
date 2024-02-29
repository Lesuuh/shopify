import { useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Products from "../components/Products";

const Home = () => {
  const data = useLoaderData();
  return (
    <div>
      <Banner />
      <Products  products={data}/>
    </div>
  );
};

export default Home;
