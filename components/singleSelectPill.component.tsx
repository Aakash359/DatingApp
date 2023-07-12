import React, { forwardRef } from 'react';
import { TouchableOpacity, StyleSheet, Text } from 'react-native';
import { getBrandColor, getModalBackgroundColor, getPillColor, getTextButtonColor, getTextPrimaryColor, THEME } from '../utils/theme';
import { responsiveFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import LinearGradient from 'react-native-linear-gradient';

interface ImageButtonProps {
    onPress?: () => void;
    selectedPill: string;
    setSelectedPill: React.Dispatch<React.SetStateAction<string>> | any;
    text: string;
    icon?: React.JSX.Element;
}

const handlePress = (text: string, setSelectedPill: React.Dispatch<React.SetStateAction<string>>, selectedPill: string) => {
    setSelectedPill(text);
    if (selectedPill === text) {
        setSelectedPill('')
    }
}

export const SingleSelectPill = forwardRef<TouchableOpacity, ImageButtonProps>(({ setSelectedPill, text, selectedPill, icon }, ref) => {
    return (
        <LinearGradient
            start={{ x: 0, y: 0 }}
            end={{ x: 0.5, y: 1 }}
            colors={[ getBrandColor(THEME.LIGHT), getBrandColor(THEME.DARK)]}
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
            <TouchableOpacity activeOpacity={1} style={selectedPill === text ? styles.selectedPill : styles.pill} onPress={() => handlePress(text, setSelectedPill, selectedPill)} ref={ref}>
                <Text style={styles.text}>{icon ? icon : null} {text}</Text>
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
        color: getTextButtonColor(THEME.DARK),
        fontSize: responsiveFontSize(2),
        fontFamily: 'Audrey-Medium',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        gap: responsiveScreenWidth(1),
    },
});