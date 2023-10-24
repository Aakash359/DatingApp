import { GiftTypes } from "./enums";

export enum ProfileActionType {
    LIKE = 'LIKE',
    GIFT = 'GIFT',
    COMMENT= 'COMMENT'
}

export interface ActionProfileData {
    name: string;
    age: string;
    image: string | null;
    giftType: GiftTypes | null;
    giftAmount: number | null;
    numberOfComments: number | null;
    actionType: ProfileActionType
}

export const allActionProfileData: ActionProfileData[] = [
    {
        name: 'Samantha1',
        age: '21',
        image: require('../assets/images/home/likes/avatar1.png'),
        giftType: GiftTypes.ROSE,
        giftAmount: 1,
        numberOfComments: null,
        actionType: ProfileActionType.GIFT
    },
    {
        name: 'Samantha2',
        age: '22',
        image: require('../assets/images/home/likes/avatar1.png'),
        giftType: GiftTypes.BOUQUET,
        giftAmount: 2,
        numberOfComments: null,
        actionType: ProfileActionType.GIFT
    },
    {
        name: 'Samantha3',
        age: '23',
        image: require('../assets/images/home/likes/avatar1.png'),
        giftType: GiftTypes.CHOCOLATE,
        giftAmount: 3,
        numberOfComments: null,
        actionType: ProfileActionType.GIFT
    },
    {
        name: 'Samantha4',
        age: '24',
        image: require('../assets/images/home/likes/avatar1.png'),
        giftType: GiftTypes.ROSE,
        giftAmount: 4,
        numberOfComments: null,
        actionType: ProfileActionType.GIFT
    },
    {
        name: 'Samantha5',
        age: '25',
        image: require('../assets/images/home/likes/avatar1.png'),
        giftType: null,
        giftAmount: null,
        numberOfComments: 5,
        actionType: ProfileActionType.COMMENT
    },
    {
        name: 'Samantha6',
        age: '26',
        image: require('../assets/images/home/likes/avatar1.png'),
        giftType: null,
        giftAmount: null,
        numberOfComments: 6,
        actionType: ProfileActionType.COMMENT
    },
    {
        name: 'Samantha7',
        age: '27',
        image: require('../assets/images/home/likes/avatar1.png'),
        giftType: null,
        giftAmount: null,
        numberOfComments: null,
        actionType: ProfileActionType.LIKE
    },
    {
        name: 'Samantha8',
        age: '28',
        image: require('../assets/images/home/likes/avatar1.png'),
        giftType: GiftTypes.CHOCOLATE,
        giftAmount: 8,
        numberOfComments: null,
        actionType: ProfileActionType.GIFT
    },
]

export const giftProfileData: ActionProfileData[] = [
    {
        name: 'Samantha1',
        age: '21',
        image: require('../assets/images/home/likes/avatar1.png'),
        giftType: GiftTypes.ROSE,
        giftAmount: 1,
        numberOfComments: null,
        actionType: ProfileActionType.GIFT
    },
    {
        name: 'Samantha2',
        age: '22',
        image: require('../assets/images/home/likes/avatar1.png'),
        giftType: GiftTypes.BOUQUET,
        giftAmount: 2,
        numberOfComments: null,
        actionType: ProfileActionType.GIFT
    },
    {
        name: 'Samantha3',
        age: '23',
        image: require('../assets/images/home/likes/avatar1.png'),
        giftType: GiftTypes.CHOCOLATE,
        giftAmount: 3,
        numberOfComments: null,
        actionType: ProfileActionType.GIFT
    },
    {
        name: 'Samantha4',
        age: '24',
        image: require('../assets/images/home/likes/avatar1.png'),
        giftType: GiftTypes.ROSE,
        giftAmount: 4,
        numberOfComments: null,
        actionType: ProfileActionType.GIFT
    },
    {
        name: 'Samantha8',
        age: '28',
        image: require('../assets/images/home/likes/avatar1.png'),
        giftType: GiftTypes.CHOCOLATE,
        giftAmount: 8,
        numberOfComments: null,
        actionType: ProfileActionType.GIFT
    },
]

export const commentProfileData: ActionProfileData[] = [
    {
        name: 'Samantha5',
        age: '25',
        image: require('../assets/images/home/likes/avatar1.png'),
        giftType: null,
        giftAmount: null,
        numberOfComments: 5,
        actionType: ProfileActionType.COMMENT
    },
    {
        name: 'Samantha6',
        age: '26',
        image: require('../assets/images/home/likes/avatar1.png'),
        giftType: null,
        giftAmount: null,
        numberOfComments: 6,
        actionType: ProfileActionType.COMMENT
    },
]

export const likesProfileData: ActionProfileData[] = [
    {
        name: 'Samantha7',
        age: '27',
        image: require('../assets/images/home/likes/avatar1.png'),
        giftType: null,
        giftAmount: null,
        numberOfComments: null,
        actionType: ProfileActionType.LIKE
    },
]