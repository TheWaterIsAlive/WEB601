import React from 'react'
// import {ContentSpace} from './parts/contentSpace'
import { ContentArea } from "./ContentArea";
import { Menuitem } from "./parts/menuitem";
import { AddMenuItem } from "./parts/addmenuItem";


const PageMenu = () => {
    return (
        <div>
            <ContentArea items={<Menuitem />} snapIn={<div><AddMenuItem /></div>} />
        </div>
    );
}

export default PageMenu