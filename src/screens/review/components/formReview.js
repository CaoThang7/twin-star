import { StyleSheet, Text, View, TextInput } from 'react-native'
import React, { useState } from 'react'
import Color from "📂common/color"
import ButtonCustom from '📂components/button'
import Loading from '📂components/loading'
import DialogCustom from '📂components/dialog'
import { useDispatch, useSelector } from "react-redux"
import { createReviewProduct } from '📂redux/slices/review'
import { selectLoading } from "📂redux/selector/loading"
import { selectReviewMsg } from "📂redux/selector/review"
import { RatingInput } from 'react-native-stock-star-rating';
import { showLoading, hideLoading } from "📂redux/slices/loading"
import { selectAuth, selectAuthToken } from "📂redux/selector/auth"

const FormReview = ({ productDetail }) => {
    const [rating, setRating] = useState(0);
    const [comment, setComment] = useState("");
    const [isDialog, setIsDialog] = useState(false);
    const dataAuth = useSelector(selectAuth);
    const authToken = useSelector(selectAuthToken);
    const loading = useSelector(selectLoading);
    const msg = useSelector(selectReviewMsg);
    const id = dataAuth ? dataAuth._id : "";
    const dispatch = useDispatch();

    const onChangeTextComment = (value) => {
        setComment(value)
    }

    const toggleDialog = () => {
        setIsDialog(!isDialog)
    }

    const onSubmit = async () => {
        dispatch(showLoading())
        const data = {
            user_id: id,
            product_id: productDetail._id,
            rating_value: rating,
            comment: comment
        }
        dispatch(createReviewProduct({ data, authToken }))
            .unwrap()
            .then((data) => {
                if (data.review) {
                    dispatch(hideLoading())
                    toggleDialog()
                } else {
                    dispatch(hideLoading())
                    toggleDialog()
                }
            })
    }

    return (
        <View style={styles.container}>
            <View style={styles.boxTitle}>
                <Text style={styles.txtTitle}>How was your experience with the movie {productDetail.name}</Text>
            </View>
            <View style={styles.starRating}>
                <RatingInput
                    maxStars={5}
                    rating={rating}
                    setRating={setRating}
                    size={50}
                />
            </View>
            <TextInput
                placeholder={"comment"}
                value={comment}
                style={styles.inputStyle}
                onChangeText={onChangeTextComment}
                underlineColorAndroid="transparent"
                multiline={true}
            />
            <ButtonCustom
                color={Color.lush}
                style={styles.btnReview}
                title={loading ? <Loading color={Color.black} /> : "Submit"}
                onPress={onSubmit}
            />
            <DialogCustom
                isVisible={isDialog}
                onBackdropPress={toggleDialog}
                colorTitle={msg == "Create Review Success!" ? Color.green : Color.red}
                colorBtn={Color.black}
                title={msg}
                txtBtn={"close"}
            />
        </View>
    )
}

export default FormReview

const styles = StyleSheet.create({
    container: {
        flex: 2,
        backgroundColor: Color.magenta,
        borderTopLeftRadius: 10,
        borderTopRightRadius: 10,
        paddingHorizontal: 20,
    },
    boxTitle: {
        alignItems: 'center',
        marginTop: 10
    },
    txtTitle: {
        fontSize: 20,
        fontWeight: 'bold',
        color: Color.white,
        textAlign: 'center'
    },
    starRating: {
        alignItems: 'center',
    },
    inputStyle: {
        backgroundColor: Color.white,
        height: 200,
        borderTopEndRadius: 10,
        borderTopStartRadius: 10,
        borderRadius: 10,
        borderWidth: 1,
        borderColor: Color.ghostWhite,
        marginVertical: 10,
        color: Color.black,
        paddingLeft: 15,
        fontSize: 16,
        textAlignVertical: 'top'
    },
    btnReview: {
        marginTop: 10,
        marginBottom: 10
    }
})