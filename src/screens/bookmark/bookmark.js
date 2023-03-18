import { StyleSheet, View, ImageBackground, Dimensions } from 'react-native'
import React, { useCallback, useState } from 'react'
import MyMovieList from './components/myMovieList';
import DataEmpty from './components/dataEmpty';
import HeaderTop from './components/headerTop';
import { useFocusEffect } from '@react-navigation/native';
import { getMarkByUserId } from '📂redux/slices/mark'
import { useDispatch, useSelector } from "react-redux"
import { selectAuth, selectAuthToken } from "📂redux/selector/auth"

const Bookmark = () => {
  const bgBookMark = require('📂assets/background/citylife.jpg');
  const [userMark, setUserMark] = useState([]);
  const userAuth = useSelector(selectAuth);
  const authToken = useSelector(selectAuthToken);
  const userId = userAuth ? userAuth._id : "";
  const dispatch = useDispatch();

  useFocusEffect(
    useCallback(() => {
      dispatch(getMarkByUserId({ userId, authToken }))
        .unwrap()
        .then((dataMark) => {
          if (dataMark) {
            setUserMark(dataMark.data)
          }
        })
    }, [dispatch, userId]),
  );

  return (
    <View style={styles.container}>
      <ImageBackground
        source={bgBookMark}
        style={styles.imageBackground}>
        <HeaderTop />
        {userMark == "" ? (
          <DataEmpty />
        ) : (
          <MyMovieList
            userMark={userMark}
            setUserMark={setUserMark}
            authToken={authToken}
          />
        )}
      </ImageBackground>
    </View>
  )
}

export default Bookmark

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  imageBackground: {
    width: Dimensions.get('window').width,
    height: Dimensions.get('window').height,
  },
})