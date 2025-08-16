import { useCart } from "../context/CartContext";
import { TbChecklist } from "react-icons/tb";
import { SiSharp } from "react-icons/si";
import { BiBadgeCheck } from "react-icons/bi";
import { FaArrowLeft } from "react-icons/fa6";
import { PiShoppingCartThin } from "react-icons/pi";
import { Link } from "react-router-dom";
import BasketCard from "../components/BasketCard";

function CheckoutPage() {
  const [cart, dispatch] = useCart();
  const { data, itemsCounter, total, checkout } = cart;

  return (
    <>
    {(total === 0 ||
        itemsCounter === 0 ||
        data.length === 0 ) ? (<div className="flex flex-wrap flex-col items-center justify-center mt-15">
          <PiShoppingCartThin className="text-orange-500 text-[150px]" />
          <p className="mt-5 font-bold text-3xl text-gray-600">Your cart is Currently Empty!</p>
          <p className="text-gray-500 mt-5 leading-7 ">Before proceed to checkout you must add some products to your shopping cart.</p>
          <p className="text-gray-500 leading-7">You will find a lot of intersting products on our "products" page</p>
          <Link
          to="/products"
          className="flex items-center justify-center my-5 bg-orange-500 w-40  text-white  py-2.5 rounded-lg   hover:bg-orange-300 transform duration-200"
        >
          <span>
            <FaArrowLeft className="mr-2" />
          </span>
          <p>Back to Shop</p>
        </Link>
        </div>) : (
    <div className="md:flex-row mt-15 flex flex-col-reverse justify-start md:justify-between">
      <div className="md:border border-orange-500 h-fit  md:p-6 md:w-80 md:mr-15 mt-5 md:mt-0 rounded-2xl">
        <ul className="flex flex-col items-start gap-2">
          <li className="flex items-center">
            <TbChecklist className="text-orange-500 text-lg mr-2 -ml-0.5" />
            <span className="text-orange-500">Total:</span>
            <span className="text-gray-600 ml-4">{total} $</span>
          </li>
          <li className="flex items-center">
            <SiSharp className="text-orange-500 text-xs mr-3" />
            <span className="text-orange-500">Quantity:</span>
            <span className="text-gray-600 ml-4">{itemsCounter}</span>
          </li>
          <li className="flex items-center">
            <BiBadgeCheck className="text-orange-500 text-lg mr-3" />
            <span className="text-orange-500">status:</span>
            {!checkout && (
              <span className="text-gray-600 ml-4">pending...</span>
            )}
          </li>
        </ul>
        <button
          className="bg-green-400 text-white w-full p-1.5 rounded-lg mt-10 cursor-pointer hover:bg-green-300 transform duration-100"
          type="button"
          onClick={() => {
            dispatch({ type: "CHECKOUT" });
          }}
        >
          Checkout
        </button>
        <Link
          to="/products"
          className="flex items-center justify-center my-5 bg-orange-500 w-full text-white  py-1.5 rounded-lg   hover:bg-orange-300 transform duration-200"
        >
          <span>
            <FaArrowLeft className="mr-2" />
          </span>
          <p>Back to Shop</p>
        </Link>
      </div>
      <ul className="w-full">
        {data.map((product) => (
          <BasketCard key={product.id} product={product}/>
        ))}
      </ul>
    </div>
    )}
    </>
  );
}

export default CheckoutPage;
