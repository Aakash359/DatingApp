import React, { forwardRef, ReactNode } from 'react';
import { TouchableOpacity, ImageBackground, StyleSheet, View, Text } from 'react-native';
import { TickIcon } from '../assets';
import { COLORS, getBrandColor, THEME } from '../utils/theme';
import { responsiveHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';

interface ImageButtonProps {
    onPress?: () => void;
    isChecked: boolean;
}

export const CheckBox = forwardRef<TouchableOpacity, ImageButtonProps>(({ onPress, isChecked }, ref) => {
    return (
        <TouchableOpacity style={isChecked ? styles.Checked : styles.unChecked} onPress={onPress} ref={ref}>
            <View>
                {isChecked ? <TickIcon /> : null}
            </View>
        </TouchableOpacity>
    )
});

const styles = StyleSheet.create({
    unChecked: {
        borderWidth: 2,
        borderColor: COLORS.LIGHT_60,
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        height: responsiveHeight(2),
        width: responsiveScreenWidth(4),
        borderRadius: 3,
    },
    Checked: {
        borderWidth: 2,
        borderColor: getBrandColor(THEME.DARK),
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        height: responsiveHeight(2),
        width: responsiveScreenWidth(4),
        borderRadius: 3,
    },
});