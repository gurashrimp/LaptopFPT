
import React, {useContext} from 'react'
import { NavigationContainer } from '@react-navigation/native';
import ProductNavigation from '../product/ProductNavigation';
import UserNavigation from '../user/UserNavigation';
import UserContext from '../user/UserContext';
const AppNavigation = () => {
  return (
    <NavigationContainer>
        <ProductNavigation></ProductNavigation>
    </NavigationContainer>
  )
}

export default AppNavigation
