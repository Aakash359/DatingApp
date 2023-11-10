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
}

export const NotificationsData: NotificationsDataInterface[] = [
    {
        type: NotificationTypes.MATCH,
        name: 'Alex Linderson',
        date: now
    },
    {
        type: NotificationTypes.GIFT,
        giftType: GiftTypes.ROSE,
        giftAmount: 5,
        name: 'Ramil Welson',
        date: tenMinutesAgo
    },
    {
        type: NotificationTypes.LIKE,
        name: 'Selina Kyle',
        date: oneHourAgo,
    },
    {
        type: NotificationTypes.GIFT,
        giftType: GiftTypes.CHOCOLATE,
        giftAmount: 25,
        name: 'Poison Ivy',
        date: oneDayAgo
    },
    {
        type: NotificationTypes.GIFT,
        giftType: GiftTypes.BOUQUET,
        giftAmount: 10,
        name: 'Louis Lane',
        date: oneWeekAgo
    },
]