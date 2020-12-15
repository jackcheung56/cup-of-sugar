import React, { useState, useEffect } from "react";
import UserCard from "../components/UserCard";
import { __GetAllUsers } from "../services/UserService";

function UserList() {
  //to be implemented with post mvp browse by user feature
  const [allUsers, setAllUsers] = useState({});
  const getUsers = async () => {
    try {
      const data = await __GetAllUsers();
      let scrubTest = data[0];
      setAllUsers(scrubTest);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getUsers();
  }, []);

  const userList = [allUsers];
  return (
    <div>
      <h1>active users</h1>
      <div className="itemList">
        {userList.map((user) => (
          <UserCard key={user.id} name={user.name} />
        ))}
      </div>
    </div>
  );
}

export default UserList;
