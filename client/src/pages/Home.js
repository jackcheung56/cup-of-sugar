import React, { useEffect } from "react";
import "../styles/Home.css";

<<<<<<< HEAD
function Home({ item, setItem }) {
  useEffect(() => {
    setItem(item);
    // console.log('state', item)
  }, []);
  return (
    <div>
      <h1>home</h1>
    </div>
  );
=======
function Home({item, setItem}) {



    useEffect(() => {
        setItem(item)
      }, [])




    return (
        <div>
            <h1>home</h1>
        </div>
    );
>>>>>>> e8af2464ea84b367edb82562e38520bc9e45b5f8
}

export default Home;
