import { useContext, useEffect } from "react";
import { ProductContext, useProducts } from "../context/ProductContext";
import { TfiMenuAlt } from "react-icons/tfi";
import Card from "../components/Card";
import Loader from "../components/Loader";
import SearchBox from "../components/SearchBox";
import { useState } from "react";
import { useSearchParams } from "react-router-dom";
import { categoryList } from "../constants/list";
import {
  filterByCategory,
  filterBySearch,
  getInitialQuery,
  setQueryObject,
} from "../helpers/helper";
import { useCart } from "../context/CartContext";
import { TbShoppingBagSearch } from "react-icons/tb";

function ProductsPage() {
  const [products] = useProducts();
  const [displayed, setDisplayed] = useState([]);
  const [query, setQuery] = useState({});
  const [searchParams, setSearchParams] = useSearchParams();
  const [isExist, setIsExist] = useState(true);

  useEffect(() => {
    setDisplayed(products.data);
    setQuery(getInitialQuery(searchParams));
  }, [products.data]);

  useEffect(() => {
    let finalFilteredProducts = filterBySearch(query.search, products.data);
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
          {displayed.length ? (
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
          ) : isExist ? (
            <Loader />
          ) : (
            <div className="flex flex-col text-center items-center h-full justify-center">
              <TbShoppingBagSearch className="w-full text-9xl mt-12 text-gray-700" />
              <span className="mt-3 text-xl text-gray-700">
                No Product Found
              </span>
            </div>
          )}
        </main>
        <aside className="lg:border h-fit lg:bg-white  lg:border-orange-600 rounded-2xl lg:px-5 py-4">
          <div className="flex items-center text-left">
            <span>
              <TfiMenuAlt className="text-orange-600 size-4.5" />
            </span>
            <p className="text-orange-600 font-semibold ml-2">Categories</p>
          </div>
          <ul
            onClick={queryHandler}
            className=" *:cursor-pointer *:my-1.5 *:hover:text-orange-600 lg:*:py-2 *:py-1 lg:*:my-0.5 *:px-3 *:rounded-md lg:*:block *:inline-block  *:border lg:*:border-none *:m-3 *:border-orange-600  mt-6 "
          >
            {categoryList.map((item, index) => (
              <li
                key={index}
                className={`${
                  index === 0 && !query.category
                    ? "bg-orange-100"
                    : item.toLocaleLowerCase() === query.category &&
                      "bg-orange-100"
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
        </aside>
      </div>
    </>
  );
}

export default ProductsPage;
