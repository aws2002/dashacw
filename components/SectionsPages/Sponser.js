import Layout from "../Layouts/Layout";
export default function Sponser() {
  return (
    
      <section className="sponser">
        <div className=" grid grid-cols-4">
          {[1,2,3,4].map((id)=>(
            <div className=" lg:col-span-1 col-span-2" key={id}>
            <picture>
              <img src="http://drive.google.com/uc?export=view&id=1nuHjeyIbs5y1WtZTu6EVeD81i-aTqOPV" alt="" />
            </picture>
          </div>
          ))}
        </div>
      </section>
    
  );
}
