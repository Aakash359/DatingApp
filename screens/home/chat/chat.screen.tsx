import React from 'react'
import { Layout, MainHeader } from '../../../layout'
import { View, Text, StyleSheet } from 'react-native'
import { responsiveFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'
import { THEME, getTextButtonColor, getTextPrimaryColor, getTextSecondaryColor } from '../../../utils'

export const ChatScreen = () => {
    return (
        <Layout>
            <MainHeader />
            <View style={styles.mainWrapper}>
                <Text style={styles.headerText}>CHAT</Text>
            </View>
        </Layout>
    )
}

const styles = StyleSheet.create({
    mainWrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    likesWrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        height: '84%',
        gap: responsiveScreenHeight(2),
    },
    textWrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: responsiveScreenHeight(2),
        width: '60%',
        gap: responsiveScreenHeight(1.5),
    },
    headerText: {
        fontSize: responsiveFontSize(4),
        fontFamily: 'Audrey-Bold',
        color: getTextPrimaryColor(THEME.DARK)
    },
    descriptionText: {
        fontSize: responsiveFontSize(2),
        fontFamily: 'RedHatDisplay-Regular',
        color: getTextSecondaryColor(THEME.DARK),
        textAlign: 'center'
    },
    buttonWrapper: {
        width: '90%',
        paddingHorizontal: responsiveScreenWidth(2),
    },
    buttonText: {
        fontSize: responsiveFontSize(2.5),
        fontFamily: 'Audrey-Medium',
        color: getTextButtonColor(THEME.DARK),
    },
});