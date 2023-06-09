import React from 'react';
import { StyleSheet, View, Text, ImageBackground } from 'react-native';
import { responsiveScreenWidth, responsiveScreenHeight, responsiveFontSize } from 'react-native-responsive-dimensions';
import { Layout } from '../../layout/layout';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { BigProfilePhotoIcon, ImageIcon, RightArrow } from '../../assets';
import { THEME, getTextPrimaryColor, getTextSecondaryColor } from '../../utils/theme';
import { Button } from '../../components';
import { Stepper } from '../../components/stepper.component';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { useNavigation } from '@react-navigation/native';
import FastImage from 'react-native-fast-image';

type otpScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'ProfilePhotoScreen'
>;

export const ProfilePhotoScreen = () => {
    const [gender, setGender] = React.useState('');
    const [isChecked, setIsChecked] = React.useState(false);
    const navigation = useNavigation<otpScreenNavigationProp>();
    const checkboxPress = () => {
        setIsChecked(prev => !prev);
    }
    const handleNavigateToProfilePhotoScreen = () => {
        console.log('hello')
    };

    return (
        <Layout>
            <KeyboardAwareScrollView contentContainerStyle={styles.mainScrollView}>
                <Stepper stepCount={10} activeSteps={7} />
                <View style={styles.mainWrapper}>
                    <View style={styles.headerWrapper}>
                        <ImageIcon />
                        <Text style={styles.headerText}>ADD PROFILE PHOTO</Text>
                    </View>
                    <ImageBackground resizeMode='center' style={styles.image} source={require('../../assets/images/auth/profilePhoto.png')}>

                    </ImageBackground>
                    {/* <View style={styles.inputWrapper}>
                        <Input value={gender} setValue={setGender} placeholder='SEARCH'/>
                        <View style={styles.inputDescriptionWrapper}>
                            <Text style={styles.inputDescription}>Code sent to +91 7229098241</Text>
                            <TextButton text='Edit' />
                        </View>
                        <View style={styles.inputDescriptionWrapper}>
                            <Text style={styles.inputDescriptionAlt}>Expires in 1:00 Min</Text>
                            <TextButton text='Resend' />
                        </View>
                    </View> */}
                </View>
                <View style={styles.footerWrapper}>
                    <View style={styles.buttonWrapper}>
                        <Button
                            onPress={handleNavigateToProfilePhotoScreen}
                            imageSource={require('../../assets/gradients/splash.png')}
                            variant="primary"
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
        width: responsiveScreenWidth(60),
        marginBottom: responsiveScreenHeight(2),
    },
    buttonWrapper: {
        marginTop: responsiveScreenHeight(3),
        width: responsiveScreenHeight(8),
        marginBottom: responsiveScreenHeight(3),
        marginStart: responsiveScreenWidth(80),
    },
    headerWrapper: {
        display: 'flex',
        paddingHorizontal: responsiveScreenWidth(3),
        paddingTop: responsiveScreenHeight(3),
        height: responsiveScreenHeight(15),
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
    image: {
        flex: 1,
        justifyContent: 'center',
        transform: [{scale: responsiveFontSize(0.65)}]
    },
})