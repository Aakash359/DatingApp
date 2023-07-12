import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { responsiveFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import { Button } from '../../../../components'
import { THEME, getBorderPrimaryColor, getModalBackgroundColor, getTextButtonColor, getTextPrimaryColor, getTextSecondaryColor } from '../../../../utils';
import { CircleTickIcon } from '../../../../assets';

interface AbilitiesItemProps {
    abilitiesText: string;
}

interface PurchaseGemsModalProps {
    setIsModalVisible: React.Dispatch<React.SetStateAction<boolean>>;
}

const AbilitiesItem: React.FC<AbilitiesItemProps> = ({ abilitiesText }) => {
    return (
        <View style={styles.itemContainer}>
            <CircleTickIcon />
            <Text style={styles.abilitiesText}>{abilitiesText}</Text>
        </View>
    );
}

const AbilitiesItemData = [
    {
        abilitiesText: 'Can be used to boost your profile'
    },
    {
        abilitiesText: 'Can be used to send super likes'
    },
    {
        abilitiesText: 'Can be used to do spotlight'
    },
    {
        abilitiesText: 'Can be used to apply different themes'
    },
    {
        abilitiesText: 'Can be used to purchase new themes'
    },
    {
        abilitiesText: 'Can be used to send super likes'
    },
]

export const PurchaseGemsModal: React.FC<PurchaseGemsModalProps> = ({setIsModalVisible}) => {
    return (
        <View style={styles.modalContainer}>
            <View style={styles.dragger} />
            <View style={styles.textContainer}>
                <Text style={styles.headerText}>
                    ABILITIES
                </Text>
                <Text style={styles.inputDescription}>Using gems you can get Maximum out of Manifest</Text>
            </View>
            {AbilitiesItemData.map((item, index) => {
                return <AbilitiesItem abilitiesText={item.abilitiesText} key={index} />
            })
            }
            <View style={styles.singleButtonWrapper}>
                <View style={styles.buttonWrapper}>
                    <Button onPress={() => setIsModalVisible(false)} imageSource={require('../../../../assets/gradients/splash.png')} variant={'primary'} height={responsiveScreenHeight(8)} >
                        <Text style={styles.buttonText}>GREAT</Text>
                    </Button>
                </View>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({

    itemContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        gap: responsiveScreenWidth(3),
        alignItems: 'center',
        width: '100%',
        paddingHorizontal: responsiveScreenWidth(4),
        borderBottomWidth: 1,
        borderBottomColor: getBorderPrimaryColor(THEME.DARK),
        paddingVertical: responsiveScreenHeight(2),
    },
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
    textContainer: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        gap: responsiveScreenHeight(1),
        marginBottom: responsiveScreenHeight(3),
        width: responsiveScreenWidth(60),
    },
    headerText: {
        fontSize: responsiveFontSize(3),
        fontFamily: 'Audrey-Medium',
        color: getTextPrimaryColor(THEME.DARK),
    },
    buttonText: {
        fontSize: responsiveFontSize(3),
        fontFamily: 'Audrey-Medium',
        color: getTextButtonColor(THEME.DARK),
    },
    abilitiesText: {
        fontSize: responsiveFontSize(2),
        fontFamily: 'RedHatDisplay-Bold',
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
        marginBottom: responsiveScreenHeight(3),
    },
    buttonWrapper: {
        marginTop: responsiveScreenHeight(3),
        width: responsiveScreenHeight(40),
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
