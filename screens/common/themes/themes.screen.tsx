import React from "react"
import { Layout } from "../../../layout"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { LeftArrow } from "../../../assets"
import { responsiveScreenHeight, responsiveScreenWidth, responsiveWidth, responsiveFontSize, responsiveScreenFontSize } from "react-native-responsive-dimensions"
import { getDarkBackgroundColor, getTextPrimaryColor, THEME } from "../../../utils"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { RootStackParamList } from "../../../App"
import { useNavigation } from "@react-navigation/native"
import FastImage from "react-native-fast-image"

type ThemesScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'ThemesScreen'
>;

const themesData = [
    {
        themeName: 'Midnight dark',
        image1: require('../../../assets/images/theme/midnightDark/chatListing.png'),
        image2: require('../../../assets/images/theme/midnightDark/giftAndDateReq.png')
    },
    {
        themeName: 'Dark house',
        image1: require('../../../assets/images/theme/midnightDark/chatListing.png'),
        image2: require('../../../assets/images/theme/midnightDark/giftAndDateReq.png')
    },
    {
        themeName: 'Light mode',
        image1: require('../../../assets/images/theme/midnightDark/chatListing.png'),
        image2: require('../../../assets/images/theme/midnightDark/giftAndDateReq.png')
    },
    {
        themeName: 'Extremely dark',
        image1: require('../../../assets/images/theme/midnightDark/chatListing.png'),
        image2: require('../../../assets/images/theme/midnightDark/giftAndDateReq.png')
    },
]

export const ThemesScreen = () => {

    const navigation = useNavigation<ThemesScreenNavigationProp>();

    const handleThemePress = () => {
        navigation.navigate('ThemesPreviewScreen')
    }

    return (
        <Layout>
            <View style={styles.mainWrapper}>
                {/* header section */}
                <View style={styles.headerWrapper}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <LeftArrow width={20} height={20} />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>THEMES</Text>
                </View>
                <View style={styles.themesWrapper}>
                    {
                        themesData.map((theme, index) => {
                            return (
                                <TouchableOpacity
                                    key={index + theme.themeName}
                                    onPress={handleThemePress}
                                >
                                    <View
                                        style={styles.themeWrapper}
                                    >
                                        <FastImage
                                            source={theme.image1}
                                            style={styles.themeImage}
                                            resizeMode="contain"
                                        />
                                        <FastImage
                                            source={theme.image2}
                                            style={[styles.themeImage, {
                                                marginTop: responsiveScreenHeight(2)
                                            }]}
                                            resizeMode="contain"
                                        />
                                    </View>
                                    <Text style={styles.themeText}>{theme.themeName}</Text>
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>
            </View>
        </Layout>
    )
}

const styles = StyleSheet.create({
    headerWrapper: {
        marginTop: responsiveScreenHeight(2),
        paddingHorizontal: responsiveScreenWidth(5),
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: responsiveWidth(2),
    },
    headerText: {
        fontFamily: 'Audrey-Medium',
        fontSize: responsiveFontSize(3),
        color: getTextPrimaryColor(THEME.DARK)
    },
    mainWrapper: {
        // paddingHorizontal: responsiveScreenWidth(5),
        paddingVertical: responsiveScreenHeight(1),
        flex: 1
    },
    // themes styling
    themesWrapper: {
        marginVertical: responsiveScreenHeight(3),
        marginHorizontal: responsiveScreenWidth(5),
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        gap: responsiveScreenWidth(2.5),
        rowGap: responsiveScreenHeight(3)
    },
    themeWrapper: {
        padding: 15,
        backgroundColor: getDarkBackgroundColor(THEME.DARK),
        display: 'flex',
        flexDirection: 'row',
        gap: responsiveScreenWidth(2),
        width: responsiveScreenWidth(42.5),
        height: responsiveScreenWidth(42.5),
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 8

    },
    themeImage: {
        width: responsiveScreenWidth(15),
        height: responsiveScreenHeight(25)
    },
    themeText: {
        fontFamily: 'RedHatDisplay-Regular',
        color: getTextPrimaryColor(THEME.DARK),
        marginTop: responsiveScreenHeight(1),
        fontSize: responsiveScreenFontSize(2),
        marginLeft: responsiveScreenWidth(1)
    }
})