import React from 'react'
import { 
    View, 
    StatusBar,
    StyleSheet,
    Image,
    Dimensions,
    Text,
    TouchableOpacity
} from 'react-native';
import colors from '../constants/colors'

const styles = StyleSheet.create({
button: {
    flexDirection: "row",
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20
},
buttonIcon: {
    width: 20,
    height: 20,
    marginRight: 10
},
buttonText: {
    color: colors.white
}
})

export const Button = ({ onPress, text}) => {
    return (
        <TouchableOpacity onPress={onPress} style={styles.button}>
            <Image source={require("../../assets/reverse.png")} style={styles.buttonIcon} resizeMode='contain'/>
            <Text style={styles.buttonText}>{text}</Text>
        </TouchableOpacity>
    )
}