import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { SIZES } from '../../styles/base'

const ScreenTitle = ({title}) => {
    return (
        <View style={styles.titleContainer} >
            <Text style={styles.title} >{title}</Text>
        </View>
    )
}

export default ScreenTitle

const styles = StyleSheet.create({
    titleContainer:{
        width:SIZES.width,
        padding:SIZES.padding
    },

    title:{
        fontSize:18,
        fontWeight:'700',
    }
})
