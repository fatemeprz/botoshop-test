import Header from "../components/header/Header";
import Footer from "../components/footer/footer";


function Layout({ children }) {
  return (
    <>
    <Header />
     <div className=" px-10 ">
      {children}
      </div> 
    <Footer/>
    </>
  );
}
//bg-gradient-to-r from-white via-[#fef5ef] to-white

export default Layout;
