import Layout from "../Layouts/Layout";
export default function Sponser() {
  return (
    
      <section className="sponser">
        <div className=" grid grid-cols-4 border-b-4 border-main">
          {[1,2,3,4].map((id)=>(
            <div className=" lg:col-span-1 col-span-2 border-x border-t border-gray-500" key={id}>
            <picture>
              <img src="../assets/arwawg.png" alt="" />
            </picture>
          </div>
          ))}
        </div>
      </section>
    
  );
}
