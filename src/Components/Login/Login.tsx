import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router-dom";
import { LoginAction } from "../../Redux/UserReducer/UserAction";

export const Login = () => {
  let history = useHistory();

  const [LoginValue, setLoginValue] = useState("");
  const loginHandler = (loginValue: string) => {
    setLoginValue(loginValue);
  };
  const dispatch = useDispatch();
  const login = () => {
    history.push("/feed/allfeed");
    dispatch(LoginAction(LoginValue));
  };
  return (
    <div>
      <p>Введите имя</p>
      <input
        type="text"
        placeholder="Ваше имя"
        onChange={(e) => {
          loginHandler(e.target.value);
        }}
        value={LoginValue}
      />
      <button onClick={login}>Продолжить</button>
    </div>
  );
};
