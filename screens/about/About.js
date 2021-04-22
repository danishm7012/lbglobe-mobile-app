import React, { useState } from 'react';
import {View ,ScrollView,StatusBar, SafeAreaView, Text} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import HeaderButton from '../../components/headerButton/HeaderButton'
import SwiperComponent from './Swiper'
import AllStyle from '../../AllStyle'
import SocialMediaIcon from '../../components/socialIcon/SocialMediaIcon'
const About = props =>{

  const [socialLinks, setSocialLinks] = useState({
  facebook: 'https://www.facebook.com/Learning-Business-Globe-110291561146464', 
  instagram:'https://www.instagram.com/lbglobe/',
  twitter:'https://twitter.com/BussinessGlobe',
  linkedIn:'https://www.linkedin.com/in/lb-globe-15411a20a/',
  website:'http://lbglobe.herokuapp.com/',

})
  return(
  <View style={{flex:1}}>
    <View style={AllStyle.aboutSwiper}>
    <SwiperComponent/>
    </View>
    <View style={{}}>
      <Text style={[{fontSize:24, textAlign:'center'},AllStyle.Aboutheading]}>About Us</Text>
    </View>
    <SafeAreaView style={{flex:1,paddingTop: StatusBar.currentHeight, justifyContent:'center',alignItems:'center'}}>
      <ScrollView style={{ }}>
    <View >
    
    <View >
      <Text style={AllStyle.Aboutdetail}>We select each sector which strives to be beneficial and valuable to the country and general public, resulting in year on year revenue and fair wages for our clients. LB Globe is a massive platform of various companies & industries. It was established in, 2010 and its head office is located in Gulberg-Lahore, Punjab, Pakistan. The Company’s operations are running through professional and skilled individuals utilizing dynamic business developments. LB Globe Group holds outstanding special rank among its competitors globally. The group enjoy a good reputation in the local and international market. Taking the professional initiatives and innovative techniques our journey has become fruitful and result-oriented. LB Globe works as the leading force for all its industries and provides complete professional support to its workforce. The company provides exemplary services to worldwide clientele in every sector covered by Learning and Business Globe, our business and working partners, always put their highest level of confidence in our quality because we believe in going after the quality and not quantity. We mainly provide construction facilities along-with buying and selling opportunities to our clients, including civil work, housing societies, malls, etc. Learning and Business Globe is highly specialized and experienced in import and export by all means of transport to facilitate it’s clients with various opportunities in the market. E-commerce facilities are also part of our Company’s multiple services.

</Text>
    </View>
    <View style={{paddingTop: StatusBar.currentHeight*1.2, justifyContent:'center',alignItems:'center'}}>
        <SocialMediaIcon
        //  style={AllStyles.logo}
        //  style={{position:'absolute'}}
         facebookSocial={socialLinks.facebook}
         twitterSocial={socialLinks.twitter}
         linkedInSocial={socialLinks.linkedIn}
         instagramSocial={socialLinks.instagram}
         websiteSocial={socialLinks.website}
        />
        </View>
    </View>
    </ScrollView>
    </SafeAreaView>
  </View>
);
};

About.navigationOptions = navData => {
  
  return{

  headerTitle:'About',
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

export default About;