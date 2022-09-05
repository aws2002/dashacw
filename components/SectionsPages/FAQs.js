import React from "react";
import CollapseFAQs from "../Tools/CollapseFAQs";
export default function FAQs({faqs}) {
  return (
    <div>
      <CollapseFAQs data={faqs}/>
    </div>
  );
}
