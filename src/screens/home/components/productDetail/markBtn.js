import { StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import Color from "📂common/color"
import BookMarkIcon from 'react-native-vector-icons/Ionicons';
import { useDispatch, useSelector } from "react-redux"
import { selectAuthToken } from "📂redux/selector/auth"
import { selectMarkByUserId } from "📂redux/selector/mark"
import { createMarkProduct, getMarkByUserId, deleteMarkById } from '📂redux/slices/mark'

const MarkBtn = ({ userAuth, productDetail, toggleDialog, showMarkProductSuccess }) => {
    const [isChecked, setIsChecked] = useState(false);
    const authToken = useSelector(selectAuthToken);
    const dataMark = useSelector(selectMarkByUserId);
    const userId = userAuth ? userAuth._id : "";
    const productId = productDetail ? productDetail : ""
    const dispatch = useDispatch();

    useEffect(() => {
        if (userAuth) {
            dispatch(getMarkByUserId({ userId, authToken }))
                .unwrap()
                .then((dataMark) => {
                    dataMark.data.filter(function (item) {
                        if (
                            item.product_id._id == productId._id &&
                            item.user_id._id == userAuth._id
                        ) {
                            setIsChecked(true)
                        }
                        return () => setIsChecked(false)
                    });
                })
        }
    }, [dispatch, productId._id])

    const markProduct = () => {
        if (!userAuth) {
            toggleDialog()
        } else {
            setIsChecked(true)
            const data = {
                user_id: userId,
                product_id: productId._id,
            }
            dispatch(createMarkProduct({ data, authToken }))
                .unwrap()
                .then((data) => {
                    if (data.msg == "Mark Product Success!") {
                        showMarkProductSuccess("Mark Product Success!")
                    }
                })
        }
    }

    const deletemarkProduct = () => {
        if (!userAuth) {
            toggleDialog()
        } else {
            setIsChecked(false)
            for (i = 0; i < dataMark.length; i++) {
                if (dataMark[i]['product_id']._id == productId._id) {
                    const id = dataMark[i]['_id']
                    dispatch(deleteMarkById({ id, authToken }))
                        .unwrap()
                        .then((data) => {
                            if (data.msg == "Delete Mark Product!") {
                                showMarkProductSuccess("Delete Mark Product!")
                            }
                        })
                }
            }
        }
    }

    return (
        <>
            {
                isChecked == false
                    ? <TouchableOpacity
                        style={styles.btnSave}
                        onPress={markProduct}>
                        <BookMarkIcon
                            name={"bookmark-outline"}
                            color={Color.white}
                            size={25}
                        />
                    </TouchableOpacity>
                    : <TouchableOpacity
                        style={styles.btnSave}
                        onPress={deletemarkProduct}>
                        <BookMarkIcon
                            name={"bookmark"}
                            color={Color.white}
                            size={25}
                        />
                    </TouchableOpacity>
            }
        </>
    )
}

export default MarkBtn

const styles = StyleSheet.create({
    btnSave: {
        backgroundColor: Color.opacityWhite,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 10,
        paddingHorizontal: 20,
    },
})