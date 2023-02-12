import { StyleSheet, View, ScrollView, ImageBackground, Dimensions } from 'react-native'
import React from 'react'
import ImgUrl from "📂common/imgurl"
import HeaderTop from './components/headerTop'
import FormUpdate from './components/formUpdate'
import { useSelector } from "react-redux"
import { selectAuth } from "📂redux/selector/auth"
import { useNavigation } from "@react-navigation/native"

const SettingProfile = () => {
  const userProfile = useSelector(selectAuth);
  const navigation = useNavigation();

  return (
    <ScrollView style={styles.container}>
      <ImageBackground
        source={{ uri: ImgUrl.bgSettingProfile }}
        style={styles.imageBackground}>
        <HeaderTop
          title={"Information"}
          navigation={navigation}
        />
        <View style={styles.body}>
          <FormUpdate
            userProfile={userProfile}
            navigation={navigation}
          />
        </View>
      </ImageBackground>
    </ScrollView>
  )
}

export default SettingProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  body: {
    flex: 1,
    marginHorizontal: 20,
    marginBottom: 20,
  },
  imageBackground: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
})
