import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { responsiveScreenWidth, responsiveScreenHeight, responsiveFontSize } from 'react-native-responsive-dimensions';
import { Layout } from '../../layout/layout';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { GenderIcon, InterestIcon, RightArrow } from '../../assets';
import { THEME, getTextPrimaryColor, getTextSecondaryColor } from '../../utils/theme';
import { Button, CheckBox, Input, Pill, VerificationModal } from '../../components';
import { Stepper } from '../../components/stepper.component';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { useFocusEffect, useNavigation } from '@react-navigation/native';
import { genderPillDataAlt, interestPillData } from '../../constants';

type otpScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'InterestScreen'
>;

export const InterestScreen = () => {
    const [isVerificationModalVisible, setIsVerificationModalVisible] = React.useState(false);
    const [selectedGender, setSelectedGender] = React.useState(['']);
    const [isChecked, setIsChecked] = React.useState(false);
    const navigation = useNavigation<otpScreenNavigationProp>();
    const checkboxPress = () => {
        setIsChecked(prev => !prev);
    }
    const handleNavigateToProfilePhotoScreen = () => {
        setIsVerificationModalVisible(true)
    };

    return (
        <Layout>
            <KeyboardAwareScrollView contentContainerStyle={styles.mainScrollView}>
                <Stepper stepCount={11} activeSteps={11} />
                <View style={styles.mainWrapper}>
                    <View style={styles.headerWrapper}>
                        <InterestIcon />
                        <Text style={styles.headerText}>YOUR INTERSTS ARE</Text>
                    </View>
                    <View style={styles.inputWrapper}>
                        {/* <Input value={gender} setValue={setGender} placeholder='SEARCH' /> */}
                        <Text style={styles.inputDescription}>Creativity:</Text>
                        <View style={styles.pillContainer}>
                            {interestPillData.map((item, index) => (
                                <View style={styles.inputDescriptionWrapper} key={index}>
                                    <Pill icon={item.icon} selectedGender={selectedGender} setSelectedGender={setSelectedGender} text={item.text} />
                                </View>
                            ))}
                        </View>
                        <Text style={styles.inputDescription}>Sports:</Text>
                        <View style={styles.pillContainer}>
                            {interestPillData.map((item, index) => (
                                <View style={styles.inputDescriptionWrapper} key={index}>
                                    <Pill icon={item.icon} selectedGender={selectedGender} setSelectedGender={setSelectedGender} text={item.text} />
                                </View>
                            ))}
                        </View>
                    </View>
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
                <VerificationModal isVisible={isVerificationModalVisible} setIsVisible={setIsVerificationModalVisible}/>
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
        // marginTop: responsiveScreenHeight(1.5),
    },
    pillContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: responsiveScreenWidth(3),
        marginTop: responsiveScreenHeight(2),
        width: responsiveScreenWidth(95),
        marginBottom: responsiveScreenHeight(2),
    },
})