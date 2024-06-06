import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import CartTile from "../components/cart-tile/CartTile";

export default function Cart() {
  const [totalCart, setTotalCart] = useState(0);

  const { cart } = useSelector((state) => state);

  useEffect(() => {
    setTotalCart(cart.reduce((acc, curr) => acc + curr.price, 0));
  }, [cart]);
  console.log(cart, totalCart);

  return (
    <div className=" flex-col md:flex-row flex justify-evenly items-center">
      {cart && cart.length > 0 ? (
        <>
        <div className="text-center">
          <div className="flex flex-col items-center justify-center p-3">
            {
              cart.map((item)=> <CartTile cartItem={item}/>)
            }
          </div>
        </div>
        <div>
          <div className="sm:flex flex-col items-center p-5 justify-center space-y-5 mt-14">
             <h1 className=" font-bold text-lg text-red-800 text-center">Your Cart Summary</h1>
             <p className="text-center">
              <span className="text-gray-800 font-bold">Total items</span>
              <span> : {cart.length}</span>
             </p>
             <p className="text-center">
              <span className="text-gray-800 font-bold">Total Amount</span>
              <span> : {totalCart}</span>
             </p>
          </div>
        </div>
        
        </>
      
      ) : (
        <div className="min-h-[80vh] flex flex-col items-center justify-center">
          <h1 className="text-gray-800 font-bold text-xl mb-2">
            Your cart is empty
          </h1>
          <Link to={"/"}>
            <button className="bg-red-950 text-white border-2 rounded-lg font-bold p-4 mx-auto ">
              SHOP NOW
            </button>
          </Link>
        </div>
      )}
    </div>
  );
}
