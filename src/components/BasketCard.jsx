import { shorterName } from "../helpers/ShorterName";
import { MdDeleteOutline } from "react-icons/md";
import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function BasketCard({ product }) {
  const [cart, dispatch] = useCart();

  return (
    <li
      className="flex flex-wrap gap-5  md:items-center items-end justify-between  mb-5 border border-orange-500 border-dashed px-5 py-5 rounded-2xl"
      key={product.id}
    >
      <div className="flex flex-col md:flex-row justify-baseline md:items-center gap-5 lg:gap-8 flex-wrap">
        <Link to={`/products/${product.id}`}>
          <img className="size-15 cursor-pointer" src={product.image} alt={product.title} />
        </Link>
        <p className="lg:w-70 text-orange-500 font-bold">
          {shorterName(product.title)}
        </p>
        <p>{product.price * product.count} $</p>
      </div>
      <div className="flex items-center content-center text-center h-6.5">
        <div className="flex">
          {product.count === 1 ? (
            <span className="rounded-sm">
              <MdDeleteOutline
                onClick={() => {
                  dispatch({ type: "DELETE_ITEM", payload: product });
                }}
                className="bg-orange-600 h-7 text-white rounded-sm px-0.5 text-xl w-6.5 cursor-pointer hover:bg-orange-500"
              />
            </span>
          ) : (
            <span
              onClick={() => {
                dispatch({ type: "DECREASE_ITEM", payload: product });
              }}
              className="bg-orange-600 w-6.5 px-1 text-white text-xl rounded-sm cursor-pointer hover:bg-orange-500 "
            >
              -
            </span>
          )}
        </div>
        <span className="mx-3">{product.count}</span>
        <span
          onClick={() => {
            dispatch({ type: "INCREASE_ITEM", payload: product });
          }}
          className="bg-orange-600 w-6.5 px-1 text-white text-xl rounded-sm cursor-pointer hover:bg-orange-500 transition "
        >
          +
        </span>
      </div>
    </li>
  );
}

export default BasketCard;
