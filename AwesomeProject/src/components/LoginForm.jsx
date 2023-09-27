import { View } from "react-native"
import { FormInput } from "./FormInput"

export const LoginForm = () => {
    return <View>
        <FormInput placeholder='Адреса електронної пошти' />
        <FormInput placeholder='Пароль' />
    </View>
}