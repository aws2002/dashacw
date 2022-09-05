import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ScrollToTop from "../Tools/ScrollToTop";
import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Sponser from "../SectionsPages/Sponser";
import dynamic from "next/dynamic";
import BGImage from "../Tools/BGImage";

export default function Layout({ children, bg = "/assets/Bg.png" }) {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });
  const [components, setComponents] = useState(null);
  useEffect(() => {
    setTimeout(() => {
      const components = (
        <>
          <Navbar />
          <motion.div
            className=" fixed lg:top-[100px] top-[125px] left-0 right-0 bg-main z-50 h-[10px]"
            style={{ scaleX }}
          />
          
          {children}
          <ScrollToTop />
          <Sponser />
          <Footer />
        </>
      );
      setComponents(components);
    }, 2);
  });
  return (
    <div className={`content text-white`}>
    <BGImage hrefBg={bg}/>
      {components && <>{components}</>}
      {!components && (
        <div className=" bg-black flex justify-center h-screen items-center">
          <motion.div
            animate={{ opacity: 1, scale: 1 }}
            initial={{ opacity: 0, scale: 0 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.5 }}
            layout
            className="loader"
          ></motion.div>
        </div>
      )}
    </div>
  );
}
