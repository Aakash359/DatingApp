import React from "react"
import { View, Text, StyleSheet } from "react-native"
import { UnreadNotificationIcon } from "../assets"
import { GiftTypes } from "../constants";
import { NotificationTypes } from "../constants/notification.data";
import FastImage from "react-native-fast-image";

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
    const getTimeAgo = (date) => {
        // Implementation of time ago logic goes here
        return '1d'
    };

    // Choose text and color based on notification type and gift type
    const notificationText = 
        type === 'MATCH' ? `You've been matched with ${name}` :
        type === 'GIFT' ? `${name} Sent you ${giftAmount} ${giftType}. please take action now` :
            `${name} has liked you`;

    const giftColor = giftType === 'Rose' ? 'red' :
        giftType === 'Bouquet' ? 'green' :
            'brown'; // Assuming chocolate is brown

    return (
        <View style={styles.container}>
            <FastImage source={require('../assets/images/home/likes/avatar2.png')} style={styles.avatar} />
            <View style={styles.textContainer}>
                <Text style={[styles.notificationText, { color: 'white' }]}>
                    {notificationText}
                </Text>
                <Text style={styles.dateText}>
                    {getTimeAgo(date)} ago
                </Text>
            </View>
            {!isSeen && <UnreadNotificationIcon />}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center',
        padding: 10, // Adjust padding as needed
        backgroundColor: '#000', // Adjust the background color as needed
    },
    avatar: {
        width: 50, // Adjust size as needed
        height: 50, // Adjust size as needed
        borderRadius: 25, // Make it round
        marginRight: 10, // Space between avatar and text
    },
    textContainer: {
        flex: 1,
    },
    notificationText: {
        fontSize: 16, // Adjust font size as needed
        fontWeight: 'bold', // Adjust font weight as needed
    },
    dateText: {
        fontSize: 14, // Adjust font size as needed
        color: 'gray', // Adjust color as needed
    },
});
