import React from 'react'
import { Layout, MainHeader } from '../../../../layout'
import { View, Text, StyleSheet, ScrollView, FlatList } from 'react-native'
import { NoLikesIcon } from '../../../../assets'
import { responsiveFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'
import { THEME, getTextButtonColor, getTextPrimaryColor, getTextSecondaryColor } from '../../../../utils'
import { Button, LikedProfileCard, ProfileBoosterCard, SingleSelectPill } from '../../../../components'
import Modal from 'react-native-modal/dist/modal';
import { LikesModal } from '../likesModal'
import { likeProfileData, likesFilterData } from '../../../../constants'

enum ModalPage {
    COST_SCREEN = 'COST_SCREEN',
    SUCCESS_SCREEN = 'SUCCESS_SCREEN',
}

export enum Filter {
    ALL = 'ALL',
    GIFTS = 'GIFTS',
    LIKES = 'LIKES',
    COMMENTS = 'COMMENTS',
}

interface Props {
    numberOfLikes: string
}

export const LikesScreen = (props: Props) => {
    const { numberOfLikes } = props
    const [isModalVisible, setIsModalVisible] = React.useState(false);
    const [modalPage, setModalPage] = React.useState(ModalPage.COST_SCREEN);
    const [selectedFilter, setSelectedFilter] = React.useState(Filter.ALL);
    const filterData = React.useState(likesFilterData)[0];
    const [isProfileBoosted, setIsProfileBoosted] = React.useState(false);
    const [isBlur, setIsBlur] = React.useState(true);

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
                    modalImageText='200'
                />
            case ModalPage.SUCCESS_SCREEN:
                return <LikesModal
                    modalPrimaryImage={require('../../../../assets/images/home/likes/successCheckmark.png')}
                    modalHeader='FEATURE UNLOCKED'
                    modalDescription='You will now be able to see who liked your Profile'
                    nextButtonText='CONTINUE'
                    modalCancleButtonText='RETAKE PHOTO'
                    onNextPress={() => {
                        setIsBlur(false);
                        setIsModalVisible(false);
                        setModalPage(ModalPage.COST_SCREEN)
                    }}
                    onBackPress={() => console.log('e')}
                />
        }
    }

    React.useEffect(() => {
        if (!selectedFilter) {
            setSelectedFilter(Filter.ALL);
        }
    }, [selectedFilter])

    return (
        <Layout>
            <MainHeader />
            <View style={styles.mainWrapper}>
                <View style={styles.likesWrapper}>
                    <View style={styles.textWrapper}>
                        <Text
                            style={styles.headerText}
                        >
                            {numberOfLikes} PEOPLE LIKED YOU
                        </Text>
                        {isBlur ?
                            <Text style={styles.descriptionText}>See who liked you and match with them for 200 Gems</Text>
                            :
                            null
                        }
                    </View>
                </View>
                <View style={styles.contentWrapper}>
                    <View style={styles.filterPillContainer}>
                        <ScrollView
                            horizontal
                            showsHorizontalScrollIndicator={false}
                            directionalLockEnabled={true}
                            alwaysBounceVertical={false}>
                            <FlatList
                                numColumns={4}
                                showsVerticalScrollIndicator={false}
                                showsHorizontalScrollIndicator={false}
                                data={filterData}
                                keyExtractor={(item, index) => index.toString()}
                                renderItem={({ item, index }) => (
                                    <View style={styles.filterPillWrapper}>
                                        <SingleSelectPill
                                            icon={item.icon}
                                            key={index}
                                            selectedPill={selectedFilter}
                                            setSelectedPill={setSelectedFilter}
                                            text={item.text}
                                        />
                                    </View>
                                )}
                            />
                        </ScrollView>
                    </View>
                    <ScrollView
                        style={{ height: 'auto' }}
                        contentContainerStyle={{ paddingBottom: isBlur ? 280 : 200 }}
                        showsVerticalScrollIndicator={false}
                    >
                        <View style={styles.cardMainWrapper}>
                            <ProfileBoosterCard
                                isProfileBoosted={isProfileBoosted}
                                setIsProfileBoosted={setIsProfileBoosted}
                            />
                            {likeProfileData.map((item, index) => {
                                if ((selectedFilter === Filter.GIFTS && item.giftType && item.giftAmount) ||
                                    (selectedFilter === Filter.COMMENTS && item.numberOfComments) ||
                                    (selectedFilter === Filter.LIKES) ||
                                    (selectedFilter === Filter.ALL)) {
                                    return (
                                        <LikedProfileCard
                                            key={index}
                                            name={item.name}
                                            age={item.age}
                                            image={item.image}
                                            isBlur={isBlur}
                                            isGiftFilter={selectedFilter === Filter.GIFTS}
                                            isLikeFilter={selectedFilter === Filter.LIKES}
                                            isCommentFilter={selectedFilter === Filter.COMMENTS}
                                            giftType={item.giftType}
                                            giftAmount={item.giftAmount}
                                            numberOfComments={item.numberOfComments}
                                        />
                                    )
                                }
                                return null;
                            })}
                        </View>
                    </ScrollView>
                </View>
                {isBlur ?
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
                    :
                    null
                }
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
        position: 'relative',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: responsiveScreenHeight(100) - responsiveScreenHeight(22),
    },
    likesWrapper: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: responsiveScreenHeight(2),
        marginBottom: responsiveScreenHeight(3),
    },
    contentWrapper: {
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'column',
        height: 'auto',
        alignItems: 'flex-start',
    },
    cardMainWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        width: '100%',
        height: 'auto',
        flexWrap: 'wrap',
        gap: responsiveScreenHeight(2),
        marginTop: responsiveScreenHeight(2),
    },
    filterPillContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: responsiveScreenWidth(2),
        width: '94%',
        marginBottom: responsiveScreenHeight(0.5),
    },
    filterPillWrapper: {
        marginRight: responsiveScreenWidth(2),
    },
    textWrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        marginTop: responsiveScreenHeight(2),
        width: '90%',
        textAlign: 'center',
        gap: responsiveScreenHeight(0),
    },
    headerText: {
        fontSize: responsiveFontSize(3.5),
        fontFamily: 'Audrey-Bold',
        color: getTextPrimaryColor(THEME.DARK),
        textAlign: 'center',
        marginBottom: responsiveScreenHeight(2),
    },
    descriptionText: {
        fontSize: responsiveFontSize(2),
        fontFamily: 'RedHatDisplay-Regular',
        color: getTextSecondaryColor(THEME.DARK),
        textAlign: 'center'
    },
    buttonWrapper: {
        position: 'absolute',
        bottom: 20,
        width: '90%',
        paddingHorizontal: responsiveScreenWidth(2),
    },
    buttonText: {
        fontSize: responsiveFontSize(2.5),
        fontFamily: 'Audrey-Medium',
        color: getTextButtonColor(THEME.DARK),
    },
});