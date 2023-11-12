import React from 'react'
import { Layout } from '../../../layout'
import { View, Text, StyleSheet, FlatList, TouchableOpacity, KeyboardAvoidingView, Platform } from 'react-native'
import { responsiveFontSize, responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'
import { THEME, getTextButtonColor, getTextPrimaryColor } from '../../../utils'
import { Conversation, Input, RadioButtonArea, SearchInput } from '../../../components'
import { RecentMatchAvatar } from '../../../components/recentMatchAvatar.component'
import { ChatHorizontalFilterIcon, HelpCenterAttachmentIcon, ThreeDotsIcon } from '../../../assets'
import { NativeStackNavigationProp } from '@react-navigation/native-stack'
import { RootStackParamList } from '../../../App'
import { useNavigation } from '@react-navigation/native'
import Modal from 'react-native-modal/dist/modal'
import { LikesModal } from '../likes'

const recentMatches = [
    { image: require('../../../assets/images/home/likes/avatar1.png'), likes: 2 },
    { image: require('../../../assets/images/home/likes/avatar1.png') },
    { image: require('../../../assets/images/home/likes/avatar1.png') },
    { image: require('../../../assets/images/home/likes/avatar1.png') },
    { image: require('../../../assets/images/home/likes/avatar1.png') }
];

const conversations = [
    {
        matchProfileImgSrc: require('../../../assets/images/home/likes/avatar1.png'),
        matchName: 'Alex Linderson',
        lastTextTime: '2 min',
        message: 'How are you today ?',
        noOfUnreadTexts: 3,
        isOnline: false
    },
    {
        matchProfileImgSrc: require('../../../assets/images/home/likes/avatar1.png'),
        matchName: 'Ba binderson',
        lastTextTime: '61 min',
        message: 'How are you today ?',
        noOfUnreadTexts: 12,
        isOnline: true
    },
    {
        matchProfileImgSrc: require('../../../assets/images/home/likes/avatar1.png'),
        matchName: 'Alex Linderson',
        lastTextTime: '2 min',
        message: 'How are you today ?',
        noOfUnreadTexts: 0,
        isOnline: true
    },
    {
        matchProfileImgSrc: require('../../../assets/images/home/likes/avatar1.png'),
        matchName: 'Alex Linderson',
        lastTextTime: '2 min',
        message: 'How are you today ?',
        noOfUnreadTexts: 0,
        isOnline: true
    },
    {
        matchProfileImgSrc: require('../../../assets/images/home/likes/avatar1.png'),
        matchName: 'Alex Linderson',
        lastTextTime: '2 min',
        message: 'How are you today ?',
        noOfUnreadTexts: 0,
        isOnline: true
    },
    {
        matchProfileImgSrc: require('../../../assets/images/home/likes/avatar1.png'),
        matchName: 'Alex Linderson',
        lastTextTime: '2 min',
        message: 'How are you today ?',
        noOfUnreadTexts: 0,
        isOnline: true
    },
    {
        matchProfileImgSrc: require('../../../assets/images/home/likes/avatar1.png'),
        matchName: 'Alex Linderson',
        lastTextTime: '2 min',
        message: 'How are you today ?',
        noOfUnreadTexts: 0,
        isOnline: true
    },
    {
        matchProfileImgSrc: require('../../../assets/images/home/likes/avatar1.png'),
        matchName: 'Alex Linderson',
        lastTextTime: '8 min',
        message: 'How are you today ?',
        noOfUnreadTexts: 0,
        isOnline: true
    },
];

type chatScreenNavigationProps = NativeStackNavigationProp<
    RootStackParamList,
    'OnboardingScreen'
>;

enum ModalPage {
    CONVERSATION_OPTIONS_SCREEN = 'CONVERSATION_OPTIONS_SCREEN',

    UNMATCH_CONFIRM_SCREEN = 'UNMATCH_CONFIRM_SCREEN',
    UNMATCH_SUCCESS_SCREEN = 'UNMATCH_SUCCESS_SCREEN',

    CLEAR_CONVERSATION_CONFIRM_SCREEN = 'CLEAR_CONVERSATION_CONFIRM_SCREEN',
    CLEAR_CONVERSATION_SUCCESS_SCREEN = 'CLEAR_CONVERSATION_SUCCESS_SCREEN',

    REPORT_TYPE_SCREEN = 'REPORT_TYPE_SCREEN',
    REPORT_SCREEN = 'REPORT_SCREEN',
    REPORT_SUCCESS_SCREEN = 'REPORT_SUCCESS_SCREEN',
}

const reportOptions = [
    {
        id: '1',
        text: 'Inappropriate or offensive behaviour'
    },
    {
        id: '2',
        text: 'Harassment'
    },
    {
        id: '3',
        text: 'Fake or impersonating profiles'
    },
    {
        id: '4',
        text: 'Violation of app policies'
    },
    {
        id: '5',
        text: 'Spam or solicitation'
    }
]

const conversationOptions = [
    {
        id: '1',
        text: 'Unmatch'
    },
    {
        id: '2',
        text: 'Report'
    },
    {
        id: '3',
        text: 'Clear conversation'
    }
]

export const ChatScreen = () => {

    const [searchText, setSearchText] = React.useState('');
    const [isModalVisible, setIsModalVisible] = React.useState(false);
    const [modalPage, setModalPage] = React.useState<ModalPage>();
    const [reportSelectedId, setReportSelectedId] = React.useState('');
    const [conversationOptionsSelectedId, setConversationOptionsSelectedId] = React.useState('');
    const [reportText, setReportText] = React.useState('');

    const navigation = useNavigation<chatScreenNavigationProps>();

    const renderModalPage = () => {
        switch (modalPage) {
            case ModalPage.CONVERSATION_OPTIONS_SCREEN:
                return <LikesModal
                    isNoHeader
                    nextButtonText='NEXT'
                    onNextPress={() => {
                        if (conversationOptionsSelectedId === '1') {
                            setModalPage(ModalPage.UNMATCH_CONFIRM_SCREEN)
                        }
                        if (conversationOptionsSelectedId === '2') {
                            setModalPage(ModalPage.REPORT_TYPE_SCREEN)
                        }
                        if (conversationOptionsSelectedId === '3') {
                            setModalPage(ModalPage.CLEAR_CONVERSATION_CONFIRM_SCREEN)
                        }
                    }}
                    onBackPress={() => console.log('e')}
                >
                    {conversationOptions.map((options, index) => {
                        return (
                            <View
                                key={index + options.id}
                                style={styles.radioButtonAreaWrapper}
                            >
                                <RadioButtonArea
                                    id={options.id}
                                    selectedId={conversationOptionsSelectedId}
                                    setSelectedId={setConversationOptionsSelectedId}
                                    isBestValue={false}
                                    height={responsiveScreenHeight(7)}
                                >
                                    <Text style={styles.radioText}>{options.text}</Text>
                                </RadioButtonArea>
                            </View>

                        )
                    })}
                </LikesModal>
            case ModalPage.UNMATCH_CONFIRM_SCREEN:
                return <LikesModal
                    modalHeader='UNMATCH'
                    modalDescription='Are you sure you want to unmatch Alex Linderson ? This action cannot be undone and is irreversible'
                    nextButtonText='CONFIRM'
                    isOnlyOneButton={true}
                    onNextPress={() => {
                        setModalPage(ModalPage.UNMATCH_SUCCESS_SCREEN);
                    }}
                    onBackPress={() => console.log('e')}
                />
            case ModalPage.UNMATCH_SUCCESS_SCREEN:
                return <LikesModal
                    modalPrimaryImage={require('../../../assets/images/home/likes/successCheckmark.png')}
                    modalHeader='UNMATCH SUCCESSFULL'
                    modalDescription='Alex Linderson has been succesfully unmatched'
                    nextButtonText='GREAT'
                    isOnlyOneButton={true}
                    onNextPress={() => {
                        setIsModalVisible(false)
                    }}
                    onBackPress={() => console.log('e')}
                />
            case ModalPage.CLEAR_CONVERSATION_CONFIRM_SCREEN:
                return <LikesModal
                    modalHeader='CLEAR CHAT'
                    modalDescription='Are you sure you want to clear your chat with Alex Linderson ? This action cannot be undone and is irreversible'
                    nextButtonText='CONFIRM'
                    isOnlyOneButton={true}
                    onNextPress={() => {
                        setModalPage(ModalPage.CLEAR_CONVERSATION_SUCCESS_SCREEN);
                    }}
                    onBackPress={() => console.log('e')}
                />
            case ModalPage.CLEAR_CONVERSATION_SUCCESS_SCREEN:
                return <LikesModal
                    modalPrimaryImage={require('../../../assets/images/home/likes/successCheckmark.png')}
                    modalHeader='CHAT CLEARED'
                    modalDescription='Your conversation with Alex Linderson has been cleared'
                    nextButtonText='GREAT'
                    isOnlyOneButton={true}
                    onNextPress={() => {
                        setIsModalVisible(false)
                    }}
                    onBackPress={() => console.log('e')}
                />
            case ModalPage.REPORT_TYPE_SCREEN:
                return <LikesModal
                    modalHeader='REPORT'
                    nextButtonText='APPLY'
                    onNextPress={() => {
                        setModalPage(ModalPage.REPORT_SCREEN)
                    }}
                    onBackPress={() => console.log('e')}
                >
                    <Text style={styles.reportText}>Your report is private</Text>
                    {reportOptions.map((options, index) => {
                        return (
                            <View
                                key={index + options.id}
                                style={styles.radioButtonAreaWrapper}
                            >
                                <RadioButtonArea
                                    id={options.id}
                                    selectedId={reportSelectedId}
                                    setSelectedId={setReportSelectedId}
                                    isBestValue={false}
                                    height={responsiveScreenHeight(7)}
                                >
                                    <Text style={styles.radioText}>{options.text}</Text>
                                </RadioButtonArea>
                            </View>

                        )
                    })}
                </LikesModal>
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
        }
    }

    return (
        <Layout>
            <KeyboardAvoidingView
                style={{ flex: 1 }}
                behavior={Platform.OS === 'ios' ? "padding" : "height"}
            >
                <View style={styles.mainWrapper}>
                    <View style={styles.searchInputWrapper}>
                        <SearchInput
                            placeholder='Search Matches..'
                            searchText={searchText}
                            setSearchText={setSearchText}
                        />
                    </View>
                    <View style={styles.recentMatchesContainer}>
                        <Text style={styles.recentMatchText}>Recent Matches</Text>
                        <FlatList
                            contentContainerStyle={styles.recentMatchesWrapper}
                            horizontal={true}
                            data={recentMatches}
                            renderItem={({ item }) => {
                                return (
                                    <RecentMatchAvatar
                                        imageSrc={item.image}
                                        likes={item.likes}
                                    />
                                );
                            }}
                            keyExtractor={(item, index) => index.toString()}
                            showsHorizontalScrollIndicator={false}
                        />
                    </View>
                    <View style={styles.conversationWrapper}>
                        <View style={styles.conversationHeaderWrapper}>
                            <Text style={styles.recentMatchText}>Coversations</Text>
                            <View style={styles.conversationHeaderIconWrapper}>
                                <TouchableOpacity>
                                    <ChatHorizontalFilterIcon />
                                </TouchableOpacity>
                                <TouchableOpacity>
                                    <ThreeDotsIcon />
                                </TouchableOpacity>
                            </View>
                        </View>
                        <FlatList
                            style={styles.conversationContainer}
                            data={conversations}
                            renderItem={({ item }) => (
                                <Conversation
                                    matchProfileImgSrc={item.matchProfileImgSrc}
                                    matchName={item.matchName}
                                    lastTextTime={item.lastTextTime}
                                    message={item.message}
                                    noOfUnreadTexts={item.noOfUnreadTexts}
                                    isOnline={item.isOnline}
                                    onConversationPress={() => {
                                        navigation.navigate('ConversationScreen');
                                    }}
                                    onConversationLongPress={() => {
                                        setIsModalVisible(true);
                                        setModalPage(ModalPage.CONVERSATION_OPTIONS_SCREEN)
                                    }}
                                />
                            )}
                            keyExtractor={(item, index) => index.toString()}
                            showsVerticalScrollIndicator={false}
                        />
                    </View>
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
            </KeyboardAvoidingView>
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
        paddingTop: responsiveScreenHeight(2),
        flex: 1,
    },
    searchInputWrapper: {
        width: responsiveScreenWidth(100),
        paddingHorizontal: responsiveScreenWidth(3),
    },
    headerText: {
        fontSize: responsiveFontSize(4),
        fontFamily: 'Audrey-Bold',
        color: getTextPrimaryColor(THEME.DARK)
    },
    recentMatchesWrapper: {
        gap: responsiveScreenWidth(2),
    },
    recentMatchesContainer: {
        paddingHorizontal: responsiveScreenWidth(3),
        marginTop: responsiveScreenHeight(2),
        marginBottom: responsiveScreenHeight(1),
    },
    recentMatchText: {
        marginBottom: responsiveScreenHeight(1),
        color: getTextButtonColor(THEME.DARK),
        fontFamily: 'RedHatDisplay-SemiBold',
        fontSize: responsiveFontSize(2.2),
    },
    conversationWrapper: {
        backgroundColor: '#292D34',
        paddingHorizontal: responsiveScreenWidth(3),
        marginTop: responsiveScreenHeight(2),
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        flex: 1,
    },
    conversationHeaderWrapper: {
        paddingVertical: responsiveScreenHeight(1.5),
        paddingHorizontal: responsiveScreenWidth(1),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    conversationHeaderIconWrapper: {
        display: 'flex',
        flexDirection: 'row',
        gap: responsiveScreenWidth(5),
    },
    conversationContainer: {
        flex: 1,
    },
    radioButtonAreaWrapper: {
        width: responsiveScreenWidth(90),
        marginBottom: responsiveScreenHeight(1)
    },
    radioText: {
        fontFamily: 'RedHatDisplay-Regular',
        color: getTextButtonColor(THEME.DARK),
        marginHorizontal: responsiveScreenWidth(5),
        fontSize: responsiveScreenFontSize(2.25)
    },
    reportText: {
        fontFamily: 'RedHatDisplay-Regular',
        color: getTextPrimaryColor(THEME.DARK)
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
});