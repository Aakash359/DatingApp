import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { UnreadNotificationIcon } from "../assets"
import { GiftTypes } from "../constants";
import { NotificationTypes } from "../constants/notification.data";
import FastImage from "react-native-fast-image";
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from "react-native-responsive-dimensions";
import { THEME, getTextSecondaryColor } from "../utils";
import { TouchableOpacity } from "react-native-gesture-handler";

// Define the props interface
interface NotificationComponentProps {
    type: NotificationTypes;
    name: string;
    date: Date;
    giftType?: GiftTypes;
    giftAmount?: number;
    isSeen: boolean;
}

export const NotificationComponent: React.FC<NotificationComponentProps> = ({ type, name, date, giftType, giftAmount, isSeen }) => {
    const getTimeAgo = (date: Date): string => {
        const now = new Date();
        const secondsPast = (now.getTime() - date.getTime()) / 1000;
    
        if (secondsPast < 60) { // less than a minute
            // Adding a check to handle "now" specifically
            return secondsPast < 5 ? 'now' : `${Math.floor(secondsPast)}s`;
        } else if (secondsPast < 3600) { // less than an hour
            return `${Math.floor(secondsPast / 60)}m`;
        } else if (secondsPast < 86400) { // less than a day
            return `${Math.floor(secondsPast / 3600)}hr`;
        } else if (secondsPast < 604800) { // less than a week
            return `${Math.floor(secondsPast / 86400)}d`;
        } else if (secondsPast < 31536000) { // less than a year
            return `${Math.floor(secondsPast / 604800)}w`;
        } else { // a year or more
            return `${Math.floor(secondsPast / 31536000)}y`;
        }
    };

    const getGiftTypeColor = () => {
        switch (giftType) {
            case GiftTypes.ROSE:
                return 'red'
            case GiftTypes.CHOCOLATE:
                return 'brown'
            case GiftTypes.BOUQUET:
                return 'pink'
        }
    }

    const getNotificationText = () => {
        switch (type) {
            case NotificationTypes.MATCH:
                return (
                    <>
                        <Text style={styles.matchText}>
                            You've been matched with
                            <Text style={styles.nameText}>{` ${name}`}</Text>
                            <Text style={styles.timeAgoText}>
                                {`  •${getTimeAgo(date)}`}
                            </Text>
                        </Text>
                        {!isSeen ?
                            <View style={styles.iconContainer}>
                                <UnreadNotificationIcon />
                            </View>
                            : null}
                    </>
                )
            case NotificationTypes.GIFT:
                return (
                    <>
                        <Text style={styles.matchText}>
                            <Text style={styles.nameText}>{`${name} `}</Text>
                            sent you a gift of
                            <Text style={{ color: getGiftTypeColor() }}>
                                {` ${giftAmount}`} {`${giftType} `}
                            </Text>
                            please take action now
                            <Text style={styles.timeAgoText}>
                                {`  •${getTimeAgo(date)}`}
                            </Text>
                        </Text>
                        {!isSeen ?
                            <View style={styles.iconContainer}>
                                <UnreadNotificationIcon />
                            </View>
                            : null}
                    </>
                )
            case NotificationTypes.LIKE:
                return (
                    <>
                        <Text style={styles.matchText}>
                            <Text style={styles.nameText}>{`${name} `}</Text>
                            Has liked you. please take action now
                            <Text style={styles.timeAgoText}>
                                {`  •${getTimeAgo(date)}`}
                            </Text>
                        </Text>
                        {!isSeen ?
                            <View style={styles.iconContainer}>
                                <UnreadNotificationIcon />
                            </View>
                            : null}
                    </>
                )
        }
    }

    return (
        <TouchableOpacity style={styles.container}>
            <FastImage source={require('../assets/images/home/likes/avatar2.png')} style={styles.avatar} />
            <View style={styles.notficationTextContainer}>
                {getNotificationText()}
            </View>
            {/* {!isSeen && <UnreadNotificationIcon />} */}
        </TouchableOpacity>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: responsiveScreenWidth(2.5),
        marginHorizontal: responsiveScreenHeight(2.5)
    },
    avatar: {
        width: responsiveScreenHeight(6),
        height: responsiveScreenHeight(6),
        borderRadius: 1000, // Make it round
        marginRight: responsiveScreenWidth(3)
    },
    notficationTextContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    matchText: {
        color: 'white',
        fontFamily: 'RedHatDisplay-Regular',
        fontSize: responsiveScreenFontSize(2),
        width: responsiveScreenWidth(68),
        // backgroundColor: 'red'
    },
    nameText: {
        fontFamily: 'RedHatDisplay-SemiBold'
    },
    iconContainer: {
        alignSelf: 'center'
    },
    timeAgoText: {
        letterSpacing: 2,
        color: getTextSecondaryColor(THEME.DARK)
    }
});
