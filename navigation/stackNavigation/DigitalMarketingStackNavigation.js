import DigitalMarketing from '../../screens/digitalMarketing/DigitalMarketing'
import Color from '../../colors/Color'
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import {Platform } from "react-native"



const DigitalMarketingStackNavigator = createStackNavigator({
    DigitalMarketing:{
      screen:DigitalMarketing,
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
const DigitalMarketingStackNavigation = createAppContainer(DigitalMarketingStackNavigator);
export default DigitalMarketingStackNavigation
