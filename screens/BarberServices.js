import React from 'react';
import {View ,FlatList} from 'react-native';
import ServicesData from '../data/ServicesData';
import NationalCompanies from '../data/companiesData/national'
import BarberServicesGrid from '../components/barberShopScreens/BarberServicesGrid';
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import HeaderButton from '../components/headerButton/HeaderButton'

const BarberServices = props =>{

  const shTitle = props.navigation.getParam('shopTitle');
  const displayedSubCompanies = NationalCompanies.filter(
    company=> company.category === shTitle  );
  
    const renderCompanyItem = itemData =>{
      return(
        <View style={{flex:1 }}>
          
         
            
            <BarberServicesGrid
            title={itemData.item.name}
             shopslogo={itemData.item.logo}
             phnNum = {itemData.item.phoneNo}
             addrss={itemData.item.address}
            onSelect={()=>{
              props.navigation.navigate({routeName: 'BarberBook_Appointment',
              params:{
                shopDetail : itemData.item.id
              }
            });
            }}
            />
          
</View>
      );
    };
    

  return(
    
    
    <View style={{flex:1}}>
    <FlatList data={displayedSubCompanies}
      
      keyExtractor={(item) => item.id}
     renderItem={renderCompanyItem}
     numColumns={1}
    />
    </View>
);
};
BarberServices.navigationOptions = navigationData => {
  const shId = navigationData.navigation.getParam('shopId');
  const selectedCompany = ServicesData.find(shop =>shop.id===shId);

  return{
    headerTitle: selectedCompany.title, 
    headerLeft: () => (
      <HeaderButtons HeaderButtonComponent = {HeaderButton}>
        <Item 
        title='Menu' 
        iconName='ios-menu' 
        onPress={() => {
          navigationData.navigation.toggleDrawer();
        }} /> 
    
      </HeaderButtons>
    ),
    headerRight: () => (  <HeaderButtons HeaderButtonComponent={HeaderButton}>
      <Item title="compdetail"
      iconName="ios-star"/>
    </HeaderButtons>
    )
  };

};


export default BarberServices;

