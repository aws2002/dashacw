import Link from "next/link";
import Layout from "../../components/Layouts/Layout";
import Image from "next/image";
export default function LatestNews() {
  return (
    <Layout>
      <section className="latest--news px-4 my-20">
        <div className=" container">
          <div>
            <h1 className=" font-extrabold lg:text-5xl text-3xl">
              EXAMPLE TITLE
            </h1>
            <ul className=" mt-4 uppercase">
              <li className=" inline mr-4 ">example</li>
              <li className=" inline mr-4  px-4 border-l-4 border-r-4 border-main">
                date
              </li>
              <li className=" inline mr-4">time</li>
            </ul>
          </div>
          <div className=" grid grid-cols-1">
            {[
              {
                id: 1,
                img: "/assets/Image 2.png",
                ds1: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autemcupiditate, labore temporibus dicta expedita quod assumendaculpa vero commodi, sunt sequi sit debitis rerum suscipit!Expedita iusto illum mollitia. Soluta. Lorem ipsum dolor sitamet consectetur adipisicing elit. Nulla animi nostrumlaudantium pariatur atque minima magnam voluptates est fugiatfugit molestias optio magni aut, sunt architecto laboriosam,quae aliquid similique id sed hic deleniti minus obcaecati?Voluptatem in molestiae quis nemo ducimus. Tempore, nesciuntenim! Iusto est ab laborum quae! Lorem ipsum dolor sit ametconsectetur, adipisicing elit. Saepe, laudantium. Molestiae quiaeos sed saepe aspernatur eum qui ratione itaque nisi beataeofficiis at praesentium, debitis, unde consectetur iure soluta.",
              },
              {
                id: 2,
                img: "/assets/Image 2.png",
                ds1: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autemcupiditate, labore temporibus dicta expedita quod assumendaculpa vero commodi, sunt sequi sit debitis rerum suscipit!Expedita iusto illum mollitia. Soluta. Lorem ipsum dolor sitamet consectetur adipisicing elit. Nulla animi nostrumlaudantium pariatur atque minima magnam voluptates est fugiatfugit molestias optio magni aut, sunt architecto laboriosam,quae aliquid similique id sed hic deleniti minus obcaecati?Voluptatem in molestiae quis nemo ducimus. Tempore, nesciuntenim! Iusto est ab laborum quae! Lorem ipsum dolor sit ametconsectetur, adipisicing elit. Saepe, laudantium. Molestiae quiaeos sed saepe aspernatur eum qui ratione itaque nisi beataeofficiis at praesentium, debitis, unde consectetur iure soluta.",
                ds2: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autemcupiditate, labore temporibus dicta expedita quod assumendaculpa vero commodi, sunt sequi sit debitis rerum suscipit!Expedita iusto illum mollitia. Soluta. Lorem ipsum dolor sitamet consectetur adipisicing elit. Nulla animi nostrumlaudantium pariatur atque minima magnam voluptates est fugiatfugit molestias optio magni aut, sunt architecto laboriosam,quae aliquid similique id sed hic deleniti minus obcaecati?Voluptatem in molestiae quis nemo ducimus. Tempore, nesciuntenim! Iusto est ab laborum quae! Lorem ipsum dolor sit ametconsectetur, adipisicing elit. Saepe, laudantium. Molestiae quiaeos sed saepe aspernatur eum qui ratione itaque nisi beataeofficiis at praesentium, debitis, unde consectetur iure soluta. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autemcupiditate, labore temporibus dicta expedita quod assumendaculpa vero commodi, sunt sequi sit debitis rerum suscipit!Expedita iusto illum mollitia. Soluta. Lorem ipsum dolor sitamet consectetur adipisicing elit. Nulla animi nostrumlaudantium pariatur atque minima magnam voluptates est fugiatfugit molestias optio magni aut, sunt architecto laboriosam,quae aliquid similique id sed hic deleniti minus obcaecati?Voluptatem in molestiae quis nemo ducimus. Tempore, nesciuntenim! Iusto est ab laborum quae! Lorem ipsum dolor sit ametconsectetur, adipisicing elit. Saepe, laudantium. Molestiae quiaeos sed saepe aspernatur eum qui ratione itaque nisi beataeofficiis at praesentium, debitis, unde consectetur iure soluta.",
              },
            ].map(({ id, img, ds1, ds2 }) => (
              <div className=" col-span-full mt-10" key={id}>
                <picture>
                  <Image
                    layout="responsive"
                    src={img}
                    alt=""
                    width={400}
                    height={180}
                    loading="eager"
                    priority
                  />
                </picture>
                <p className=" mt-14 lg:px-20 opacity-90 font-medium text-center">
                  {ds1}
                </p>
                {ds2 ? (
                  <p className=" mt-14 lg:px-20 opacity-90 font-medium text-center">
                    {ds2}
                  </p>
                ) : (
                  ""
                )}
              </div>
            ))}
            <div className=" col-span-full my-10">
              <div className=" text-center mb-10">
                <h2 className="font-extrabold text-4xl uppercase">images</h2>
              </div>
              <div className=" grid grid-cols-12 gap-5">
                {[1, 2, 3, 4, 5, 6].map((id) => (
                  <div className=" lg:col-span-4 col-span-6" key={id}>
                    <Image
                      layout="responsive"
                      src={"/assets/safad.png"}
                      alt=""
                      width={200}
                      height={120}
                      loading="eager"
                      priority
                    />

                    {/* <picture>
                      <img src="../assets/safad.png" alt="" />
                    </picture> */}
                  </div>
                ))}
                <div className=" col-span-full text-center mt-10">
                  <Link href="/newsArchive">
                    <a className="btn text-2xl">BACK TO NEWS ARCHIVE</a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
