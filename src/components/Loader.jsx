import { RotatingLines } from "react-loader-spinner";

function Loader() {
  return (
    <div className="flex justify-center content-center h-screen">
      <RotatingLines
        visible={true}
        height="100px"
        width="100px"
        strokeColor="#fe5d42"
        strokeWidth="3"
        animationDuration="0.75"
        ariaLabel="rotating-lines-loading"
        wrapperStyle={{}}
        wrapperClass=""
      />
    </div>
  );
}

export default Loader;
