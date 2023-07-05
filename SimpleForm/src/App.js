import React ,{useState} from "react";

import AddUser from './components/Users/AddUser.js';
import UsersList from './components/Users/UsersList.js'


function App() { 
   const [usersList,setUsersList]=useState([]);

   const addUserHandler=(uname,uage)=>{
    setUsersList(prevUsersList=>
      {return [...prevUsersList,{id:Math.random(),name:uname,age:uage}];
    });
   };

  return (
    <>
    <AddUser onAddUser={addUserHandler}/>
    <UsersList users={usersList}/>
    </>
  );
}

export default App;
