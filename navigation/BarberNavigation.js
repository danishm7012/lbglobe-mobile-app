import React from 'react';
import {StyleSheet,Image, View,Text, SafeAreaView} from 'react-native'
import { createAppContainer } from "react-navigation";
import { createDrawerNavigator, DrawerItems } from 'react-navigation-drawer'
import { Ionicons } from '@expo/vector-icons';
import {Platform,Dimensions } from "react-native"
import Color from '../colors/Color'
import BarberShopsStackNavigation from './stackNavigation/BarberShopsStackNavigation'
import AboutStackNavigation from './stackNavigation/AboutStackNavigation'
import PartnersStackNavigation from './stackNavigation/PartnersStackNavigation';
import ContactUsStackNavigation from './stackNavigation/ContactUsStackNavigation';
import TermandConditionStackNavigation from './stackNavigation/TermandConditionStackNavigation';
import FAQStackNavigation from './stackNavigation/FAQStackNavigation';
import { ScrollView } from 'react-native-gesture-handler'
import DigitalMarketingStackNavigation from './stackNavigation/DigitalMarketingStackNavigation'
import EcommerceBusinessStackNavigation from './stackNavigation/ECommerceStackNavigation'
import ITServicessStackNavigation from './stackNavigation/ITServicesStackNavigation';



const MainDrawerNavigator = createDrawerNavigator({
    BarberShops: {
      screen: BarberShopsStackNavigation,
      navigationOptions:{
        drawerIcon: () => (
          <Ionicons name = 'home' size={25} color='white'/>
        ),
        
        drawerLabel:'Home',
      }
    
    },

EcommerceBusiness:{
  screen:EcommerceBusinessStackNavigation,
  navigationOptions: {
    drawerIcon: () => (
      <Ionicons name = 'people-sharp'size={25} color='white'/>
    ),
   drawerLabel:'eCommerce Business' 
  }
},

ITServicess:{
  screen: ITServicessStackNavigation,
  navigationOptions:{
    drawerIcon: () => (
      <Ionicons name = 'reader-sharp'size={25} color='white'/>
    ),
    drawerLabel:'IT Services',
  }
},


DigitalMarketing:{
  screen: DigitalMarketingStackNavigation,
  navigationOptions:{
    drawerIcon: () => (
      <Ionicons name = 'hand-left-sharp'size={25} color='white'/>

    ),
    drawerLabel:'Digital Marketing',
  }
},


  
ContactUs:{
  screen: ContactUsStackNavigation,
  navigationOptions:{
    drawerIcon: () => (
      <Ionicons name = 'call-sharp'size={25} color='white'/>
    ),
    drawerLabel:'ContactUs',
  }
},



    About:{
      screen:AboutStackNavigation,
      navigationOptions:{
        
        drawerIcon: () => (
          <Ionicons name = 'information-circle-sharp'size={29} color='white'/>
        ),
        drawerLabel:'AboutUs',
      }
    },

    Term_Condition:{
      screen:TermandConditionStackNavigation,
      navigationOptions:{
        
        drawerIcon: () => (
          <Ionicons name = 'information-circle-sharp'size={29} color='white'/>
        ),
        drawerLabel:'Term&Condition',
      }
    },
  
    FAQ:{
      screen:FAQStackNavigation,
      navigationOptions:{
        
        drawerIcon: () => (
          <Ionicons name = 'information-circle-sharp'size={29} color='white'/>
        ),
        drawerLabel:'FAQ',
      }
    },
  

  
  
  },{
    contentComponent: (props) => (
      <ScrollView>
      <SafeAreaView style={{flex:1}}
      forceInset={{ top: '', horizontal: 'never' }}>
          <View style={styles.drawerLogo}>
  
            <Image style={{flex:1,width:'100%',resizeMode:'cover'}} source={require('../assets/images/logos/logo.png')} />
          </View>
        
          <DrawerItems {...props} />
        
      </SafeAreaView>
      </ScrollView>
      
    ),
    drawerBackgroundColor: Color.drawerColor,
    contentOptions:{
      activeTintColor:'hsla(360, 100%, 100%, 1.0)',
      activeBackgroundColor : Color.accentColour,
      inactiveTintColor: '#808080',
      itemsContainerStyle: {
        marginVertical: 30,
        
      },
      labelStyle:{
        fontFamily: 'open-sans-bold',
        fontSize:18,
       
      },
      itemStyle:{
        marginVertical:10,
         
       
      },
      
    }
  });
  export default createAppContainer(MainDrawerNavigator);
  
  const styles = StyleSheet.create({
    icon: {
      width: 24,
      height: 24,
    },
    drawerLogo:{
      flex:1,
      height: 100,
      alignItems: 'center',
      marginTop:120, 
      justifyContent: 'center',
      borderBottomWidth: 2,
      borderBottomColor: '#C0C0C0',
      borderBottomEndRadius:38,
      borderBottomStartRadius:38,
     
    },
  });