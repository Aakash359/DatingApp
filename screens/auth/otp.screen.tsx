import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { responsiveScreenWidth, responsiveScreenHeight, responsiveFontSize } from 'react-native-responsive-dimensions';
import { Layout } from '../../layout/layout';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { LockIcon, RightArrow } from '../../assets';
import { THEME, getBrandColor, getTextPrimaryColor, getTextSecondaryColor } from '../../utils/theme';
import { Button, TextButton } from '../../components';
import { Stepper } from '../../components/stepper.component';
import { OtpInput } from '../../components/otpInput.component';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { useNavigation, useRoute } from '@react-navigation/native';

type otpScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'PhoneNumberScreen'
>;

export const OtpScreen = () => {
    const route = useRoute();
    const { isSignup } = route.params as any;
    const [otp, setOtp] = React.useState('');
    const navigation = useNavigation<otpScreenNavigationProp>();

    const handleNavigateToNameScreen = () => {
        if (otp.length !== 6) return;
        navigation.navigate('NameScreen');
    };

    return (
        <Layout>
            <KeyboardAwareScrollView contentContainerStyle={styles.mainScrollView}>
                {isSignup ?? <Stepper stepCount={11} activeSteps={2} />}
                <View style={styles.mainWrapper}>
                    <View style={styles.headerWrapper}>
                        <LockIcon />
                        {isSignup ?
                            <Text style={styles.headerText}>ENTER THE 4-DIGIT VERIFICATION CODE</Text>
                            :
                            <Text style={styles.headerText}>ENTER THE 4-DIGIT VERIFICATION CODE LOGIN</Text>
                        }
                    </View>
                    <View style={styles.inputWrapper}>
                        <OtpInput setValue={setOtp} />
                        <View style={styles.inputDescriptionWrapper}>
                            <Text style={styles.inputDescription}>Code sent to +91 7229098241</Text>
                            <TextButton text='Edit' />
                        </View>
                        <View style={styles.inputDescriptionWrapper}>
                            <Text style={styles.inputDescriptionAlt}>Expires in 1:00 Min</Text>
                            <TextButton text='Resend' />
                        </View>
                    </View>
                </View>
                <View style={styles.footerWrapper}>
                    <View style={styles.footerTextWrapper}>
                        <TextButton text='Didn’t receive the code?' />
                    </View>
                    <View style={styles.buttonWrapper}>
                        <Button
                            onPress={handleNavigateToNameScreen}
                            imageSource={require('../../assets/gradients/splash.png')}
                            variant={otp.length !== 6 ? 'disabled' : "primary"}
                            height={responsiveScreenHeight(8)}
                        >
                            <RightArrow />
                        </Button>
                    </View>
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
    },
    footerWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: responsiveScreenHeight(10),
        width: responsiveScreenWidth(100),
        marginBottom: responsiveScreenHeight(2),
        paddingRight: responsiveScreenWidth(3),
    },
    buttonWrapper: {
        marginTop: responsiveScreenHeight(3),
        width: responsiveScreenHeight(8),
        marginBottom: responsiveScreenHeight(3),
        // marginStart: responsiveScreenWidth(30),
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
        fontSize: responsiveFontSize(2),
        fontFamily: 'RedHatDisplay-Regular',
        color: getTextSecondaryColor(THEME.DARK),
    },
    inputDescriptionWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: responsiveScreenWidth(1.5),
        marginTop: responsiveScreenHeight(1.5),
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
})