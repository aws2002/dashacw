import React from "react";
import Layout from "../components/Layouts/Layout";
import CardNews from "../components/SectionsPages/CardNews";
export default function NewsArchive() {
  return (
    <Layout>
      <section className="news--archive px-4 my-20">
        <div className=" container">
          <div className=" grid grid-cols-2 gap-x-32 gap-y-10">
            {[
              { id: "1" },
              { id: "2" },
              { id: "3" },
              { id: "4" },
              { id: "5" },
              { id: "6" },
              { id: "7" },
              { id: "8" },
            ].map(({ id }) => {
              return <CardNews id={id} key={id} />;
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
}
