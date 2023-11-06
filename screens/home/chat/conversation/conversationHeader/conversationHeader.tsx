import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { LeftArrow, PhoneIconAlt, ThreeDotsIcon, VideoIcon } from '../../../../../assets';
import FastImage from 'react-native-fast-image';
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import { THEME, getTextPrimaryColor } from '../../../../../utils';
import { TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const matchData = {
    name: "Alex Linderson",
    image: require("../../../../../assets/images/home/likes/avatar1.png"),
    status: 'Online'
}

export const ConversationHeader = () => {
    const navigation = useNavigation()
    return (
        <View style={styles.headerWrapper}>
            <TouchableOpacity onPress={navigation.goBack}>
                <View style={styles.leftArrowIconWrapper}>
                    <LeftArrow width={20} height={20} />
                </View>
            </TouchableOpacity>
            <FastImage
                source={matchData.image}
                style={styles.matchProfileImg}
            />
            <View style={styles.matchDataWrapper}>
                <Text style={styles.matchNameText}>{matchData.name}</Text>
                <Text style={styles.matchStatusText}>{matchData.status}</Text>
            </View>
            <View style={styles.iconWrapper}>
                <TouchableOpacity>
                    <PhoneIconAlt width={25} height={25} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <VideoIcon width={25} height={25} />
                </TouchableOpacity>
                <TouchableOpacity>
                    <ThreeDotsIcon />
                </TouchableOpacity>
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    headerWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
    },
    leftArrowIconWrapper: {
        width: responsiveScreenWidth(8),
        height: responsiveScreenHeight(8),
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: responsiveScreenWidth(4),
    },
    matchProfileImg: {
        width: responsiveScreenWidth(12),
        height: responsiveScreenWidth(12),
        borderRadius: 2000,
    },
    matchDataWrapper: {
        marginLeft: responsiveScreenWidth(4),
    },
    matchNameText: {
        fontFamily: 'RedHatDisplay-SemiBold',
        color: getTextPrimaryColor(THEME.DARK),
        fontSize: responsiveScreenFontSize(2.3),
    },
    matchStatusText: {
        fontFamily: 'RedHatDisplay-Regular',
        color: getTextPrimaryColor(THEME.DARK),
        fontSize: responsiveScreenFontSize(1.7),
    },
    iconWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: responsiveScreenWidth(6),
        marginLeft: 'auto',
        marginRight: responsiveScreenWidth(6),
    },
});
