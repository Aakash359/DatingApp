import React from 'react';
import { StyleSheet, ImageBackground, View, Image, Text, TouchableOpacity } from 'react-native';
import { responsiveScreenWidth, responsiveScreenHeight, responsiveFontSize } from 'react-native-responsive-dimensions';
import { Layout } from '../../layout/layout';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { PhoneIcon, RightArrow } from '../../assets';
import { THEME, getBrandColor, getTextPrimaryColor, getTextSecondaryColor } from '../../utils/theme';
import { Button, CheckBox, Input } from '../../components';
import { Stepper } from '../../components/stepper.component';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

type PhoneNumbeerScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'PhoneNumberScreen'
>;

export const PhoneNumberScreen = () => {
    const navigation = useNavigation<PhoneNumbeerScreenNavigationProp>();
    const [phoneNumber, setPhoneNumber] = React.useState('');
    const [isChecked, setIsChecked] = React.useState(false);
    const checkboxPress = () => {
        setIsChecked(prev => !prev);
    }
    return (
        <Layout>
            <KeyboardAwareScrollView contentContainerStyle={styles.mainScrollView}>
                <Stepper stepCount={11} activeSteps={1} />
                <View style={styles.mainWrapper}>
                    <View style={styles.headerWrapper}>
                        <PhoneIcon />
                        <Text style={styles.headerText}>WHAT'S YOUR PHONE NUMBER?</Text>
                    </View>
                    <View style={styles.inputWrapper}>
                        <Input
                            value={phoneNumber}
                            setValue={setPhoneNumber}
                            placeholder='PHONE NUMBER'
                        />
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
                    <View style={styles.buttonWrapper}>
                        <Button
                            onPress={() => navigation.navigate('OtpScreen')}
                            imageSource={require('../../assets/gradients/splash.png')}
                            variant="primary"
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
})