import React from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import { responsiveFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import { getTextButtonColor, THEME } from '../utils';
import { FilterCommentItemsIcon, FilterGiftItemIcon, FilterHeartItemsIcon } from '../assets';
import { GiftTypes } from '../constants';

interface Props {
    name: string;
    age: string;
    image: any;
    isBlur?: boolean;
    isGiftFilter?: boolean;
    giftType?: GiftTypes;
    giftAmount?: number;
    isLikeFilter?: boolean;
    isCommentFilter?: boolean;
    numberOfComments?: number;
}

export const LikedProfileCard = (props: Props) => {
    const { name, age, image, isBlur = false, isGiftFilter = false, isLikeFilter = false, isCommentFilter = false, giftType = 'Rose', giftAmount, numberOfComments } = props;

    const RenderContent = () => {
        if (isGiftFilter && giftAmount && giftType) {
            return (
                <View style={styles.textContainer}>
                    <View style={{ marginBottom: responsiveScreenHeight(0.8) }}>
                        <FilterGiftItemIcon />
                    </View>
                    <Text style={styles.descriptionTextAlt}>
                        Gifted {giftAmount} {giftType}{giftAmount > 1 ? 's' : null}
                    </Text>
                </View>
            )
        }
        else if (isLikeFilter) {
            return (
                <View style={styles.textContainer}>
                    <View style={{ marginBottom: responsiveScreenHeight(0.8) }}>
                        <FilterHeartItemsIcon />
                    </View>
                    <Text style={styles.descriptionTextAlt}>Liked Your Profile</Text>
                </View>
            )
        } else if (isCommentFilter && numberOfComments) {
            return (
                <View style={styles.textContainer}>
                    <View style={{ marginBottom: responsiveScreenHeight(0.8) }}>
                        <FilterCommentItemsIcon />
                    </View>
                    <Text style={styles.descriptionTextAlt}>
                        {numberOfComments} Comment{numberOfComments > 1 ? 's' : null}
                    </Text>
                </View>
            )
        }
        else if (!isBlur) {
            return (
                <View style={styles.textContainer}>
                    <Text style={styles.descriptionText}>{name},</Text>
                    <Text style={styles.descriptionText}>{age}</Text>
                </View>
            )
        }
        else {
            return (
                <View style={styles.textContainer}>
                    <View style={styles.greenDot} />
                    <Text style={styles.descriptionTextAlt}>Recently Active</Text>
                </View>
            )
        }
    }

    return (
        <ImageBackground blurRadius={isBlur ? 15 : 0} source={image} borderRadius={5}>
            <ImageBackground source={require('../assets/images/home/likes/avatarBlur.png')} borderRadius={5}>
                <View style={styles.mainContainer}>
                    <View style={styles.headerContainer}>
                    </View>
                    {RenderContent()}
                </View>
            </ImageBackground>
        </ImageBackground>
    )
};

const styles = StyleSheet.create({
    mainContainer: {
        width: responsiveScreenWidth(45),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        borderRadius: 5,
        height: responsiveScreenHeight(33),
    },
    headerContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: responsiveScreenHeight(2),
        gap: responsiveScreenHeight(1.3),
    },
    textContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        paddingVertical: responsiveScreenHeight(0.5),
        paddingHorizontal: responsiveScreenWidth(2),
        gap: responsiveScreenHeight(1),
        width: '100%',
    },
    greenDot: {
        width: responsiveScreenWidth(2),
        height: responsiveScreenWidth(2),
        borderRadius: responsiveScreenWidth(1000),
        backgroundColor: '#00FF00',
        alignSelf: 'center',
        marginBottom: responsiveScreenHeight(1),
        marginLeft: responsiveScreenWidth(2),
    },
    descriptionText: {
        fontFamily: 'Aurdrey-Regular',
        textAlign: 'center',
        fontSize: responsiveFontSize(2.3),
        color: getTextButtonColor(THEME.DARK),
        paddingBottom: responsiveScreenHeight(1),
    },
    descriptionTextAlt: {
        fontFamily: 'Aurdrey-Regular',
        textAlign: 'center',
        fontSize: responsiveFontSize(1.8),
        color: getTextButtonColor(THEME.DARK),
        paddingBottom: responsiveScreenHeight(1),
    },
})