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
    const detailRoute = props.location.state.item.id
    const storedItemData = props.location.state.item
    const storedUserData = props.currentUser
    const [message, setMessage] = useState('')
    const [duration, setDuration] = useState('')
    //This data will be stored in the newly created Borrow
    //it will appear in the owner's notifications based on OwnerId
    //userId is reserved for the user who is requesting the borrow
    const [toggle, setToggle] = useState(false)
    const [reqToggle, setReqToggle] = useState(false)
    const [formToggle, setFormToggle] = useState(false)
    //Stored user is the current user

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
            setToggle(true)
            setReqToggle(true)
            setFormToggle(!formToggle)
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
            {admin === true ?
                <div className="adminDisplay">
                    <div className="uiDisplayButtons">
                        <button className="backBtn" onClick={backButton}>back</button>
                        <div className="adminUIButtons">
                            <Link to={{ pathname: `/items/update/${detail.id}`, detail: { detail } }}><button className="adminBtn">Edit</button></Link>
                            <Link to={{ pathname: `/items/delete/${detail.id}`, detail: { detail } }}><button className="adminBtn">Delete</button></Link>
                        </div>
                    </div>
                    <div className="grid-containerID">
                        <div className="detailsContainer">
                            <div className="detailsPhotoContainer">
                                <img className="detailsPhoto" src={detail.image}></img>
                            </div>
                            <div className="detailsText">
                                <h1 className="dText">{detail.title}</h1>
                                <p className="dBulletPoint">Owner: {ownerName}</p>
                                <p className="dBulletPoint">Category: {detail.category}</p>
                                <p className="dBulletPoint">Condition: {detail.condition}</p>
                                <p className="dBulletPoint">Description: {detail.description}</p>
                                <div className="itemStatusDet">
                                    {detail.isBorrowed === true ?
                                        <p className="availStatus">item unavailabile </p>
                                        :
                                        <p className="availStatus">availabile</p>
                                    }
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                :
                <div className="normalDisplay">
                    <div className="uiDisplayButtons">
                        <button className="backBtn" onClick={backButton}>back</button>
                    </div>
                    <div className="grid-containerID">
                        <div className="detailsContainer">
                            <div className="detailsPhotoContainer">
                                <img className="detailsPhoto" src={detail.image}></img>
                            </div>
                            <div className="detailsText">
                                <h1 className="dText">{detail.title}</h1>
                                <p className="dBulletPoint">Owner: {ownerName}</p>
                                <p className="dBulletPoint">Category: {detail.category}</p>
                                <p className="dBulletPoint">Condition: {detail.condition}</p>
                                <p className="dBulletPoint">Description: {detail.description}</p>
                                <div className="itemStatusDet">
                                    {detail.isBorrowed === true ?
                                        <p className="availStatus">unavailabile </p>
                                        :
                                        <p className="availStatus">availabile</p>
                                    }
                                </div>
                            </div>
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
                                <p className="responseMsg">Request Sent!</p>
                                <button className={toggle ? 'visible' : 'invisible'} onClick={backButton}>Return to Browse?</button>
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