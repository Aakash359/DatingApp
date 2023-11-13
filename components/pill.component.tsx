import React, { forwardRef } from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { getBrandColor, getModalBackgroundColor, getPillColor, getTextPrimaryColor, THEME } from '../utils/theme';
import { responsiveFontSize, responsiveScreenHeight } from 'react-native-responsive-dimensions';
import LinearGradient from 'react-native-linear-gradient';

interface ImageButtonProps {
    onPress?: () => void;
    selectedGender?: string[];
    setSelectedGender?: React.Dispatch<React.SetStateAction<string[]>>;
    text: string;
    icon?: React.JSX.Element;
}

const handlePress = (text: string, setSelectedGender: React.Dispatch<React.SetStateAction<string[]>> | null, selectedGender: string[] | null) => {
    if (selectedGender && setSelectedGender) {
        const newSelectedGender = [...selectedGender, text]
        setSelectedGender(newSelectedGender);
        if (selectedGender.includes(text)) {
            const newSelectedGender = selectedGender.filter((item) => item !== text);
            setSelectedGender(newSelectedGender);
        }
    }
}

export const Pill = forwardRef<TouchableOpacity, ImageButtonProps>(({ setSelectedGender, text, selectedGender, icon }, ref) => {
    return (
        <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            colors={[getBrandColor(THEME.LIGHT), getBrandColor(THEME.DARK)]}
            style={{
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 5,
                height: responsiveScreenHeight(5.3),
                width: 'auto',
                paddingVertical: responsiveScreenHeight(2),
                zIndex: -1,
            }}
        >
            <TouchableOpacity activeOpacity={1} style={selectedGender ? selectedGender.includes(text) ? styles.selectedPill : styles.pill : styles.pill} onPress={() => handlePress(text, setSelectedGender || null, selectedGender || null)} ref={ref}>
                {icon ? icon : null}<Text style={styles.text}>{text}</Text>
            </TouchableOpacity>
        </LinearGradient>
    )
});

const styles = StyleSheet.create({
    pill: {
        borderWidth: 2,
        borderColor: getPillColor(THEME.DARK),
        backgroundColor: getModalBackgroundColor(THEME.LIGHT),
        justifyContent: 'center',
        alignItems: 'center',
        height: responsiveScreenHeight(5.3),
        paddingHorizontal: responsiveScreenHeight(2),
        paddingVertical: responsiveScreenHeight(1.2),
        width: 'auto',
        borderRadius: 5,
    },
    selectedPill: {
        margin: 1,
        marginHorizontal: 2,
        width: 'auto',
        borderRadius: 5,
        height: responsiveScreenHeight(5),
        paddingHorizontal: responsiveScreenHeight(2),
        paddingVertical: responsiveScreenHeight(0.8),
        alignItems: 'center',
        backgroundColor: getModalBackgroundColor(THEME.LIGHT),
        justifyContent: 'center',
        zIndex: 3,
    },
    text: {
        color: getTextPrimaryColor(THEME.DARK),
        fontSize: responsiveFontSize(2),
        fontFamily: 'Audrey-Medium',
    },
});