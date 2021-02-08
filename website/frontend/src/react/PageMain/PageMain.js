import React from "react";
import { Search } from "../components/search/search";
import { Slideshow } from "../components/slideshow/slideshow";
import './PageMain';

const PageMain = () => {
  return (
    <div>
      <Search />

      <Slideshow />
    </div>
  );
};

export default PageMain;
