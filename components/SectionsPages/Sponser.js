import Image from "next/image";

export default function Sponser() {
  return (
    <section className="sponser">
      <div className=" grid grid-cols-4 border-b-4 border-main">
        {[1, 2, 3, 4].map((id) => (
          <div
            className=" lg:col-span-1 col-span-2 border-x border-gray-500"
            key={id}
          >
            <div className="">
              <Image
                src={"/assets/arwawg.png"}
                alt=""
                width={400}
                height={170}
                layout="responsive"
              />
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
