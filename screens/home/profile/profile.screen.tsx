import React from 'react'
import { Layout, MainHeader } from '../../../layout'
import { View, Text, StyleSheet } from 'react-native'
import { responsiveFontSize, responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'
import { COLORS, THEME, getBorderPrimaryColor, getDarkBackgroundColor, getTextButtonColor, getTextPrimaryColor, getTextSecondaryColor } from '../../../utils'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'
import FastImage from 'react-native-fast-image'
import { CommentIcon, GemLargeIcon, ManifestLargeIcon, RightArrow, SettingsIcon, UpgradeProfileIcon, UserEditIcon } from '../../../assets/icons'
import { Button } from '../../../components'
import { useNavigation } from '@react-navigation/native'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../App'

type ProfileScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'ProfilePhotoScreen'
>;

export const ProfileScreen = () => {

    const navigation = useNavigation<ProfileScreenNavigationProp>();

    const changePhotoHandler = () => { }
    const handleEditProfile = () => {
        navigation.navigate('EditProfileScreen')
    }
    const handleSettingsPress = () => {
        navigation.navigate('SettingsScreen')
    }
    const handleAboutUsPress = () => { }

    const profileAccordianData = [
        {
            icon: <UserEditIcon />,
            text: 'Edit Profile',
            onPress: handleEditProfile
        },
        {
            icon: <SettingsIcon />,
            text: 'Settings',
            onPress: handleSettingsPress
        },
        {
            icon: <CommentIcon />,
            text: 'About us & FAQ',
            onPress: handleAboutUsPress
        }
    ]

    return (
        <Layout>
            {/* <MainHeader /> */}
            <ScrollView>
                <View style={styles.mainWrapper}>
                    {/* <Text style={styles.headerText}>PROFILE</Text> */}
                    {/* profile img section */}
                    <View style={styles.imageWrapper}>
                        <TouchableOpacity onPress={changePhotoHandler}>
                            <FastImage
                                style={styles.profileImg}
                                source={require('../../../assets/images/home/likes/avatar1.png')}
                            />
                            <Text style={styles.profileImgText}>Tap to change your photo</Text>
                        </TouchableOpacity>
                    </View>
                    {/* upgrade section */}
                    <View style={styles.upgradeWrapper}>
                        <View style={styles.upgradeContentWrapper}>
                            <View style={styles.upgradeIconWrapper}>
                                <UpgradeProfileIcon />
                            </View>
                            <Text style={styles.upgradeText}>
                                See who already liked you by
                                upgrading to Manifest Boost
                            </Text>
                            <Button
                                variant='primary'
                                imageSource={require('../../../assets/gradients/splash.png')}
                                onPress={() => { }}
                                height={responsiveScreenHeight(6.5)}
                                borderRadius={12}
                                borderTopLeftRadius={0}
                                borderTopRightRadius={0}
                            >
                                <Text style={styles.upgradeBtnText}>UPGRADE</Text>
                            </Button>
                        </View>
                    </View>
                    {/* buy currencies section */}
                    <View style={styles.currencyWrapper}>
                        <TouchableOpacity>
                            <View style={styles.buyTokensWrapper}>
                                <ManifestLargeIcon />
                                <Text style={styles.currencyText}>Buy Tokens</Text>
                            </View>
                        </TouchableOpacity>
                        <TouchableOpacity>
                            <View style={styles.buyGemsWrapper}>
                                <GemLargeIcon />
                                <Text style={styles.currencyText}>Buy Gems</Text>
                            </View>
                        </TouchableOpacity>
                    </View>
                    {/* accordian section */}
                    {profileAccordianData.map((data, index) => {
                        return (
                            <TouchableOpacity
                                key={data.text + index}
                                style={styles.accordianWrapper}
                                onPress={data.onPress}
                            >
                                <View style={styles.accordianContainer}>
                                    {data.icon}
                                    <Text style={styles.accordianText}>{data.text}</Text>
                                </View>
                                <RightArrow />
                            </TouchableOpacity>
                        )
                    })}
                </View>
            </ScrollView>
        </Layout>
    )
}

const styles = StyleSheet.create({
    mainWrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: responsiveScreenWidth(3),
        marginVertical: responsiveScreenHeight(2),
    },
    headerText: {
        fontSize: responsiveFontSize(4),
        fontFamily: 'Audrey-Bold',
        color: getTextPrimaryColor(THEME.DARK)
    },
    buttonText: {
        fontSize: responsiveFontSize(2.5),
        fontFamily: 'Audrey-Medium',
        color: getTextButtonColor(THEME.DARK),
    },
    imageWrapper: {},
    profileImg: {
        width: responsiveScreenHeight(15),
        height: responsiveScreenHeight(15),
        borderRadius: 1000,
        borderColor: COLORS.BRAND_DARK,
        borderWidth: 2,
        alignSelf: 'center'
    },
    profileImgText: {
        marginTop: responsiveScreenHeight(1),
        fontFamily: 'RedHatDisplay-Regular',
        color: getTextButtonColor(THEME.DARK),
        fontSize: responsiveScreenFontSize(2),
    },
    // upgrade section styles
    upgradeWrapper: {
        marginTop: responsiveScreenHeight(1),
        borderWidth: 1,
        borderColor: getBorderPrimaryColor(THEME.DARK),
        borderRadius: 12,
        width: responsiveScreenWidth(90)
    },
    upgradeContentWrapper: {},
    upgradeIconWrapper: {
        alignSelf: 'center',
        marginTop: responsiveScreenHeight(0.5)
    },
    upgradeText: {
        color: getTextButtonColor(THEME.DARK),
        alignSelf: 'center',
        textAlign: 'center',
        marginHorizontal: responsiveScreenWidth(15),
        fontFamily: 'RedHatDisplay-Regular',
        fontSize: responsiveScreenFontSize(2.2),
        marginTop: responsiveScreenHeight(0.5),
        marginBottom: responsiveScreenHeight(1)
    },
    upgradeBtnText: {
        fontFamily: 'Audrey-Medium',
        fontSize: responsiveScreenFontSize(3),
        color: getTextButtonColor(THEME.DARK)
    },
    // currency styles
    currencyWrapper: {
        width: responsiveScreenWidth(90),
        marginTop: responsiveScreenHeight(2),
        borderColor: getBorderPrimaryColor(THEME.DARK),
        borderWidth: 1,
        display: 'flex',
        flexDirection: 'row',
        gap: responsiveScreenWidth(2),
        // padding: responsiveScreenHeight(3),
        // justifyContent: 'space-between'
    },
    currencyText: {
        color: getTextButtonColor(THEME.DARK),
        fontFamily: 'RedHatDisplay-Regular',
        fontSize: responsiveScreenFontSize(2.3),
        textAlign: 'center',
        marginTop: responsiveScreenHeight(0.5)
    },
    buyTokensWrapper: {
        borderRightWidth: 1,
        borderColor: getBorderPrimaryColor(THEME.DARK),
        padding: responsiveScreenHeight(3),
        paddingHorizontal: 0,
        width: responsiveScreenWidth(45),
        display: 'flex',
        alignItems: 'center'
    },
    buyGemsWrapper: {
        padding: responsiveScreenHeight(3),
        paddingHorizontal: 0,
        width: responsiveScreenWidth(45),
        display: 'flex',
        alignItems: 'center'
    },
    // accordian styles
    accordianWrapper: {
        width: responsiveScreenWidth(90),
        display: 'flex',
        flexDirection: 'row',
        marginTop: responsiveScreenHeight(1.5),
        padding: responsiveScreenHeight(2),
        backgroundColor: getDarkBackgroundColor(THEME.DARK),
        borderRadius: 5,
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    accordianContainer: {
        display: 'flex',
        flexDirection: 'row',
        gap: responsiveScreenWidth(4),
        alignItems: 'center'
    },
    accordianText: {
        color: getTextButtonColor(THEME.DARK),
        fontFamily: 'RedHatDisplay-Regular',
        fontSize: responsiveScreenFontSize(2),
        textAlign: 'center',
    }
});