import React from "react";
import Layout from "../components/Layouts/Layout";
import CardRoster from "../components/SectionsPages/CardRoster";
export default function RosterViewAll() {
  return (
    <Layout>
      <section className="roster--viewAll py-20">
        <div className=" container">
          <div className=" grid grid-cols-4 gap-10">
            {[
              { id: "1" },
              { id: "2" },
              { id: "3" },
              { id: "4" },
              { id: "5" },
              { id: "6" },
              { id: "7" },
              { id: "8" },
              { id: "9" },
              { id: "10" },
              { id: "11" },
              { id: "12" },
            ].map(({id}) => (
              <>
                <CardRoster id={id}/>
              </>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
}
