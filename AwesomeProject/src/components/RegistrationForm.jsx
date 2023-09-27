import { StyleSheet, View } from "react-native";
import { FormInput } from "./FormInput";
import { Button } from "./Button";
import { AlreadyText } from "./AlreadyText";

export const RegistartionForm=()=>{
    return <View style={styles.form}>
        <FormInput placeholder='Логін' />
        <FormInput placeholder='Адреса електронної пошти' />
        <FormInput placeholder='Пароль' />
        <Button text='Зареєструватися' />
        <AlreadyText text='Вже є акаунт? Увійти'/>
    </View>
};
const styles =StyleSheet.create({
    form:{
        width:353,
        alignSelf:'center',

    }
})