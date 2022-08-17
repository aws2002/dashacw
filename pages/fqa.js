import Layout from "../components/Layouts/Layout";
import { AiFillStar } from "react-icons/ai";
import FAQs from "../components/SectionsPages/FAQs";
import Link from "next/link";
export default function Fqa() {
  return (
    <Layout bg="bg2">
      <section className="fqa px-4 my-20">
        <div className=" container">
          <div className=" title text-center">
            <h1 className=" font-extrabold text-6xl">FQA</h1>
          </div>
          <div className=" grid grid-cols-4 gap-8 lg:px-20 mt-10 text-center">
            {[1, 2, 3, 4,5,6,7,8].map((id) => {
              return (
                <div className=" bg-main lg:col-span-1 col-span-2 py-10" key={id}>
                  <AiFillStar className=" text-8xl mx-auto" />
                  <h4 className=" font-bold text-gray-400 text-2xl">
                    PRESS & MEDIA
                  </h4>
                </div>
              );
            })}
          </div>
          <FAQs />
          <div className=" text-center my-20">
            <p className=" mb-10 text-2xl font-semibold">
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
