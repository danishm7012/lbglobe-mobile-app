import React from 'react'
import {TouchableOpacity,View,Text, ImageBackground,
TouchableNativeFeedback,
Platform,
Dimensions,
Image,
} from 'react-native'
 import { Card,Avatar, Icon, Button } from 'react-native-elements'
let {width:screenWidth, height:screenHeight} = Dimensions.get('window')

const ServicesGrid = (props) => {
let TouchableCom = TouchableOpacity;

if (Platform.OS==="android" && Platform.Version >= 21){
  TouchableCom = TouchableNativeFeedback;
}
  return(
    
  <View style={{flex:1}}>
    
    <TouchableCom style={{flex:1}}
       onPress={props.onSelect}
      
      >
<Card>
    
    <Card.Image style={{height:screenHeight/3, width:screenHeight/2, resizeMode:'stretch'}} source={props.servicesImages}>
  
    </Card.Image>
    <Card.Divider />
    <View style={{flex:1, flexWrap:'wrap', flexDirection:'row',justifyContent:'space-between',alignItems:'center', marginBottom:5}}>
    <Avatar
  size="small"
  rounded
  source={props.serviceLogo}
  
  //imageProps={{backgroundColor: '#0f385a'}}
  //overlayContainerStyle={{backgroundColor: '#0f385a'}}
  onPress={() => console.log("Works!")}
  activeOpacity={0.7}
>

  </Avatar>
    <Card.Title style={{fontFamily: 'open-sans-bold',color:'#808080'}}>{props.title}</Card.Title>
    </View>
    {/* <View style={{flex:1, flexWrap:'wrap', flexDirection:'row',justifyContent:'flex-end',alignItems:'flex-start', marginBottom:5}}>
    <Card.Title style={{fontFamily: 'open-sans-bold',fontSize:11}}>{props.title}</Card.Title>

</View> */}
    <Card.Divider/>

    {/* <Text style={{marginBottom: 12 }}>
 {item.detail}
      </Text> */}
      <Button
       onPress={props.onSelect}
       // icon={<Icon name='code' color='#ffffff' />}
        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor:'#0f385a'}}
        title='MORE INFO' />
  </Card>

      </TouchableCom>
      </View>
      
  );
};
export default ServicesGrid