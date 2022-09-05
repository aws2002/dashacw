import Link from "next/link";
import Layout from "../../components/Layouts/Layout";
import Image from "next/image";
import { useRouter } from "next/router";
import Modal from "../../components/Tools/Modal";
import { motion } from "framer-motion";
import { useState } from "react";
export default function LatestNews({ articles }) {
  const [selectedId, setSelectedId] = useState(false);
  const { query } = useRouter();
  const { slug } = query;
  const news = articles.find((x) => x.slug === slug);
  if (!news) {
    return <Layout>news Not Found</Layout>;
  }
  return (
    <Layout>
      <section className="">
        <div className=" container lg:px-20 px-4 py-20">
          <div>
            <h1 className="font-universalSerif lg:text-5xl text-3xl">
              {news.name}
            </h1>
            <ul className=" mt-4 uppercase opacity-90">
              <li className=" inline mr-4 font-universalSerif">example</li>
              <li className=" inline mr-4  font-universalSerif px-4 border-l-4 border-r-4 border-main">
                date
              </li>
              <li className=" inline mr-4 font-universalSerif">time</li>
            </ul>
          </div>
          <div className=" grid grid-cols-1">
            {news.detailedDescription.map(
              ({ id, img, detaileddescription, detaileddescriptionTow }) => (
                <div className=" col-span-full mt-10" key={id}>
                  <picture>
                    <Image
                      layout="responsive"
                      src={img}
                      alt=""
                      width={400}
                      height={190}
                      loading="eager"
                      priority
                    />
                  </picture>
                  <p className=" mt-14 lg:px-20 lg:text-[21px]  leading-10  opacity-90 text-center">
                    {detaileddescription}
                  </p>
                  {detaileddescriptionTow ? (
                    <p className=" mt-14 lg:px-20 lg:text-[21px]  leading-10  opacity-90 text-center">
                      {detaileddescriptionTow}
                    </p>
                  ) : (
                    ""
                  )}
                </div>
              )
            )}
            <div className=" col-span-full my-24">
              <div className=" text-center mb-20">
                <h2 className="text-4xl uppercase font-universalSerif">
                  images
                </h2>
              </div>
              <div className=" grid grid-cols-12 gap-5">
                {[1, 2, 3, 4, 5, 6].map((id) => (
                  <div
                    className=" lg:col-span-4 col-span-6"
                    key={id}
                    onClick={() => {
                      setSelectedId((pervValue) => {
                        return !pervValue;
                      });
                    }}
                  >
                    <Image
                      layout="responsive"
                      src={"/assets/safad.png"}
                      alt=""
                      width={200}
                      height={120}
                      loading="eager"
                      priority
                    />
                  </div>
                ))}
                <div className=" col-span-full text-center mt-10">
                  <Link href="/newsArchive">
                    <a className="btn text-2xl font-universalSerif">
                      BACK TO NEWS ARCHIVE
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <Modal isToggled={selectedId} setToggle={setSelectedId}>
          <motion.div>
            <Image
              src="/assets/safad.png"
              width={600}
              height={400}
              objectFit="cover"
              alt=""
            />
          </motion.div>
        </Modal>
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
