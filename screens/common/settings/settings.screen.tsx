import React, { useMemo } from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Layout } from "../../../layout"
import { LeftArrow } from "../../../assets"
import { useNavigation } from "@react-navigation/native"
import { responsiveWidth, responsiveFontSize, responsiveScreenWidth, responsiveScreenHeight, responsiveScreenFontSize } from "react-native-responsive-dimensions"
import { getDarkBackgroundColor, getTextButtonColor, getTextPrimaryColor, THEME } from "../../../utils"
import { SettingsAboutIcon, SettingsLikeIcon, SettingsMessageIcon, SettingsNotificationIcon, SettingsPaymentIcon, SettingsPrivacyIcon, SettingsThemeIcon, SettingsUserEditIcon } from "../../../assets/icons/settings"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { RootStackParamList } from "../../../App"

type SettingsScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'SettingsScreen'
>;

export const SettingsScreen = () => {
    const navigation = useNavigation<SettingsScreenNavigationProp>();
    // settings body functions
    const handleAccountPress = () => { }
    const handleNotificationsPress = () => { 
        navigation.navigate('NotificationsScreen');
     }
    const handlePaymentsPress = () => { }
    const handleMessageOptionsPress = () => { }
    const handlePrivacyOptionsPress = () => { }
    const handleLikesPress = () => { }
    const handleAboutPress = () => { }
    const handleThemesPress = () => { }
    // settings footer functions
    const handleHelpCenterPress = () => {
        navigation.navigate('HelpCenterScreen')
    }
    const handleSafetyGuideLinesPress = () => { }
    const handleTermsAndConditionsPress = () => { }
    const handlePrivacyPolicyPress = () => { }
    const handleDeleteAccountPress = () => { }
    const handleLogOutPress = () => { }

    const settingsBodyData = useMemo(() => {
        return [
            {
                icon: <SettingsUserEditIcon />,
                label: 'Account',
                onPress: handleAccountPress
            },
            {
                icon: <SettingsNotificationIcon />,
                label: 'Notifications',
                onPress: handleNotificationsPress
            },
            {
                icon: <SettingsPaymentIcon />,
                label: 'Payment',
                onPress: handlePaymentsPress
            },
            {
                icon: <SettingsMessageIcon />,
                label: 'Message Options',
                onPress: handleMessageOptionsPress
            },
            {
                icon: <SettingsPrivacyIcon />,
                label: 'Privacy Options',
                onPress: handlePrivacyOptionsPress
            },
            {
                icon: <SettingsLikeIcon />,
                label: 'Likes & Liked you',
                onPress: handleLikesPress
            },
            {
                icon: <SettingsAboutIcon />,
                label: 'About',
                onPress: handleAboutPress
            },
            {
                icon: <SettingsThemeIcon />,
                label: 'Themes',
                onPress: handleThemesPress
            }
        ]
    }, [])

    const settingsFooterData = useMemo(() => {
        return [
            {
                label: 'Help Center',
                onPress: handleHelpCenterPress
            },
            {
                label: 'Safety Guidelines',
                onPress: handleSafetyGuideLinesPress
            },
            {
                label: 'Terms & Conditions',
                onPress: handleTermsAndConditionsPress
            },
            {
                label: 'Privacy Policy',
                onPress: handlePrivacyPolicyPress
            },
            {
                label: 'Delete Account',
                onPress: handleDeleteAccountPress
            },
            {
                label: 'Log out',
                onPress: handleLogOutPress
            }
        ]
    }, [])

    return (
        <Layout>
            <View style={styles.mainWrapper}>
                {/* header section */}
                <View style={styles.headerWrapper}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <LeftArrow width={20} height={20} />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>SETTINGS</Text>
                </View>
                {/* settings body section */}
                <View style={styles.settingsBodyWrapper}>
                    {
                        settingsBodyData.map((data, index) => {
                            return (
                                <TouchableOpacity
                                    key={index + data.label}
                                    style={styles.settingsRow}
                                    onPress={data.onPress}
                                >
                                    {data.icon}
                                    <Text style={styles.settingsRowText}>{data.label}</Text>
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>
                {/* settings footer section */}
                <View style={styles.settingsFooterWrapper}>
                    {
                        settingsFooterData.map((data, index) => {
                            return (
                                <TouchableOpacity
                                    key={index + data.label}
                                    style={styles.settingsFooterRow}
                                    onPress={data.onPress}
                                >
                                    <Text style={styles.settingsFooterRowText}>{data.label}</Text>
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
    // settings header styles
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
    // settings body styles
    settingsBodyWrapper: {
        paddingHorizontal: responsiveScreenWidth(5),
        width: responsiveScreenWidth(90),
        marginTop: responsiveScreenHeight(2),
        flex: 4,
    },
    settingsRow: {
        display: 'flex',
        flexDirection: 'row',
        gap: responsiveScreenWidth(5),
        alignItems: 'center',
        marginBottom: responsiveScreenHeight(3)
    },
    settingsRowText: {
        fontFamily: 'RedHatDisplay-Regular',
        color: getTextButtonColor(THEME.DARK),
        fontSize: responsiveScreenFontSize(2.5)
    },
    // settings footer styles
    settingsFooterWrapper: {
        paddingVertical: responsiveScreenHeight(2),
        backgroundColor: getDarkBackgroundColor(THEME.DARK),
        width: responsiveScreenWidth(100),
        flex: 2.3
    },
    settingsFooterRow: {
        marginBottom: responsiveScreenHeight(2)
    },
    settingsFooterRowText: {
        paddingHorizontal: responsiveScreenWidth(5),
        fontFamily: 'RedHatDisplay-Regular',
        color: getTextButtonColor(THEME.DARK),
        fontSize: responsiveScreenFontSize(2.3)
    }
})