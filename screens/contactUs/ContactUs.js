import React,{useState} from 'react';
import {View ,Image,TextInput, Button,StatusBar, Text, ScrollView,KeyboardAvoidingView, SafeAreaView} from 'react-native';
import {HeaderButtons, Item} from 'react-navigation-header-buttons'
import HeaderButton from '../../components/headerButton/HeaderButton'
import axios from 'react-native-axios'
import AllStyle from "../../AllStyle";
import SocialMediaIcon from '../../components/socialIcon/SocialMediaIcon'

const ContactUs = props =>{
  const [value, setValue] = useState(0);

  const [socialLinks, setSocialLinks] = useState({
    facebook: 'https://www.facebook.com/Learning-Business-Globe-110291561146464', 
    instagram:'https://www.instagram.com/lbglobe/',
    twitter:'https://twitter.com/BussinessGlobe',
    linkedIn:'https://www.linkedin.com/in/lb-globe-15411a20a/',
    website:'http://lbglobe.herokuapp.com/',
  
  })

  const [fname, setFname] = useState('');
  const [lname, setLname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const [errors, setErrors] = useState({})

  const submitHandler = (event) => {
    event.preventDefault()

    let contactData = { fname, lname, email, message }
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    }

    axios
      .post('/api/contact/add', contactData, config)
      .then((res) => {
        setErrors({})
        alert(res.data.success)
      })
      .catch((err) => {
        setErrors(err.response.data)
        alert(error.message)
      })
  }


  return(

    <KeyboardAvoidingView
    behavior={Platform.OS === "ios" ? "padding" : "height"}
    style={{flex:1}}
  >
    <View style={{flex:1}}>
      <View style={AllStyle.contactUsImagesView}>
        <Image source={require('../../assets/ContactUS.jpg')}
        style={AllStyle.contactUsImages}/>
      </View>
  <View style={AllStyle.mainContactForm}>
      
      <View style={AllStyle.contactUsformMainHeading}>
      <Text style={AllStyle.contactUsformMainHeadingOuter}> Contact <Text style={AllStyle.contactUsformMainHeadingInner}> Us</Text> </Text>
      </View>
      <View style={{flex:1}}>
        <View  style={{flex:1}}>
        <TextInput
         style={AllStyle.TextinputfieldcontactUs} 
        placeholder="First Name"
        onChangeText={(firstname)=> setFname(firstname)}
        value={fname}
       placeholderTextColor = "#0f385a" />
      
        {errors.fname}
       
        <TextInput 
        style={AllStyle.TextinputfieldcontactUs} 
        placeholder="Last Name" 
        placeholderTextColor = "#0f385a"
        onChangeText={(lastname)=> setLname(lastname)}
        value={lname}
        />
        {errors.lname}
        
        <TextInput 
        style={AllStyle.TextinputfieldcontactUs} 
        placeholder="Email" 
        placeholderTextColor = "#0f385a"
        onChangeText={(useremail)=> setEmail(useremail)}
        value={email}
        textContentType='emailAddress' 
        />
        {errors.email}

        <TextInput 
        style={AllStyle.TextinputfieldcontactUs} 
        placeholder="Leave your Message Here !" 
        placeholderTextColor = "#0f385a"
        multiline={true}
        numberOfLines={2}
        onChangeText={(usermessage)=> setMessage(usermessage)}
        value={message}
        />
        </View>
      
      </View>
      <View style={{paddingTop: StatusBar.currentHeight}}>
      <Button
      
        title="Submit"
        color="#0f385a"
        onPress={submitHandler}
      />
      </View>

      <View style={{paddingTop: StatusBar.currentHeight*2.5, justifyContent:'center',alignItems:'center'}}>
        <SocialMediaIcon

         facebookSocial={socialLinks.facebook}
         twitterSocial={socialLinks.twitter}
         linkedInSocial={socialLinks.linkedIn}
         instagramSocial={socialLinks.instagram}
         websiteSocial={socialLinks.website}
        />
        </View>

      </View>
    </View>
    </KeyboardAvoidingView>
    
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