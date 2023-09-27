import { Text, StyleSheet } from "react-native";

export const Title=({text})=>{
    return <Text  style={styles.text}>
        {text}
    </Text>
};


const styles = StyleSheet.create({
    text: {
        marginBottom: 32,
        fontFamily: 'Roboto-Regular',
        fontWeight:'500',
        fontSize: 30,
        letterSpacing:0.3,
        textAlign:'center'
    }
});