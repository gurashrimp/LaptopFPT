
import React, {useContext} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import ProductNavigation from '../product/ProductNavigation';
import UserNavigation from '../user/UserNavigation';
import {UserContext} from '../user/UserContext';
const AppNavigation = (props) => {
// const {isLogin} = useContext(UserContext);
const isLogin= true
return (
    <NavigationContainer>
        {
                    isLogin==true?

                <ProductNavigation/> :
                <UserNavigation/>
        }
    </NavigationContainer>
)
}

export default AppNavigation
