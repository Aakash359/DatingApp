import { GiftTypes } from "./enums";

// Now
const now = new Date();

// 10 minutes ago
const tenMinutesAgo = new Date(now.getTime() - 10 * 60000);

// 1 hour ago
const oneHourAgo = new Date(now.getTime() - 60 * 60000);

// 1 day ago
const oneDayAgo = new Date(now.getTime() - 24 * 60 * 60000);

// 1 week ago
const oneWeekAgo = new Date(now.getTime() - 7 * 24 * 60 * 60000);

// 104 weeks

const twoHundredWeeksAgo = new Date(now.getTime() - 200 * 7 * 24 * 60 * 60000);

export enum NotificationTypes {
    MATCH = 'MATCH',
    GIFT = 'GIFT',
    LIKE = 'LIKE'
}

export interface NotificationsDataInterface {
    type: NotificationTypes;
    giftType?: GiftTypes;
    giftAmount?: number;
    name: string;
    date: Date;
    isSeen: boolean;
}

export const NotificationsData: NotificationsDataInterface[] = [
    {
        type: NotificationTypes.MATCH,
        name: 'Alex Linderson',
        date: now,
        isSeen: false
    },
    {
        type: NotificationTypes.GIFT,
        giftType: GiftTypes.ROSE,
        giftAmount: 5,
        name: 'Ramil Welson',
        date: tenMinutesAgo,
        isSeen: false
    },
    {
        type: NotificationTypes.LIKE,
        name: 'Selina Kyle',
        date: oneHourAgo,
        isSeen: true
    },
    {
        type: NotificationTypes.GIFT,
        giftType: GiftTypes.CHOCOLATE,
        giftAmount: 25,
        name: 'Poison Ivy',
        date: oneDayAgo,
        isSeen: true
    },
    {
        type: NotificationTypes.GIFT,
        giftType: GiftTypes.BOUQUET,
        giftAmount: 10,
        name: 'Louis Lane',
        date: oneWeekAgo,
        isSeen: true
    },
    {
        type: NotificationTypes.GIFT,
        giftType: GiftTypes.BOUQUET,
        giftAmount: 10,
        name: 'Barbara Gordon',
        date: twoHundredWeeksAgo,
        isSeen: true
    },
    {
        type: NotificationTypes.MATCH,
        name: 'Alex Linderson',
        date: now,
        isSeen: false
    },
    {
        type: NotificationTypes.GIFT,
        giftType: GiftTypes.ROSE,
        giftAmount: 5,
        name: 'Ramil Welson',
        date: tenMinutesAgo,
        isSeen: false
    },
    {
        type: NotificationTypes.LIKE,
        name: 'Selina Kyle',
        date: oneHourAgo,
        isSeen: true
    },
    {
        type: NotificationTypes.GIFT,
        giftType: GiftTypes.CHOCOLATE,
        giftAmount: 25,
        name: 'Poison Ivy',
        date: oneDayAgo,
        isSeen: true
    },
    {
        type: NotificationTypes.GIFT,
        giftType: GiftTypes.BOUQUET,
        giftAmount: 10,
        name: 'Louis Lane',
        date: oneWeekAgo,
        isSeen: true
    },
    {
        type: NotificationTypes.GIFT,
        giftType: GiftTypes.BOUQUET,
        giftAmount: 10,
        name: 'Barbara Gordon',
        date: twoHundredWeeksAgo,
        isSeen: true
    },
]