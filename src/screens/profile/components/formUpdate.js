import { StyleSheet, View, TouchableOpacity } from 'react-native'
import React, { useState, useEffect } from 'react'
import { Avatar } from "react-native-elements"
import Color from "📂common/color"
import ImgUrl from "📂common/imgurl"
import Loading from '📂components/loading'
import ButtonCustom from '📂components/button'
import DialogCustom from '📂components/dialog'
import LogOutDiaLog from '📂components/logout_dialog'
import TextInputCustom from '📂components/text_input'
import storage from '@react-native-firebase/storage'
import { logout } from '📂redux/slices/auth'
import { useDispatch, useSelector } from "react-redux"
import { updateProfile, clearProfile } from '📂redux/slices/user'
import { selectAuthToken } from "📂redux/selector/auth"
import { selectLoading } from "📂redux/selector/loading"
import { showLoading, hideLoading } from "📂redux/slices/loading"
import { onlaunchImageLibrary } from "📂utils/imagePicker"
import { selectProfieApiMsg } from "📂redux/selector/user"

const FormUpdate = ({ userProfile, navigation }) => {
    const [fullname, setFullName] = useState("");
    const [phone, setPhone] = useState("");
    const [image, setImage] = useState(ImgUrl.avatarEmpty);
    const [isDialog, setIsDialog] = useState(false);
    const [isDialogUpdate, setIsDialogUpdate] = useState(false);
    const loading = useSelector(selectLoading);
    const authToken = useSelector(selectAuthToken);
    const msg = useSelector(selectProfieApiMsg);
    const dispatch = useDispatch();

    useEffect(() => {
        setFullName(userProfile ? userProfile.fullname : "")
        setPhone(userProfile ? userProfile.phone : "")
        setImage(userProfile ? userProfile.avatar : ImgUrl.avatarEmpty)
    }, [userProfile])

    const onChangeFullName = (value) => {
        setFullName(value)
    }

    const onChangePhone = (value) => {
        setPhone(value)
    }

    const toggleDialogLogOut = () => {
        dispatch(showLoading())
        setTimeout(() => {
            setIsDialog(!isDialog)
            dispatch(hideLoading())
        }, 500);
    }

    const toggleDialogUpdate = () => {
        setIsDialogUpdate(!isDialogUpdate)
    }

    const onSelectImage = async () => {
        const res = await onlaunchImageLibrary()
        const fileUri = res.assets[0].uri
        const storageRef = storage().ref().child(`/avatrprofile/${Date.now()}`)
        const uploadTask = storageRef.putFile(fileUri)
        uploadTask.on('state_changed', (snapshot) => {
            const progress = (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
            if (progress == 100) alert('image uploaded!')
        }, (error) => {
            alert('error uploading image')
        }, () => {
            storageRef.getDownloadURL().then((downloadURL) => {
                setImage(downloadURL)
            });
        });
    }

    const onUpdateProfile = async () => {
        const data = {
            user_id: userProfile._id,
            fullname: fullname,
            avatar: image,
            phone: phone
        }
        dispatch(updateProfile({ data, authToken }))
            .unwrap()
            .then((auth) => {
                if (auth) {
                    toggleDialogUpdate()
                }
            })
    }

    const logOut = () => {
        dispatch(logout())
            .unwrap()
            .then((auth) => {
                if (auth) {
                    setIsDialog(!isDialog)
                    navigation.goBack();
                }
            })
        dispatch(clearProfile())
    }

    return (
        <View style={styles.container}>
            <TouchableOpacity style={styles.imageProfile}>
                <Avatar
                    size={100}
                    onPress={onSelectImage}
                    rounded
                    source={{ uri: image }}
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
                    onPress={() => onUpdateProfile()}
                />
                <ButtonCustom
                    color={Color.bloodyMary}
                    style={styles.btnLogOut}
                    title={loading ? <Loading color={Color.white} /> : "Log Out"}
                    onPress={() => toggleDialogLogOut()}
                />
            </View>
            <DialogCustom
                isVisible={isDialogUpdate}
                onBackdropPress={toggleDialogUpdate}
                colorTitle={Color.green}
                colorBtn={Color.red}
                title={msg}
                txtBtn={"close"}
            />
            <LogOutDiaLog
                isVisible={isDialog}
                onBackdropPress={toggleDialogLogOut}
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