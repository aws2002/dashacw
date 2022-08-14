import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Sponser from "../SectionsPages/Sponser";
import ScrollToTop from "../Tools/ScrollToTop";
import { motion, useScroll, useSpring } from "framer-motion";

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
      <motion.div
        className=" fixed lg:top-[100px] top-[132px] left-0 right-0 bg-main z-50 h-[10px]"
        style={{ scaleX }}
      />

      {children}
      <ScrollToTop />
      <Sponser />
      <Footer />
    </div>
  );
}
