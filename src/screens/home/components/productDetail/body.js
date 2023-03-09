import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import Color from "📂common/color"
import BookMarkIcon from 'react-native-vector-icons/FontAwesome5';
import ViewIcon from 'react-native-vector-icons/Entypo';
import ButtonCustom from '📂components/button'
import FlatListCustom from '📂components/flatlist'
import ReviewProductItem from './reviewProductItem';

const BodyProductDetail = ({ productDetail, reviewProductId }) => {
    return (
        <View style={styles.container}>
            <View style={styles.welcomeTop}>
                <View style={styles.boxText}>
                    <Text style={styles.txtName}>{productDetail ? productDetail.name : ""}</Text>
                    <Text style={styles.txtTitle}>{productDetail ? productDetail.title : ""}</Text>
                    <View style={styles.view}>
                        <ViewIcon
                            name={"eye"}
                            color={Color.white}
                            size={20}
                        />
                        <Text style={styles.txtViewer}>{productDetail ? productDetail.viewer : ""}</Text>
                    </View>
                </View>
                <TouchableOpacity style={styles.btnSave}>
                    <BookMarkIcon
                        name={"bookmark"}
                        color={Color.white}
                        size={25}
                    />
                </TouchableOpacity>
            </View>
            <View style={styles.descriptionStyle}>
                <Text style={styles.txtIntroduction}>Introduction</Text>
                <Text style={styles.txtDescription}>{productDetail ? productDetail.description : ""}</Text>
            </View>
            <View style={styles.boxReview}>
                <Text style={styles.txtIntroduction}>Reviews</Text>
                {reviewProductId == "" ? (
                    <View style={styles.ctnNoReview}>
                        <Text style={styles.txtNoReview}>There are no reviews yet</Text>
                    </View>
                ) : (
                    <View style={styles.reviewList}>
                        <FlatListCustom
                            scrollIndicator={false}
                            data={reviewProductId}
                            keyExtractor={(item) => item._id}
                            decelerationRate={0}
                            bounces={false}
                            renderItem={({ item }) => <ReviewProductItem item={item} />}
                        />
                    </View>
                )}
            </View>
            <ButtonCustom
                color={Color.aubergine}
                style={styles.btnReview}
                title={"Review now"}
                onPress={() => { }}
            />
        </View>
    )
}

export default BodyProductDetail

const styles = StyleSheet.create({
    container: {
        marginTop: 20,
        marginHorizontal: 20,
    },
    welcomeTop: {
        justifyContent: 'center',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    boxText: {
        flexDirection: 'column'
    },
    txtName: {
        fontSize: 28,
        fontWeight: 'bold',
        color: Color.white,
    },
    txtTitle: {
        fontSize: 20,
        color: Color.white,
        opacity: 0.5
    },
    view: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    txtViewer: {
        fontSize: 16,
        color: Color.white,
        opacity: 0.5,
        marginLeft: 8
    },
    descriptionStyle: {
        marginTop: 20,
    },
    txtIntroduction: {
        fontSize: 22,
        fontWeight: 'bold',
        color: Color.white,
    },
    txtDescription: {
        fontSize: 18,
        color: Color.white,
        opacity: 0.3,
        marginTop: 3
    },
    btnSave: {
        backgroundColor: Color.opacityWhite,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        paddingHorizontal: 20,
    },
    boxReview: {
        marginTop: 15,
    },
    ctnNoReview: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    txtNoReview: {
        fontSize: 16,
        color: Color.white,
        opacity: 0.3,
        marginTop: 10
    },
    reviewList: {
        marginTop: 5,
    },
    btnReview: { marginTop: 20 },
})