import { View, StyleSheet} from "react-native"

export const ScreenContainer=({children})=>{
    return <View style={styles.container}>{children}</View>
};

const styles = StyleSheet.create({
    container: {
       
        width: '100%',
        backgroundColor:"#ffffff",
        borderTopStartRadius:35,
        borderTopEndRadius:35,
        paddingTop:100,
        paddingBottom:100
    },
  
});