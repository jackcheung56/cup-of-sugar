import React from 'react'
import '../styles/ProfCard.css'

const ProfileItemCard = ({ onClick, title, image, condition, category, description, isBorrowed }) => {

    return (
        <div className="card" onClick={onClick}>
            <div className="grid-container">


                <div className="proItemCon">
                    <div className="itemPic">
                        <img className="pic" src={image}></img>
                    </div>
                    <ul class="itemDets">
                        <div>
                            <li className="details">{category}</li>
                        </div>
                        <li className="itemTitle">{title}</li>
                        <li className="description">{description}</li>
                    </ul>
                    <div className="itemStatus">
                        {isBorrowed === true ?
                            <p className="stat">Unavailabile </p>
                            :
                            <p className="stat">Availabile</p>
                        }
                    </div>
                </div>
            </div>

        </div>
    )
}



export default ProfileItemCard












