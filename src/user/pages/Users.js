import React from 'react';
import UsersList from '../components/UsersList';

const Users = () =>{
  const USERS = [
    {
      id: "u1",
      name: "Juan Hutt",
      image:
      "https://upload.wikimedia.org/wikipedia/commons/b/b9/Place_Jacobins_Lyon.jpg",
      places: 3,
    },
  ];
  return <UsersList users={USERS}/>
}

export default Users;