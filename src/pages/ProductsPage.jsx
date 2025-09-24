import { useEffect } from "react";
import Card from "../components/Card";
import Loader from "../components/Loader";
import SearchBox from "../components/SearchBox";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import {
  filterByCategory,
  filterBySearch,
  getInitialQuery,
  setQueryObject,
} from "../helpers/helper";
import { useDispatch, useSelector } from "react-redux";
import { fetchProducts } from "../features/product/productsSlice";
import NotFoundProducts from "../components/NotFoundProducts";
import SideCategory from "../components/SideCategory";

function ProductsPage() {
  
  const [displayed, setDisplayed] = useState([]);
  const [query, setQuery] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  const [isExist, setIsExist] = useState(true);
  const dispatch = useDispatch();
  const { data, isLoading } = useSelector((store) => store.products);

  useEffect(() => {
    dispatch(fetchProducts());
  }, []);


  useEffect(() => {
    setDisplayed(data);
    setQuery(getInitialQuery(searchParams));
  }, [data]);

  useEffect(() => {
    let finalFilteredProducts = filterBySearch(query.search, data);
    finalFilteredProducts = filterByCategory(
      query.category,
      finalFilteredProducts
    );
    if (!!finalFilteredProducts.length || !!displayed.length) setIsExist(false);
    setDisplayed(finalFilteredProducts);
    setSearchParams(query);
  }, [query]);

  const queryHandler = (e) => {
    const { tagName } = e.target;

    if (tagName === "LI")
      setQuery((query) =>
        setQueryObject(query, { category: e.target.innerText.toLowerCase() })
      );
  };

  return (
    <>
      <SearchBox queries={{ query, setQuery }} />
      <div className=" flex flex-col-reverse justify-start lg:flex-row lg:justify-between">
        <main className="lg:w-3/4">
          {!!displayed.length && !isLoading ? (
            <ul className="grid grid-cols-[repeat(auto-fill,minmax(230px,0.7fr))] justify-center auto-rows-fr gap-8 gap-x-12 ">
              {displayed.map((product) => (
                <li
                  key={product.id}
                  className="border  border-orange-600 rounded-2xl bg-white px-5 py-3 "
                >
                  {<Card data={product} />}
                </li>
              ))}
            </ul>
          ) : isExist || isLoading ? (
            <Loader />
          ) : (
            <NotFoundProducts />
          )}
        </main>
        <SideCategory data={{ query, queryHandler }} />
      </div>
    </>
  );
}

export default ProductsPage;
