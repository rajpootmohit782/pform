import React, { useState,useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';

const emailReducer =(state,action) =>{
  if(action.type === 'USER_INPUT'){
    //console.log('input')
     return { value : action.val , isValid: action.val.includes('@')}
  }
  if(action.type ==='INPUT_BLUR'){
    //console.log(state.value)
      return{value: state.value, isValid: state.value.includes('@')
      }
  }
  return {value: '',isValid: false}
}

const passwordReducer =(state,action) =>{
  if(action.type === 'USER_INPUT'){
    //console.log('input')
     return { value : action.val , isValid: action.val.length > 6}
  }
  if(action.type ==='INPUT_BLUR'){
    //console.log(state.value)
      return{value: state.value, isValid: state.value.length > 6
      }
  }
  return {value: '',isValid: false}
}

const Login = (props) => {
 // const [enteredEmail, setEnteredEmail] = useState('');
  //const [emailIsValid, setEmailIsValid] = useState();
  //const [enteredPassword, setEnteredPassword] = useState('');
 // const [passwordIsValid, setPasswordIsValid] = useState();
  const [formIsValid, setFormIsValid] = useState(false);
  const [enteredCollage, setEnteredCollage] = useState('');
  const [collageIsValid, setCollageIsValid] = useState();

 const [emailState , dispatchEmail] = useReducer(emailReducer, {
  value: '',
  isValid: null,
 })

 const [passwordState , dispatchPassword] = useReducer(passwordReducer, {
  value: '',
  isValid: null,
 })

  //useEffect(() =>{
  //  console.log('useeffect running ')
//
 //   return () =>{
  //    console.log('cleaning last')
  //  }
 // }, [enteredCollage])


 // useEffect(() => {
   
 //   const identifer=  setTimeout(() => {
  //  console.log('useeffect')
   // setFormIsValid(
   //   enteredEmail.includes('@') && enteredPassword.trim().length > 6 && enteredCollage.trim().length >1
  //  );
  //  },5000);
//
  //  return() =>{
   //   console.log('cleanup');
    //  clearTimeout(identifer);
   // }
 // },[enteredEmail,enteredPassword,enteredCollage])

  const emailChangeHandler = (event) => {
    dispatchEmail({type: 'USER_INPUT', val: event.target.value})

    setFormIsValid(
      emailState.isValid && passwordState.value.trim().length > 6
    );
  };

  const passwordChangeHandler = (event) => {
    dispatchPassword({type: 'USER_INPUT', val: event.target.value});

    setFormIsValid(
      passwordState.value.trim().length > 6 && emailState.isValid
    );
  };

  const collageChangeHandler = (event) =>{
    setEnteredCollage(event.target.value)
  }

  const validateEmailHandler = () => {
    //setEmailIsValid(emailState.includes('@'));
    console.log('emailstate')
    dispatchEmail({type: 'INPUT_BLUR'})
  };

  const validatePasswordHandler = () => {
    //setPasswordIsValid(enteredPassword.trim().length > 6);
    dispatchPassword({type: 'INPUT_BLUR'})
  };

  const validateCollageHandler = () => {
    setCollageIsValid(enteredCollage.trim().length > 1);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(emailState.value, passwordState.value);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control} ${
            emailState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={emailState.val}
            onChange={emailChangeHandler}
            onBlur={validateEmailHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            passwordState.isValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={passwordState.val}
            onChange={passwordChangeHandler}
            onBlur={validatePasswordHandler}
          />
        </div>
        <div
          className={`${classes.control} ${
            collageIsValid === false ? classes.invalid : ''
          }`}
        >
          <label htmlFor="collage">Collage name</label>
          <input
            type="text"
            id="collage"
            value={enteredCollage}
            onChange={collageChangeHandler}
            onBlur={validateCollageHandler}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
