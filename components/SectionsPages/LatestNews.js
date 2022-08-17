import CardNews from "./CardNews";
import Link from "next/link";
import { GiMuscleUp, GiMuscularTorso } from "react-icons/gi";
export default function LatestNews() {
  return (
    <section className="latest--news my-20 px-5">
      <div className="container">
        <div className=" text-center mb-10">
          <h2 className=" font-extrabold lg:text-4xl text-2xl uppercase">
            <GiMuscleUp className=" inline text-5xl" />{" "}
            <span className="border-b-4 border-main pb-2 font-universalSerif tracking-wider">Latest news</span>{" "}
            <GiMuscleUp className=" inline text-5xl" />
          </h2>
        </div>
        <div className=" grid-cols-2 grid gap-x-32 gap-y-10">
          {[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }].map(({ id }) => {
            return <CardNews id={id} key={id} />;
          })}
          <div className=" col-span-2 text-center">
            <Link href="/newsArchive">
              <a className=" btn uppercase lg:text-2xl text-xl">
                View older news
              </a>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
