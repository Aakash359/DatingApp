import React from 'react';
import { StyleSheet } from 'react-native';
import CountDown from 'react-native-countdown-component';
import { THEME, getTextSecondaryColor } from '../utils';
import { responsiveFontSize } from 'react-native-responsive-dimensions';

interface Props {
    setIsProfileBoosted: React.Dispatch<React.SetStateAction<boolean>>
}

export const CustomCountdown = (props: Props) => {

    const handleFinish = () => {
        console.log('fisbnished', props.setIsProfileBoosted);
    }

    return (
        <CountDown
            size={14}
            until={5}
            onFinish={handleFinish}
            digitStyle={styles.digitStyle}
            digitTxtStyle={styles.digitTextStyle}
            separatorStyle={styles.seperatorStyle}
            style={styles.mainContainer}
            timeToShow={['H', 'M', 'S']}
            timeLabels={{ h: '', m: '', s: '' }}
            showSeparator
        />
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        display: 'flex',
        flexDirection: 'row',
    },
    digitStyle: {

    },
    digitTextStyle: {
        color: getTextSecondaryColor(THEME.DARK),
        fontSize: responsiveFontSize(1.5),
        fontFamily: 'RedHatDisplay-light',
    },
    seperatorStyle: {
        color: getTextSecondaryColor(THEME.DARK)
    },
})