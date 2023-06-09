import React, { forwardRef } from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { getTextPrimaryColor, THEME } from '../utils/theme';

interface ImageButtonProps {
    onPress?: () => void;
    text: string;
}

export const TextButton = forwardRef<TouchableOpacity, ImageButtonProps>(({ onPress, text }, ref) => {
    return (
        <TouchableOpacity style={styles.unChecked} onPress={onPress} ref={ref}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
});

const styles = StyleSheet.create({
    unChecked: {
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: getTextPrimaryColor(THEME.DARK),
        fontFamily: 'RedHatDisplay-Regular',
        fontSize: 16,
    }
});