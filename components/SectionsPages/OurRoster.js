import CardRoster from "./CardRoster";
import { motion, variants } from "framer-motion";
export default function OurRoster() {
  return (
    <section className="our--roster mt-20 px-5 py-10">
      <div className="container">
        <div className=" text-center mb-10">
          <h2 className=" font-extrabold text-4xl uppercase">
            OUR ROSTER GiMuscleUp GiMuscularTorso
          </h2>
        </div>
        <div className=" grid-cols-4 grid gap-10">
          {[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }].map(({ id }) => (
            <div key={id}>
              <CardRoster id={id}  />
            </div>
          ))}
          <div className=" col-span-4 text-center">
            <a href="" className="btn uppercase">
              View older news
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
