import { useEffect, useState } from "react";
import { shorterName } from "../helpers/helper";
import { TbListDetails } from "react-icons/tb";
import { TbShoppingCartCheck } from "react-icons/tb";
import { Link } from "react-router-dom";
import { MdDeleteOutline } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { addItem, decrease, increase, removeItem } from "../features/cart/cartSlice";

function Card({ data }) {
  
  const { image, title, price, id } = data;
  const [isShow, setIsShow] = useState(true);
  const [counter, setCounter] = useState();
  const dispatch=useDispatch()
  const cart=useSelector(store=>store.cart)

  useEffect(() => {
    const index = cart.data.findIndex((item) => item.id === id);
    if (index !== -1) {
      setCounter(cart.data[index].count);
      setIsShow(false);
    } else setIsShow(true);
  }, [cart, id]);

  const addToCart = () => {
    setIsShow(false);
    dispatch(addItem({ ...data, count: 1 }))
  };
  const increaseHandler = () => {
    dispatch(increase(data))
  };
  const decreaseHandler = () => {
    dispatch(decrease(data))

  };
  const deleteHandler = () => {
    setIsShow(true);
    dispatch(removeItem(data))
  };

  return (
    <>
      <div>
        <img src={image} className="h-65 p-4 w-full" alt={title} />
      </div>
      <div>
        <p className="text-orange-600 font-semibold h-15 mt-2">
          {shorterName(title)}
        </p>
        <p className="text-neutral-800 font-light">{price} $</p>

        <div className="flex justify-between mt-7 mb-3 items-center">
          <div className=" ">
            <Link to={`/products/${id}`}>
              <TbListDetails className="text-orange-600  cursor-pointer  size-5.5 hover:text-orange-500 transition duration-200" />
            </Link>
          </div>
          <div>
            {isShow ? (
              <div>
                <TbShoppingCartCheck
                  onClick={addToCart}
                  className="bg-orange-600 cursor-pointer text-white rounded-sm p-0.5 size-6.5  hover:bg-orange-500 transition duration-200"
                />
              </div>
            ) : (
              <div className="flex items-center content-center text-center h-6.5">
                <div className="flex">
                  {counter === 1 ? (
                    <span className="rounded-sm">
                      <MdDeleteOutline
                        onClick={deleteHandler}
                        className="bg-orange-600 h-7 text-white rounded-sm px-0.5 text-xl w-6.5 cursor-pointer hover:bg-orange-500"
                      />
                    </span>
                  ) : (
                    <span
                      onClick={decreaseHandler}
                      className="bg-orange-600 w-6.5 px-1 text-white text-xl rounded-sm cursor-pointer hover:bg-orange-500 "
                    >
                      -
                    </span>
                  )}
                </div>
                <span className="mx-3">{counter}</span>
                <span
                  onClick={increaseHandler}
                  className="bg-orange-600 w-6.5 px-1 text-white text-xl rounded-sm cursor-pointer hover:bg-orange-500 transition "
                >
                  +
                </span>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
}

export default Card;
