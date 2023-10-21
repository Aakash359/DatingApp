import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { responsiveScreenWidth, responsiveScreenHeight, responsiveFontSize } from 'react-native-responsive-dimensions';
import { Layout } from '../../layout/layout';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { InterestIcon, RightArrow } from '../../assets';
import { THEME, getTextPrimaryColor, getTextSecondaryColor } from '../../utils/theme';
import { Button, Pill, VerificationModal } from '../../components';
import { Stepper } from '../../components/stepper.component';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { useNavigation } from '@react-navigation/native';
import { interestPillData } from '../../constants';
import Modal from 'react-native-modal/dist/modal';
import { RootState, setInterests } from '../../redux';
import { useAppDispatch, useAppSelector } from '../../utils';

type otpScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'InterestScreen'
>;

enum ModalPage {
    VERIFICATION_SCREEN = 'VERIFICATION_SCREEN',
    STRIKE_POSE_SCREEN = 'STRIKE_POSE',
    CONFIRMATION_SCREEN = 'CONFIRMATION',
    REVIEW_SCREEN = 'REVIEW',
}

export const InterestScreen = () => {
    const dispatch = useAppDispatch();
    const authDetails = useAppSelector((state: RootState) => state.authDetails);
    const [isVerificationModalVisible, setIsVerificationModalVisible] = React.useState(false);
    const [selectedInterest, setSelectedInterest] = React.useState(['']);
    const [modalPage, setModalPage] = React.useState<ModalPage>();
    const navigation = useNavigation<otpScreenNavigationProp>();

    const handleNavigateToProfilePhotoScreen = () => {
        dispatch(setInterests(selectedInterest));
        setIsVerificationModalVisible(true)
        console.log('everything', authDetails.signUpDetails);
    };

    const displayModalContent = () => {
        switch (modalPage) {
            case ModalPage.VERIFICATION_SCREEN:
                return (
                    <VerificationModal
                        modalHeader='VERIFY YOURSELF'
                        modalPrimaryImage={require('../../assets/images/auth/smilingReference.png')}
                        modalDescription='Provide you’re the person in your profile by taking a photo. if you match, boom, you’re verified!'
                        modalButtonText='GET VERIFIED'
                        modalCancleButtonText='NOT NOW'
                        onNextPress={() => setModalPage(ModalPage.STRIKE_POSE_SCREEN)}
                        onBackPress={() => setIsVerificationModalVisible(false)}
                    />
                )

            case ModalPage.STRIKE_POSE_SCREEN:
                return (
                    <VerificationModal
                        modalHeader='STRIKE THIS POSE'
                        modalPrimaryImage={require('../../assets/images/auth/smilingReference.png')}
                        modalDescription='Copy the gesture in the photo below: we’ll compare them and if they both match your profile will be verified'
                        modalButtonText='I’M READY'
                        modalCancleButtonText='BACK'
                        onNextPress={() => setModalPage(ModalPage.CONFIRMATION_SCREEN)}
                        onBackPress={() => setModalPage(ModalPage.VERIFICATION_SCREEN)}
                    />
                )
            case ModalPage.CONFIRMATION_SCREEN:
                return (
                    <VerificationModal
                        modalHeader='HAPPY WITH PHOTO?'
                        modalPrimaryImage={require('../../assets/images/auth/ModalSecondaryImage.png')}
                        modalDescription='Remember, to verify yourself successfully; Your face must be clearly visible and you must be copying th exact pose'
                        modalButtonText='SUBMIT'
                        modalCancleButtonText='RETAKE PHOTO'
                        onNextPress={() => setModalPage(ModalPage.REVIEW_SCREEN)}
                        onBackPress={() => setModalPage(ModalPage.STRIKE_POSE_SCREEN)}
                        isModalMultiImage={true}
                    />
                )
            case ModalPage.REVIEW_SCREEN:
                return (
                    <VerificationModal
                        modalHeader='UNDER REVIEW'
                        modalPrimaryImage={require('../../assets/images/auth/smilingReference.png')}
                        modalDescription='Your profile verification is under review, we will get back to you shortly'
                        modalButtonText='GET VERIFIED'
                        modalCancleButtonText='NOT NOW'
                        onNextPress={() => navigation.navigate('PhoneNumberScreen', { isSignup: false })}
                        onBackPress={() => setModalPage(ModalPage.CONFIRMATION_SCREEN)}
                        isLastModal={true}
                    />
                )

            default:
                return (
                    <VerificationModal
                        modalHeader='VERIFY YOURSELF'
                        modalPrimaryImage={require('../../assets/images/auth/smilingReference.png')}
                        modalDescription='Provide you’re the person in your profile by taking a photo. if you match, boom, you’re verified!'
                        modalButtonText='GET VERIFIED'
                        modalCancleButtonText='NOT NOW'
                        onNextPress={() => setModalPage(ModalPage.STRIKE_POSE_SCREEN)}
                        onBackPress={() => setIsVerificationModalVisible(false)}
                    />
                )
        }
    }

    return (
        <Layout>
            <Modal
                useNativeDriverForBackdrop={true}
                style={styles.modal}
                onBackdropPress={() => setIsVerificationModalVisible(false)}
                isVisible={isVerificationModalVisible}>
                {displayModalContent()}
            </Modal>
            <KeyboardAwareScrollView contentContainerStyle={styles.mainScrollView}>
                <Stepper stepCount={11} activeSteps={11} />
                <View style={styles.mainWrapper}>
                    <View style={styles.headerWrapper}>
                        <InterestIcon />
                        <Text style={styles.headerText}>YOUR INTERSTS ARE</Text>
                    </View>
                    <View style={styles.inputWrapper}>
                        <Text style={styles.inputDescription}>Creativity:</Text>
                        <View style={styles.pillContainer}>
                            {interestPillData.map((item, index) => (
                                <View style={styles.inputDescriptionWrapper} key={index}>
                                    <Pill icon={item.icon} selectedGender={selectedInterest} setSelectedGender={setSelectedInterest} text={item.text} />
                                </View>
                            ))}
                        </View>
                        <Text style={styles.inputDescription}>Sports:</Text>
                        <View style={styles.pillContainer}>
                            {interestPillData.map((item, index) => (
                                <View style={styles.inputDescriptionWrapper} key={index}>
                                    <Pill icon={item.icon} selectedGender={selectedInterest} setSelectedGender={setSelectedInterest} text={item.text} />
                                </View>
                            ))}
                        </View>
                        <Text style={styles.inputDescription}>Sports:</Text>
                        <View style={styles.pillContainer}>
                            {interestPillData.map((item, index) => (
                                <View style={styles.inputDescriptionWrapper} key={index}>
                                    <Pill icon={item.icon} selectedGender={selectedInterest} setSelectedGender={setSelectedInterest} text={item.text} />
                                </View>
                            ))}
                        </View>
                    </View>
                </View>
            </KeyboardAwareScrollView>
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
        </Layout>
    )
}

const styles = StyleSheet.create({
    modal: {
        width: '100%',
        height: '100%',
        maxHeight: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.5)',
        margin: 0,
    },
    mainScrollView: {
        display: 'flex',
        justifyContent: 'space-between',
        flexGrow: 1
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
        left: responsiveScreenWidth(75),
    },
    footerWrapper: {
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
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