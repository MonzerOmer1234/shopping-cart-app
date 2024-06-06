import { useEffect, useState } from "react";
import { Circles } from "react-loader-spinner";
import ProductTile from "../components/product-tile/ProductTile";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function fetchListOfProducts() {
    setLoading(true);
    try {
      const response = await fetch("https://fakestoreapi.com/products");

      const data = await response.json();
      if (data && data.length > 0) {
        setProducts(data);
        setLoading(false);
      }
    } catch (error) {
      setError("Unable to Fecth products . Try Again Later");
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchListOfProducts();
  }, []);

  return (
    <div>
           {error && (
        <h1 className=" text-center mt-[100px] font-bold text-xl  text-red-900">
          {error}
        </h1>
      )}
      {loading ? (
        <div className="min-h-screen w-full flex justify-center items-center">
          <Circles
            height={"120"}
            width={"120"}
            color="rgb(127,29 , 29)"
            visible={true}
          />
        </div>
      ) : (
        <div className="min-h-[80vh] grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4  mx-auto p-3">
          {
            products && products.length > 0  ? 
            
            products.map(product => <ProductTile key={product.id} product={product}/>)
            :null
          }
        </div>
      )}
   
    </div>
  );
}
