import React, { forwardRef } from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { getBrandColor, getPillColor, getTextPrimaryColor, THEME } from '../utils/theme';
import { responsiveFontSize, responsiveHeight } from 'react-native-responsive-dimensions';

interface ImageButtonProps {
    onPress?: () => void;
    selectedGender: string;
    setSelectedGender: React.Dispatch<React.SetStateAction<string>>;
    text: string;
}

const handlePress = (text: string, setSelectedGender: React.Dispatch<React.SetStateAction<string>>, selectedGender: string) => {
    setSelectedGender(text);
    if (selectedGender === text) {
        setSelectedGender('')
    }
}

export const SingleSelectPill = forwardRef<TouchableOpacity, ImageButtonProps>(({ setSelectedGender, text, selectedGender }, ref) => {
    return (
        <TouchableOpacity style={selectedGender === text ? styles.selectedPill : styles.pill} onPress={() => handlePress(text, setSelectedGender, selectedGender)} ref={ref}>
            <Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
});

const styles = StyleSheet.create({
    pill: {
        borderWidth: 2,
        borderColor: getPillColor(THEME.DARK),
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        height: responsiveHeight(5),
        paddingHorizontal: responsiveHeight(2),
        paddingVertical: responsiveHeight(1),
        width: 'auto',
        borderRadius: 5,
    },
    selectedPill: {
        borderWidth: 2,
        borderColor: getBrandColor(THEME.DARK),
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        height: responsiveHeight(5),
        paddingHorizontal: responsiveHeight(2),
        paddingVertical: responsiveHeight(1),
        width: 'auto',
        borderRadius: 5,
    },
    text: {
        color: getTextPrimaryColor(THEME.DARK),
        fontSize: responsiveFontSize(2),
        fontFamily: 'Audrey-Medium',
    },
});