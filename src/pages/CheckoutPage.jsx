import BasketCard from "../components/BasketCard";
import {useSelector } from "react-redux";
import EmptyCart from "../components/EmptyCart";
import SideCheckout from "../components/SideCheckout";
import { useEffect } from "react";
import { addLocalStorage } from "../helpers/helper";

function CheckoutPage() {
 
  const cart=useSelector(store=>store.cart)

    useEffect(() => {
      addLocalStorage(cart);
    }, [cart]);
  
  return (
    <>
    {(cart.total === 0 ||
        cart.itemsCounter === 0 ||
        cart.data.length === 0 ) ? (<EmptyCart/>) : (
    <div className="md:flex-row mt-15 flex flex-col-reverse justify-start md:justify-between">
      <SideCheckout/>
      <ul className="w-full">
        {cart.data.map((product) => (
          <BasketCard key={product.id} product={product}/>
        ))}
      </ul>
    </div>
    )}
    </>
  );
}

export default CheckoutPage;
