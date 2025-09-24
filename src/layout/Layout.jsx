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


export default Layout;
