import { StyleSheet, View } from 'react-native'
import React, { useState } from "react"
import Icons from "📂common/icon"
import Color from "📂common/color"
import Loading from '📂components/loading'
import InputCustom from '📂components/input'
import ButtonCustom from '📂components/button'
import DialogCustom from '📂components/dialog'
import { register } from '📂redux/slices/auth'
import { useForm, Controller } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { selectLoading } from "📂redux/selector/loading"
import { selectAuthApiMsg } from "📂redux/selector/auth"
import { useNavigation } from "@react-navigation/native"
import { showLoading, hideLoading } from "📂redux/slices/loading"
import { fullnameValid, emailValid, passwordValid } from "📂common/validator"

const FormRegister = () => {
    const [isFocus, setIsFocus] = useState({
        fullname: false,
        email: false,
        password: false,
    });
    const [isVisible, setIsVisible] = useState(true);
    const [isDialog, setIsDialog] = useState(false);
    const loading = useSelector(selectLoading);
    const msg = useSelector(selectAuthApiMsg);
    const navigation = useNavigation();
    const dispatch = useDispatch();

    const {
        handleSubmit,
        control,
        formState: { errors },
    } = useForm({
        defaultValues: {
            fullname: "",
            email: "",
            password: "",
        },
    })

    const toggleDialog = () => {
        setIsDialog(!isDialog)
    }

    const onSubmit = async (data) => {
        console.log("Submit form and get data input register:", data)
        dispatch(showLoading())
        dispatch(register(data))
            .unwrap()
            .then((auth) => {
                if (auth.user) {
                    dispatch(hideLoading())
                    toggleDialog()
                    navigation.goBack()
                } else {
                    dispatch(hideLoading())
                    toggleDialog()
                }
            })
    }

    const handleInputFocus = (text) => {
        setIsFocus({
            [text]: true,
        })
    }

    const showPasswords = () => {
        setIsVisible(!isVisible)
    }

    return (
        <View style={styles.container}>
            <Controller
                control={control}
                render={({ field: { onChange, value } }) => (
                    <InputCustom
                        value={value}
                        placeholder={"fullname"}
                        nameIconLeft={Icons.MaterialCommunityIcons.email}
                        isFocus={isFocus.fullname}
                        handleInputFocus={() => handleInputFocus("fullname")}
                        handleInputChange={onChange}
                        errorMessage={errors.fullname && errors.fullname.message}
                    />
                )}
                name="fullname"
                rules={fullnameValid}
            />
            <Controller
                control={control}
                render={({ field: { onChange, value } }) => (
                    <InputCustom
                        value={value}
                        placeholder={"email"}
                        nameIconLeft={Icons.MaterialCommunityIcons.email}
                        isFocus={isFocus.email}
                        handleInputFocus={() => handleInputFocus("email")}
                        handleInputChange={onChange}
                        errorMessage={errors.email && errors.email.message}
                    />
                )}
                name="email"
                rules={emailValid}
            />
            <Controller
                control={control}
                render={({ field: { onChange, value } }) => (
                    <InputCustom
                        value={value}
                        placeholder={"password"}
                        nameIconLeft={Icons.MaterialCommunityIcons.password}
                        nameIconRight={
                            isVisible ? (
                                Icons.Entypo.eye
                            ) : (
                                Icons.Entypo.eyeoff
                            )
                        }
                        showPassword={showPasswords}
                        secureTextEntry={isVisible ? false : true}
                        isFocus={isFocus.password}
                        handleInputFocus={() => handleInputFocus("password")}
                        handleInputChange={onChange}
                        errorMessage={errors.password && errors.password.message}
                    />
                )}
                name="password"
                rules={passwordValid}
            />
            <ButtonCustom
                color={Color.aubergine}
                style={styles.btnLogin}
                title={loading ? <Loading color={Color.white} /> : "Register"}
                onPress={handleSubmit(onSubmit)}
            />
            <DialogCustom
                isVisible={isDialog}
                onBackdropPress={toggleDialog}
                colorTitle={msg == "Register Success!" ? Color.green : Color.red}
                colorBtn={msg == "Register Success!" ? Color.green : Color.red}
                title={msg}
                txtBtn={msg == "Register Success!" ? "let's go" : "close"}
            />
        </View>
    )
}

export default FormRegister

const styles = StyleSheet.create({
    container: {
        marginTop: 0,
    },
    btnLogin: { marginTop: 20 },
    lineOr: {
        marginTop: 20,
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtOR: {
        fontSize: 16,
        color: Color.black,
        opacity: 0.5
    },
    footer: {
        marginTop: 10,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center'
    },
    txtQuestion: {
        fontSize: 16,
        color: Color.black,
        opacity: 0.5
    },
    txtSignUp: {
        marginLeft: 3,
        fontSize: 16,
        color: Color.blue,
        fontWeight: 'bold'
    }
})