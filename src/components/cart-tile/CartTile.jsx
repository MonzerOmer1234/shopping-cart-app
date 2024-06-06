import { useSelector } from "react-redux";
import { removeFromCart } from "../../store/slices/cart-slice";
import { useDispatch } from "react-redux";

export default function CartTile({ cartItem }) {
    const dispatch = useDispatch();

    function handleRemoveFromCart(){
        dispatch(removeFromCart(cartItem?.id))
    }

  return (
    <>
      <div className="  md:flex-row flex-col flex  w-full justify-between items-center p-5 bg-red-500 mt-2 mb-2 rounded-xl">
        <div className="p-3 flex  items-center">
          <img
            src={cartItem?.image}
            alt={cartItem?.title}
            className="h-28 rounded-lg"
          />
          <div className="ml-10 self-center">
      
            <p className="text-white font-extrabold ">{cartItem?.price}</p>
          </div>
        </div>
        <div>
          <button
            onClick={handleRemoveFromCart}
            className="bg-red-950 text-white border-2 rounded-lg font-bold p-4 mx-auto"
          >
            Remove From cart
          </button>
        </div>
      </div>
    </>
  );
}
