import { createContext, useContext, useEffect, useReducer } from "react";
import { addLocalStorage, sumProducts } from "../helpers/helper";

export const CartContext = createContext();

const initialState = {
  data: [],
  itemsCounter: 0,
  total: 0,
  checkout: false,
};
const reducer = (state, action) => {
  switch (action.type) {
    case "ADD_ITEM":
      if (!state.data.find((item) => item.id === action.payload.id))
        state.data.push(action.payload);
      return { ...state, checkout: false, ...sumProducts(state.data) };
    case "INCREASE_ITEM":
      const increaseIndex = state.data.findIndex(
        (item) => item.id === action.payload.id
      );
      state.data[increaseIndex].count++;
      return { ...state, ...sumProducts(state.data) };
    case "DECREASE_ITEM":
      const decreaseIndex = state.data.findIndex(
        (item) => item.id === action.payload.id
      );
      state.data[decreaseIndex].count--;
      return { ...state, ...sumProducts(state.data) };
    case "DELETE_ITEM":
      const newData = state.data.filter(
        (item) => item.id !== action.payload.id
      );
      return  { ...state, data: [...newData], ...sumProducts(newData) };
    case "CHECKOUT":
      return {
        data: [],
        itemsCounter: 0,
        total: 0,
        checkout: true,
      };
    default:
      throw new Error("Invalid action");
  }
};

function CartProvider({ children }) {
  // const [cart, dispatch] = useReducer(reducer, initialState);
  const [cart, dispatch] = useReducer(
  reducer,
  initialState,
  () => {
    const savedCart = localStorage.getItem('cart');
    return savedCart ? JSON.parse(savedCart) : initialState;
  }
);


  useEffect(() => {
    addLocalStorage(cart);
  }, [cart]);

  return (
    <CartContext.Provider value={{ cart, dispatch }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;

export const useCart = () => {
  const { cart, dispatch } = useContext(CartContext);
  return [cart, dispatch];
};
