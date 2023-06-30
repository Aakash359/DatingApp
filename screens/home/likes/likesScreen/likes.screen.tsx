import React from 'react'
import { Layout, MainHeader } from '../../../../layout'
import { View, Text, StyleSheet } from 'react-native'
import { NoLikesIcon } from '../../../../assets'
import { responsiveFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'
import { THEME, getTextButtonColor, getTextPrimaryColor, getTextSecondaryColor } from '../../../../utils'
import { Button } from '../../../../components'
import Modal from 'react-native-modal/dist/modal';
import { LikesModal } from '../likesModal'

enum ModalPage {
    COST_SCREEN = 'COST_SCREEN',
    SUCCESS_SCREEN = 'SUCCESS_SCREEN',
}

interface Props {
    numberOfLikes: string
}

export const LikesScreen = (props : Props) => {
    const { numberOfLikes } = props
    const [isModalVisible, setIsModalVisible] = React.useState(false);
    const [modalPage, setModalPage] = React.useState(ModalPage.COST_SCREEN);

    const renderModalPage = () => {
        switch (modalPage) {
            case ModalPage.COST_SCREEN:
                return <LikesModal
                    modalPrimaryImage={require('../../../../assets/images/home/likes/diamond.png')}
                    modalDescription='will be deducted from your account'
                    nextButtonText='CONTINUE'
                    modalCancleButtonText='RETAKE PHOTO'
                    onNextPress={() => setModalPage(ModalPage.SUCCESS_SCREEN)}
                    onBackPress={() => console.log('e')}
                    isNoHeader={true}
                    modalImageText='5'
                />
            case ModalPage.SUCCESS_SCREEN:
                return <LikesModal
                    modalPrimaryImage={require('../../../../assets/images/home/likes/successCheckmark.png')}
                    modalHeader='PROFILE BOOSTED'
                    modalDescription='Your profile is visible to more people'
                    nextButtonText='CONTINUE'
                    modalCancleButtonText='RETAKE PHOTO'
                    onNextPress={() => {setIsModalVisible(false); setModalPage(ModalPage.COST_SCREEN)}}
                    onBackPress={() => console.log('e')}
                />
        }
    }

    return (
        <Layout>
            <MainHeader />
            <View style={styles.mainWrapper}>
                <View style={styles.likesWrapper}>
                    <NoLikesIcon />
                    <View style={styles.textWrapper}>
                        <Text style={styles.headerText}>{numberOfLikes} PEOPLE LIKED YOU</Text>
                        <Text style={styles.descriptionText}>See who liked you and match with them for 300 Gems</Text>
                    </View>
                </View>
                <View style={styles.buttonWrapper}>
                    <Button
                        onPress={() => setIsModalVisible(true)}
                        imageSource={require('../../../../assets/gradients/splash.png')}
                        variant="primary"
                        height={responsiveScreenHeight(6.7)}
                    >
                        <Text style={styles.buttonText}>UNLOCK FEATURE</Text>
                    </Button>
            <Modal
                useNativeDriverForBackdrop={true}
                style={styles.modal}
                onBackdropPress={() => setIsModalVisible(false)}
                isVisible={isModalVisible}>
                {renderModalPage()}
            </Modal>
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

    mainWrapper: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
    },
    likesWrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-start',
        height: '84%',
        gap: responsiveScreenHeight(2),
    },
    textWrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: responsiveScreenHeight(2),
        width: '90%',
        textAlign: 'center',
        gap: responsiveScreenHeight(1.5),
    },
    headerText: {
        fontSize: responsiveFontSize(3.5),
        fontFamily: 'Audrey-Bold',
        color: getTextPrimaryColor(THEME.DARK),
        textAlign: 'center',
    },
    descriptionText: {
        fontSize: responsiveFontSize(2),
        fontFamily: 'RedHatDisplay-Regular',
        color: getTextSecondaryColor(THEME.DARK),
        textAlign: 'center'
    },
    buttonWrapper: {
        width: '90%',
        paddingHorizontal: responsiveScreenWidth(2),
    },
    buttonText: {
        fontSize: responsiveFontSize(2.5),
        fontFamily: 'Audrey-Medium',
        color: getTextButtonColor(THEME.DARK),
    },
});