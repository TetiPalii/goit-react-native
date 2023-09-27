import React from "react";
import { Text, View, StyleSheet, KeyboardAvoidingView, Platform } from "react-native";
import { RegistartionForm } from "../components/RegistrationForm";
import { Button } from '../components/Button'
import { Title } from "../components/Title";
import { ScreenContainer } from "../components/ScreenContainer";
import { TouchableWithoutFeedback, Keyboard } from "react-native";
import { Background } from "../components/Background";



export const RegistartionScreen = () => {


    return <Background>
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
        <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : 'android'}  keyboardVerticalOffset={-120}>

            <ScreenContainer>
                <Title text='Реєстрація' />
                <RegistartionForm />

            </ScreenContainer>

        </KeyboardAvoidingView>
    </TouchableWithoutFeedback>
    </Background>



};

const styles = StyleSheet.create({
    container: {
        flex: 1
    }
})