import CardNews from "./CardNews";

export default function LatestNews() {
  return (
    <section className="latest--news my-20 px-5">
      <div className="container">
        <div className=" text-center mb-10">
          <h2 className=" font-extrabold text-4xl uppercase">Latest news</h2>
        </div>
        <div className=" grid-cols-2 grid gap-x-32 gap-y-10">
          {[{ id: 1 }, { id: 2 }, { id: 3 }, { id: 4 }].map(({ id }) => (
            <div key={id}>
              <CardNews id={id} />
            </div>
          ))}
          <div className=" col-span-2 text-center">
            <a href="" className=" btn uppercase ">
              View older news
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
