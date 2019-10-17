import React from 'react'
import { BrowserRouter, Route, Link } from 'react-router-dom'

import PageMenu from './pages/PageMenu'
import PageSearch from './pages/PageSearch'
import PageItem from './pages/PageItem'
import PageFAQ from './pages/PageFAQ'
import PageMain from './pages/PageMain'
import NavBar  from './NavBar'
import {Header} from './pages/parts/header.jsx'
import {Footer} from './pages/parts/footer'


const App = () => {
    return (
       
        <div className="ui container">
             <Header />
            <BrowserRouter>
                <div>
                <NavBar />
                    <Route path="/" exact component={PageMain} />
                    <Route path="/Menu" exact component={PageMenu} />
                    <Route path="/Search" exact component={PageSearch} />
                    <Route path="/Menu/Item" exact component={PageItem} />
                    <Route path="/FAQ" exact component={PageFAQ} />
                    
                </div>
            </BrowserRouter>
            <Footer />
        </div>
    )
}

export default App;