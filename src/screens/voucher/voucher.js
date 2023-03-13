import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'

const Voucher = () => {
  return (
    <View style={styles.container}>
      <Image
        source={{ uri: "https://cdn-icons-png.flaticon.com/128/1820/1820259.png" }}
        style={styles.imageVoucher}
      />
      <Text style={styles.txtVoucher}>Feature Developing!</Text>
    </View>
  )
}

export default Voucher

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    justifyContent: 'center',
    alignItems: 'center',
  },
  imageVoucher: {
    height: 100,
    width: 100
  },
  txtVoucher: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
    marginTop: 20,
  }
})