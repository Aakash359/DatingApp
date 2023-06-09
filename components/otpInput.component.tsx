import React, { useRef } from 'react';
import { StyleSheet } from 'react-native';
import { responsiveFontSize, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import OTPTextInput from 'react-native-otp-textinput';

import { THEME, getBrandSecondaryColor, getTextButtonColor, getTextPrimaryColor } from '../utils/theme';

interface Props {
    isError?: boolean;
    setValue: React.Dispatch<React.SetStateAction<string>>;
}

export const OtpInput = (props: Props) => {
    const otpInput = useRef<any>(null);

    return (
        <OTPTextInput
            ref={otpInput}
            textInputStyle={
                styles.textInputStyle
            }
            handleTextChange={(text: string) => {
                props.setValue(text);
            }}
            offTintColor={getTextButtonColor(THEME.DARK)}
            tintColor={getBrandSecondaryColor(THEME.DARK)}
            inputCount={6}
        />
    );
};

const styles = StyleSheet.create({
    textInputStyle: {
        backgroundColor: 'transparent',
        fontSize: responsiveFontSize(4),
        fontFamily: 'Audrey-Normal',
        overflow: 'visible',
        textAlignVertical: 'bottom',
        width: responsiveScreenWidth(10),
        paddingTop: 0,
        paddingBottom: 0,
        borderTopWidth: 0,
        borderLeftWidth: 0,
        borderRightWidth: 0,
        borderBottomWidth: 1,
        color: getTextPrimaryColor(THEME.DARK),
    },
});
