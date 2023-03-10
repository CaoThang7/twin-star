import { StyleSheet, View } from 'react-native'
import React from 'react'
import HeaderTop from './components/headerTop'
import BodyReview from './components/body'
import FormReview from './components/formReview'
import { useRoute } from "@react-navigation/native"
import { useNavigation } from "@react-navigation/native"

const ReviewScreen = () => {
  const route = useRoute()
  const navigation = useNavigation()
  const { productDetail, reviewProductId } = route.params

  return (
    <View style={styles.container}>
      <HeaderTop navigation={navigation} />
      <BodyReview
        productDetail={productDetail}
        reviewProductId={reviewProductId}
      />
      <FormReview productDetail={productDetail} />
    </View>
  )
}

export default ReviewScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  }
})