import { StyleSheet, View, ScrollView } from 'react-native'
import React from 'react'
import Icons from "📂common/icon"
import Color from "📂common/color"
import HeaderTop from './components/headerTop'
import FormRegister from './components/formRegister'
import { useNavigation } from "@react-navigation/native"
import BackIcon from 'react-native-vector-icons/MaterialIcons';

const Register = () => {
  const navigation = useNavigation();

  const onBack = () => {
    navigation.goBack()
  }

  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerStyle}>
        <BackIcon
          onPress={onBack}
          name={Icons.MaterialIcons.goback}
          color="black"
          size={30}
        />
      </View>
      <View style={styles.body}>
        <HeaderTop
          title={"Register"}
          description={"We're happy to see you back again!"}
        />
        <FormRegister />
      </View>
    </ScrollView>
  )
}

export default Register

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Color.white,
  },
  headerStyle: {
    marginHorizontal: 20,
    marginTop: 20
  },
  body: {
    flex: 1,
    marginHorizontal: 20,
    marginBottom: 20,
  },
})

