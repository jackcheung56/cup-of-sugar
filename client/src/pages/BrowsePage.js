import React, { useState, useEffect } from "react";
import { useHistory } from "react-router-dom";
import ItemCard from "../components/ItemCard";
import { __GetItems } from "../services/ItemService";
import { __GetItemsByCategory } from "../services/ItemService";
<<<<<<< HEAD

function BrowsePage(props) {
  console.log("BP PROPS", props);

  const [browseItems, setBrowseItems] = useState([]);
  console.log(props);

  const getBrowseItems = async () => {
    try {
      const data = await __GetItems();
      console.log(data);
      setBrowseItems(data);
    } catch (error) {
      throw error;
    }
  };

  const sortAppliances = async () => {
    try {
      const category = await __GetItemsByCategory("Appliances");
      const foo = category.data;
      setBrowseItems(foo);
      console.log(browseItems);
    } catch (error) {
      throw error;
    }
  };

  const sortFitness = async () => {
    try {
      const category = await __GetItemsByCategory("Fitness");
      const foo = category.data;
      setBrowseItems(foo);
      console.log(browseItems);
    } catch (error) {
      throw error;
    }
  };

  const sortClothing = async () => {
    try {
      const category = await __GetItemsByCategory("Clothing");
      const foo = category.data;
      setBrowseItems(foo);
      console.log(browseItems);
    } catch (error) {
      throw error;
    }
  };

  const sortEntertainment = async () => {
    try {
      const category = await __GetItemsByCategory("Entertainment");
      const foo = category.data;
      setBrowseItems(foo);
      console.log(browseItems);
    } catch (error) {
      throw error;
    }
  };

  const sortBooks = async () => {
    try {
      const category = await __GetItemsByCategory("Books");
      const foo = category.data;
      setBrowseItems(foo);
      console.log(browseItems);
    } catch (error) {
      throw error;
    }
  };

  const sortTools = async () => {
    try {
      const category = await __GetItemsByCategory("Tools");
      const foo = category.data;
      setBrowseItems(foo);
      console.log(browseItems);
    } catch (error) {
      throw error;
    }
  };

  const sortInstruments = async () => {
    try {
      const category = await __GetItemsByCategory("Instruments");
      const foo = category.data;
      setBrowseItems(foo);
      console.log(browseItems);
    } catch (error) {
      throw error;
    }
  };

  const sortPantry = async () => {
    try {
      const category = await __GetItemsByCategory("Pantry");
      const foo = category.data;
      setBrowseItems(foo);
      console.log(browseItems);
    } catch (error) {
      throw error;
    }
  };

  useEffect(() => {
    getBrowseItems();
  }, []);

  //   const itemList = props.item;
  const history = useHistory();

  return (
    <div>
      <div className="catButtons">
        <button onClick={getBrowseItems}>All</button>
        <button onClick={sortAppliances}>Appliances</button>
        <button onClick={sortFitness}>Fitness</button>
        <button onClick={sortClothing}>Clothing</button>
        <button onClick={sortEntertainment}>Entertainment</button>
        <button onClick={sortBooks}>Books</button>
        <button onClick={sortTools}>Tools</button>
        <button onClick={sortInstruments}>Instruments</button>
        <button onClick={sortPantry}>Pantry</button>
      </div>

      <h1>browse all items</h1>

      <div className="itemList">
        {browseItems.map((item) => (
          <ItemCard
            //model attributes go here
            key={item._id}
            image={item.image}
            title={item.title}
            condition={item.condition}
            category={item.category}
            description={item.description}
            onClick={() => history.push(`/items/${item.id}`, (item = { item }))}
            //model attributes end here
          />
        ))}
      </div>
    </div>
  );
=======
import '../styles/Browse.css'

function BrowsePage(props) {



    console.log(props)
    const [browseItems, setBrowseItems] = useState([])


    // const getUserBackup = async () => {
    //     try {
    //         const data = await __GetUser()
    //     }
    // }


    const getBrowseItems = async () => {
        try {
            const data = await __GetItems()
            setBrowseItems(data)
        } catch (error) {
            throw error
        }
    }

    const sortAppliances = async () => {
        try {
            const category = await __GetItemsByCategory('Appliances')
            const foo = category.data
            setBrowseItems(foo)
        } catch (error) {
            throw error
        }
    }

    const sortFitness = async () => {
        try {
            const category = await __GetItemsByCategory('Fitness')
            const foo = category.data
            setBrowseItems(foo)
        } catch (error) {
            throw error
        }
    }

    const sortClothing = async () => {
        try {
            const category = await __GetItemsByCategory('Clothing')
            const foo = category.data
            setBrowseItems(foo)
        } catch (error) {
            throw error
        }
    }

    const sortEntertainment = async () => {
        try {
            const category = await __GetItemsByCategory('Entertainment')
            const foo = category.data
            setBrowseItems(foo)

        } catch (error) {
            throw error
        }
    }

    const sortBooks = async () => {
        try {
            const category = await __GetItemsByCategory('Books')
            const foo = category.data
            setBrowseItems(foo)
        } catch (error) {
            throw error
        }
    }

    const sortTools = async () => {
        try {
            const category = await __GetItemsByCategory('Tools')
            const foo = category.data
            setBrowseItems(foo)
        } catch (error) {
            throw error
        }
    }

    const sortInstruments = async () => {
        try {
            const category = await __GetItemsByCategory('Instruments')
            const foo = category.data
            setBrowseItems(foo)
        } catch (error) {
            throw error
        }
    }

    const sortPantry = async () => {
        try {
            const category = await __GetItemsByCategory('Pantry')
            const foo = category.data
            setBrowseItems(foo)
        } catch (error) {
            throw error
        }
    }


    useEffect(() => {
        getBrowseItems()
    }, [])

    const itemList = props.item
 



    return (
        <div className="browsePage">
            <div className="browsePageTop">

                <h1 className="pageTitle">browse all items</h1>
                
                <div className="catButtons">
                    <button className="btns" onClick={getBrowseItems}>all</button>
                    <button className="btns" onClick={sortAppliances}>appliances</button>
                    <button className="btns" onClick={sortFitness}>fitness</button>
                    <button className="btns" onClick={sortClothing}>clothing</button>
                    <button className="btns" onClick={sortEntertainment}>entertainment</button>
                    <button className="btns" onClick={sortBooks}>books</button>
                    <button className="btns" onClick={sortTools}>tools</button>
                    <button className="btns" onClick={sortInstruments}>instruments</button>
                    <button className="btns" onClick={sortPantry}>pantry</button>
                </div>
                <hr className="greyLine"></hr>
                
                
            </div>







            <div className="itemList">
                {browseItems.map((item) => (
                    <ItemCard
                        //model attributes go here
                        key={item._id}
                        image={item.image}
                        title={item.title}
                        condition={item.condition}
                        category={item.category}
                        description={item.description}
                        onClick={() => props.history.push(`/items/${item.id}`, item = { item })}
                    //model attributes end here
                    />
                ))}
            </div>

        </div>
    );
>>>>>>> e8af2464ea84b367edb82562e38520bc9e45b5f8
}

export default BrowsePage;
