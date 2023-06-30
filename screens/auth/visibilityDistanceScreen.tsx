import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { responsiveScreenWidth, responsiveScreenHeight, responsiveFontSize } from 'react-native-responsive-dimensions';
import { Layout } from '../../layout/layout';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { DistanceRadarIcon, RightArrow } from '../../assets';
import { THEME, getTextPrimaryColor, getTextSecondaryColor } from '../../utils/theme';
import { Button, CustomSlider } from '../../components';
import { Stepper } from '../../components/stepper.component';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { useNavigation } from '@react-navigation/native';
import { setVisibleDistance } from '../../redux';
import { useAppDispatch } from '../../utils';

type otpScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'VisibilityDistanceScreen'
>;

export const VisibilityDistanceScreen = () => {
    const dispatch = useAppDispatch();
    const navigation = useNavigation<otpScreenNavigationProp>();
    const [sliderValue, setSliderValue] = React.useState(100);
    const handleNavigateToProfilePhotoScreen = () => {
        dispatch(setVisibleDistance(sliderValue));
        navigation.navigate('AgePreferenceScreen')
    };


    return (
        <Layout>
            <KeyboardAwareScrollView contentContainerStyle={styles.mainScrollView}>
                <Stepper stepCount={11} activeSteps={9} />
                <View style={styles.mainWrapper}>
                    <View style={styles.headerWrapper}>
                        <DistanceRadarIcon />
                        <Text style={styles.headerText}>SET YOUR VISIBILITY DISTANCE</Text>
                    </View>
                    <View style={styles.bodyContainer}>
                        <CustomSlider sliderValue={sliderValue} setSliderValue={setSliderValue} sliderStyle={styles.sliderStyle} />
                    </View>
                        <View style={styles.sliderTextContainer}>
                            <Text style={styles.sliderText}>{Math.round(sliderValue)} KM</Text>
                        </View>
                </View>
                <View style={styles.footerWrapper}>
                    <View style={styles.footerTextWrapper}>
                        <Text style={styles.inputDescription}>You can Change This Later</Text>
                    </View>
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
    },
    footerTextWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: responsiveScreenWidth(1.5),
        maxWidth: responsiveScreenWidth(100),
        paddingHorizontal: responsiveScreenWidth(3),
    },
    inputDescription: {
        fontSize: responsiveFontSize(2),
        fontFamily: 'RedHatDisplay-Regular',
        color: getTextSecondaryColor(THEME.DARK),
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
    image: {
        display: 'flex',
        justifyContent: 'center',
        height: responsiveScreenHeight(40),
        width: responsiveScreenWidth(100),
        transform: [{ scale: responsiveFontSize(0.7) }],
        marginTop: responsiveScreenHeight(5),
        position: 'relative',
    },
    iconContainer: {
        position: 'absolute',
        bottom: responsiveScreenHeight(5),
        right: responsiveScreenWidth(20),
        transform: [{ scale: responsiveFontSize(0.17) }],
    },
    bodyContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: responsiveScreenWidth(3),
        marginTop: responsiveScreenHeight(5),
    },
    sliderStyle: {
        display: 'flex',
        justifyContent: 'center',
        marginLeft: responsiveScreenWidth(3),
        width: '95%',
        height: responsiveScreenHeight(10),
        
    },
    sliderTextContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: responsiveScreenHeight(3),
    },
    sliderText: {
        fontSize: responsiveFontSize(3),
        fontFamily: 'Audrey-Medium',
        color: getTextPrimaryColor(THEME.DARK),
    },
})