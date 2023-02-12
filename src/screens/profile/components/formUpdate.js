import { StyleSheet, View, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Avatar } from "react-native-elements"
import Color from "📂common/color"
import ImgUrl from "📂common/imgurl"
import Loading from '📂components/loading'
import ButtonCustom from '📂components/button'
import LogOutDiaLog from '📂components/logout_dialog'
import TextInputCustom from '📂components/text_input'
import { useDispatch, useSelector } from "react-redux"
import { logout } from '📂redux/slices/auth'
import { selectLoading } from "📂redux/selector/loading"
import { showLoading, hideLoading } from "📂redux/slices/loading"

const FormUpdate = ({ userProfile, navigation }) => {
    const [fullname, setFullName] = useState("");
    const [phone, setPhone] = useState("");
    const [isDialog, setIsDialog] = useState(false);
    const loading = useSelector(selectLoading);
    const dispatch = useDispatch();

    useEffect(() => {
        setFullName(userProfile ? userProfile.fullname : "")
        setPhone(userProfile ? userProfile.phone : "")
    }, [userProfile])

    const onChangeFullName = (value) => {
        setFullName(value)
    }

    const onChangePhone = (value) => {
        setPhone(value)
    }

    const toggleDialog = () => {
        dispatch(showLoading())
        setTimeout(() => {
            setIsDialog(!isDialog)
            dispatch(hideLoading())
        }, 500);
    }

    const logOut = () => {
        dispatch(logout())
            .unwrap()
            .then((auth) => {
                console.log(auth.msg)
                setIsDialog(!isDialog)
                navigation.goBack();
            })
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.imageProfile}>
                <Avatar
                    size={100}
                    rounded
                    source={{ uri: userProfile ? userProfile.avatar : ImgUrl.avatarEmpty }}
                    containerStyle={styles.containerStyle}
                />
            </TouchableOpacity>
            <View style={styles.boxForm}>
                <TextInputCustom
                    value={fullname}
                    placeholder={"Your fullname"}
                    onChangeText={onChangeFullName}
                />
                <TextInputCustom
                    value={userProfile ? userProfile.email : "Your email"}
                    editable={false}
                    selectTextOnFocus={false}
                />
                <TextInputCustom
                    value={phone}
                    placeholder={"Your phone numbers"}
                    onChangeText={onChangePhone}
                />
            </View>
            <View style={styles.boxForm}>
                <ButtonCustom
                    color={Color.lush}
                    title={"Update"}
                // onPress={{}}
                />
                <ButtonCustom
                    color={Color.bloodyMary}
                    style={styles.btnLogOut}
                    title={loading ? <Loading color={Color.white} /> : "Log Out"}
                    onPress={() => toggleDialog()}
                />
            </View>
            <LogOutDiaLog
                isVisible={isDialog}
                onBackdropPress={toggleDialog}
                onLogOut={() => logOut()}
                colorTitle={Color.black}
                titleDiaLog={"Are you sure you want to sign out?"}
                title={"have a good day!"}
                txtBtnYes={"Yes"}
                txtBtnNo={"close"}
                colorBtnYes={Color.red}
                colorBtnNo={Color.black}
            />
        </View>
    )
}

export default FormUpdate

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginBottom: 20
    },
    imageProfile: {
        justifyContent: 'center',
        alignItems: 'center',
    },
    containerStyle: {
        backgroundColor: Color.grey
    },
    boxForm: {
        backgroundColor: Color.opacityBlack,
        borderRadius: 20,
        marginTop: 20,
        paddingHorizontal: 20,
        padding: 20,
    },
    btnLogOut: {
        marginTop: 15
    }
})