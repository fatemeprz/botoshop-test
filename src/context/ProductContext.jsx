import {
  createContext,
  useContext,
  useEffect,
  useReducer,
  useState,
} from "react";
import api from "../services/config";

export const ProductContext = createContext();

const initialState = {
  data: [],
  loading: true,
  error: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "ADD":
      return { ...state, data: action.payload, loading: false };

    default:
      throw new Error("Invalid action");
  }
};

function ProductProvider({ children }) {
  const [products, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    const getData = async () => {
      try {
        const data = await api.get("/products");
        dispatch({ type: "ADD", payload: data });
      } catch (error) {
        console.log(error);
      }
    };
    getData();
  }, []);
  return (
    <ProductContext.Provider value={{ products, dispatch }}>
      {children}
    </ProductContext.Provider>
  );
}

export default ProductProvider;

const useProducts = () => {
  const { products, dispatch } = useContext(ProductContext);
  return [products, dispatch];
};
const useProductDetails = (id) => {
  const {products} = useContext(ProductContext)
  const result = products.data.find((item) => item.id === id);
  return { ...result };
};
export { useProducts,useProductDetails };
