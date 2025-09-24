import { Link } from "react-router-dom"
import { FaArrowLeft } from "react-icons/fa6";
import { PiShoppingCartThin } from "react-icons/pi";

function EmptyCart() {
  return (
    <div className="flex flex-wrap flex-col items-center justify-center mt-15">
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
            </div>
  )
}

export default EmptyCart