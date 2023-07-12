import React from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import { responsiveFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import { getTextButtonColor, THEME } from '../utils';

interface Props {
    name: string;
    age: string;
    image: any;
    isBlur?: boolean;
}

export const LikedProfileCard = (props: Props) => {
    const { name, age, image, isBlur = false } = props;
    return (
        <ImageBackground source={isBlur ? require('../assets/images/home/likes/avatarBlurred.png') : image} borderRadius={5}>
            <ImageBackground source={require('../assets/images/home/likes/avatarBlur.png')} borderRadius={5}>
                <View style={styles.mainContainer}>
                    <View style={styles.headerContainer}>
                    </View>
                    {isBlur ?
                    <View style={styles.textContainer}>
                        <View style={styles.greenDot}/>
                        <Text style={styles.descriptionTextAlt}>Recently Active</Text>
                    </View>
                        :
                        <View style={styles.textContainer}>
                            <Text style={styles.descriptionText}>{name},</Text>
                            <Text style={styles.descriptionText}>{age}</Text>
                        </View>}
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
        gap: responsiveScreenHeight(1.3),
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
        fontSize: responsiveFontSize(2.5),
        color: getTextButtonColor(THEME.DARK),
        paddingBottom: responsiveScreenHeight(1),
    },
    descriptionTextAlt: {
        fontFamily: 'Aurdrey-Regular',
        textAlign: 'center',
        fontSize: responsiveFontSize(2),
        color: getTextButtonColor(THEME.DARK),
        paddingBottom: responsiveScreenHeight(1),
    },
})