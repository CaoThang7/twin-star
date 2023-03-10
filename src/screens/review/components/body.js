import { StyleSheet, Text, View, Image } from 'react-native'
import React from 'react'
import Color from "📂common/color"
import RatingStatistics from './ratingStatistics';

const BodyReview = ({ productDetail, reviewProductId }) => {
    return (
        <View style={styles.container}>
            <View style={styles.boxRatingStt}>
                <View style={styles.boxProduct}>
                    <Image
                        source={{ uri: productDetail.image }}
                        style={styles.imageItem}
                    />
                    <Text style={styles.txtName} numberOfLines={1}>{productDetail.name}</Text>
                    <Text style={styles.txtTitle}>{productDetail.title}</Text>
                </View>
                <RatingStatistics reviewProductId={reviewProductId} />
            </View>
        </View>
    )
}

export default BodyReview

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginHorizontal: 20,
        marginTop: 10,
    },
    boxRatingStt: {
        height: 200,
        padding: 10,
        backgroundColor: Color.black,
        borderRadius: 10,
        flexDirection: 'row'
    },
    boxProduct: {
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        flex: 0.7
    },
    imageItem: {
        height: '50%',
        width: 100,
        borderRadius: 10,
        borderColor: Color.white,
        borderWidth: 1
    },
    txtName: {
        fontSize: 20,
        color: Color.white,
        fontWeight: 'bold',
    },
    txtTitle: {
        fontSize: 16,
        color: Color.white,
        opacity: 0.8,
    },
})