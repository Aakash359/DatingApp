import React from "react"
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, ScrollView } from "react-native"
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from "react-native-responsive-dimensions"
import { LeftArrow, ManifestCurrency } from "../../../assets"
import { Button, RadioButtonArea, SelectableGift } from "../../../components"
import { Layout } from "../../../layout"
import { COLORS, THEME, getTextButtonColor, getTextPrimaryColor } from "../../../utils"
import { RootStackParamList } from "../../../App"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { useNavigation } from "@react-navigation/native"
import Modal from 'react-native-modal/dist/modal';
import { LikesModal } from "../../home"
import { GiftTypes } from "../../../constants"

type purchaseGiftsScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'PurchaseGiftsScreen'
>;

enum ModalPage {
    PURCHASE_GIFT_SCREEN = 'PURCHASE_GIFT_SCREEN',
    GIFT_PURCHASED_SCREEN = 'GIFT_PURCHASED_SCREEN',
}

// Step 1: Define a TypeScript interface for your gift items
interface GiftItem {
    id: string;
    imageSource: any; // The type is any because require returns any
}

// Step 2: Create an array of gift items
const giftItems: GiftItem[] = [
    { id: '1', imageSource: require('../../../assets/images/common/roseGift.png') },
    { id: '2', imageSource: require('../../../assets/images/common/roseGift.png') },
    { id: '3', imageSource: require('../../../assets/images/common/roseGift.png') },
    { id: '4', imageSource: require('../../../assets/images/common/roseGift.png') },
    { id: '5', imageSource: require('../../../assets/images/common/roseGift.png') },
    { id: '6', imageSource: require('../../../assets/images/common/roseGift.png') },
    // ... you can add more items here
];

const giftPurchaseOffers = [
    {
        giftAmount: 200,
        giftType: GiftTypes.ROSE,
        price: 30,
        // oldPrice: 40,
        isBestValue: false

    },
    {
        giftAmount: 300,
        giftType: GiftTypes.ROSE,
        price: 40,
        oldPrice: 50,
        isBestValue: false
    },
    {
        giftAmount: 400,
        giftType: GiftTypes.ROSE,
        price: 50,
        oldPrice: 60,
        isBestValue: true
    },
    {
        giftAmount: 500,
        giftType: GiftTypes.ROSE,
        price: 60,
        oldPrice: 70,
        isBestValue: false
    },
    {
        giftAmount: 500,
        giftType: GiftTypes.ROSE,
        price: 60,
        oldPrice: 70,
        isBestValue: false
    },
    {
        giftAmount: 500,
        giftType: GiftTypes.ROSE,
        price: 60,
        oldPrice: 70,
        isBestValue: false
    },
    {
        giftAmount: 500,
        giftType: GiftTypes.ROSE,
        price: 60,
        oldPrice: 70,
        isBestValue: false
    },
    {
        giftAmount: 500,
        giftType: GiftTypes.ROSE,
        price: 60,
        oldPrice: 70,
        isBestValue: false
    },
]

