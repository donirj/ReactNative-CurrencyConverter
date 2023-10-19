import React, { useState, useEffect} from 'react'
import { 
    View, 
    StatusBar,
    StyleSheet,
    Image,
    Dimensions,
    Text,
    ScrollView,
    Keyboard
} from 'react-native';

import colors from '../constants/colors'
import { ConversionInput } from '../components/ConversionInput'
import { Button } from '../components/Button';

const screen = Dimensions.get('window')

const styles = StyleSheet.create({
    container: {
        backgroundColor: colors.blue,
        flex: 1,
        
    },
    content: {
        paddingTop: screen.height * 0.2
    },
    logoContainer: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    logoBackground: {
        width: screen.width * 0.45,
        height: screen.width * 0.45
       
    },
    logo: {
        position: 'absolute',
        width: screen.width * 0.25,
        height: screen.width * 0.25
    },
    textHeader: {
        color: colors.white,
        fontWeight: "bold",
        fontSize: 30,
        marginVertical: 20,
        textAlign: "center"
    },
    text: {
        color: colors.white,
        fontSize: 13,
        textAlign: "center"
    }
})

export default () => {
    const baseCurrency = 'USDB';
    const quoteCurrency = 'GBP';
    const conversionRate = 0.8345

    const [scrollEnabled, setScrollEnabled] = useState(false)

    useEffect(() => {
        // for when keyboard opens
        const showListener = Keyboard.addListener('keyboardDidShow', () => {
            setScrollEnabled(true)
        })

        // for when keyboard closes
        const hideListener = Keyboard.addListener('keyboardDidHide', () => {
            setScrollEnabled(false)
        })

        return () => {
            showListener.remove();
            hideListener.remove();
        };
    },[])

    return (
        <View style={styles.container}>
            <ScrollView scrollEnabled={scrollEnabled}>
            <StatusBar barStyle="light-content" backgroundColor={colors.blue}/>
            <View style={styles.content}>
            <View style={styles.logoContainer}>
                <Image 
                    source={require('../../assets/background.png')} 
                    style={styles.logoBackground}/>
                <Image 
                    source={require('../../assets/logo.png')} 
                    style={styles.logo} 
                    resizeMode='contain'/>
                
            </View>

            <Text style={styles.textHeader}>Currency Converter</Text>

            <ConversionInput 
                text={baseCurrency}
                value="123"
                onButtonPress={() => alert("todo")}
                onChangeText={text => console.log('text', text)}
                keyboardType="numeric"
            />
            <ConversionInput 
                text={quoteCurrency}
                value="123"
                onButtonPress={() => alert("todo")}
                editable={false}
            />

            <Text style={styles.text}>
                {`1 ${baseCurrency} = ${conversionRate} ${quoteCurrency}as of april 3 of 2023`}
            </Text>

            <Button text="Rever Currencies" onPress={() => alert("todo!")}/>
            <View style={{height: screen.height}} />
            </View>
            </ScrollView>
        </View>
    )
};