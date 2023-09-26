import React from "react";
import { Text, View, StyleSheet } from "react-native";
import { RegistartionForm } from "../components/RegistrationForm";
import {Button} from '../components/Button'
import { Title } from "../components/Title";
import { Container } from "../components/Container";



export const RegistartionScreen = () => {


    return <Container>
        <Title text='Реєстрація'/>
        <RegistartionForm/>
        <Button text='Зареєструватися'/>
        </Container>
   
};