export const PurchaseGiftsScreen = () => {
    const navigation = useNavigation<purchaseGiftsScreenNavigationProp>();
    const [selectedId, setSelectedId] = React.useState('');
    const [selectedGiftId, setSelectedGiftId] = React.useState('');
    const [modalPage, setModalPage] = React.useState(ModalPage.PURCHASE_GIFT_SCREEN);
    const [isPurchaseGiftsModalVisible, setIsPurchaseGiftsModalVisible] = React.useState(false);
    // const [isGiftsPurchasedModalVisible, setIsGiftsPurchasedModalVisible] = React.useState(false);

    const renderModalPage = () => {
        switch (modalPage) {
            case ModalPage.PURCHASE_GIFT_SCREEN:
                return <LikesModal
                modalHeader='PURCHASE OPTIONS'
                nextButtonText='CONTINUE'
                isOnlyOneButton={true}
                onNextPress={() => {
                    // setIsPurchaseGiftsModalVisible(false)
                    setModalPage(ModalPage.GIFT_PURCHASED_SCREEN)
                    // navigation.navigate('PurchaseTokensScreen')
                }}
                onBackPress={() => console.log('e')}
            >
                <ScrollView
                    style={{ width: responsiveScreenWidth(90), maxHeight: responsiveScreenHeight(50) }}
                    contentContainerStyle={styles.radioButtonAreaWrapper}
                >
                    {
                        giftPurchaseOffers.map((item, index) => {
                            return (
                                <RadioButtonArea
                                    key={index}
                                    id={index.toString()}
                                    selectedId={selectedId}
                                    setSelectedId={setSelectedId}
                                    isBestValue={item.isBestValue}
                                    height={responsiveScreenHeight(10.5)}
                                    width={responsiveScreenWidth(90)}
                                >
                                    <View style={styles.offerWrapper}>
                                        <Text style={styles.gemsAmountText}>
                                            {item.giftAmount} {item.giftType.toString().toUpperCase() + 'S'}
                                        </Text>
                                        <View style={styles.offerPriceWrapper}>
                                            <ManifestCurrency />
                                            <Text
                                                style={
                                                    [styles.offerPrice,
                                                    {
                                                        fontSize: responsiveScreenFontSize(2),
                                                        position: 'relative',
                                                        top: -responsiveScreenHeight(0.1)
                                                    }]}>
                                                {item.price}

                                            </Text>
                                            <Text
                                                style={
                                                    [styles.offerPriceCut,
                                                    {
                                                        fontSize: responsiveScreenFontSize(2),
                                                        color: COLORS.LIGHT_40,
                                                        position: 'relative',
                                                        top: -responsiveScreenHeight(0.1)
                                                    }]}>
                                                {item.oldPrice}
                                            </Text>
                                        </View>
                                    </View>
                                </RadioButtonArea>
                            )
                        })
                    }
                </ScrollView>
            </LikesModal>
            case ModalPage.GIFT_PURCHASED_SCREEN:
                return <LikesModal
                modalPrimaryImage={require('../../../assets/images/home/likes/successCheckmark.png')}
                modalHeader='GIFTS PURCHASED'
                modalDescription='You Purchased 10 Roses'
                nextButtonText='GREAT'
                isOnlyOneButton={true}
                onNextPress={() => {
                    setIsPurchaseGiftsModalVisible(false)
                    setModalPage(ModalPage.PURCHASE_GIFT_SCREEN)
                    // navigation.navigate('PurchaseTokensScreen')
                }}
                onBackPress={() => console.log('e')}
            />
        }
    }

    return (
        <Layout>
            <View style={styles.mainWrapper}>
                <View style={styles.mainHeaderWrapper}>
                    <View style={styles.headerWrapper}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <LeftArrow width={20} height={20} />
                        </TouchableOpacity>
                        <Text style={styles.headerText}>GIFT SHOP</Text>
                    </View>
                </View>
                <View style={styles.imageBackgroundWrapper}>
                    <ImageBackground
                        source={require('../../../assets/images/common/tokenBackground.png')}
                        style={styles.imageBackground}
                    >
                        <View style={styles.offerTextWrapper}>
                            <Text style={styles.offerText}>Great Offer</Text>
                            <Text style={[styles.offerText, { fontSize: responsiveScreenFontSize(4) }]}>250 Tokens</Text>
                            <View style={styles.offerPriceWrapper}>
                                <View style={styles.manifestWrapper}>
                                    <ManifestCurrency />
                                </View>
                                <Text style={styles.offerPrice}>
                                    30 <Text style={styles.offerPriceCut}>40</Text>
                                </Text>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
                <ScrollView contentContainerStyle={styles.selectableGiftWrapper}>
                    {giftItems.map((item) => (
                        <SelectableGift
                            key={item.id}
                            id={item.id}
                            selectedId={selectedGiftId}
                            imageSource={item.imageSource}
                            setSelectedId={setSelectedGiftId}
                        />
                    ))}
                </ScrollView>
                <View style={styles.buttonWrapper}>
                    <Button
                        variant={selectedGiftId === '' ? 'disabled' : 'primary'}
                        height={responsiveScreenHeight(8)}
                        imageSource={require('../../../assets/gradients/splash.png')}
                        onPress={() => setIsPurchaseGiftsModalVisible(true)}
                    >
                        <Text style={styles.buttonText}>PURCHASE</Text>
                    </Button>
                </View>
            </View>
            <Modal
                useNativeDriverForBackdrop={true}
                style={styles.modal}
                onBackdropPress={() => setIsPurchaseGiftsModalVisible(false)}
                isVisible={isPurchaseGiftsModalVisible}
            >
                {renderModalPage()}
            </Modal>
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
        flex: 1,
        marginVertical: responsiveScreenHeight(3),
        paddingHorizontal: responsiveScreenWidth(3),
    },
    mainHeaderWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    manifestWrapper: {
        transform: [{ scale: 1.5 }],
    },
    headerWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: responsiveScreenWidth(2),
    },
    headerText: {
        fontFamily: 'Audrey-Medium',
        fontSize: responsiveScreenFontSize(3),
        color: getTextPrimaryColor(THEME.DARK)
    },
    rupeeText: {
        fontFamily: 'Audrey-Medium',
        fontSize: responsiveScreenFontSize(3),
        color: getTextPrimaryColor(THEME.DARK)
    },
    imageBackground: {
        height: responsiveScreenHeight(20),
        overflow: 'hidden',
        borderRadius: 10,
    },
    imageBackgroundWrapper: {
        marginTop: responsiveScreenHeight(2),
    },
    offerTextWrapper: {
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: responsiveScreenWidth(7),
        paddingTop: responsiveScreenHeight(3),
        gap: responsiveScreenHeight(0.5),
    },
    offerText: {
        fontFamily: 'RedHatDisplay-Bold',
        color: 'white',
        fontSize: responsiveScreenFontSize(2.5),
    },
    offerPrice: {
        fontFamily: 'RedHatDisplay-Bold',
        color: 'white',
        fontSize: responsiveScreenFontSize(2.5),
    },
    offerPriceCut: {
        fontFamily: 'RedHatDisplay-Bold',
        color: COLORS.LIGHT_70,
        textDecorationLine: 'line-through',
        fontSize: responsiveScreenFontSize(2.5),
    },
    offerPriceWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: responsiveScreenWidth(1.5),
    },
    radioButtonAreaWrapper: {
        marginTop: responsiveScreenHeight(2),
        display: 'flex',
        flexDirection: 'column',
        gap: responsiveScreenHeight(3),
    },
    buttonText: {
        fontFamily: 'Audrey-Medium',
        color: getTextButtonColor(THEME.DARK),
        fontSize: responsiveScreenFontSize(3),
    },
    buttonWrapper: {
        marginTop: responsiveScreenHeight(3),
    },
    offerWrapper: {
        display: 'flex',
        paddingHorizontal: responsiveScreenWidth(3),
        paddingVertical: responsiveScreenHeight(3.5),
        gap: responsiveScreenHeight(0.5),
    },
    selectableGiftWrapper: {
        marginTop: responsiveScreenHeight(2),
        display: 'flex',
        flexDirection: 'row',
        gap: responsiveScreenWidth(5),
        flexWrap: 'wrap',
        paddingBottom: responsiveScreenHeight(2),
    },
    gemsAmountText: {
        fontFamily: 'Audrey-Bold',
        color: getTextButtonColor(THEME.DARK),
        fontSize: responsiveScreenFontSize(2.5),
    },
    offerPriceAlt: {
        fontFamily: 'RedHatDisplay-Bold',
        color: 'white',
        fontSize: responsiveScreenFontSize(2.5),
    },
    offerPriceCutAlt: {
        fontFamily: 'RedHatDisplay-Bold',
        color: COLORS.LIGHT_70,
        textDecorationLine: 'line-through',
        fontSize: responsiveScreenFontSize(2),
    },
    rupeeTextAlt: {
        fontFamily: 'Audrey-Medium',
        fontSize: responsiveScreenFontSize(2.5),
        color: COLORS.LIGHT_40
    },
})