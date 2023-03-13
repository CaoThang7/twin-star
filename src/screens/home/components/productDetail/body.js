import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import MarkBtn from './markBtn';
import Color from "📂common/color"
import ViewIcon from 'react-native-vector-icons/Entypo';
import ButtonCustom from '📂components/button'
import FlatListCustom from '📂components/flatlist'
import ReviewProductItem from './reviewProductItem';
import DialogCustom from '📂components/dialog'
import Toast from 'react-native-toast-message';
import { mainStack } from "📂common/navigator"

const BodyProductDetail = ({
    productDetail,
    reviewProductId,
    userAuth,
    navigation
}) => {
    const [isDialog, setIsDialog] = useState(false);

    const toggleDialog = () => {
        setIsDialog(!isDialog)
    }

    const gotoReviewScreen = () => {
        if (userAuth) {
            navigation.navigate(mainStack.reviewScreen, {
                productDetail: productDetail,
                reviewProductId: reviewProductId
            })
        } else {
            toggleDialog()
        }
    }

    const showMarkProductSuccess = (text1) => {
        Toast.show({
            type: "success",
            text1: text1,
            autoHide: true,
            visibilityTime: 2000,
            position: 'top',
            topOffset: 100,
        })
    }

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
                <MarkBtn
                    userAuth={userAuth}
                    productDetail={productDetail}
                    toggleDialog={toggleDialog}
                    showMarkProductSuccess={showMarkProductSuccess}
                />
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
                onPress={gotoReviewScreen}
            />
            <DialogCustom
                isVisible={isDialog}
                onBackdropPress={toggleDialog}
                colorTitle={Color.red}
                colorBtn={Color.black}
                title={"Please login now"}
                txtBtn={"close"}
            />
            <Toast />
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