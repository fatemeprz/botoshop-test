import { Link } from "react-router-dom";
import { useDispatch,useSelector } from "react-redux";
import { TbChecklist } from "react-icons/tb";
import { SiSharp } from "react-icons/si";
import { BiBadgeCheck } from "react-icons/bi";
import { FaArrowLeft } from "react-icons/fa6";
import { checkingout } from "../features/cart/cartSlice";

function SideCheckout() {

  const cart = useSelector((store) => store.cart);
  const dispatch = useDispatch();
  const {  itemsCounter, total, checkout } = cart;

  return (
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
          {!checkout && <span className="text-gray-600 ml-4">pending...</span>}
        </li>
      </ul>
      <button
        className="bg-green-400 text-white w-full p-1.5 rounded-lg mt-10 cursor-pointer hover:bg-green-300 transform duration-100"
        type="button"
        onClick={() => {
          dispatch(checkingout());
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
  );
}

export default SideCheckout;
