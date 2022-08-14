import Layout from "../../components/Layouts/Layout";
export default function LatestNews() {
  return (
    <Layout>
      <section className="latest--news px-4 my-20">
        <div className=" container">
          <div>
            <h1 className=" font-extrabold text-5xl">EXAMPLE TITLE</h1>
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
                img: "http://drive.google.com/uc?export=view&id=1y6bCCG_aOVH_AOFJt-ADrNG3-fgJ9767",
                ds1: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autemcupiditate, labore temporibus dicta expedita quod assumendaculpa vero commodi, sunt sequi sit debitis rerum suscipit!Expedita iusto illum mollitia. Soluta. Lorem ipsum dolor sitamet consectetur adipisicing elit. Nulla animi nostrumlaudantium pariatur atque minima magnam voluptates est fugiatfugit molestias optio magni aut, sunt architecto laboriosam,quae aliquid similique id sed hic deleniti minus obcaecati?Voluptatem in molestiae quis nemo ducimus. Tempore, nesciuntenim! Iusto est ab laborum quae! Lorem ipsum dolor sit ametconsectetur, adipisicing elit. Saepe, laudantium. Molestiae quiaeos sed saepe aspernatur eum qui ratione itaque nisi beataeofficiis at praesentium, debitis, unde consectetur iure soluta.",
              },
              {
                id: 2,
                img: "http://drive.google.com/uc?export=view&id=1y6bCCG_aOVH_AOFJt-ADrNG3-fgJ9767",
                ds1: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autemcupiditate, labore temporibus dicta expedita quod assumendaculpa vero commodi, sunt sequi sit debitis rerum suscipit!Expedita iusto illum mollitia. Soluta. Lorem ipsum dolor sitamet consectetur adipisicing elit. Nulla animi nostrumlaudantium pariatur atque minima magnam voluptates est fugiatfugit molestias optio magni aut, sunt architecto laboriosam,quae aliquid similique id sed hic deleniti minus obcaecati?Voluptatem in molestiae quis nemo ducimus. Tempore, nesciuntenim! Iusto est ab laborum quae! Lorem ipsum dolor sit ametconsectetur, adipisicing elit. Saepe, laudantium. Molestiae quiaeos sed saepe aspernatur eum qui ratione itaque nisi beataeofficiis at praesentium, debitis, unde consectetur iure soluta.",
                ds2: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autemcupiditate, labore temporibus dicta expedita quod assumendaculpa vero commodi, sunt sequi sit debitis rerum suscipit!Expedita iusto illum mollitia. Soluta. Lorem ipsum dolor sitamet consectetur adipisicing elit. Nulla animi nostrumlaudantium pariatur atque minima magnam voluptates est fugiatfugit molestias optio magni aut, sunt architecto laboriosam,quae aliquid similique id sed hic deleniti minus obcaecati?Voluptatem in molestiae quis nemo ducimus. Tempore, nesciuntenim! Iusto est ab laborum quae! Lorem ipsum dolor sit ametconsectetur, adipisicing elit. Saepe, laudantium. Molestiae quiaeos sed saepe aspernatur eum qui ratione itaque nisi beataeofficiis at praesentium, debitis, unde consectetur iure soluta. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Autemcupiditate, labore temporibus dicta expedita quod assumendaculpa vero commodi, sunt sequi sit debitis rerum suscipit!Expedita iusto illum mollitia. Soluta. Lorem ipsum dolor sitamet consectetur adipisicing elit. Nulla animi nostrumlaudantium pariatur atque minima magnam voluptates est fugiatfugit molestias optio magni aut, sunt architecto laboriosam,quae aliquid similique id sed hic deleniti minus obcaecati?Voluptatem in molestiae quis nemo ducimus. Tempore, nesciuntenim! Iusto est ab laborum quae! Lorem ipsum dolor sit ametconsectetur, adipisicing elit. Saepe, laudantium. Molestiae quiaeos sed saepe aspernatur eum qui ratione itaque nisi beataeofficiis at praesentium, debitis, unde consectetur iure soluta.",
              },
            ].map(({ id, img, ds1, ds2 }) => (
              <div className=" col-span-full mt-10" key={id}>
                <picture>
                  <img src={img} alt="" />
                </picture>
                <p className=" mt-14 lg:px-24 text-gray-400 font-medium text-center">
                  {ds1}
                </p>
                {ds2 ? (
                  <p className=" mt-14 lg:px-24 text-gray-400 font-medium text-center">
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
                    <picture>
                      <img
                        src="http://drive.google.com/uc?export=view&id=1MbcP5iAbcbGheMv7CudcZUhiy1WL-8DK"
                        alt=""
                      />
                    </picture>
                  </div>
                ))}
                <div className=" col-span-full text-center mt-10">
                  <a href="" className="btn">
                    BACK TO NEWS ARCHIVE
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
}
