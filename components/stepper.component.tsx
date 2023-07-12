import React from 'react';
import { StyleSheet, View } from 'react-native';
import { responsiveScreenWidth, responsiveScreenHeight, } from 'react-native-responsive-dimensions';
import { getBrandSecondaryColor, getSeperatorColor, THEME } from '../utils/theme';

interface IStepperProps {
    stepCount: number;
    activeSteps: number;
}

export const Stepper: React.FC<IStepperProps> = ({ stepCount, activeSteps }) => {
    let steps = Array.from({ length: stepCount }, (_, i) => i);
    let activeStep = activeSteps - 1;
    return (

        <View style={styles.stepperWrapper}>
            {steps.map((_, index) => (
                <View key={index}
                style={{
                    marginRight: responsiveScreenWidth(2),
                    marginTop: responsiveScreenWidth(3),
                    borderRadius: 3,
                    width: responsiveScreenWidth(6.4),
                    height: responsiveScreenHeight(0.5),
                    backgroundColor: index <= activeStep ? getBrandSecondaryColor(THEME.DARK) : getSeperatorColor(THEME.DARK),
                }}
                />
            ))}
        </View>

    )
};

const styles = StyleSheet.create({
    stepperWrapper: {
        display: 'flex',
        gap: 1,
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: responsiveScreenWidth(100),
        marginHorizontal: responsiveScreenWidth(3),
        marginBottom: responsiveScreenHeight(3),
    }
});