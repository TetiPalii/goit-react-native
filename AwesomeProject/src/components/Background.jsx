import { ImageBackground, StyleSheet } from "react-native"
import backgroundImage from '../assests/images/PhotoBg.png';


export const Background=({children})=>{

return <ImageBackground source={backgroundImage} style={styles.backgroundImage}  resizeMode="cover">{children}</ImageBackground>
};

const styles=StyleSheet.create({
    backgroundImage:{
        flex:1,
        justifyContent:'flex-end',
        width:'100%'
    }
})