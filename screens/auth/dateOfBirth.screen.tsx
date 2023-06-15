import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { responsiveScreenWidth, responsiveScreenHeight, responsiveFontSize } from 'react-native-responsive-dimensions';
import { Layout } from '../../layout/layout';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { CalendarIcon, RightArrow } from '../../assets';
import { THEME, getTextPrimaryColor, getTextSecondaryColor } from '../../utils/theme';
import { Button, CheckBox, CustomDatePicker, Input } from '../../components';
import { Stepper } from '../../components/stepper.component';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

type PhoneNumbeerScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'DateOfBirthScreen'
>;

export const DateOfBirthScreen = () => {
    const navigation = useNavigation<PhoneNumbeerScreenNavigationProp>();
    const [date, setDate] = React.useState<Date>();
    const [isChecked, setIsChecked] = React.useState(false);

    const checkboxPress = () => {
        setIsChecked(prev => !prev);
    }

    const handleNavigateToNextScreen = () => {
        if(!date) return;
        navigation.navigate('GenderScreen');
    }

    return (
        <Layout>
            <KeyboardAwareScrollView contentContainerStyle={styles.mainScrollView}>
                <Stepper stepCount={11} activeSteps={4} />
                <View style={styles.mainWrapper}>
                    <View style={styles.headerWrapper}>
                        <CalendarIcon />
                        <Text style={styles.headerText}>WHAT’S YOUR DATE OF BIRTH?</Text>
                    </View>
                    <View style={styles.inputWrapper}>
                        <CustomDatePicker
                            setDate={setDate}
                            date={date}
                            validDates={true}
                            placeholder="DATE OF BIRTH"
                        />
                    </View>
                    <View style={styles.footerTextWrapper}>
                        <CheckBox isChecked={isChecked} onPress={checkboxPress} />
                        <Text style={styles.inputDescriptionAlt}>
                            Show date of birth on profile?
                        </Text>
                    </View>
                </View>

                <View style={styles.buttonWrapper}>
                    <Button
                        onPress={handleNavigateToNextScreen}
                        imageSource={require('../../assets/gradients/splash.png')}
                        variant={!date ? 'disabled' : "primary"}
                        height={responsiveScreenHeight(8)}
                    >
                        <RightArrow />
                    </Button>
                </View>
            </KeyboardAwareScrollView>
        </Layout>
    )
}

const styles = StyleSheet.create({
    mainScrollView: {
        display: 'flex',
        justifyContent: 'space-between',
        flex: 1,
    },
    mainWrapper: {
        flexGrow: 1,
    },
    footerTextWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: responsiveScreenWidth(1.5),
        maxWidth: responsiveScreenWidth(100),
        paddingHorizontal: responsiveScreenWidth(3),
        marginTop: responsiveScreenHeight(5),
    },
    buttonWrapper: {
        marginTop: responsiveScreenHeight(3),
        width: responsiveScreenHeight(8),
        marginBottom: responsiveScreenHeight(3),
        position: 'absolute',
        bottom: 0,
        right: responsiveScreenWidth(3),
    },
    headerWrapper: {
        display: 'flex',
        paddingHorizontal: responsiveScreenWidth(3),
        paddingTop: responsiveScreenHeight(3),
        height: responsiveScreenHeight(20),
    },
    headerText: {
        fontSize: responsiveFontSize(3),
        fontFamily: 'Audrey-Medium',
        color: getTextPrimaryColor(THEME.DARK),
        marginTop: responsiveScreenHeight(2),
    },
    inputWrapper: {
        marginTop: responsiveScreenHeight(4),
        paddingHorizontal: responsiveScreenWidth(3),
    },
    inputDescription: {
        marginTop: responsiveScreenHeight(2),
        fontSize: responsiveFontSize(2),
        fontFamily: 'RedHatDisplay-Regular',
        color: getTextSecondaryColor(THEME.DARK),
    },
    inputDescriptionAlt: {
        fontSize: responsiveFontSize(2),
        fontFamily: 'RedHatDisplay-Regular',
        color: getTextPrimaryColor(THEME.DARK),
    },
})