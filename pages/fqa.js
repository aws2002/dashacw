import Layout from "../components/Layouts/Layout";
import { AiFillStar } from "react-icons/ai";
import FAQs from "../components/SectionsPages/FAQs";
export default function Fqa() {
  return (
    <Layout bg="bg2">
      <section className="fqa px-4 my-20">
        <div className=" container">
          <div className=" title text-center">
            <h1 className=" font-extrabold text-6xl">FQA</h1>
          </div>
          <div className=" grid grid-cols-4 gap-10 lg:px-20 mt-10 text-center">
            <div className=" bg-main lg:col-span-1 col-span-2 p-4">
              <AiFillStar className=" text-9xl mx-auto" />
              <h4 className=" font-bold text-gray-400 text-2xl">
                PRESS & MEDIA
              </h4>
            </div>
            
          </div>
          <FAQs/>
          <div className=" text-center my-20">
            <p className=" mb-10 text-2xl font-semibold">STILL HAVE QUESTIONS? CONTACT US</p>
            <a href="" className="btn">Contact US</a>
          </div>
        </div>
      </section>
    </Layout>
  );
}
