import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Modal from 'react-native-modal';
import { responsiveFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import { Button } from './button.component';
import { THEME, getModalBackgroundColor, getTextPrimaryColor, getTextSecondaryColor } from '../utils';

export interface Props {
    isVisible: boolean;
    setIsVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

export const VerificationModal: React.FC<Props> = ({ isVisible, setIsVisible }) => {
    const navigation = useNavigation();
    return (
        <Modal
            useNativeDriverForBackdrop={true}
            style={styles.modal}
            onBackdropPress={() => setIsVisible(false)}
            isVisible={isVisible}>
            <View style={styles.modalContainer}>
                <View style={styles.dragger} />
                <View style={styles.imageWrapper}>
                    <Image source={require('../assets/images/auth/profilePhoto.png')} />
                </View>
                <View style={styles.textContainer}>
                    <Text style={styles.headerText}>
                        VERIFY YOURSELF
                    </Text>
                    <Text style={styles.inputDescription}>Provide you’re the person in your profile by taking a photo. if you match, boom, you’re verified!</Text>
                </View>
                <View style={styles.buttonMainWrapper}>
                    <View style={styles.buttonWrapper}>
                        <Button onPress={() => console.log('clickse')} imageSource={require('../assets/gradients/splash.png')} variant={'primary'} height={responsiveScreenHeight(8)} >
                            <Text style={styles.headerText}>GET VERIFIED</Text>
                        </Button>
                    </View>
                    <View style={styles.buttonWrapper}>
                        <Button onPress={() => console.log('clickse')} variant={'outline'} height={responsiveScreenHeight(8)} >
                            <Text style={styles.headerText}>NOT NOW</Text>
                        </Button>
                    </View>
                </View>
            </View>
        </Modal>
    );
};

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
    modalContainer: {
        // backgroundColor: 'rgba(0,0,0,1)',
        backgroundColor: getModalBackgroundColor(THEME.DARK),
        display: 'flex',
        justifyContent: 'space-between',
        paddingVertical: responsiveScreenHeight(2),
        paddingHorizontal: responsiveScreenWidth(3),
        alignItems: 'center',
        height: responsiveScreenHeight(70),
        width: responsiveScreenWidth(100),
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },
    imageWrapper: {
        marginBottom: responsiveScreenHeight(2),
    },
    textContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: responsiveScreenHeight(1),
        marginTop: responsiveScreenHeight(2),
        marginBottom: responsiveScreenHeight(3),
        width: responsiveScreenWidth(80),
    },
    headerText: {
        fontSize: responsiveFontSize(3),
        fontFamily: 'Audrey-Medium',
        color: getTextPrimaryColor(THEME.DARK),
    },
    inputDescription: {
        fontSize: responsiveFontSize(2),
        fontFamily: 'RedHatDisplay-Regular',
        color: getTextSecondaryColor(THEME.DARK),
        textAlign: 'center',
    },
    dragger: {
        width: responsiveScreenWidth(10),
        height: responsiveScreenHeight(0.5),
        backgroundColor: 'rgba(255,255,255,0.5)',
        borderRadius: 10,
        marginBottom: responsiveScreenHeight(6),
    },
    buttonWrapper: {
        marginTop: responsiveScreenHeight(3),
        width: responsiveScreenHeight(40),
    },
    buttonMainWrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: responsiveScreenHeight(11),
        marginTop: responsiveScreenHeight(3),
        marginBottom: responsiveScreenHeight(15),
    }
});
