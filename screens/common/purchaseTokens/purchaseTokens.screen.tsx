import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Layout } from '../../../layout';
import { RootStackParamList } from '../../../App';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { LeftArrow, ManifestCurrency } from '../../../assets';
import { COLORS, THEME, getTextButtonColor, getTextPrimaryColor } from '../../../utils';
import Modal from 'react-native-modal/dist/modal';
import { Button, RadioButtonArea } from '../../../components';
import { LikesModal } from '../..';

type purchaseGemScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'PurchaseTokensScreen'
>;

const tokenPurchaseOffers = [
    {
        tokenAmount: 200,
        price: 30,
        // oldPrice: 40,
        isBestValue: false

    },
    {
        tokenAmount: 300,
        price: 40,
        oldPrice: 50,
        isBestValue: false
    },
    {
        tokenAmount: 400,
        price: 50,
        oldPrice: 60,
        isBestValue: true
    },
    {
        tokenAmount: 500,
        price: 60,
        oldPrice: 70,
        isBestValue: false
    },
]

export const PurchaseTokensScreen = () => {

    const navigation = useNavigation<purchaseGemScreenNavigationProp>();

    const [selectedId, setSelectedId] = React.useState('');
    const [isInfoModalVisible, setIsInfoModalVisible] = React.useState(false);
    const [isPurchaseModalVisible, setIsPurchaseModalVisible] = React.useState(false);

    return (
        <Layout>
            <View style={styles.mainWrapper}>
                <View style={styles.mainHeaderWrapper}>
                    <View style={styles.headerWrapper}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <LeftArrow width={20} height={20} />
                        </TouchableOpacity>
                        <Text style={styles.headerText}>BUY TOKENS</Text>
                    </View>
                </View>
                <View style={styles.imageBackgroundWrapper}>
                    <ImageBackground
                        source={require('../../../assets/images/common/tokenBackground.png')}
                        style={styles.imageBackground}
                    >
                        <View style={styles.offerTextWrapper}>
                            <Text style={styles.offerText}>Great Offer</Text>
                            <Text style={[styles.offerText, { fontSize: responsiveFontSize(4) }]}>250 Tokens</Text>
                            <View style={styles.offerPriceWrapper}>
                                <Text style={styles.offerPrice}>
                                ₹ 30 <Text style={styles.offerPriceCut}>₹ 40</Text>
                                </Text>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.radioButtonAreaWrapper}>
                    {
                        tokenPurchaseOffers.map((item, index) => {
                            return (
                                <RadioButtonArea
                                    key={index}
                                    id={index.toString()}
                                    selectedId={selectedId}
                                    setSelectedId={setSelectedId}
                                    isBestValue={item.isBestValue}
                                    height={responsiveHeight(10.5)}
                                >
                                    <View style={styles.offerWrapper}>
                                        <View style={styles.priceWrapper}>
                                            <Text style={styles.tokenAmountText}>{item.tokenAmount}</Text>
                                            <View style={styles.manifestWrapper}>
                                                <ManifestCurrency />
                                            </View>
                                        </View>
                                        <View style={styles.offerPriceWrapper}>
                                            <Text style={styles.rupeeText}>₹</Text>
                                            <Text
                                                style={
                                                    [styles.offerPriceAlt,
                                                    {
                                                        fontSize: responsiveFontSize(2),
                                                        position: 'relative',
                                                        top: -responsiveHeight(0.1)
                                                    }]}>
                                                {item.price}

                                            </Text>
                                            <Text
                                                style={
                                                    [styles.offerPriceCutAlt,
                                                    {
                                                        fontSize: responsiveFontSize(2),
                                                        color: COLORS.LIGHT_40,
                                                        position: 'relative',
                                                        top: -responsiveHeight(0.1)
                                                    }]}>
                                                    {item.oldPrice &&
                                                        <Text style={styles.rupeeTextAlt}>₹</Text>
                                                    }
                                                    {item.oldPrice}
                                            </Text>
                                        </View>
                                    </View>
                                </RadioButtonArea>
                            )
                        })
                    }
                </View>
                <View style={styles.buttonWrapper}>
                    <Button
                        variant={selectedId === '' ? 'disabled' : 'primary'}
                        height={responsiveHeight(8)}
                        imageSource={require('../../../assets/gradients/splash.png')}
                        onPress={() => setIsPurchaseModalVisible(true)}
                    >
                        <Text style={styles.buttonText}>PURCHASE</Text>
                    </Button>
                </View>
            </View>
            <Modal
                useNativeDriverForBackdrop={true}
                style={styles.modal}
                onBackdropPress={() => setIsInfoModalVisible(false)}
                isVisible={isPurchaseModalVisible}>
                <LikesModal
                    modalPrimaryImage={require('../../../assets/images/home/likes/successCheckmark.png')}
                    modalHeader='TOKENS PURCHASED'
                    modalDescription='You Purchased 200 Manifest Tokens'
                    nextButtonText='GREAT'
                    isOnlyOneButton={true}
                    onNextPress={() => navigation.navigate('HomeScreen')}
                    onBackPress={() => console.log('e')}
                />
            </Modal>
        </Layout>
    )
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
    mainWrapper: {
        flex: 1,
        marginVertical: responsiveHeight(3),
        paddingHorizontal: responsiveWidth(3),
    },
    priceWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: responsiveWidth(2),
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
        gap: responsiveWidth(2),
    },
    leftArrowWrapper: {
        backgroundColor: 'red',
        width: 10,
    },
    headerText: {
        fontFamily: 'Audrey-Medium',
        fontSize: responsiveFontSize(3),
        color: getTextButtonColor(THEME.DARK)
    },
    rupeeText: {
        fontFamily: 'Audrey-Medium',
        fontSize: responsiveFontSize(3),
        color: getTextPrimaryColor(THEME.DARK)
    },
    rupeeTextAlt: {
        fontFamily: 'Audrey-Medium',
        fontSize: responsiveFontSize(2.5),
        color: COLORS.LIGHT_40
    },
    imageBackground: {
        height: responsiveHeight(20),
        overflow: 'hidden',
        borderRadius: 10,
    },
    imageBackgroundWrapper: {
        marginTop: responsiveHeight(2),
    },
    offerTextWrapper: {
        display: 'flex',
        flexDirection: 'column',
        paddingLeft: responsiveWidth(7),
        paddingTop: responsiveHeight(3),
        gap: responsiveHeight(0.5),
    },
    offerText: {
        fontFamily: 'RedHatDisplay-Bold',
        color: 'black',
        fontSize: responsiveFontSize(2.5),
    },
    offerPrice: {
        fontFamily: 'RedHatDisplay-Bold',
        color: 'black',
        fontSize: responsiveFontSize(2.5),
    },
    offerPriceAlt: {
        fontFamily: 'RedHatDisplay-Bold',
        color: 'white',
        fontSize: responsiveFontSize(2.5),
    },
    offerPriceCut: {
        fontFamily: 'RedHatDisplay-Bold',
        color: COLORS.LIGHT_30,
        textDecorationLine: 'line-through',
        fontSize: responsiveFontSize(2),
    },
    offerPriceCutAlt: {
        fontFamily: 'RedHatDisplay-Bold',
        color: COLORS.LIGHT_70,
        textDecorationLine: 'line-through',
        fontSize: responsiveFontSize(2),
    },
    offerPriceWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: responsiveWidth(1.5),
    },
    radioButtonAreaWrapper: {
        marginTop: responsiveHeight(2),
        display: 'flex',
        flexDirection: 'column',
        gap: responsiveHeight(3),
    },
    buttonText: {
        fontFamily: 'Audrey-Medium',
        color: getTextButtonColor(THEME.DARK),
        fontSize: responsiveFontSize(3),
    },
    buttonWrapper: {
        marginTop: responsiveHeight(3),
    },
    offerWrapper: {
        display: 'flex',
        paddingHorizontal: responsiveWidth(3),
        paddingVertical: responsiveHeight(3.5),
        gap: responsiveHeight(0.5),
    },
    tokenAmountText: {
        fontFamily: 'Audrey-Bold',
        color: getTextButtonColor(THEME.DARK),
        fontSize: responsiveFontSize(3),
    }
})
