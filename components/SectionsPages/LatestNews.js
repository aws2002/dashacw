import CardNews from "./CardNews";
import Link from "next/link";
import Image from "next/image";
export default function LatestNews({ articles }) {
  return (
    <section className="latest--news my-20 px-5">
      <div className="container lg:px-24">
        <div className=" text-center mb-24">
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
              Latest news
            </span>{" "}
            <picture className=" lg:w-14 w-10 inline-block ml-2">
              <Image
                src="/assets/Accademie.png"
                width={60}
                height={50}
                objectFit="cover"
                quality={100}
                alt=""
              />
            </picture>
          </h2>
        </div>
        <div className=" grid-cols-2 grid gap-x-28 gap-y-20">
          {articles.map((news) => {
            return <CardNews news={news} key={news.slug} />;
          })}
          <div className=" col-span-2 text-center">
            <Link href="/newsArchive">
              <a className="transition-all hover:opacity-90 btn uppercase lg:text-2xl text-xl font-universalSerif tracking-wider">
                View older news
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
