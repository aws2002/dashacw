import CardRoster from "./CardRoster";
import { motion, variants } from "framer-motion";
import { GiMuscleUp, GiMuscularTorso } from "react-icons/gi";
import Link from "next/link";
export default function OurRoster() {
  return (
    <section className="our--roster mt-20 px-5 py-20">
      <div className="container lg:px-24">
        <div className=" text-center mb-10">
          <h2 className=" font-extrabold lg:text-4xl text-2xl uppercase">
            
          <picture>
              <img src="./assets/L-Hand.webp" className=" lg:w-14 w-10 inline relative -top-4 mr-3" alt="" />
            </picture>
            <span className=" border-b-4 border-main pb-2 font-universalSerif tracking-wider	">OUR ROSTER</span>{" "}
            <picture>
              <img src="./assets/R-Hand.webp" className=" lg:w-14 w-10 inline relative -top-4 mr-3" alt="" />
            </picture>
          </h2>
        </div>
        <div className=" grid-cols-4 grid gap-10">
          {[
            { id: 1 ,name:"JIMMY",img:"/assets/Image 1.png"},
            { id: 2 ,name:"EXAMPLE",img:""},
            { id: 3 ,name:"EXAMPLE",img:""},
            { id: 4 ,name:"EXAMPLE",img:""},
            { id: 5 ,name:"EXAMPLE",img:""},
            { id: 6 ,name:"EXAMPLE",img:"/assets/Image 1.png"},
            { id: 7 ,name:"EXAMPLE",img:""},
            { id: 8 ,name:"EXAMPLE",img:""},
          ].map(({ id,name,img }) => {
            return <CardRoster id={id} key={id} name={name} img={img}/>;
          })}
          <div className=" col-span-4 text-center">
            <Link href="/rosterViewAll">
              <a className="transition-all hover:opacity-90 btn uppercase lg:text-2xl text-xl font-universalSerif tracking-wider">VIEW ALL</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
