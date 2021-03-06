import React from 'react'
import { SocialIcon } from 'react-native-elements'
import { View, Text, Linking } from 'react-native'

const SocialMediaIcon = ({
  facebookSocial,
  twitterSocial,
  linkedInSocial,
  instagramSocial,
  websiteSocial,
}) => {
  return (
    <View
      style={{
        flex: 1,
        flexDirection: 'row',
      }}
    >
      <SocialIcon
        type='twitter'
        raised={false}
        iconSize={18}
        onPress={() => Linking.openURL(twitterSocial)}
      />

      <SocialIcon
        raised={false}
        type='instagram'
        iconSize={18}
        onPress={() => Linking.openURL(instagramSocial)}
      />

      <SocialIcon
        raised={false}
        type='facebook'
        iconSize={18}
        onPress={() => Linking.openURL(facebookSocial)}
      />
      <SocialIcon
        raised={false}
        type='linkedin'
        iconSize={18}
        onPress={() => Linking.openURL(linkedInSocial)}
      />
      <SocialIcon
        raised={false}
        style={{ backgroundColor: '#9FA5AA' }}
        type='globe'
        iconSize={18}
        onPress={() => Linking.openURL(websiteSocial)}
      />
    </View>
  )
}
export default SocialMediaIcon
