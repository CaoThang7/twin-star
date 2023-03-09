import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import Color from "📂common/color"
import Moment from 'moment';
import { Avatar } from "react-native-elements"
import { Rating } from 'react-native-stock-star-rating'

const ReviewProductItem = ({ item }) => {
    Moment.locale('en');
    var dt = item.createdAt;

    return (
        <View style={styles.container}>
            <View style={styles.boxReview}>
                <Avatar
                    size={50}
                    rounded
                    source={{
                        uri: item ? item.user_id.avatar : ImgUrl.avatarEmpty,
                    }}
                />
                <View style={styles.boxText}>
                    <View style={styles.boxUser}>
                        <Text style={styles.txtName}>{item.user_id.fullname}</Text>
                        <Text style={styles.txtEmail}>({item.user_id.email})</Text>
                    </View>
                    <View style={styles.boxComment}>
                        <View style={styles.starRating}>
                            <Rating stars={item.rating_value} maxStars={5} size={20} />
                        </View>
                        <Text style={styles.txtComment}>{item.comment}</Text>
                        <Text style={styles.txtDateCreate}>{Moment(dt).format('DD-MM-YYYY H:mma')}</Text>
                    </View>
                </View>
            </View>
        </View>
    )
}

export default ReviewProductItem

const styles = StyleSheet.create({
    container: {
        marginTop: 5,
        marginBottom: 5,
        paddingHorizontal: 5,
        borderRadius: 15,
        backgroundColor: 'rgba(255, 255, 255, 0.2)',
    },
    boxReview: {
        flexDirection: 'row',
        marginTop: 5
    },
    txtName: {
        fontSize: 18,
        color: Color.white,
        fontWeight: 'bold',
    },
    txtEmail: {
        fontSize: 14,
        color: Color.white,
        marginTop: 3,
        marginLeft: 5
    },
    boxUser: {
        flexDirection: 'row',
        marginLeft: 10,
    },
    boxText: {
        flex: 1,
        flexDirection: 'column',
        paddingBottom: 5
    },
    boxComment: {
        paddingHorizontal: 10,
    },
    starRating: {
        marginLeft: -2
    },
    txtComment: {
        fontSize: 16,
        color: Color.white,
    },
    txtDateCreate: {
        fontSize: 12,
        color: Color.white,
        opacity: 0.5,
        marginTop: 5
    }
})