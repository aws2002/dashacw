import Layout from "../components/Layouts/Layout";
import { AiFillStar } from "react-icons/ai";
import FAQs from "../components/SectionsPages/FAQs";
import Link from "next/link";
export default function Faq() {
  return (
    <Layout bg="bg2">
      <section className="fqa px-4 my-20">
        <div className=" container lg:px-24">
          <div className=" title text-center">
            <h1 className=" font-extrabold text-6xl">FQA</h1>
          </div>
          <div className=" grid grid-cols-4 gap-8 mt-10 text-center">
            {[1, 2, 3, 4,5,6,7,8].map((id) => {
              return (
                <div className=" bg-[#411061] lg:col-span-1 col-span-2 py-10 transition-all opacity-70 hover:opacity-100" key={id}>
                  <AiFillStar className=" text-8xl mx-auto" />
                  <h4 className=" text-gray-400 text-2xl font-universalSerif">
                  Example
                  </h4>
                </div>
              );
            })}
          </div>
          <FAQs />
          <div className=" text-center my-20 font-universalSerif">
            <p className=" mb-10 text-2xl font-universalSerif">
              STILL HAVE QUESTIONS? CONTACT US
            </p>
            <Link href="/contact">
              <a className="btn text-2xl">Contact US</a>
            </Link>
          </div>
        </div>
      </section>
    </Layout>
  );
}
