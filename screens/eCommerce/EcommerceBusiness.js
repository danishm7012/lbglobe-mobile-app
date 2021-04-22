import React from 'react';
import {View ,FlatList, Text} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import HeaderButton from '../../components/headerButton/HeaderButton'
import NationalCompanies from '../../data/companiesData/national'
import BarberServicesGrid from '../../components/barberShopScreens/BarberServicesGrid'


const EcommerceBusiness = props =>{
  
//   const shId = props.navigation.getParam('shopId');
//   const displayedSubCompanies = NationalCompanies.filter(
//     company=> company.companyIds.indexOf(shId) >= 0 );

const shTitle = 'E-commerce Business Learnings';
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
    
  // ListHeaderComponent={ <CustomCarousel/> }
    keyExtractor={(item) => item.id}
   renderItem={renderCompanyItem}
   numColumns={1}
  />
  </View>
);
};

EcommerceBusiness.navigationOptions = navData => {
  
  return{

  headerTitle:'EcommerceBusiness',
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

export default EcommerceBusiness;

