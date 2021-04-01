import React from 'react';
import {View , Text} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import HeaderButton from '../../components/headerButton/HeaderButton'


const ContactUs = props =>{
  return(
  <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
    <Text>Contact Us</Text>
  </View>
);
};

ContactUs.navigationOptions = navData => {
  
  return{

  headerTitle:'ContactUs',
  headerLeft: () => (
  <HeaderButtons HeaderButtonComponent = {HeaderButton}>
    <Item 
    title='Menu' 
    iconName='ios-menu' 
    onPress={() => {
      navData.navigation.toggleDrawer();
    }} /> 

  </HeaderButtons>
)
  }
}

export default ContactUs;