import React, { useState, useEffect } from "react";
import "../styles/Home.css";

function Home({item, setItem}) {



    useEffect(() => {
        setItem(item)
        // console.log('state', item)
      }, [])




    return (
        <div>
            <h1>home</h1>
        </div>
    );
}

export default Home;
