import Layout from "../components/Layouts/Layout";
import { AiFillStar } from 'react-icons/ai';
export default function Contact() {
  return (
    <Layout bg="bg2">
      <section className="contact px-4 my-20">
        <div className=" container">
          <div className=" title text-center">
            <h1 className=" font-extrabold text-6xl">Contact us</h1>
            <p className=" text-gray-400 italic text-xl mt-4 lg:px-20 ">
              Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit Sed Do
              Eiusmod Tempor Incididunt Ut Labore Et Dolore Magna Aliqua. Ut
              Enim Ad Minim Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Asperiores, quisquam quam! Ipsa, error velit! Laboriosam,
              sapiente necessitatibus porro adipisci tenetur asperiores, quo
              culpa similique, iste odit facere? Amet, aut delectus.
            </p>
          </div>
          <div className=" grid grid-cols-4 gap-10 lg:px-20 mt-10 text-center">
          <div className=" col-span-full text-center">
                <h2 className=" uppercase text-4xl font-bold">how can we help you?</h2>
            </div>
            <div className=" bg-main lg:col-span-1 col-span-2 p-4">
                <AiFillStar className=" text-9xl mx-auto"/>
                <h4 className=" font-bold text-gray-400 text-2xl">PRESS & MEDIA</h4>
            </div>
          </div>
          <form className=" grid grid-cols-2 gap-x-20 gap-y-2">
            <div className=" lg:col-span-1 col-span-full">
              <div>
                <label
                  htmlFor="email-address"
                  className="block font-medium text-color_1 mt-5 mb-1 text-md"
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
                  className="block font-medium text-color_1 mt-5 mb-1 text-md"
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
                  className="block font-medium text-color_1 mt-5 mb-1 text-md"
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
                  className="block font-medium text-color_1 mt-5 mb-1 text-md"
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
                  className="block font-medium text-color_1 mt-5 mb-1 text-md"
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
              <button
                
                className=" mt-10 uppercase bg-main px-10 py-3 text-2xl font-bold transition-all hover:opacity-90"
              >
                SUBMIT
              </button>
            </div>
          </form>
        </div>
      </section>
    </Layout>
  );
}
