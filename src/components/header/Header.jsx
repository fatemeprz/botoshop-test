import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useCart } from "../../context/CartContext";

function Header() {
  const [cart] = useCart();
  const { itemsCounter } = cart;
  return (
    <header className="flex justify-between items-center   py-3 rounded-b-2xl px-10">
      <img
        src="../../../src/assets/logo.png"
        className="w-32 rounded-4xl"
        alt="logo"
      />
      <div className="relative">
        <Link to="/checkout">
          <FiShoppingCart className=" text-orange-500 size-9.5 rounded-xl p-1.5 hover:scale-110 transition-transform duration-200 cursor-pointer" />
        </Link>
        <p className=" absolute -top-1 -right-2.5 bg-amber-400 text-white size-5 text-sm text-center rounded-full font-mono">
          {itemsCounter}
        </p>
      </div>
    </header>
  );
}

export default Header;
