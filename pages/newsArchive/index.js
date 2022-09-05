import React from "react";
import Layout from "../../components/Layouts/Layout";
import CardNews from "../../components/SectionsPages/CardNews";
import Image from "next/image";

export default function NewsArchive({ articles }) {
  return (
    <Layout>
      <section className="news--archive px-4 my-20">
        <div className=" container lg:px-20 px-4">
          <div className=" text-center mb-28">
            <h2 className="lg:text-5xl text-2xl uppercase">
              <picture className=" lg:w-14 w-10 mr-3 inline-block ">
                <Image
                  src="/assets/Accademie.png"
                  width={60}
                  height={50}
                  quality={100}
                  objectFit="cover"
                  alt=""
                />
              </picture>
              <span className="border-b-4 border-main pb-2 font-universalSerif tracking-wider">
                NEWS ARCHIVE
              </span>{" "}
              <picture className=" lg:w-14 w-10 inline-block mr-3">
                <Image
                  src="/assets/Accademie.png"
                  width={60}
                  height={50}
                  quality={100}
                  objectFit="cover"
                  alt=""
                />
              </picture>
            </h2>
          </div>
          <div className=" grid grid-cols-2 gap-x-32 gap-y-10">
            {articles.map((news) => {
              return <CardNews news={news} key={news.slug} />;
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}
export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(`http://localhost:4000/news`);
  const data = await res.json();

  // Pass data to the page via props
  return { props: { articles: data } };
}
