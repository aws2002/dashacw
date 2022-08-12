import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Sponser from "../SectionsPages/Sponser";
import ScrollToTop from "../Tools/ScrollToTop";
// import MultilanguageBtn from "../Tools/MultilanguageBtn";

export default function Layout({ children,bg="bg1"}) {
  return (
    <div className={`content text-white ${bg}`}>
      <Navbar/>
      {/* <MultilanguageBtn/> */}
      {children}
      <ScrollToTop/>
      <Sponser/>
      <Footer/>
    </div>
  );
}


