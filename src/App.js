import React from "react";
import Home from './components/Home'
import './styles/custom.scss';
import Layout from "./components/Layout";
import Welcome from "./components/Welcome"
import DashLayout from "./components/DashLayout";
import { Helmet } from 'react-helmet-async';

import {
    BrowserRouter as Router,
    Routes,
    Route,
    useParams,
    useRouteMatch
  } from "react-router-dom";
import { Container } from "react-bootstrap";

const App = () => {

    return  (
        <>
            <Helmet>
                <title>Sow Awesome | Farmer's Planting Guide</title>
                <meta name="description" content="Sow Awesome - An Application to Help Small Farms Grow" />
                <meta name="keywords" content="Farming, Planting, Schedule, Harvest, Pesticide, Cover crop, Maturity, Tracker" />
            </Helmet>
            <Routes>
            <Route path="/" element={<Layout />} />
                <Route index element={<Home />} />
                <Route path="home" element={<Home />} />
            <Route path="/dash" element={<DashLayout />} />
                <Route index element={<Welcome />} />
                <Route path="home" element={<Home />} />
            </Routes>
        {/* <Footer /> */}
        </>
    )
}

function Picker() {
    let { id } = useParams();
    let Id = id.toLowerCase()
    .split(' ')
    .map((s) => s.charAt(0).toUpperCase() + s.substring(1))
    .join(' ');

    return (
            <Portfolio id={Id} />
    )
}

export default App;