import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import { Container, Row, Col } from 'react-bootstrap';
import PageMenu from './pages/PageMenu'
import PageSearch from './pages/PageSearch'
import PageItem from './pages/PageItem'
import PageFAQ from './pages/PageFAQ'
import PageMain from './pages/PageMain'
import NavBar from './NavBar'
import { Header } from './pages/parts/header.jsx'
import { Footer } from './pages/parts/footer'


const App = () => {
    return (

        <Container className="pageStyling">
            <Header />
            <BrowserRouter>
            <Row>
                <Col>
                    <NavBar />
                    <Route path="/" exact component={PageMain} />
                    <Route path="/Menu" exact component={PageMenu} />
                    <Route path="/Search" exact component={PageSearch} />
                    <Route path="/Menu/Item" exact component={PageItem} />
                    <Route path="/FAQ" exact component={PageFAQ} />

                </Col>
                </Row>
            </BrowserRouter>
            <Footer />
        </Container>
    )
}

export default App;