
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import FastImage from 'react-native-fast-image';
import { responsiveHeight, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import { THEME, getTextButtonColor, getTextPrimaryColor } from '../utils';

interface Props {
    heading: string;
    imageSource?: any;
    description?: string;
    distance?: string;
    onPress: () => void;
}

export const DateLocation: React.FC<Props> = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={styles.mainWrapper}>
            <View style={styles.wrapper}>
                <FastImage
                    source={props.imageSource}
                    style={styles.img}
                />
                <View style={styles.midContentWrapper}>
                    <Text style={styles.heading}>
                        {props.heading}
                    </Text>
                    <Text style={styles.description}>
                        {props.description}
                    </Text>
                </View>
            </View>
            <Text style={styles.distance}>
                {props.distance}
            </Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    mainWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom: responsiveScreenHeight(1.5),
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'row',
        gap: responsiveScreenWidth(5)
    },
    img: {
        width: responsiveHeight(6),
        height: responsiveHeight(6),
        borderRadius: 1000,
    },
    midContentWrapper: {
        display: 'flex',
        gap: responsiveHeight(0.5),
    },
    heading: {
        fontFamily: 'RedHatDisplay-Bold',
        color: getTextButtonColor(THEME.DARK),
        fontSize: responsiveHeight(2),
    },
    description: {
        fontFamily: 'RedHatDisplay-Regular',
        color: getTextPrimaryColor(THEME.DARK),
        fontSize: responsiveHeight(1.75),
    },
    distance: {
        fontFamily: 'RedHatDisplay-Regular',
        color: getTextPrimaryColor(THEME.DARK),
        fontSize: responsiveHeight(1.75),
        letterSpacing: 1.5,
    },

});