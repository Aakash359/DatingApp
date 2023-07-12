import React from "react"
import { View, Text, ImageBackground, TouchableOpacity, StyleSheet, ScrollView } from "react-native"
import { responsiveFontSize, responsiveHeight, responsiveWidth } from "react-native-responsive-dimensions"
import { LeftArrow, ManifestCurrency } from "../../../assets"
import { Button, SelectableGift } from "../../../components"
import { Layout } from "../../../layout"
import { COLORS, THEME, getTextButtonColor, getTextPrimaryColor } from "../../../utils"
import { RootStackParamList } from "../../../App"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { useNavigation } from "@react-navigation/native"

type purchaseGiftsScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'PurchaseGiftsScreen'
>;

export const PurchaseGiftsScreen = () => {
    const navigation = useNavigation<purchaseGiftsScreenNavigationProp>();
    const [selectedGiftId, setSelectedGiftId] = React.useState('');

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
                            <Text style={[styles.offerText, { fontSize: responsiveFontSize(4) }]}>250 Tokens</Text>
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
                    <SelectableGift
                        id='1'
                        selectedId={selectedGiftId}
                        imageSource={require('../../../assets/images/common/roseGift.png')}
                        setSelectedId={setSelectedGiftId}
                    />
                    <SelectableGift
                        id='2'
                        selectedId={selectedGiftId}
                        imageSource={require('../../../assets/images/common/roseGift.png')}
                        setSelectedId={setSelectedGiftId}
                    />
                    <SelectableGift
                        id='3'
                        selectedId={selectedGiftId}
                        imageSource={require('../../../assets/images/common/roseGift.png')}
                        setSelectedId={setSelectedGiftId}
                    />
                    <SelectableGift
                        id='4'
                        selectedId={selectedGiftId}
                        imageSource={require('../../../assets/images/common/roseGift.png')}
                        setSelectedId={setSelectedGiftId}
                    />
                    <SelectableGift
                        id='5'
                        selectedId={selectedGiftId}
                        imageSource={require('../../../assets/images/common/roseGift.png')}
                        setSelectedId={setSelectedGiftId}
                    />
                    <SelectableGift
                        id='6'
                        selectedId={selectedGiftId}
                        imageSource={require('../../../assets/images/common/roseGift.png')}
                        setSelectedId={setSelectedGiftId}
                    />
                </ScrollView>
                <View style={styles.buttonWrapper}>
                    <Button
                        variant={selectedGiftId === '' ? 'disabled' : 'primary'}
                        height={responsiveHeight(8)}
                        imageSource={require('../../../assets/gradients/splash.png')}
                        // onPress={() => setIsPurchaseModalVisible(true)}
                        onPress={() => { }}
                    >
                        <Text style={styles.buttonText}>PURCHASE</Text>
                    </Button>
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
        color: getTextPrimaryColor(THEME.DARK)
    },
    rupeeText: {
        fontFamily: 'Audrey-Medium',
        fontSize: responsiveFontSize(3),
        color: getTextPrimaryColor(THEME.DARK)
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
        color: 'white',
        fontSize: responsiveFontSize(2.5),
    },
    offerPrice: {
        fontFamily: 'RedHatDisplay-Bold',
        color: 'white',
        fontSize: responsiveFontSize(2.5),
    },
    offerPriceCut: {
        fontFamily: 'RedHatDisplay-Bold',
        color: COLORS.LIGHT_70,
        textDecorationLine: 'line-through',
        fontSize: responsiveFontSize(2.5),
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
    },
    selectableGiftWrapper: {
        marginTop: responsiveHeight(2),
        display: 'flex',
        flexDirection: 'row',
        gap: responsiveWidth(5),
        flexWrap: 'wrap',
        paddingBottom: responsiveHeight(2),
    }
})