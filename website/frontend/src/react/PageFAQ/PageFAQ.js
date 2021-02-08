import React from "react";
import { FaqPanal } from "../components/faqPanal/faqPanal";
import './PageFAQ.css';
const PageFAQ = () => {
  return (
    <div>
      <FaqPanal
        faqTitle={"Is This Free?"}
        faqText={"This site is free to use."}
      />
      <FaqPanal
        faqTitle={"Why does this exist?"}
        faqText={"This is a project for my WEB601 class."}
      />
      <FaqPanal faqTitle={"Who are you?"} faqText={"???"} />
    </div>
  );
};

export default PageFAQ;
