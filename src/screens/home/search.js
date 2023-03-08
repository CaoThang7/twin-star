import { StyleSheet, Text, View } from 'react-native'
import React, { useState, useEffect } from 'react'
import HeaderTop from './components/search/headerTop'
import ProductSearch from './components/search/productSearch'
import { useNavigation } from "@react-navigation/native"
import { useDispatch, useSelector } from "react-redux"
import { getProductSearchs } from '📂redux/slices/product'
import { selectProductSearch } from "📂redux/selector/product"

const SearchScreen = () => {
  const [search, setSearch] = useState("");
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const productList = useSelector(selectProductSearch);
  const txtLetSearch = "Let's search for your favorite movie"

  const onChangeSearch = (value) => {
    setSearch(value)
  }

  useEffect(() => {
    if (search) {
      dispatch(getProductSearchs(`${search}`))
    }
  }, [search, dispatch])

  return (
    <View style={styles.container}>
      <HeaderTop
        navigation={navigation}
        search={search}
        onChangeSearch={onChangeSearch}
      />
      {
        search.length == 0
          ? <Text style={styles.txtSearch}>{txtLetSearch}</Text>
          : <ProductSearch productList={productList} />
      }
    </View>
  )
}

export default SearchScreen

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  txtSearch: {
    textAlign: 'center',
    marginTop: 15,
  }
})