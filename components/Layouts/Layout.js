// import Footer from "../Footer/Footer";
// import Navbar from "../Navbar/Navbar";
// import Sponser from "../SectionsPages/Sponser";
// import ScrollToTop from "../Tools/ScrollToTop";
// import { motion, useScroll, useSpring } from "framer-motion";

// export default function Layout({ children, bg = "bg1" }) {
//   const { scrollYProgress } = useScroll();
//   const scaleX = useSpring(scrollYProgress, {
//     stiffness: 100,
//     damping: 30,
//     restDelta: 0.001,
//   });
//   return (
//     <div className={`content text-white ${bg}`}>
//       <Navbar />
//       <motion.div
//         className=" fixed lg:top-[87px] top-[132px] left-0 right-0 bg-main z-50 h-[10px]"
//         style={{ scaleX }}
//       />

//       {children}
//       <ScrollToTop />
//       <Sponser />
//       <Footer />
//     </div>
//   );
// }

import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import ScrollToTop from "../Tools/ScrollToTop";
import { useState, useEffect } from "react";
import { motion, useScroll, useSpring } from "framer-motion";
import Sponser from "../SectionsPages/Sponser";
export default function Layout({ children, bg = "bg1" }) {
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
            className=" fixed lg:top-[87px] top-[132px] left-0 right-0 bg-main z-50 h-[10px]"
            style={{ scaleX }}
          />

          {children}
          <ScrollToTop />
          <Sponser />
          <Footer />
        </>
      );
      setComponents(components);
    }, 3000);
  });
  return (
    <div className={`content text-white ${bg}`}>
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
