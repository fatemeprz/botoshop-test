import { TbShoppingBagSearch } from "react-icons/tb";

function NotFoundProducts() {
  return (
    <div className="flex flex-col text-center items-center h-full justify-center">
      <TbShoppingBagSearch className="w-full text-9xl mt-12 text-gray-700" />
      <span className="mt-3 text-xl text-gray-700">No Product Found</span>
    </div>
  );
}

export default NotFoundProducts;
