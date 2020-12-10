import React, { useState, useEffect } from 'react'
import { __GetItemById } from '../services/ItemService'
import { __CreateBorrow } from '../services/BorrowService'
import { __GetUser } from "../services/UserService";
import { Link } from 'react-router-dom'
import '../styles/Details.css'

function ItemDetailsPage(props) {
    const [detail, setDetail] = useState({})
    const [toggle, setToggle] = useState(false)
    const [reqToggle, setReqToggle] = useState(false)
    const [admin, setAdmin] = useState(false)
    const [ownerName, setOwnerName] = useState('')
    const itemOwner = props.location.state.item.owner_id
    const loggedUser = props.currentUser.id
    const detailRoute = props.location.state.item.id
    const storedItemData = props.location.state.item
    const storedUserData = props.currentUser

    //This data will be stored in the newly created Borrow
    //it will appear in the owner's notifications based on OwnerId
    //userId is reserved for the user who is requesting the borrow

    //Stored user is the current user
    console.log('stored user', storedUserData)
    console.log('stored item', storedItemData)

    const formData = {
        user_id: loggedUser,
        contactId: detail.ownerId,
        item_id: detailRoute,
        photo: detail.image,

        holder: ownerName,
        info: storedUserData.email,
        number: storedUserData.phone,
        requester: storedUserData.name,
        product: storedItemData.title,

        accepted: 'f',
        duration: 'user input',
        message: '',
        form: '',        
    }


    console.log(formData)




    //get user by id

    const getItemOwnerName = async () => {
        try {
            const data = await __GetUser(itemOwner)
            let foo = data.name
            setOwnerName(foo)
        } catch (error) {
            console.log(error)
        }
    }

    


    const getDetails = async () => {
        //gets the item details for this page
        try {
            const data = await __GetItemById(detailRoute)
            setDetail(data)
        } catch (error) {
            console.log(error)
        }
    }

    console.log('OWNER ID', detail.ownerId)

    const handleClick = async (event) => {
        //handles borrow ticket creation
        event.preventDefault()
        try {
            const borrowRequest = await __CreateBorrow(formData)
            console.log(borrowRequest)
            //Need to Change state to reflect "request sent" (pop up)
            setToggle(true)
            setReqToggle(true)
            // props.history.goBack()
        } catch (error) {
            console.log(error)
        }
    }


    const adminToggle = () => {
        if (itemOwner === loggedUser) {
            setAdmin(true)
        } else {
            return
        }
    };


    useEffect(() => {
        getDetails()
        adminToggle()
        getItemOwnerName()
    }, [])

 

    return (
        <div className="detailsPage">

            {admin === true ?
                <div className="adminDisplay">
                    <Link to={{ pathname: `/items/update/${detail.id}`, detail: { detail } }}><button>Edit</button></Link>
                    <Link to={{ pathname: `/items/delete/${detail.id}`, detail: { detail } }}><button>Delete</button></Link>
                </div>
                :
                <div className="normalDisplay">
                    <button className={reqToggle ? 'reqVis' : 'reqGone'} onClick={handleClick}>Request Borrow</button>
                </div>
            }

            <h1>Item Details</h1>
            <img src={detail.image}></img>
            <div className="detailsContainer">
                <h1 className={toggle ? 'visible' : 'invisible'}>REQUEST SENT</h1>
                <h1>{detail.title}</h1>
                <p>Category: {detail.category}</p>
                <p>Condition: {detail.condition}</p>
                <p>Description: {detail.description}</p>
            </div>

        </div>
    );
}

export default ItemDetailsPage;


