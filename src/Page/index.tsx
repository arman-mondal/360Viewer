import React, { useState } from "react";
import Header from "../components/header";
import Hero from "../components/hero";
import Image360 from "../components/viewer";
import { Viewer } from "panolens";
import { data } from "../data";



const Home =()=>{

    return (
        <>
        <Header/>
        <Hero data={data}/>
        </>
    )
}

export default Home