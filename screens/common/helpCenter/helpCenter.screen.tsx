import React, { useMemo } from 'react';
import { Layout } from '../../../layout';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { HelpCenterCallIcon, HelpCenterFAQIcon, HelpCenterInquiryIcon, HelpCenterReportIcon, LeftArrow } from '../../../assets';
import { useNavigation } from '@react-navigation/native';
import { responsiveScreenWidth, responsiveScreenHeight, responsiveFontSize, responsiveWidth, responsiveScreenFontSize } from 'react-native-responsive-dimensions';
import { getTextButtonColor, getTextPrimaryColor, THEME } from '../../../utils';

export const HelpCenterScreen = () => {
    const navigation = useNavigation();
    const handleFAQPress = () => { };
    const handleInquiryPress = () => { };
    const handleCallPress = () => { };
    const handleMailPress = () => { };
    const handleReportPress = () => { };

    const helpCenterData = useMemo(() => {
        return [
            {
                icon: <HelpCenterFAQIcon />,
                label: 'FAQs',
                onPress: handleFAQPress
            },
            {
                icon: <HelpCenterInquiryIcon />,
                label: 'Send Inquiry',
                onPress: handleInquiryPress
            },
            {
                icon: <HelpCenterCallIcon />,
                label: 'Call: +91  97234567342',
                onPress: handleCallPress
            },
            {
                icon: <HelpCenterInquiryIcon />,
                label: 'Mail: info@manifest.com',
                onPress: handleMailPress
            },
            {
                icon: <HelpCenterReportIcon />,
                label: 'Report inappropriate activity',
                onPress: handleReportPress
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
                    <Text style={styles.headerText}>HELP CENTER</Text>
                </View>
                {/* content section */}
                <View style={styles.helpCenterBodyWrapper}>
                    {
                        helpCenterData.map((data, index) => {
                            return (
                                <TouchableOpacity
                                    key={index + data.label}
                                    style={styles.helpCenterRow}
                                    onPress={data.onPress}
                                >
                                    {data.icon}
                                    <Text style={styles.helpCenterRowText}>{data.label}</Text>
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
    mainWrapper: {
        flexGrow: 1,
        marginVertical: responsiveScreenHeight(1)
    },
    // header styles
    headerWrapper: {
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
    // content styles
    helpCenterBodyWrapper: {
        paddingHorizontal: responsiveScreenWidth(5),
        width: responsiveScreenWidth(90),
        marginTop: responsiveScreenHeight(3),
        flex: 4,
    },
    helpCenterRow: {
        display: 'flex',
        flexDirection: 'row',
        gap: responsiveScreenWidth(5),
        alignItems: 'center',
        marginBottom: responsiveScreenHeight(3)
    },
    helpCenterRowText: {
        fontFamily: 'RedHatDisplay-Regular',
        color: getTextButtonColor(THEME.DARK),
        fontSize: responsiveScreenFontSize(2.5)
    },
})