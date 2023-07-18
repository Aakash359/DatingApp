import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { responsiveScreenHeight, responsiveScreenWidth, responsiveFontSize } from 'react-native-responsive-dimensions';
import { COLORS, THEME, getBrandColor } from '../utils';
import LinearGradient from 'react-native-linear-gradient';

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
            {props.likes ?
                <View style={styles.likesLabel}>
                    <LinearGradient
                        start={{ x: 0, y: 0 }}
                        end={{ x: 1, y: 0.5 }}
                        colors={[getBrandColor(THEME.LIGHT), getBrandColor(THEME.DARK)]}
                        style={{
                            alignItems: 'center',
                            justifyContent: 'center',
                            borderRadius: 5,
                            borderBottomLeftRadius: 15,
                            borderBottomRightRadius: 15,
                            paddingTop: 3,
                            height: 'auto',
                            width: 'auto',
                            zIndex: -1,
                        }}
                    >
                        <Text style={styles.likesLabelText}>{props.likes} likes</Text>
                    </LinearGradient>
                </View>
                :
                null}
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
        bottom: '-3%',
        paddingVertical: 3,
        borderBottomLeftRadius: 15,
        borderBottomRightRadius: 15,
        width: '100%',
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