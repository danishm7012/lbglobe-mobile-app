import React from 'react';
import ServicesData  from '../data/ServicesData'
import ServicesGrid from '../components/barberShopScreens/ServicesGrid'
import {View,FlatList, Text, Share } from 'react-native'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import HeaderButton from '../components/headerButton/HeaderButton'



const BarberShops = (props) =>{

  const renderItem = (itemData) =>{ 
   return( 
       <ServicesGrid  
      title={itemData.item.title}
      servicesImages = {itemData.item.image}
      serviceLogo = {itemData.item.logo}
         onSelect={()=>{
         props.navigation.navigate({routeName: 'Barber_Services',
         params:{
           shopId : itemData.item.id,
           shopTitle : itemData.item.title
         }
      });
      }}
      />
    
  );
  }
  return (
    
  <View style={{width:'100%'}}>    
 
  <FlatList
        data={ServicesData}
        keyExtractor={item => item.id}
        renderItem={renderItem}
        numColumns={1}
      />

  </View>
);
};

BarberShops.navigationOptions = navData => {
  return{    
  headerTitle:'Home',
  headerLeft: () => (
  <HeaderButtons HeaderButtonComponent = {HeaderButton}>
    <Item 
    title='Menu' 
    iconName='ios-menu' 
    onPress={() => {
      navData.navigation.toggleDrawer();
    }} /> 

  </HeaderButtons>
),
headerRight: () => (  <HeaderButtons HeaderButtonComponent={HeaderButton}>
  <Item  iconName="share-social-sharp"
 onPress={
  () => {
    Share.share({
      title: 'Paradisegoc App',
      message:  'https://reactnative.dev/docs/share'  + '\nHy! Happy to see you!'
    }).then((res) => console.log(res))
      .catch((error) => console.log(error))
  }
 } />
  
</HeaderButtons>
)
  }
}

export default BarberShops;



