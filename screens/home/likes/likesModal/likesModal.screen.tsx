import React from 'react';
import { View, Text, StyleSheet, Image } from 'react-native';
import { responsiveFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import { Button } from '../../../../components'
import { THEME, getModalBackgroundColor, getTextPrimaryColor, getTextSecondaryColor } from '../../../../utils';

export interface Props {
    modalHeader?: string;
    modalPrimaryImage: any;
    modalDescription?: string;
    nextButtonText: string;
    modalCancleButtonText?: string;
    onNextPress: () => void;
    onBackPress: () => void;
    isOnlyOneButton?: boolean;
    isNoHeader?: boolean;
    modalImageText?: string;
}

export const LikesModal: React.FC<Props> = ({ isOnlyOneButton = true, modalImageText, isNoHeader = false, onNextPress, onBackPress, modalPrimaryImage, modalHeader, modalDescription, modalCancleButtonText, nextButtonText }) => {
    return (
        <View style={styles.modalContainer}>
            <View style={styles.dragger} />
            <View style={styles.imageWrapper}>
                <Image style={styles.image} source={modalPrimaryImage} />
                <Text style={styles.imageText}>{modalImageText}</Text>
            </View>
            <View style={styles.textContainer}>
                {isNoHeader ? null :
                    <Text style={styles.headerText}>
                        {modalHeader}
                    </Text>
                }
                <Text style={styles.inputDescription}>{modalDescription}</Text>
            </View>
            <View style={isOnlyOneButton ? styles.singleButtonWrapper : styles.buttonMainWrapper}>
                <View style={styles.buttonWrapper}>
                    <Button onPress={onNextPress} imageSource={require('../../../../assets/gradients/splash.png')} variant={'primary'} height={responsiveScreenHeight(8)} >
                        <Text style={styles.headerText}>{nextButtonText}</Text>
                    </Button>
                </View>
                {isOnlyOneButton ? null :
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
        height: 'auto',
        width: responsiveScreenWidth(100),
        borderTopLeftRadius: 40,
        borderTopRightRadius: 40,
    },
    image: {
        transform: [{ scale: 1.2 }], 
    },
    imageText: {
        fontSize: responsiveFontSize(7),
        marginLeft: responsiveScreenWidth(1),
        fontFamily: 'Audrey-Medium',
        color: getTextPrimaryColor(THEME.DARK),
    },
    imageWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        marginBottom: responsiveScreenHeight(1),
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
        fontSize: responsiveFontSize(2.2),
        fontFamily: 'RedHatDisplay-Regular',
        color: getTextSecondaryColor(THEME.DARK),
        textAlign: 'center',
    },
    dragger: {
        width: responsiveScreenWidth(20),
        height: responsiveScreenHeight(0.8),
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
        height: 'auto',
        marginTop: responsiveScreenHeight(3),
        marginBottom: responsiveScreenHeight(10),
    },
    singleButtonWrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        height: responsiveScreenHeight(1),
        marginTop: responsiveScreenHeight(0),
        marginBottom: responsiveScreenHeight(10),
    }
});
