import React from "react"
import { Layout } from "../../../layout"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { LeftArrow } from "../../../assets"
import { responsiveScreenHeight, responsiveScreenWidth, responsiveWidth, responsiveFontSize, responsiveScreenFontSize } from "react-native-responsive-dimensions"
import { getBrandSecondaryColor, getTextButtonColor, getTextPrimaryColor, getTextSecondaryColor, THEME } from "../../../utils"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { RootStackParamList } from "../../../App"
import { useNavigation } from "@react-navigation/native"
import Carousel, { ICarouselInstance } from "react-native-reanimated-carousel"
import FastImage from "react-native-fast-image"
import { Button } from "../../../components"
import { LikesModal } from "../../home"
import Modal from "react-native-modal/dist/modal"

type ThemesPreviewScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'ThemesPreviewScreen'
>;

const themeImages = [
    require('../../../assets/images/theme/midnightDark/chatListing.png'),
    require('../../../assets/images/theme/midnightDark/giftAndDateReq.png'),
    require('../../../assets/images/theme/midnightDark/chatListing.png'),
    require('../../../assets/images/theme/midnightDark/giftAndDateReq.png'),
    require('../../../assets/images/theme/midnightDark/chatListing.png'),
    require('../../../assets/images/theme/midnightDark/giftAndDateReq.png'),
]

enum ModalPage {
    COST_SCREEN = 'COST_SCREEN',
    SUCCESS_SCREEN = 'SUCCESS_SCREEN',
}

export const ThemesPreviewScreen = () => {

    const navigation = useNavigation<ThemesPreviewScreenNavigationProp>();
    const ref = React.useRef<ICarouselInstance>(null);
    const [isModalVisible, setIsModalVisible] = React.useState(false);
    const [modalPage, setModalPage] = React.useState(ModalPage.COST_SCREEN);
    // const [isFast, setIsFast] = React.useState(false);
    // const [isAutoPlay, setIsAutoPlay] = React.useState(false);
    // const [isPagingEnabled, setIsPagingEnabled] = React.useState(true);
    const [activeIndex, setActiveIndex] = React.useState(0);

    const baseOptions = {
        vertical: false,
        width: responsiveScreenWidth(65),
        height: responsiveScreenHeight(60)
    } as const;

    const renderModalPage = () => {
        switch (modalPage) {
            case ModalPage.COST_SCREEN:
                return <LikesModal
                    modalPrimaryImage={require('../../../assets/images/home/likes/diamond.png')}
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
                    modalPrimaryImage={require('../../../assets/images/home/likes/successCheckmark.png')}
                    modalHeader='THEME APPLIED'
                    modalDescription='Midnight Dark is now applied'
                    nextButtonText='CONTINUE'
                    modalCancleButtonText='RETAKE PHOTO'
                    onNextPress={() => {
                        setIsModalVisible(false);
                        setModalPage(ModalPage.COST_SCREEN)
                    }}
                    onBackPress={() => console.log('e')}
                />
        }
    }

    const handleUnlockOrApplyPress = () => {
        setIsModalVisible(true);
        setModalPage(ModalPage.COST_SCREEN)
    }

    return (
        <Layout>
            <View style={styles.mainWrapper}>
                {/* header section */}
                <View style={styles.headerWrapper}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <LeftArrow width={20} height={20} />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>MIDNIGHT DARK</Text>
                </View>
                <View style={styles.themePreviewWrapper}>
                    <Carousel
                        {...baseOptions}
                        loop={false}
                        ref={ref}
                        style={{ width: "100%" }}
                        autoPlay={false}
                        autoPlayInterval={2000}
                        data={themeImages}
                        pagingEnabled={true}
                        onSnapToItem={index => {
                            console.log("current index:", index);
                            setActiveIndex(index); // Update the active index
                        }}
                        renderItem={({ index, item }) => (
                            <View
                                style={styles.carouselItem}
                            >
                                <FastImage
                                    style={styles.carouselImage}
                                    source={item}
                                    resizeMode="contain"
                                />
                            </View>
                        )}
                    />
                </View>
                <View style={styles.ellipseContainer}>
                    {themeImages.map((_, index) => (
                        <View
                            key={index}
                            style={[
                                styles.ellipse,
                                index === activeIndex ? styles.ellipseActive : {},
                            ]}
                        />
                    ))}
                </View>
                <View style={styles.buttonWrapper}>
                    <Button
                        height={responsiveScreenHeight(8)}
                        onPress={handleUnlockOrApplyPress}
                        variant="primary"
                        imageSource={require('../../../assets/gradients/splash.png')}
                    >
                        <Text style={styles.buttonText}>UNLOCK AND APPLY</Text>
                    </Button>
                </View>
                <Modal
                    useNativeDriverForBackdrop={true}
                    style={styles.modal}
                    onBackdropPress={() => setIsModalVisible(false)}
                    isVisible={isModalVisible}>
                    {renderModalPage()}
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
    headerWrapper: {
        marginTop: responsiveScreenHeight(2),
        paddingHorizontal: responsiveScreenWidth(5),
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: responsiveWidth(2),
    },
    headerText: {
        fontFamily: 'Audrey-Medium',
        fontSize: responsiveFontSize(3),
        color: getTextPrimaryColor(THEME.DARK)
    },
    mainWrapper: {
        // paddingHorizontal: responsiveScreenWidth(5),
        paddingVertical: responsiveScreenHeight(1),
        flex: 1
    },
    themePreviewWrapper: {
        marginTop: responsiveScreenHeight(3),
        // height: responsiveScreenHeight(80),
        padding: 0,
        margin: 0,
        gap: 0
    },
    carouselItem: {
        flex: 1,
        // borderWidth: 1,
        // width: '100%',
        justifyContent: 'flex-start',
        // marginLeft: responsiveScreenWidth(5),
        width: responsiveScreenWidth(60)
    },
    carouselImage: {
        height: responsiveScreenHeight(60),
        // width: responsiveScreenWidth(100)
    },
    ellipseContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        marginTop: responsiveScreenHeight(3), // Adjust as needed
    },
    ellipse: {
        width: 8, // Diameter of the ellipse
        height: 8, // Diameter of the ellipse
        borderRadius: 4, // Half of width or height to make it circular
        backgroundColor: getTextSecondaryColor(THEME.DARK), // Inactive color
        marginHorizontal: 4, // Space between ellipses
    },
    ellipseActive: {
        backgroundColor: getBrandSecondaryColor(THEME.DARK), // Active color
    },
    buttonWrapper: {
        marginTop: responsiveScreenHeight(4),
        width: responsiveScreenWidth(90),
        alignSelf: 'center'
    },
    buttonText: {
        fontFamily: 'Audrey-Medium',
        color: getTextButtonColor(THEME.DARK),
        fontSize: responsiveScreenFontSize(2.7)
    }
})