import React from 'react';
import './UsersList.css'
import UserItem from './UserItem';

const UsersList = props => {
  const {users} = props 
  if (users.length === 0) {
    return <div className="center">
      <h2>No users found.</h2>
    </div>
  }

  return <ul className="users-list">
    {users.map((user)=>{
      return <UserItem 
                key={user.id}
                id={user.id}
                image={user.image}
                name={user.name}
                placeCount={user.places}
              />
    })}
  </ul>
}

export default UsersList