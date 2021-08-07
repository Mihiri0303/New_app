import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Nav from './components/Navbar';
import Details from './components/Details';
import Table from './components/Table' 

function IndexRouter() {
    return (
       <>
        <Router>
            <Nav />
        </Router>
        <Router>
            <div className="flex gap-4 min-h-screen relative h-full">
                <Details />
                <Table />
            </div>
        </Router>

       </>
    );
}

export default IndexRouter;
