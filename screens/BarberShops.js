import React from 'react';
import { FlatList } from 'react-native-gesture-handler'
import ServicesData  from '../data/ServicesData'
import ServicesGrid from '../components/barberShopScreens/ServicesGrid'
import {View, Share } from 'react-native'
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import HeaderButton from '../components/headerButton/HeaderButton'



const BarberShops = props =>{

  const renderGridItem = itemData =>{
    return(
          <ServicesGrid/> 
      // title={itemData.item.title}
      // servicesImages = {itemData.item.image}
      // onSelect={()=>{
      //   props.navigation.navigate({routeName: 'Barber_Services',
      //   // params:{
      //   //   shopId : itemData.item.id
      //   // }
      // });
      // }}
      
     
    );
  };
  
  return (
  <View style={{width:'100%'}}>    
  <FlatList 
  keyExtractor={(item)=> item.id}
  data={ServicesData}
  renderItem={renderGridItem} 
  />
  </View>
);
};

BarberShops.navigationOptions = navData => {
  return{    
  headerTitle:'Homes',
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



