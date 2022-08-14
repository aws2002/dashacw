import CardRoster from "./CardRoster";
import { motion, variants } from "framer-motion";
import { GiMuscleUp, GiMuscularTorso } from "react-icons/gi";
import Link from "next/link";
export default function OurRoster() {
  return (
    <section className="our--roster mt-20 px-5 py-20">
      <div className="container">
        <div className=" text-center mb-10">
          <h2 className=" font-extrabold lg:text-4xl text-3xl uppercase">
            <GiMuscleUp className=" inline text-5xl text-animation2" /> <span className=" border-b-4 border-main">OUR ROSTER</span>{" "}
            <GiMuscleUp className="text-5xl inline" />
          </h2>
        </div>
        <div className=" grid-cols-4 grid gap-10">
          {[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }].map(({ id }) => {
            return <CardRoster id={id} key={id} />;
          })}
          <div className=" col-span-4 text-center">
            <Link href="/rosterViewAll">
              <a className="btn uppercase text-2xl">VIEW ALL</a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
