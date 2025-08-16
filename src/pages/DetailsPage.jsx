import { Outlet, useParams } from "react-router-dom";
import { getProductById } from "../helpers/helper";
import { useProductDetails, useProducts } from "../context/ProductContext";
import { Link } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa6";
import { IoMdPricetag } from "react-icons/io";
import { SiOpenproject } from "react-icons/si";
import { useState } from "react";
import { TbArrowsMaximize } from "react-icons/tb";
import Loader from "../components/Loader";

function DetailsPage() {
  const { id } = useParams();
  const data = useProductDetails(+id);
  const { image, price, category, title, description } = data;
  const [isHovered, setIsHovered] = useState(false);
  const [isShowModule, setIsShowModule] = useState(false);

  const scaleUpImage = () => {
    setIsShowModule(true);
  };
  if (!data.id) return <Loader />;
  return (
    <>
      <div className="mt-15">
        <div className="flex flex-col justify-center lg:flex-row md:justify-between ">
          <div
            className="size-45 md:size-75 xs:size-65 mx-auto aspect-square border border-orange-500 rounded-3xl relative"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <img
              className={`w-full h-full p-7  transition-all duration-300 ${
                isHovered && "contrast-50 scale-[0.8]"
              }`}
              src={image}
              alt={title}
            />

            {isHovered && (
              <Link to="image" className="absolute top-6 left-5 cursor-pointer">
                <TbArrowsMaximize
                  onClick={scaleUpImage}
                  className="text-[25px] p-0.5 text-gray-700 border border-orange-400 rounded-sm bg-[#FFFFFF]"
                />
              </Link>
            )}
          </div>

          <div className=" lg:ml-15 mt-5 lg:mt-0  border p-8 border-orange-400 border-dashed rounded-4xl">
            <h2 className="text-xl xs:text-3xl font-bold text-orange-500 mb-9">
              {title}
            </h2>
            <p className="w-2/3 leading-7  text-neutral-700">{description}</p>
            <div className="flex items-center mt-6 mb-1">
              <SiOpenproject className="text-orange-500 mr-2" />
              <p>{category}</p>
            </div>
            <div className="flex flex-col xs:flex-row xs:justify-between gap-8 xs:items-center">
              <div className="flex items-center">
                <IoMdPricetag className="text-orange-500 text-xl mr-1" />
                <p>{price} $</p>
              </div>
              <Link
                to="/products"
                className="flex items-center bg-orange-500 text-white px-2 py-1.5 rounded-lg text-[15px] w-34 hover:bg-orange-400 transform duration-200"
              >
                <span>
                  <FaArrowLeft className="mr-2" />
                </span>
                <p>Back to Shop</p>
              </Link>
            </div>
          </div>
        </div>
      </div>

      <Outlet context={{ image, title, id, isShowModule, setIsShowModule }} />
    </>
  );
}

export default DetailsPage;
