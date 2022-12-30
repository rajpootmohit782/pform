import React, { useState } from 'react'
import Button from '../UI/Button';
import Card from '../UI/Card';
import ErrorModel from '../UI/ErrorModel';
import classes from './Adduser.module.css'

const Adduser = (props) => {
  const [enteredUsername, setEnteredUsername] = useState('')
  const [enteredAge, setEnteredAge] = useState('')
  const [isError , setIserror] = useState(false)

    const addUserHandler = (event) =>{
        event.preventDefault();
        if(enteredUsername.trim().length === 0 || enteredAge === 0){
          setIserror({
            title: 'invalid username',
            message: 'please enter valid name and age (non - empty values)'
          })
          
          return;
        }
        if(+enteredAge < 1){
          setIserror({
            title: 'invalid Age',
            message: 'please enter valid name and age (age must be numeric values)'
          })
          
          return;
        }
        
        props.onAddUser(enteredUsername,enteredAge)
        console.log(enteredUsername,enteredAge);
        setEnteredAge('');
        setEnteredUsername('');
    }

    const usernameChangeaHandler = (e) =>{
      console.log(`usernameChangeaHandler running ==> ${e.target.value}`)
      setEnteredUsername(e.target.value)
      }

    const ageChangeHandler = (event) =>{
        console.log(`ageChangeaHandler running ==> ${event.target.value}`)
        setEnteredAge(event.target.value)
        }
     const onOkclose = () =>{
      setIserror(false)
     }
  return (
    <div>
    { isError &&  < ErrorModel  title = {isError.title} message = {isError.message} okclick ={onOkclose}/>}
   <Card className = {classes.input}>
    <form onSubmit={addUserHandler}>
        <label htmlFor='username'>Username</label>
        <input type='text' id="username" value={enteredUsername} onChange={usernameChangeaHandler}></input>
        <label htmlFor='age'>Age (Years)</label>
        <input type='number' htmlFor="age" value={enteredAge} onChange={ageChangeHandler}></input>
        <Button type='submit'id="age" onChange={addUserHandler}>Add user</Button>
    </form>
</Card>  
</div>
  )
}

export default Adduser