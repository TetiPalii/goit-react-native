import { Pressable, Text, StyleSheet } from "react-native"

export const Button = ({ text }) => {
    return <Pressable style={styles.button}>
        <Text style={styles.text}>
            {text}
        </Text>
    </Pressable>
};

const styles = StyleSheet.create({
    button: {
        height: 51,
        backgroundColor: '#FF6C00',
        borderRadius: 100,
        alignItems:"center",
        justifyContent:'center',
        paddingVertical:16,
        marginBottom:10
    },
    text: {
        color: '#ffffff',
        textAlign: 'center',
        fontFamily:'Roboto-Regular',
        fontSize:16,
        
    
    
    }
});