import React from 'react'
// import {ContentSpace} from './parts/contentSpace'
import { ContentArea } from "./ContentArea";
import { Menuitem } from "./parts/menuitem";
import { DeleteMenuItem } from "./parts/forms/deleteMenuItem"



const PageMenu = () => {
    return (
        <div>
            <ContentArea items={<Menuitem />} snapIn={<div><DeleteMenuItem /> </div>} />
        </div>
    );
}

export default PageMenu