import { View } from "react-native";
import { FormInput } from "../components/FormInput";

export const RegistartionForm=()=>{
    return <View>
        <FormInput placeholder='Логін' />
        <FormInput placeholder='Адреса електронної пошти' />
        <FormInput placeholder='Пароль' />
    </View>
}