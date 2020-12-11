import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';
import ItemCard from '../components/ItemCard'
import { __GetItems } from "../services/ItemService";
import { __GetItemsByCategory } from "../services/ItemService";
import '../styles/Browse.css'

function BrowsePage(props) {



    console.log('BROWSE', props)
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

                <h1 className="pageTitle">browse</h1>
                
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
                {browseItems.map((item, idx) => (
                    <ItemCard
                    //model attributes go here
                        id={item.id}
                        key={idx}
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
}

export default BrowsePage;






