import React from 'react'
import { useEffect ,useState } from 'react'
import UserCard from './UserCard'
import axios from 'axios'

const UserList = () => {
     const [userslist,setUserslist]=useState([]);
    
    useEffect(() => {
        axios
        .get('https://jsonplaceholder.typicode.com/users')
        .then(res =>{setUserslist(res.data ) })
        .catch(err=> {console.log(err)})
 
  },[]);
    
    return (
        <div className="d-flex justify-content-around flex-wrap">
            {
                userslist.map((user, index) => <UserCard user={user} key={index} />)
            }
        </div>
    )
}

export default UserList
