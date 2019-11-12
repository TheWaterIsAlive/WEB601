import React from 'react'
import { ContentArea } from './ContentArea.js'
import { AddMenuItem } from './parts/addmenuItem'
import { Menuitem } from "./parts/menuitem";

const PageItem = () => {
    return (
        <div>
            <ContentArea items={<Menuitem />} snapIn={<div><AddMenuItem /></div>} />
        </div>
    );
}

export default PageItem