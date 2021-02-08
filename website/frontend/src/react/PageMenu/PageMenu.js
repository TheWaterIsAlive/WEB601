import React from "react";
// import {ContentSpace} from './parts/contentSpace'
import { ContentArea } from "../ContentArea/ContentArea";
import { Menuitem } from "../components/menuItem/menuitem";
import { DeleteMenuItem } from "../components/deleteMenuItem/deleteMenuItem";
import './PageMenu.css';

const PageMenu = () => {
  return (
    <div>
      <ContentArea
        items={<Menuitem />}
        snapIn={
          <div>
            <DeleteMenuItem />{" "}
          </div>
        }
      />
    </div>
  );
};

export default PageMenu;
