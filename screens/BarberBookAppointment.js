import React from 'react'
import {
  StyleSheet,
  Text,
  View,
  Image,
  Dimensions,
  Animated,
} from 'react-native'

import Circle from '../components/companyDetailComponent/Circle'
import Ticker from '../components/companyDetailComponent/Ticker'
import Items from '../components/companyDetailComponent/Item'
import Pagination from '../components/companyDetailComponent/Pagination'
import AllStyles from '../AllStyle'
import SocialMediaIcon from '../components/socialIcon/SocialMediaIcon'
import NationalCompanies from '../data/companiesData/national'
import { HeaderButtons, Item } from 'react-navigation-header-buttons'
import HeaderButton from '../components/headerButton/HeaderButton'

const { width, height } = Dimensions.get('window')
const LOGO_WIDTH = 120
const LOGO_HEIGHT = 20
const DOT_SIZE = 40
const TICKER_HEIGHT = 40
const CIRCLE_SIZE = width * 0.5

const BarberBookAppointment = (props) => {
  const compDetailId = props.navigation.getParam('shopDetail')
  const selectedCompany = NationalCompanies.find(
    (company) => company.id === compDetailId
  )

  const data = [
    {
      type: ' ',
      imageUri: selectedCompany.image,
      color: '#9dcdfa',
      heading: selectedCompany.name,
      description: selectedCompany.description,
      phnNum: selectedCompany.phoneNo,
      address: selectedCompany.address,
      iconName: 'phone',
      iconLocation: 'location',
      key: 'first',
    },
    {
      type: '',
      imageUri: require('../assets/missions.jpg'),
      color: '#db9efa',
      heading: 'Mission',
      description: selectedCompany.mission,
      key: 'second',
    },
    {
      type: '',
      imageUri: require('../assets/vissions.jpg'),
      heading: 'Vission',
      color: '#999',
      description: selectedCompany.vision,
      key: 'third',
    },
  ]

  const scrollX = React.useRef(new Animated.Value(0)).current

  return (
    <View style={AllStyles.container}>
      <Circle scrollX={scrollX} />
      <Animated.FlatList
        keyExtractor={(item) => item.key}
        data={data}
        renderItem={({ item, index }) => (
          <Items {...item} index={index} scrollX={scrollX} />
        )}
        pagingEnabled
        showsHorizontalScrollIndicator={false}
        horizontal
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: true }
        )}
        scrollEventThrottle={16}
      />
      <View
        style={{
          justifyContent: 'flex-start',
          alignItems: 'center',
        }}
      >
        <SocialMediaIcon
          facebookSocial={selectedCompany.facebook}
          twitterSocial={selectedCompany.twitter}
          linkedInSocial={selectedCompany.linkedin}
          instagramSocial={selectedCompany.instagram}
          websiteSocial={selectedCompany.website}
        />
      </View>
      <Pagination scrollX={scrollX} />
      <Ticker scrollX={scrollX} />
    </View>
  )
}
BarberBookAppointment.navigationOptions = (navigationData) => {
  const compDetailId = navigationData.navigation.getParam('shopDetail')
  const selectedCompany = NationalCompanies.find(
    (company) => company.id === compDetailId
  )
  return {
    headerTitle: selectedCompany.name,
    headerRight: () => (
      <HeaderButtons HeaderButtonComponent={HeaderButton}>
        <Item title='compdetail' iconName='document-text' />
      </HeaderButtons>
    ),
  }
}

export default BarberBookAppointment
