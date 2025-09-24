import { categoryList } from "../constants/list"
import { TfiMenuAlt } from "react-icons/tfi";

function SideCategory({data:{query,queryHandler}}) {
  return (
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
  )
}

export default SideCategory