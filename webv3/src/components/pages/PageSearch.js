import React from 'react'
import {Search} from './parts/search'
import {AdvanceSearch} from './parts/advanceSearch'
// import {ContentSpace} from './parts/contentSpace'
 import {Menuitem} from './parts/menuitem'
 import {ContentArea} from './ContentArea'
 import {BuisnessDetail} from './parts/buisnessDetails'
import {CreateUser} from './parts/createUser'

const PageSearch = () => {
    return (
    <div>
        <Search />
        <AdvanceSearch />
        <div>
            <ContentArea items={<Menuitem/>} snapIn={<div><BuisnessDetail/><CreateUser/></div>}></ContentArea>
            {/* <ContentSpace children={Menuitem} /> */}
        </div>
    </div>);
}

export default PageSearch