import ITServicess from '../../screens/itServices/ITServicess'
import Color from '../../colors/Color'
import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import {Platform } from "react-native"



const ITServicessStackNavigator = createStackNavigator({
    ITServicess:{
      screen:ITServicess,
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
const ITServicessStackNavigation = createAppContainer(ITServicessStackNavigator);
export default ITServicessStackNavigation
