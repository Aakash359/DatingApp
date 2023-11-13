import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Dimensions } from 'react-native';
import { responsiveScreenHeight, responsiveScreenWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import { COLORS, THEME, getBrandColor, getTextPrimaryColor, getTextSecondaryColor, getUnreadMessageTextColor } from '../utils';
import LinearGradient from 'react-native-linear-gradient';

interface Props {
    matchProfileImgSrc: any;
    matchName: string;
    lastTextTime: string;
    message: string;
    noOfUnreadTexts: number;
    isOnline?: boolean;
    onConversationPress: () => void;
    onConversationLongPress: () => void;
}


export const Conversation: React.FC<Props> = (props) => {
    return (
        <TouchableOpacity 
            onPress={props.onConversationPress} 
            onLongPress={props.onConversationLongPress}
        >
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
                            <LinearGradient
                                start={{ x: 0, y: 0 }}
                                end={{ x: 1, y: 0 }}
                                colors={[getBrandColor(THEME.LIGHT), getBrandColor(THEME.DARK)]}
                                style={{
                                    alignItems: 'center',
                                    justifyContent: 'center',
                                    borderRadius: 5000,
                                    height: responsiveScreenWidth(6),
                                    width: responsiveScreenWidth(6),
                                    zIndex: -1,
                                }}
                            >
                                <Text style={styles.noOfUnreadTexts}>

                                    {props.noOfUnreadTexts > 9 ? '9+' : props.noOfUnreadTexts}
                                </Text>
                            </LinearGradient>
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
        fontFamily: 'RedHatDisplay-SemiBold',
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
        borderRadius: 1000,
        width: responsiveScreenWidth(6),
        height: responsiveScreenWidth(6),
    },
    noOfUnreadTexts: {
        fontFamily: 'RedHatDisplay-Bold',
        color: COLORS.LIGHT_100,
        fontSize: responsiveFontSize(1.5),
        textAlign: 'center',
    },
});