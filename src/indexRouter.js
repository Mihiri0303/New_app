import React from "react";
import { BrowserRouter as Router } from "react-router-dom";

import Nav from './components/Navbar';
import Details from './components/Details';
import Table from './components/Table';
import Modal from './components/Modal' 

function IndexRouter() {
    return (
       <>
        <Router>
            <Nav />
        </Router>
        <Router>
            <div className="bg-green-900 bg-opacity-10 flex gap-4 min-h-screen relative h-full">
                <Details />
                <Table />
            </div>
                <Modal />
        </Router>

       </>
    );
}

export default IndexRouter;
