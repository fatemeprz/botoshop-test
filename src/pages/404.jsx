import { RiEmotionUnhappyLine } from "react-icons/ri";
import { Link } from "react-router-dom";
function NotFound() {
  return (
    <div  className="flex flex-wrap flex-col items-center justify-center mt-15" >
      <RiEmotionUnhappyLine className="text-gray-600 text-[150px]"/>
      <p className="text-gray-600 font-bold mt-5 text-2xl">Not Found !</p>
      <p className="mt-5 text-gray-600 text-lg">This page does not exists.</p>
          <Link
          to="/products"
          className="mt-10 bg-orange-500 w-40  text-white  py-2.5 rounded-lg text-center  hover:bg-orange-300 transform duration-200"
        >
          <p>Back to Shop</p>
        </Link>
    </div>
  )
}

export default NotFound