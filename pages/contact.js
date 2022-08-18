import Layout from "../components/Layouts/Layout";
import { AiFillStar } from "react-icons/ai";
export default function Contact() {
  return (
    <Layout bg="bg2">
      <section className="contact px-4 my-20">
        <div className=" container lg:px-20">
          <div className=" title text-center">
            <h1 className="lg:text-6xl text-3xl font-universalSerif">Contact us</h1>
            <p className="italic lg:text-2xl mt-4 font-medium opacity-80 mb-20">
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit Sed Do
              Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut
              Enim Ad Minim Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Asperiores, quisquam quam! Ipsa, error velit! Laboriosam,
              sapiente necessitatibus porro adipisci tenetur asperiores, quo
              culpa similique, iste odit facere? Amet, aut delectus.
            </p>
          </div>
          <div className=" grid grid-cols-4 gap-8 mt-10 text-center">
            <div className=" col-span-full text-center mb-10">
              <h2 className=" uppercase lg:text-5xl text-2xl font-universalSerif">
                how can we help you?
              </h2>
            </div>

            {[1, 2, 3, 4, 5, 6, 7, 8].map((id) => {
              return (
                <div
                  className=" bg-[#411061] lg:col-span-1 col-span-2 py-10 transition-all opacity-70 hover:opacity-100"
                  key={id}
                >
                  <AiFillStar className=" text-8xl mx-auto" />
                  <h4 className="  text-gray-400 text-2xl font-universalSerif">Example</h4>
                </div>
              );
            })}
          </div>

          <form className=" grid grid-cols-2 gap-x-20 gap-y-2 mt-10">
            <div className=" lg:col-span-1 col-span-full">
              <div>
                <label
                  htmlFor="email-address"
                  className="block mt-5 mb-1 text-xl font-universalSerif font-universalSerif"
                >
                  FIRST NAME <span className=" text-red-600 text-2xl">*</span>
                </label>

                <div className="relative">
                  {/* {icon} */}
                  <input className="font-medium border bg-transparent w-full px-4 py-3 focus:ring-2 focus:outline-none focus:border-indigo-500 focus:ring-indigo-500" />
                </div>
              </div>
            </div>
            <div className=" lg:col-span-1 col-span-full">
              <div>
                <label
                  htmlFor="email-address"
                  className="block mt-5 mb-1 text-xl font-universalSerif"
                >
                  LAST NAME <span className=" text-red-600 text-2xl">*</span>
                </label>

                <div className="relative">
                  {/* {icon} */}
                  <input className="font-medium border bg-transparent w-full px-4 py-3 focus:ring-2 focus:outline-none focus:border-indigo-500 focus:ring-indigo-500" />
                </div>
              </div>
            </div>
            <div className=" lg:col-span-1 col-span-full">
              <div>
                <label
                  htmlFor="email-address"
                  className="block mt-5 mb-1 text-xl font-universalSerif"
                >
                  EMAIL ADDRESS{" "}
                  <span className=" text-red-600 text-2xl">*</span>
                </label>

                <div className="relative">
                  {/* {icon} */}
                  <input className="font-medium border bg-transparent w-full px-4 py-3 focus:ring-2 focus:outline-none focus:border-indigo-500 focus:ring-indigo-500" />
                </div>
              </div>
            </div>
            <div className=" lg:col-span-1 col-span-full">
              <div>
                <label
                  htmlFor="email-address"
                  className="block mt-5 mb-1 text-xl font-universalSerif"
                >
                  PHONE NUMBER <span className=" text-red-600 text-2xl">*</span>
                </label>

                <div className="relative">
                  {/* {icon} */}
                  <input className="font-medium border bg-transparent w-full px-4 py-3 focus:ring-2 focus:outline-none focus:border-indigo-500 focus:ring-indigo-500" />
                </div>
              </div>
            </div>
            <div className=" lg:col-span-2 col-span-full">
              <div>
                <label
                  htmlFor="email-address"
                  className="block mt-5 mb-1 text-xl  font-universalSerif"
                >
                  COMMENTS <span className=" text-red-600 text-2xl">*</span>
                </label>

                <div className="relative">
                  {/* {icon} */}
                  <textarea className="font-medium resize-none border bg-transparent w-full px-4 py-3 focus:ring-2 focus:outline-none focus:border-indigo-500 focus:ring-indigo-500" />
                </div>
              </div>
            </div>
            <div className=" col-span-2 mt-10 text-center">
              <button className=" mt-10 uppercase font-universalSerif bg-main px-10 py-3 text-2xl transition-all hover:opacity-90">
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
}
