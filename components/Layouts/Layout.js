import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Sponser from "../SectionsPages/Sponser";
import ScrollToTop from "../Tools/ScrollToTop";
import { motion, useScroll, useSpring } from "framer-motion";

// import MultilanguageBtn from "../Tools/MultilanguageBtn";

export default function Layout({ children, bg = "bg1" }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  return (
    <div className={`content text-white ${bg}`}>
      <Navbar />
      <motion.div className="progress-bar" style={{ scaleX }} />
      {/* <MultilanguageBtn/> */}
      {children}
      <ScrollToTop />
      <Sponser />
      <Footer />
    </div>
  );
}
