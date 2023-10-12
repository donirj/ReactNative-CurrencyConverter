import React from 'react'
import { 
    View, 
    TouchableOpacity, 
    Text, 
    SafeAreaView, 
    StyleSheet,
    ScrollView,
    Linking,
    Alert
} from 'react-native'
import {Entypo} from '@expo/vector-icons'

// components
import { RowItem, RowSeparator } from '../components/RowItem'


import colors from '../constants/colors'

const styles = StyleSheet.create({
    row: {
        marginTop: 25, 
        paddingHorizontal: 20,
        paddingVertical: 16,
        flexDirection: 'row',
        alignItems: "center",
        justifyContent: "space-between"
    },
    text: {
        fontSize: 16,
        color: colors.text
    },
    separator: {
        backgroundColor: colors.border,
        height: StyleSheet.hairlineWidth,
        marginLeft: 20
    }
})

const openURL = (url) => {
    return Linking.openURL(url).catch(() => {
        Alert.alert('Sorry, something went wrong', 'Please try again later')
    })
}

export default () => {
    return (
        <SafeAreaView style={{ flex: 1}}>
            <ScrollView>
            <RowItem 
                text={'themes'}
                onPress={() => alert("todo!")}
                rightIcon={<Entypo name='chevron-right' size={20} color={colors.blue}/>}
            />

            <RowSeparator />

            <RowItem 
                text={'React native basics'}
                onPress={() => openURL('https://learn.handlebarlabs.com/p/react-native-basics')}
                rightIcon={<Entypo name='export' size={20} color={colors.blue}/>}
            />

            <RowItem 
                text={'React native by example'}
                onPress={() => openURL('https://learn.handlebarlabs.com/p/react-native-basics')}
                rightIcon={<Entypo name='export' size={20} color={colors.blue}/>}
            />

        </ScrollView>
        </SafeAreaView>
    )
}