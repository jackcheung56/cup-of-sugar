import React, { useState, useEffect } from 'react'
import { __GetItemById } from '../services/ItemService'
import { __CreateBorrow } from '../services/BorrowService'
import { __GetUser } from "../services/UserService";
import { Link } from 'react-router-dom'
import '../styles/Details.css'
function ItemDetailsPage(props) {

    const [detail, setDetail] = useState({})
    const [admin, setAdmin] = useState(false)
    const [ownerName, setOwnerName] = useState('')
    const itemOwner = props.location.state.item.owner_id
    const loggedUser = props.currentUser.id
    console.log(props)
    const detailRoute = props.location.state.item.id
    const storedItemData = props.location.state.item
    const storedUserData = props.currentUser


    //console.log('is borrowed', detail.isBorrowed)



    const [message, setMessage] = useState('')
    const [duration, setDuration] = useState('')
    //This data will be stored in the newly created Borrow
    //it will appear in the owner's notifications based on OwnerId
    //userId is reserved for the user who is requesting the borrow
    const [toggle, setToggle] = useState(false)
    const [reqToggle, setReqToggle] = useState(false)
    const [formToggle, setFormToggle] = useState(false)
    //Stored user is the current user
    // console.log(props)
    // console.log('stored user', storedUserData)
    // console.log('stored item', storedItemData)

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
        duration: duration,
        message: message,
    }
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
    const durationInput = (event) => {
        event.preventDefault();
        setDuration(event.target.value);
    };
    const messageInput = (event) => {
        event.preventDefault();
        setMessage(event.target.value);
    };
    const handleFillout = async (event) => {
        event.preventDefault()
        try {
            setFormToggle(!formToggle)
        } catch (error) {
            console.log(error)
        }
    }
    const handleClick = async (event) => {
        //handles borrow ticket creation
        event.preventDefault()
        try {
            const borrowRequest = await __CreateBorrow(formData)
            console.log(borrowRequest)


            setToggle(true)
            setReqToggle(true)
            setFormToggle(!formToggle)
            // setTimeout(() => {
            //     props.history.push('/items/all');
            // }, 1500)
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

    const backButton = async (event) => {
        event.preventDefault()
        try {
            props.history.goBack()
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <div className="detailsPage">
            <button className="detailButton" onClick={backButton}>back</button>
            {admin === true ?
                <div className="adminDisplay">
                    <Link to={{ pathname: `/items/update/${detail.id}`, detail: { detail } }}><button className="detailButton">Edit</button></Link>
                    <Link to={{ pathname: `/items/delete/${detail.id}`, detail: { detail } }}><button className="detailButton">Delete</button></Link>
                    <div className="detailsContainer">
                        <img src={detail.image}></img>
                        <h1>{detail.title}</h1>
                        <p>Owner: {ownerName}</p>
                        <p>Category: {detail.category}</p>
                        <p>Condition: {detail.condition}</p>
                        <p>Description: {detail.description}</p>
                        <div className="item status">
                            {detail.isBorrowed === true ?
                                <p>item unavailabile </p>
                                :
                                <p>availabile</p>
                            }
                        </div>
                    </div>
                </div>
                :
                <div className="normalDisplay">
                    <div className="detailsContainer">
                        <img src={detail.image}></img>
                        <h1>{detail.title}</h1>
                        <p>Owner: {ownerName}</p>
                        <p>Category: {detail.category}</p>
                        <p>Condition: {detail.condition}</p>
                        <p>Description: {detail.description}</p>
                        <div className="item status">
                            {detail.isBorrowed === true ?
                                <p>unavailabile </p>
                                :
                                <p>availabile</p>
                            }
                        </div>

                    </div>

                    {!detail.isBorrowed === true ?
                        <div className="reqDropDown">
                            <div className="borrowDrop" onClick={handleFillout}>Request Borrow</div>
                            <div className={formToggle ? "reqUI" : "hideUI"}>
                                <input
                                    className={formToggle ? "reqUI" : "hideUI"}
                                    placeholder="Enter duration of borrow"
                                    name="duration"
                                    value={duration}
                                    onChange={durationInput}
                                ></input>
                                <input
                                    className={formToggle ? "reqUI" : "hideUI"}
                                    placeholder="Message for item owner"
                                    name="duration"
                                    value={message}
                                    onChange={messageInput}
                                ></input>
                                <button className={reqToggle ? 'reqVis' : 'reqGone'} onClick={handleClick}>Confirm</button>
                            </div>
                            <div className={toggle ? 'visible' : 'invisible'}>
                                <p>REQUEST SENT</p>
                                <button className={toggle ? 'visible' : 'invisible'} onClick={backButton}>return to browse?</button>
                            </div>
                        </div>
                        :
                        <div></div>
                    }
                </div>
            }
        </div>
    );
}
export default ItemDetailsPage;