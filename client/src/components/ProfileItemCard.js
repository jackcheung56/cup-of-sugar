import React, { useState, useEffect } from 'react'
import '../styles/ProfCard.css'
import { __GetUser } from '../services/UserService'

const ProfileItemCard = ({ onClick, title, image, condition, category, description, isBorrowed, ownerId }) => {
    const [userName, setUserName] = useState('')

    const getUserName= async () => {
        try {
          const data = await __GetUser(ownerId)
          setUserName(data.name)
        } catch (error) {
          throw error
        }
      }

      useEffect(() => {
        getUserName()
      }, [])


    return (
        <div className="grid-container-profile" onClick={onClick}>
            <div className="item-containerP">
                <div className="leftSide"><img className="itemImage" src={image} alt="item"></img></div>
                <div className="rightSide">
                    <div className="top">
                        <div className="quadTwo">
                            <div className="categoryTag">
                                <p className="tagText">{category}</p>
                            </div>
                        </div>
                        <div className="quadOne">
                            <div className="categoryTag">
                                {!isBorrowed === true ?
                                <p className="tagText">Available</p>
                                :
                                <p className="tagText">Unavailable</p>
                            }
                            </div>
                        </div>
                    </div>
                    <div className="bottom"></div>
                    <ul className="text">
                        <li className="tOne">{title}</li>
                        <li className="tThree">Posted by: {userName}</li>
                        <li className="tFour">{condition} Condition</li>
                        <li className="tTwo">{description}</li>
                    </ul>
                </div>
            </div>
        </div>
    )
}



export default ProfileItemCard












