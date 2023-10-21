import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { responsiveScreenWidth, responsiveScreenHeight, responsiveFontSize } from 'react-native-responsive-dimensions';
import { Layout } from '../../layout/layout';
import { PhoneIcon, RightArrow } from '../../assets';
import { COLORS, THEME, getBrandColor, getTextPrimaryColor, getTextSecondaryColor } from '../../utils/theme';
import { Button, CheckBox, Input } from '../../components';
import { Stepper } from '../../components/stepper.component';
import { useNavigation, useRoute } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { useAppDispatch, useKeyboardOffset } from '../../utils';
import { setLoginPhoneNumber, setPhoneNumber } from '../../redux';

type PhoneNumbeerScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'PhoneNumberScreen'
>;

export const PhoneNumberScreen = () => {
    const dispatch = useAppDispatch();
    const keyboardOffset = useKeyboardOffset();
    const route = useRoute();
    const { isSignup } = route.params as any;
    const navigation = useNavigation<PhoneNumbeerScreenNavigationProp>();
    const [phoneNumber, setPhoneNumbers] = React.useState('');
    const [isChecked, setIsChecked] = React.useState(false);
    const [isPhoneNumberValid, setIsPhoneNumberValid] = React.useState(true);

    const checkboxPress = () => {
        setIsChecked(prev => !prev);
    }

    const handleNavigateToNextScreen = () => {
        if (phoneNumber.length === 10) {
            if (isSignup === false) {
                dispatch(setLoginPhoneNumber(phoneNumber))
                navigation.navigate('OtpScreen', { isSignup: false });
            } else {
                dispatch(setPhoneNumber(phoneNumber))
                navigation.navigate('OtpScreen', { isSignup: true });
            }
        } else {
            setIsPhoneNumberValid(false);
            return;
        }
    }

    React.useEffect(() => {
        if (!isPhoneNumberValid) {
            if (phoneNumber.length === 10) {
                setIsPhoneNumberValid(true);
            }
        }
    }, [isPhoneNumberValid, phoneNumber])

    return (
        <Layout>
                { isSignup ? <Stepper stepCount={11} activeSteps={1} /> : null}
                <View style={styles.mainWrapper}>
                    <View style={styles.headerWrapper}>
                        <PhoneIcon />
                        {isSignup ?
                            <Text style={styles.headerText}>WHAT'S YOUR PHONE NUMBER?</Text>
                            :
                            <Text style={styles.headerText}>WHAT'S YOUR PHONE NUMBER? LOGIN</Text>
                        }
                    </View>
                    <View style={styles.inputWrapper}>
                        <Input
                            value={phoneNumber}
                            setValue={setPhoneNumbers}
                            placeholder='PHONE NUMBER'
                            isError={!isPhoneNumberValid}
                            type="number"
                        />
                        {
                            !isPhoneNumberValid && (
                                <Text style={styles.errorText}>Please enter a valid phone number</Text>
                            )
                        }
                        <Text style={styles.inputDescription}>We will send you a 4-digit code to verify your phone.</Text>
                    </View>
                    <View style={styles.footerTextWrapper}>
                        <CheckBox isChecked={isChecked} onPress={checkboxPress} />
                        <Text style={styles.inputDescriptionAlt}>
                            I agree with
                        </Text>
                        <TouchableOpacity style={{}}>
                            <View style={styles.centeredView}>
                                <Text style={styles.gradientText}>Terms of Service</Text>
                            </View>
                        </TouchableOpacity>
                        <Text style={styles.inputDescriptionAlt}>and</Text>
                        <TouchableOpacity>
                            <Text style={styles.gradientText}>Privacy Policy</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={[styles.buttonWrapper, { bottom: keyboardOffset }]}>
                    <Button
                        onPress={handleNavigateToNextScreen}
                        imageSource={require('../../assets/gradients/splash.png')}
                        variant={!isPhoneNumberValid ? 'disabled' : "primary"}
                        height={responsiveScreenHeight(8)}
                    >
                        <RightArrow />
                    </Button>
                </View>
        </Layout>
    )
}

const styles = StyleSheet.create({
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
    gradientText: {
        color: getBrandColor(THEME.LIGHT),
        fontFamily: 'RedHatDisplay-Regular',
        fontSize: responsiveFontSize(1.5),
    },
    inputDescriptionAlt: {
        fontSize: responsiveFontSize(1.5),
        fontFamily: 'RedHatDisplay-Regular',
        color: getTextSecondaryColor(THEME.DARK),
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    errorText: {
        color: COLORS.ERROR,
        fontSize: responsiveFontSize(1.5),
        fontFamily: 'RedHatDisplay-Regular',
        marginTop: responsiveScreenHeight(1),
    }
})