import { IoCloseOutline } from "react-icons/io5";
import { useNavigate, useOutletContext } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";

function PhotoModule() {
  const navigate = useNavigate();
  const { image, title, id, isShowModule, setIsShowModule } =
    useOutletContext();

  return (
    <AnimatePresence onExitComplete={() => navigate(`/products/${id}`)}>
      {isShowModule && (
        <motion.div
          className="h-screen w-screen bg-[#00000033]  backdrop-blur-xs fixed z-50 top-0 right-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <IoCloseOutline
            onClick={() => {
              setIsShowModule(false);
            }}
            className=" text-3xl absolute right-8 top-5 text-gray-700 cursor-pointer"
          />
          <div className="flex flex-col justify-center h-full items-center ">
            <motion.img
              initial={{ opacity: 0, scale: 0 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 1 }}
              transition={{ duration: 0.3 }}
              className="h-8/12 md:h-9/12 drop-shadow-[0_8px_15px_rgba(100,100,100,0.2)] drop-shadow-gray-700"
              src={image}
              alt={title}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

export default PhotoModule;
