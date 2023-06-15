import { useNavigation } from '@react-navigation/native';
import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import Modal from 'react-native-modal';
import { responsiveFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import { Button } from './button.component';
import { THEME, getModalBackgroundColor, getTextPrimaryColor, getTextSecondaryColor } from '../utils';

export interface Props {
    isModalMultiImage?: boolean;
    modalHeader: string;
    modalPrimaryImage: any;
    modalDescription: string;
    modalButtonText: string;
    modalCancleButtonText: string;
    onNextPress: () => void;
    onBackPress: () => void;
    isLastModal?: boolean;
}

export const VerificationModal: React.FC<Props> = ({ isModalMultiImage, isLastModal, onNextPress, onBackPress, modalPrimaryImage, modalHeader, modalDescription, modalCancleButtonText, modalButtonText }) => {
    return (
        <View style={isModalMultiImage ? styles.multiImageModalContainer : isLastModal ? styles.smallModalContainer : styles.modalContainer}>
            <View style={styles.dragger} />
            {isModalMultiImage ?
                (
                    <View style={styles.MultiImageWrapper}>
                        <Image source={modalPrimaryImage} />
                        <Image source={modalPrimaryImage} />
                    </View>
                )
                :
                (
                    <View style={styles.imageWrapper}>
                        <Image source={modalPrimaryImage} />
                    </View>
                )
            }
            <View style={styles.textContainer}>
                <Text style={styles.headerText}>
                    {modalHeader}
                </Text>
                <Text style={styles.inputDescription}>{modalDescription}</Text>
            </View>
            <View style={isLastModal ? styles.singleButtonWrapper :styles.buttonMainWrapper}>
                <View style={styles.buttonWrapper}>
                    <Button onPress={onNextPress} imageSource={require('../assets/gradients/splash.png')} variant={'primary'} height={responsiveScreenHeight(8)} >
                        <Text style={styles.headerText}>{modalButtonText}</Text>
                    </Button>
                </View>
                {isLastModal ?
                    null
                    :
                    <View style={styles.buttonWrapper}>
                        <Button onPress={onBackPress} variant={'outline'} height={responsiveScreenHeight(8)} >
                            <Text style={styles.headerText}>{modalCancleButtonText}</Text>
                        </Button>
                    </View>}
            </View>
        </View>
    );
};

const styles = StyleSheet.create({

    modalContainer: {
        backgroundColor: getModalBackgroundColor(THEME.DARK),
        display: 'flex',
        justifyContent: 'space-between',
        paddingVertical: responsiveScreenHeight(2),
        paddingHorizontal: responsiveScreenWidth(3),
        alignItems: 'center',
        height: responsiveScreenHeight(75),
        width: responsiveScreenWidth(100),
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },
    multiImageModalContainer: {
        backgroundColor: getModalBackgroundColor(THEME.DARK),
        display: 'flex',
        justifyContent: 'space-between',
        paddingVertical: responsiveScreenHeight(2),
        paddingHorizontal: responsiveScreenWidth(3),
        alignItems: 'center',
        height: responsiveScreenHeight(71),
        width: responsiveScreenWidth(100),
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },
    smallModalContainer: {
        backgroundColor: getModalBackgroundColor(THEME.DARK),
        display: 'flex',
        justifyContent: 'space-between',
        paddingVertical: responsiveScreenHeight(2),
        paddingHorizontal: responsiveScreenWidth(3),
        alignItems: 'center',
        height: responsiveScreenHeight(63),
        width: responsiveScreenWidth(100),
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },
    imageWrapper: {
        marginBottom: responsiveScreenHeight(2),
    },
    MultiImageWrapper: {
        display: 'flex',
        flexDirection: 'row',
        gap: responsiveScreenWidth(5),
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
        width: responsiveScreenWidth(20),
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
    },
    singleButtonWrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: responsiveScreenHeight(1),
        marginTop: responsiveScreenHeight(0),
        marginBottom: responsiveScreenHeight(15),
    }
});
