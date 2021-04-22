import EcommerceBusiness from '../../screens/eCommerce/EcommerceBusiness'
import Color from '../../colors/Color'
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import {Platform } from "react-native"



const EcommerceBusinessStackNavigator = createStackNavigator({
    EcommerceBusiness:{
      screen:EcommerceBusiness,
    navigationOptions:{
      headerTitleAlign:'center',
    headerStyle:{
  backgroundColor: Platform.OS==='android' ? Color.primaryColour  : Color.accentColour
      },
      headerTitleStyle: {
        fontFamily: "open-sans-bold",
        fontWeight: "200"
      },
      headerTintColor: 'white',
    },
  
  },

  
});
const EcommerceBusinessStackNavigation = createAppContainer(EcommerceBusinessStackNavigator);
export default EcommerceBusinessStackNavigation
