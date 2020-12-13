import React from 'react'
import '../styles/BorrowCard.css'

const BorrowCard = ({ id, accepted, duration, photo, product }) => {
    return (
        <div className="grid-container-borrows">

            <div className="item-container">
                <div className="leftSide"><img className="itemImage" src={photo} alt="borrow item"></img></div>



                <div className="rightSide">
                    <div className="top">
                        <div className="quadTwo">
                            <div className="categoryTag">
                                <p className="tagText">Borrowed</p>
                            </div>

                        </div>
                        <div className="quadOne"></div>
                    </div>

                    <div className="bottom"></div>

                    <ul className="text">
                        <li className="tOneB">{product}</li>
                        <li className="tThreeB"></li>
                        <li className="tFourB"></li>
                        <li className="tTwoB"></li>
                    </ul>
                </div>




            </div>



        </div>
    )
}
export default BorrowCard


// <div>
// <h3>{product}</h3>
// <h3>{duration}</h3>
// <h3>{id}</h3>
// <h3>{accepted}</h3>
// </div>



