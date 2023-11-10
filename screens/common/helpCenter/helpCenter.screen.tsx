import React, { useMemo } from 'react';
import { Layout } from '../../../layout';
import { KeyboardAvoidingView, Platform, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { HelpCenterAttachmentIcon, HelpCenterCallIcon, HelpCenterFAQIcon, HelpCenterInquiryIcon, HelpCenterReportIcon, LeftArrow } from '../../../assets';
import { useNavigation } from '@react-navigation/native';
import { responsiveScreenWidth, responsiveScreenHeight, responsiveFontSize, responsiveWidth, responsiveScreenFontSize } from 'react-native-responsive-dimensions';
import { getTextButtonColor, getTextPrimaryColor, THEME } from '../../../utils';
import Modal from 'react-native-modal/dist/modal';
import { LikesModal } from '../../home';
import { Input } from '../../../components';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../../App';

enum ModalPage {
    REPORT_SCREEN = 'REPORT_SCREEN',
    REPORT_SUCCESS_SCREEN = 'REPORT_SUCCESS_SCREEN',
    INQUIRY_SCREEN = 'INQUIRY_SCREEN',
    INQUIRY_SUCCESS_SCREEN = 'INQUIRY_SUCCESS_SCREEN'
}

type helpCenterNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'HelpCenterScreen'
>;

export const HelpCenterScreen = () => {
    const navigation = useNavigation<helpCenterNavigationProp>();
    const [isModalVisible, setIsModalVisible] = React.useState(false);
    const [modalPage, setModalPage] = React.useState<ModalPage>();
    const [reportText, setReportText] = React.useState('');
    const [inquiryText, setInquiryText] = React.useState('');

    const handleFAQPress = () => { 
        navigation.navigate('FAQScreen')
     };
    const handleInquiryPress = () => { 
        setIsModalVisible(true);
        setModalPage(ModalPage.INQUIRY_SCREEN)
    };
    const handleCallPress = () => { };
    const handleMailPress = () => { };
    const handleReportPress = () => {
        setIsModalVisible(true);
        setModalPage(ModalPage.REPORT_SCREEN)
    };

    const helpCenterData = useMemo(() => {
        return [
            {
                icon: <HelpCenterFAQIcon />,
                label: 'FAQs',
                onPress: handleFAQPress
            },
            {
                icon: <HelpCenterInquiryIcon />,
                label: 'Send Inquiry',
                onPress: handleInquiryPress
            },
            {
                icon: <HelpCenterCallIcon />,
                label: 'Call: +91  97234567342',
                onPress: handleCallPress
            },
            {
                icon: <HelpCenterInquiryIcon />,
                label: 'Mail: info@manifest.com',
                onPress: handleMailPress
            },
            {
                icon: <HelpCenterReportIcon />,
                label: 'Report inappropriate activity',
                onPress: handleReportPress
            }
        ]
    }, [])

    const renderModalPage = () => {
        switch (modalPage) {
            case ModalPage.REPORT_SCREEN:
                return <LikesModal
                    modalHeader='WRITE REPORT'
                    nextButtonText='SUBMIT REPORT'
                    onNextPress={() => {
                        setModalPage(ModalPage.REPORT_SUCCESS_SCREEN)
                    }}
                    onBackPress={() => console.log('e')}
                >
                    <View style={styles.reportInputWrapper}>
                        <Text style={styles.reportDescText}>
                            The more details you can give, the better we can understand what’s happened
                        </Text>
                        <Input
                            value={reportText}
                            setValue={setReportText}
                            placeholder='Tell us more'
                            fontFamily='RedHatDisplay-Regular'
                            fontSize={responsiveFontSize(2)}
                        />
                        <Input
                            value={''}
                            setValue={() => { }}
                            placeholder='Attachment ( optional )'
                            fontFamily='RedHatDisplay-Regular'
                            fontSize={responsiveFontSize(2)}
                            icon={<HelpCenterAttachmentIcon />}
                            isInputDisabled
                        />

                    </View>
                </LikesModal>
            case ModalPage.REPORT_SUCCESS_SCREEN:
                return <LikesModal
                    modalPrimaryImage={require('../../../assets/images/home/likes/successCheckmark.png')}
                    modalHeader='REPORT SUBMITTED'
                    modalDescription='Thank you for helping us maintain a safe and respectful dating community.'
                    nextButtonText='GREAT'
                    isOnlyOneButton={true}
                    onNextPress={() => {
                        setIsModalVisible(false)
                    }}
                    onBackPress={() => console.log('e')}
                />
            case ModalPage.INQUIRY_SCREEN:
                return <LikesModal
                modalHeader='SEND US AN INQUIRY'
                nextButtonText='SUBMIT REPORT'
                onNextPress={() => {
                    setModalPage(ModalPage.INQUIRY_SUCCESS_SCREEN)
                }}
                onBackPress={() => console.log('e')}
            >
                <View style={styles.reportInputWrapper}>
                    <Text style={styles.reportDescText}>
                        Send Us Your Questions/Feedback and  suggestions
                    </Text>
                    <Input
                        value={inquiryText}
                        setValue={setInquiryText}
                        placeholder='Write your query'
                        fontFamily='RedHatDisplay-Regular'
                        fontSize={responsiveFontSize(2)}
                    />
                    <Input
                        value={''}
                        setValue={() => { }}
                        placeholder='Attachment ( optional )'
                        fontFamily='RedHatDisplay-Regular'
                        fontSize={responsiveFontSize(2)}
                        icon={<HelpCenterAttachmentIcon />}
                        isInputDisabled
                    />

                </View>
            </LikesModal>
            case ModalPage.INQUIRY_SUCCESS_SCREEN:
                return <LikesModal
                    modalPrimaryImage={require('../../../assets/images/home/likes/successCheckmark.png')}
                    modalHeader='INQUIRY SUBMITTED'
                    modalDescription='We will get back to you soon for your Inquiry'
                    nextButtonText='GREAT'
                    isOnlyOneButton={true}
                    onNextPress={() => {
                        setIsModalVisible(false)
                    }}
                    onBackPress={() => console.log('e')}
                />
        }
    }

    return (
        <Layout>
            <View style={styles.mainWrapper}>
                {/* header section */}
                <View style={styles.headerWrapper}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <LeftArrow width={20} height={20} />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>HELP CENTER</Text>
                </View>
                {/* content section */}
                <View style={styles.helpCenterBodyWrapper}>
                    {
                        helpCenterData.map((data, index) => {
                            return (
                                <TouchableOpacity
                                    key={index + data.label}
                                    style={styles.helpCenterRow}
                                    onPress={data.onPress}
                                >
                                    {data.icon}
                                    <Text style={styles.helpCenterRowText}>{data.label}</Text>
                                </TouchableOpacity>
                            )
                        })
                    }
                </View>
                <Modal
                    useNativeDriverForBackdrop={true}
                    style={styles.modal}
                    onBackdropPress={() => setIsModalVisible(false)}
                    isVisible={isModalVisible}>
                    <KeyboardAvoidingView
                        behavior={Platform.OS === 'ios' ? "padding" : "height"}
                    >
                        {renderModalPage()}
                    </KeyboardAvoidingView>
                </Modal>
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
        flexGrow: 1,
        marginVertical: responsiveScreenHeight(1)
    },
    // header styles
    headerWrapper: {
        paddingHorizontal: responsiveScreenWidth(5),
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: responsiveWidth(2),
        marginTop: responsiveScreenHeight(2),
    },
    headerText: {
        fontFamily: 'Audrey-Medium',
        fontSize: responsiveFontSize(3),
        color: getTextPrimaryColor(THEME.DARK)
    },
    // content styles
    helpCenterBodyWrapper: {
        paddingHorizontal: responsiveScreenWidth(5),
        width: responsiveScreenWidth(90),
        marginTop: responsiveScreenHeight(3),
        flex: 4,
    },
    helpCenterRow: {
        display: 'flex',
        flexDirection: 'row',
        gap: responsiveScreenWidth(5),
        alignItems: 'center',
        marginBottom: responsiveScreenHeight(3)
    },
    helpCenterRowText: {
        fontFamily: 'RedHatDisplay-Regular',
        color: getTextButtonColor(THEME.DARK),
        fontSize: responsiveScreenFontSize(2.5)
    },
    // report modal styles
    reportInputWrapper: {
        width: responsiveScreenWidth(80),
        display: 'flex',
        gap: responsiveScreenHeight(2)
    },
    reportDescText: {
        color: getTextPrimaryColor(THEME.DARK),
        fontFamily: 'RedHatDisplay-Regular',
        marginTop: responsiveScreenHeight(1)
    }
})