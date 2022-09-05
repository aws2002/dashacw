import CardRoster from "./CardRoster";
import { motion, variants } from "framer-motion";
import { GiMuscleUp, GiMuscularTorso } from "react-icons/gi";
import Link from "next/link";
import Image from "next/image";
export default function OurRoster() {
  return (
    <section className="mt-20">
      <div className={"bgWrap-h lg:block hidden"}>
        <Image
          alt="Mountains"
          src="/assets/bg2.png"
          layout="responsive"
          width={200}
          height={140}
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className={"bgWrap-h block lg:hidden"}>
        <Image
          alt="Mountains"
          src="/assets/bg2.png"
          layout="responsive"
          width={250}
          height={870}
          objectFit="cover"
          quality={100}
        />
      </div>
      <div className="container lg:px-24 py-16 px-4">
        <div className=" text-center mb-10">
          <h2 className=" font-extrabold lg:text-4xl text-2xl uppercase">
            <picture className=" lg:w-14 w-10 inline-block mr-3">
              <Image
                src={"/assets/L-Hand.webp"}
                width={60}
                height={50}
                alt=""
              />
            </picture>
            <span className=" border-b-4 border-main pb-2 font-universalSerif tracking-wider	">
              OUR ROSTER
            </span>{" "}
            <picture className=" lg:w-14 w-10 inline-block mr-3">
              <Image
                src={"/assets/R-Hand.webp"}
                width={60}
                height={50}
                alt=""
              />
            </picture>
          </h2>
        </div>
        <div className=" grid-cols-4 grid lg:gap-10 gap-4">
          {[
            { id: 1, name: "JIMMY", img: "/assets/Image 1.png" },
            { id: 2, name: "EXAMPLE", img: "/assets/Image 1.png" },
            { id: 3, name: "EXAMPLE", img: "" },
            { id: 4, name: "EXAMPLE", img: "/assets/Image 1.png" },
            { id: 5, name: "EXAMPLE", img: "/assets/Image 1.png" },
            { id: 6, name: "EXAMPLE", img: "/assets/Image 1.png" },
            { id: 7, name: "EXAMPLE", img: "/assets/Image 1.png" },
            { id: 8, name: "EXAMPLE", img: "" },
          ].map(({ id, name, img }) => {
            return <CardRoster id={id} key={id} name={name} img={img} />;
          })}
          <div className=" col-span-4 text-center mt-10">
            <Link href="/rosterViewAll">
              <a className="transition-all hover:opacity-90 btn uppercase lg:text-2xl text-xl font-universalSerif tracking-wider">
                VIEW ALL
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
