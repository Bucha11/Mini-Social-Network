import React, { useState } from 'react';
import {useDispatch} from 'react-redux'
import { useHistory } from 'react-router-dom';
import { LoginAction } from '../../Redux/LoginReducer/LoginActions';


export const Login=()=> {
  let history = useHistory()

    const[loginValue,setLoginValue]=useState('')
    const loginHandler=(loginValue:string)=>{setLoginValue(loginValue)}
    const dispatch=useDispatch()
const login=()=>{
  history.push('/feed/allfeed')
  dispatch(LoginAction(loginValue))
}  
  return (
    <div >
      <p>Введите имя</p>
      <input type='text' placeholder='Ваше имя' onChange={(e)=>{loginHandler(e.target.value)}} value={loginValue}/>
      <button onClick={login}>Продолжить</button>
    </div>
  );
}