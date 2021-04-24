import React from 'react'
import { View,Text,Dimensions, TouchableOpacity } from 'react-native'
import AllStyle from '../../AllStyle'
import {PricingCard,SocialIcon, Button,Avatar,Icon,Tile} from 'react-native-elements'
let {width:screenWidth, height:screenHeight} = Dimensions.get('window')

function BarberServicesGrid(props) {
    return (
<Tile
  imageSrc={props.shopslogo}
  imageContainerStyle={{height:screenHeight, width:screenWidth ,backgroundColor:'hsla(207°, 71%, 21% ,0.3)'}}
  title={props.title}
  contentContainerStyle={{flex:1,height:screenHeight, width:screenWidth ,backgroundColor:'hsla(360, 100%, 100%, 1.0)'}}
  onPress={props.onSelect}
>
    <View style={{flex:1, flexDirection:'row'}}>
  <View
    style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start',flexWrap:'wrap' ,alignItems:'flex-start' }}
  >
    <Icon
    name= 'call' 
    type= 'ionicons' 
    color='#10d300'
    
    />
    
    <Text numberOfLines={1}  ellipsizeMode='tail'  style={{color:'#808080',flex:1 ,fontSize:11}}>{props.phnNum}</Text>
  </View>
  <View
    style={{ flex: 1, flexDirection: 'row', justifyContent: 'flex-start',flexWrap:'wrap',flexBasis: 50 ,alignItems:'flex-start' }}
  >
    <Icon
    name= 'location-on' 
    type= 'material' 
    color='#10d300'
    
    />
 <Text numberOfLines={1}  ellipsizeMode='tail'  style={{color:'#808080',flex:1 ,fontSize:11}}>{props.addrss}</Text>
  </View>
  </View>
</Tile>

    )
}

export default BarberServicesGrid
