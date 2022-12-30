import React, { useState } from 'react';
import Adduser from './components/Users/Adduser';
import UserList from './components/Users/UserList';



function App() {
  const[userList, setUserList] = useState([]);

  const AddUserHandler = (n,a) => {
    
    setUserList((prevState)=> {
        return [...prevState, {name: n, age: a}]
    })
  }
  return (
    <div>
   <Adduser onAddUser ={AddUserHandler}/>
   <UserList users={userList}/>
    </div>
  );
}

export default App;
