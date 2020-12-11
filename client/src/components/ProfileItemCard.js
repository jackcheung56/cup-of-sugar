import React from 'react'
import '../styles/ProfCard.css'

const ProfileItemCard = ({ onClick, title, image, condition, category, description, isBorrowed }) => {

    return (
        <div onClick={onClick}>



            <div className="proItemCon">
                <ul class="itemDets">
                    <div className="itemPic">
                        <img className="pic" src={image}></img>
                    </div>
                    <p className="tagDetails">{category}</p>
                    <h3 className="itemTitle">{title}</h3>
                    <p className="itemDescription">{description}</p>
                    {/* <div className="itemStatus">
                            {isBorrowed === true ?
                                <p className="stat">Unavailabile </p>
                                :
                                <p className="stat">Availabile</p>
                            }
                        </div> */}
                </ul>

            </div>


        </div>
    )
}



export default ProfileItemCard












