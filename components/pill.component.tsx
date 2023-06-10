import React, { forwardRef } from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { getBrandColor, getPillColor, getTextPrimaryColor, THEME } from '../utils/theme';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';

interface ImageButtonProps {
    onPress?: () => void;
    selectedGender: string[];
    setSelectedGender: React.Dispatch<React.SetStateAction<string[]>>;
    text: string;
    icon?: React.JSX.Element;
}

const handlePress = (text: string, setSelectedGender: React.Dispatch<React.SetStateAction<string[]>>, selectedGender: string[]) => {
    const newSelectedGender = [...selectedGender, text]
    setSelectedGender(newSelectedGender);
    if (selectedGender.includes(text)) {
        const newSelectedGender  = selectedGender.filter((item) => item !== text);
        setSelectedGender(newSelectedGender);
    }
}

export const Pill = forwardRef<TouchableOpacity, ImageButtonProps>(({ setSelectedGender, text, selectedGender, icon }, ref) => {
    return (
        <TouchableOpacity style={selectedGender.includes(text) ? styles.selectedPill : styles.pill} onPress={() => handlePress(text, setSelectedGender, selectedGender)} ref={ref}>
            {icon ? icon : null}<Text style={styles.text}>{text}</Text>
        </TouchableOpacity>
    )
});

const styles = StyleSheet.create({
    pill: {
        borderWidth: 2,
        borderColor: getPillColor(THEME.DARK),
        backgroundColor: 'transparent',
        display: 'flex',
        flexDirection: 'row',
        gap: responsiveWidth(2),
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
        display: 'flex',
        flexDirection: 'row',
        gap: responsiveWidth(2),
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