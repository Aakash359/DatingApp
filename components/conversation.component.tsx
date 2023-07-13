import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { responsiveScreenHeight, responsiveScreenWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import { COLORS, THEME, getTextPrimaryColor, getTextSecondaryColor, getUnreadMessageTextColor } from '../utils';

interface Props {
    matchProfileImgSrc: any;
    matchName: string;
    lastTextTime: string;
    message: string;
    noOfUnreadTexts: number;
    isOnline?: boolean;
}

export const Conversation: React.FC<Props> = (props) => {
    return (
        <TouchableOpacity>
            <View style={styles.wrapper}>
                <View style={styles.imageWrapper}>
                    <Image
                        source={props.matchProfileImgSrc}
                        style={styles.image}
                        resizeMode='stretch'
                    />
                    {props.isOnline ? <View style={styles.onlineStatus} /> : null}
                </View>
                <View style={styles.conversationDetailsWrapper}>
                    <View style={styles.conversationRowWrapper}>
                        <Text style={styles.matchNameText}>
                            {props.matchName}
                        </Text>
                        <Text style={styles.lastTextTimeText}>
                            {props.lastTextTime}
                        </Text>
                    </View>
                    <View style={styles.conversationRowWrapper}>
                        <Text style={[styles.messageText, {
                            color: props.noOfUnreadTexts > 0 ?
                                getUnreadMessageTextColor(THEME.DARK) :
                                getTextPrimaryColor(THEME.DARK),
                        }]}>
                            {props.message}
                        </Text>
                        {props.noOfUnreadTexts > 0 ? <View style={styles.noOfUnreadTextsWrapper}>
                            <Text style={styles.noOfUnreadTexts}>
                                {props.noOfUnreadTexts}
                            </Text>
                        </View> : null}
                    </View>
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    wrapper: {
        flexDirection: 'row',
        paddingVertical: 10,
    },
    image: {
        width: responsiveScreenWidth(15),
        height: responsiveScreenWidth(15),
        borderRadius: 1000,
    },
    imageWrapper: {
        position: 'relative',
    },
    onlineStatus: {
        position: 'absolute',
        bottom: 0,
        right: responsiveScreenWidth(1),
        backgroundColor: COLORS.ONLINE_STATUS,
        width: responsiveScreenWidth(3),
        height: responsiveScreenWidth(3),
        borderRadius: 1000,
    },
    conversationDetailsWrapper: {
        display: 'flex',
        flexDirection: 'column',
        gap: responsiveScreenHeight(0.75),
        marginLeft: responsiveScreenWidth(3),
    },
    conversationRowWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: responsiveScreenWidth(75),
    },
    matchNameText: {
        fontFamily: 'RedHatDisplay-Bold',
        color: getUnreadMessageTextColor(THEME.DARK),
        fontSize: responsiveFontSize(2.2),
    },
    lastTextTimeText: {
        fontFamily: 'RedHatDisplay-Regular',
        color: getTextSecondaryColor(THEME.DARK),
        fontSize: responsiveFontSize(1.8),
    },
    messageText: {
        fontFamily: 'RedHatDisplay-SemiBold',
        color: getTextSecondaryColor(THEME.DARK),
        fontSize: responsiveFontSize(2),
    },
    noOfUnreadTextsWrapper: {
        backgroundColor: COLORS.BRAND_LIGHT,
        borderRadius: 1000,
        width: responsiveScreenWidth(5),
        height: responsiveScreenWidth(5),
    },
    noOfUnreadTexts: {
        fontFamily: 'RedHatDisplay-Bold',
        color: COLORS.LIGHT_100,
        fontSize: responsiveFontSize(1.8),
        textAlign: 'center',
    },
});