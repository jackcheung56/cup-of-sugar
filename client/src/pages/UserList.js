import React, { useState, useEffect } from "react";
import UserCard from '../components/UserCard'
import { __GetAllUsers } from '../services/UserService'



function UserList() {
    const [allUsers, setAllUsers] = useState({})


    const getUsers = async () => {
        try {
          const data = await __GetAllUsers()
          console.log('userlist', data)
          let scrubTest = data[(0)]
          setAllUsers(scrubTest)
        } catch (error) {
          console.log(error)
        }
      }
    

    useEffect(() => {
        getUsers()
      }, [])

    
    const userList = [allUsers]

    return (
        <div>
            <h1>active users</h1>
            <div className="itemList">
                {userList.map((user) => (
                    <UserCard
                        //model attributes go here
                        key={user.id}
                        name={user.name}
                        // onClick={() => history.push(`/items/${item.id}`, item={item})} 
                        //model attributes end here
                    />
                ))}
            </div>
        </div>
    );
}

export default UserList;
