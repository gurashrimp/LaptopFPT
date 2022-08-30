import React, { useState, createContext } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage'
import { login, register, getUserById, getUser } from './UserService'
import constants from "../../utils/constants";

export const UserContext = createContext();

export const UserContextProvider = (props) => {
  const { children } = props;
  const [isLogin, setIsLogin] = useState(false);
  const [user, setUser] = useState({});


  const onLogin = async (username, password) => {
    try {
      const result = await login(username, password);
      if (result && result.token) {
        await AsyncStorage.setItem(constants.STORAGE_KEY, result.token);
        setIsLogin(true);
        return true;
      }
    } catch (error) {
      setIsLogin(false);
      console.log(error);
    }
  }

  const onRegister = async (username, password, confirmPassword, name, phone, address) => {
    try {
      const res = await register(username, password, confirmPassword, name, phone, address);
      console.log(res)
      return res.status;
    } catch (error) {
      console.log('Register Failed : ', error)
    }
  }

  const onGetUser = async () => {
    try {
        const res = await getUser();
        if (res) setUser(res);
    } catch (error) {
        console.log( "onGetUser" , error);
    }
}


  return (
    <UserContext.Provider
      value={{
        onLogin, onRegister, onGetUser, isLogin , user
      }}>
      {children}
    </UserContext.Provider>
  )
}

export default UserContext