import { IoIosSearch } from "react-icons/io";
import { useProducts } from "../context/ProductContext";
import { useEffect, useRef } from "react";
import { setQueryObject } from "../helpers/helper";
function SearchBox({ queries: { query, setQuery } }) {
  const [
    products,
    dispatch,
   ] = useProducts();
   const {data}=products
  const searchInput = useRef(null);

  useEffect(() => {
    searchInput.current.value = query.search || "";
  }, [query]);
  return (
    <div className="my-10 flex h-9 ">
      <input
        type="text"
        ref={searchInput}
        className="border  border-orange-600 py-0.5 px-2 rounded-sm outline-0 bg-white w-60"
        placeholder="search..."
      />
      <button
        type="button"
        onClick={() => {
          setQuery((query) =>
            setQueryObject(query, {
              search: searchInput.current.value.toLowerCase().trimStart(),
            })
          );
        }}
        className="bg-orange-600 text-white ml-2 px-1.5 cursor-pointer text-xl rounded-sm hover:bg-orange-500 transition duration-150"
      >
        <IoIosSearch />
      </button>
    </div>
  );
}

export default SearchBox;
