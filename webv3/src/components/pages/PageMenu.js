import React from 'react'
// import {ContentSpace} from './parts/contentSpace'
import { ContentArea } from "./ContentArea";
import { Menuitem } from "./parts/menuitem";
const PageMenu = () => {
    return (
    <div>
        <ContentArea items={<Menuitem/>} />
    </div>
    );
}

export default PageMenu