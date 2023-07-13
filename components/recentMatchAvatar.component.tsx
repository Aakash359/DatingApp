import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { responsiveScreenHeight, responsiveScreenWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import { COLORS } from '../utils';

interface Props {
    imageSrc: any;
    likes?: number;
}

export const RecentMatchAvatar: React.FC<Props> = (props) => {
    return (
        <View style={styles.wrapper}>
            <Image
                source={props.imageSrc}
                style={styles.image}
                resizeMode='stretch'
                blurRadius={props.likes ? 10 : 0}
            />
            {props.likes ? <View style={styles.likesLabel}>
                <Text style={styles.likesLabelText}>{props.likes} likes</Text>
            </View> : null}
        </View>
    )
};

const styles = StyleSheet.create({
    wrapper: {
        position: 'relative',
    },
    image: {
        width: responsiveScreenWidth(23),
        height: responsiveScreenWidth(23),
        borderRadius: 15,
    },
    likesLabel: {
        position: 'absolute',
        backgroundColor: COLORS.BRAND_LIGHT,
        top: responsiveScreenWidth(17),
        paddingVertical: 3,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        width: responsiveScreenWidth(23),
    },
    likesLabelText: {
        textAlign: 'center',
        fontFamily: 'RedHatDisplay-SemiBold',
        fontSize: responsiveFontSize(2),
        color: COLORS.LIGHT_100,
        position: 'relative',
        bottom: responsiveScreenWidth(0.5),
    }
});