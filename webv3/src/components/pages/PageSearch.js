import React from 'react'
import {Search} from './parts/search'
import {AdvanceSearch} from './parts/advanceSearch'
import {ContentSpace} from './parts/contentSpace'

const PageSearch = () => {
    return (
    <div>
        <Search />
        <AdvanceSearch />
        <div>
            <ContentSpace />
        </div>
    </div>);
}

export default PageSearch