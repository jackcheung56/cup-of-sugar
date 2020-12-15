import React from 'react'
import '../styles/BorrowCard.css'

const BorrowCard = ({ id, accepted, duration, photo, product }) => {
    return (
        <div className="grid-container-borrows">

            <div className="item-containerB">
                <div className="leftSide"><img className="itemImage" src={photo} alt="borrow item"></img></div>
                <div className="rightSide">
                    <div className="topB">
                        <div className="quadTwoB">
                            <div className="categoryTagB">
                                <p className="tagTextB">Borrowed</p>
                            </div>
                        </div>
                        <div className="quadOneB"></div>
                    </div>
                    <div className="bottomB"></div>
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


