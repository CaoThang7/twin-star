import { StyleSheet, View, ScrollView, ImageBackground, Dimensions } from 'react-native'
import React, { useEffect } from 'react'
import ImgUrl from "📂common/imgurl"
import HeaderTop from './components/headerTop'
import FormUpdate from './components/formUpdate'
import { useDispatch, useSelector } from "react-redux"
import { selectAuth, selectAuthToken } from "📂redux/selector/auth"
import { selectProfileUser } from "📂redux/selector/user"
import { useNavigation } from "@react-navigation/native"
import { getUserInfo } from '📂redux/slices/user'

const SettingProfile = () => {
  const userProfile = useSelector(selectProfileUser);
  const dataAuth = useSelector(selectAuth);
  const authToken = useSelector(selectAuthToken);
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const id = dataAuth ? dataAuth._id : "";

  useEffect(() => {
    dispatch(getUserInfo({ id, authToken }))
      .unwrap()
      .then((data) => {
      })
  }, [dispatch])

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
