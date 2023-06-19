import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import App from "./App"
import NotFound from './routes/NotFound'
import NavBar from './components/NavBar'


const Root = () => {
    return(
        <BrowserRouter>
            <NavBar/>
            <Routes>
                <Route exact path="/" element = {<App/>} />
                {/* <Route exact path="/Avis-De-Passage" element = {<Passage/>} /> */}
                <Route path='*' element = {<NotFound/>} />
            </Routes>
        </BrowserRouter>
    )
}

export default Root