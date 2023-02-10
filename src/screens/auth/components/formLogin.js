import { StyleSheet, View, Text, TouchableOpacity } from 'react-native'
import React, { useState } from "react"
import Icons from "📂common/icon"
import Color from "📂common/color"
import Loading from '📂components/loading'
import InputCustom from '📂components/input'
import DialogCustom from '📂components/dialog'
import ButtonCustom from '📂components/button'
import { login } from '📂redux/slices/auth'
import { useForm, Controller } from "react-hook-form"
import { useDispatch, useSelector } from "react-redux"
import { useNavigation } from "@react-navigation/native"
import { selectLoading } from "📂redux/selector/loading"
import { selectAuthApiMsg } from "📂redux/selector/auth"
import { authStack, rootSwitch } from "📂common/navigator"
import { emailValid, passwordValid } from "📂common/validator"
import { showLoading, hideLoading } from "📂redux/slices/loading"

const FormLogin = () => {
    const [isFocus, setIsFocus] = useState({ email: false, password: false });
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
            email: "",
            password: "",
        },
    })

    const toggleDialog = () => {
        setIsDialog(!isDialog)
    }

    const onSubmit = async (data) => {
        console.log("Submit form and get data input login:", data)
        dispatch(showLoading())
        dispatch(login(data))
            .unwrap()
            .then((auth) => {
                if (auth.user) {
                    dispatch(hideLoading())
                    toggleDialog()
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

    const gotoRegisterScreen = () => {
        navigation.navigate(rootSwitch.auth, { screen: authStack.register })
    }

    return (
        <View style={styles.container}>
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
                title={loading ? <Loading color={Color.white} /> : "Login"}
                onPress={handleSubmit(onSubmit)}
            />
            <DialogCustom
                isVisible={isDialog}
                onBackdropPress={toggleDialog}
                colorTitle={msg == "Login Success!" ? Color.green : Color.red}
                colorBtn={msg == "Login Success!" ? Color.green : Color.red}
                title={msg}
                txtBtn={msg == "Login Success!" ? "let's go" : "close"}
            />
            <View style={styles.lineOr}>
                <Text style={styles.txtOR}>OR</Text>
            </View>
            <View style={styles.footer}>
                <Text style={styles.txtQuestion}>Don't have an account?</Text>
                <TouchableOpacity onPress={gotoRegisterScreen}>
                    <Text style={styles.txtSignUp}>Sign Up</Text>
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default FormLogin

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