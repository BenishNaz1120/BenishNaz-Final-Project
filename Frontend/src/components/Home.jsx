import React, { useState } from "react";
import DashBoard from "./DashBoard";
import Header from "./Header";
import Subscribe from "./Subscribe";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Navbar";
import ShowActivity from "./ShowActivity";
import AddActivity from "./AddActivity";

import { useEffect } from "react";
import axios from "axios";


const Home = () => {
    const [data, setdata] = useState([]);
    const [card, setcard] = useState("");
    const myuser = (p) => {
        setdata([...data, p]);
    };
    const empty = {
        name: "",
        discription: " ",
        option: " ",
        duration: " ",
        date: "",
    };
    const api = () => {
        axios
            .get("http://localhost:4000/card")
            .then((res) => setdata(res.data));
        // .catch(err);
    };
    useEffect(() => {
        api();
    }, []);
    console.log("data", data);
    // const [changenav, setchangenav] = useState(false);



    const [editData, seteditData] = useState(0);
    // const [Edit, setEdit] = useState(false);
    ////edit
    const [handle, sethandle] = useState(empty);

    const edit = (id) => {

        fetch(`http://localhost:4000/card/${id}`)
            .then((data1) => data1.json())
            .then((res) => sethandle(res));

        setShow(true);
        seteditData(id);
        console.log(show)
    };

    const [show, setShow] = useState(false)
    return (
        <div>
            <Router>
                <Navbar show={show} />

                <Routes>
                    <Route path="/" element={<Header />} />
                    <Route path="/DashBoard" element={<DashBoard />} />
                    <Route path="/AddActivity" element={<AddActivity
                        myuser={myuser} card={card} setcard={setcard} api={api} editData={editData} seteditData={seteditData} sethandle={sethandle} handle={handle} show={show} setShow={setShow} />} />
                    <Route path="/ShowActivity" element={<ShowActivity data={data} myuser={myuser} api={api} edit={edit} />} />

                </Routes>

                <Subscribe />
            </Router>

            {/* <Header /> */}
            {/* <DashBoard /> 
            <Subscribe />  */}
            {/* <AddActivity myuser={myuser} /> */}



        </div>
    );
};

export default Home;
