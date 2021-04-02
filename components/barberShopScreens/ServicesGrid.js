import React from 'react'
import {TouchableOpacity,View,Text, ImageBackground,
TouchableNativeFeedback,
Platform,
Dimensions,
} from 'react-native'
 
let {width:screenWidth, height:screenHeight} = Dimensions.get('window')

const ServicesGrid = (props) => {
// let TouchableCom = TouchableOpacity;

// if (Platform.OS==="android" && Platform.Version >= 21){
//   TouchableCom = TouchableNativeFeedback;
// }
  return(
    
  <View style={{flex:1}}>
    <Text>Home Page</Text>
    {/* <TouchableCom style={{flex:1}}
      onPress={props.onSelect}>
      <Card>
    
    <Card.Image style={{height:screenHeight/3, width:screenHeight/2, resizeMode:'stretch'}} source={props.servicesImages}>
  
    </Card.Image>
    <Card.Title style={{fontFamily: 'open-sans-bold'}}>{props.title}</Card.Title>
    <Card.Divider/> */}

    {/* <Text style={{marginBottom: 12 }}>
 {item.detail}
      </Text> */}
      {/* <Button
      
        icon={<Icon name='code' color='#ffffff' />}
        buttonStyle={{borderRadius: 0, marginLeft: 0, marginRight: 0, marginBottom: 0, backgroundColor:'#6c398f'}}
        title='MORE INFO' />
  </Card>
      </TouchableCom> */}
      </View>
      
  );
};
export default ServicesGrid