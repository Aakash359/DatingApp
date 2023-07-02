import React from 'react';
import { ImageBackground, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Layout } from '../../layout';
import { RootStackParamList } from '../../App';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { useNavigation } from '@react-navigation/native';
import { responsiveFontSize, responsiveHeight, responsiveWidth } from 'react-native-responsive-dimensions';
import { LeftArrow, ManifestCurrency, RightArrow } from '../../assets';
import { COLORS, THEME, getTextPrimaryColor } from '../../utils';
import { Button, RadioButtonArea } from '../../components';

type purchaseGemScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'PurchaseGemsScreen'
>;

const gemPurchaseOffers = [
    {
        gemAmount: 200,
        price: 30,
        // oldPrice: 40,
        isBestValue: false

    },
    {
        gemAmount: 300,
        price: 40,
        oldPrice: 50,
        isBestValue: false
    },
    {
        gemAmount: 400,
        price: 50,
        oldPrice: 60,
        isBestValue: true
    },
    {
        gemAmount: 500,
        price: 60,
        oldPrice: 70,
        isBestValue: false
    },
]

export const PurchaseGemsScreen = () => {

    const navigation = useNavigation<purchaseGemScreenNavigationProp>();

    const [selectedId, setSelectedId] = React.useState('');

    return (
        <Layout>
            <View style={styles.mainWrapper}>
                <View style={styles.headerWrapper}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <LeftArrow width={20} height={20} />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>BUY GEMS</Text>
                </View>
                <View style={styles.imageBackgroundWrapper}>
                    <ImageBackground
                        source={require('../../assets/images/common/diamondBackground.png')}
                        style={styles.imageBackground}
                    >
                        <View style={styles.offerTextWrapper}>
                            <Text style={styles.offerText}>Great Offer</Text>
                            <Text style={[styles.offerText, { fontSize: responsiveFontSize(4) }]}>20 Gems</Text>
                            <View style={styles.offerPriceWrapper}>
                                <ManifestCurrency />
                                <Text style={styles.offerPrice}>
                                    30 <Text style={styles.offerPriceCut}>40</Text>
                                </Text>
                            </View>
                        </View>
                    </ImageBackground>
                </View>
                <View style={styles.radioButtonAreaWrapper}>
                    {
                        gemPurchaseOffers.map((item, index) => {
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
                                        <Text style={styles.gemsAmountText}>{item.gemAmount} GEMS</Text>
                                        <View style={styles.offerPriceWrapper}>
                                            <ManifestCurrency />
                                            <Text
                                                style={
                                                    [styles.offerPrice,
                                                    {
                                                        fontSize: responsiveFontSize(2),
                                                        position: 'relative',
                                                        top: -responsiveHeight(0.1)
                                                    }]}>
                                                {item.price}

                                            </Text>
                                            <Text
                                                style={
                                                    [styles.offerPriceCut,
                                                    {
                                                        fontSize: responsiveFontSize(2),
                                                        color: COLORS.LIGHT_40,
                                                        position: 'relative',
                                                        top: -responsiveHeight(0.1)
                                                    }]}>
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
                        imageSource={require('../../assets/gradients/splash.png')}
                        onPress={() => { }}
                    >
                        <Text style={styles.buttonText}>PURCHASE</Text>
                    </Button>
                </View>
            </View>
        </Layout>
    )
};

const styles = StyleSheet.create({
    mainWrapper: {
        flex: 1,
        marginVertical: responsiveHeight(3),
        paddingHorizontal: responsiveWidth(3),
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
        gap: responsiveWidth(1),
    },
    radioButtonAreaWrapper: {
        marginTop: responsiveHeight(2),
        display: 'flex',
        flexDirection: 'column',
        gap: responsiveHeight(3),
    },
    buttonText: {
        fontFamily: 'Audrey-Medium',
        color: getTextPrimaryColor(THEME.DARK),
        fontSize: responsiveFontSize(3),
    },
    buttonWrapper: {
        marginTop: responsiveHeight(3),
    },
    offerWrapper: {
        paddingHorizontal: responsiveWidth(3),
        paddingVertical: responsiveHeight(2),
        display: 'flex',
        gap: responsiveHeight(0.5),
    },
    gemsAmountText: {
        fontFamily: 'Audrey-Bold',
        color: getTextPrimaryColor(THEME.DARK),
        fontSize: responsiveFontSize(2.5),
    }
})
