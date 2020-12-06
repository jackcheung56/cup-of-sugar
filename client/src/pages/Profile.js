import React, { useState, useEffect } from 'react'
import { useHistory } from 'react-router-dom';
import { __GetItems } from '../services/ItemService'
import { __GetBorrows } from '../services/BorrowService'
import BorrowCard from '../components/BorrowCard'

function Profile(props) {
    console.log(props)
    const [userBorrow, setUserBorrow] = useState([])

    const history = useHistory()

    const getUserBorrows = async () => {
        try {
          const data = await __GetBorrows()
          console.log('PROFILE', data)
          setUserBorrow(data)
        } catch (error) {
          console.log(error)
        }
      }

      useEffect(() => {
        getUserBorrows()
      }, [])
    
    

      return (
        <div>
            <h1>Profile</h1>
            <div className="borrowList">
                {userBorrow.map((borrow) => (
                    <BorrowCard
                        //model attributes go here
                        key={borrow._id}
                        name={borrow._id}
                        //check status-if true-> push to edit borrow
                        // onClick={() => history.push(`/borrows/${borrow.id}`, borrow={borrow})} 

                        //Maybe use:
                        //const response = await ApiClient.put(`/borrows/update/${borrow_id}`, formData)

                        //model attributes end here
                    />
                ))}
            </div>
        </div>
    );
}

export default Profile;





