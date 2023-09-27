
import { Button } from "../components/Button"
import { Title } from "../components/Title"
import { FormInput } from "../components/FormInput"
import { Container } from "../components/ScreenContainer"
import { LoginForm } from "../components/LoginForm"
import { Keyboard, KeyboardAvoidingView, Platform } from "react-native"
import { TouchableWithoutFeedback } from "react-native"

export const LoginScreen = () => {
    return <TouchableWithoutFeedback  onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'android'} style={styles.container} keyboardVerticalOffset={-120}>
        <ScreenContainer>
        <Title text='Увійти' />
        <LoginForm />
        <Button text='Увійти' />
    </ScreenContainer>
        </KeyboardAvoidingView>
    </TouchableWithoutFeedback>

}