import React from "react";
import Layout from "../components/Layouts/Layout";
import { BsCheckLg } from "react-icons/bs";

export default function SuccessContact() {
  return (
    <Layout bg="bg2">
      <section className="success--contact px-4">
        <div className=" container SiTruenas">
          <div className=" grid grid-cols-1">
            <div className=" col-span-full flex justify-center items-center h-screen">
              <div className=" bg-[#270A3A] lg:w-1/3  p-8 border-4 border-[#6C3590] text-center">
                <BsCheckLg className=" mx-auto text-7xl mb-2" />
                <h4 className=" text-3xl font-extrabold">SUBMITTED</h4>
                <p className=" mb-8 mt-3">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod
                  doloremque ut unde provident aliquam earum? Obcaecati, magnam
                </p>
                <a
                  href=""
                  className=" mt-10 uppercase bg-main px-5 py-3  font-bold transition-all hover:opacity-90"
                >
                  Home page
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
