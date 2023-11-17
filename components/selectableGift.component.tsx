import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { COLORS, THEME, getRadioGroupBackgroundColor, getTextPrimaryColor, getTextSecondaryColor } from "../utils";
import { responsiveFontSize, responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from "react-native-responsive-dimensions";
import { ManifestCurrency } from "../assets";
import { Button } from "./button.component";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../App";
import { useNavigation } from "@react-navigation/native";

interface Props {
    id: string;
    selectedId: string;
    imageSource: any;
    setSelectedId: React.Dispatch<React.SetStateAction<string>>;
    giftItemWidth?: number;
    isInventory?: boolean;
    qty?: number;
    isRedeeming?: boolean;
}

type purchaseGiftsScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'PurchaseGiftsScreen'
>;

export const SelectableGift: React.FC<Props> = (props) => {
    const navigation = useNavigation<purchaseGiftsScreenNavigationProp>();
    const isCurrentGiftSelected = props.id === props.selectedId;

    const handleGiftSelect = () => {
        if (props.qty === 0) return;
        props.setSelectedId(props.id)
    }

    const getQtyText = () => {
        if (props.qty !== 0 || props.isRedeeming) return `${props.qty} left`
        return 'Out of stock'
    }

    const handleGoToShopPress = () => {
        navigation.navigate('PurchaseGiftsScreen')
    }

    return (
        <TouchableOpacity onPress={handleGiftSelect}>
            <View
                style={[styles.singleGiftWrapper,
                {
                    borderColor: isCurrentGiftSelected ? COLORS.BRAND_LIGHT : 'transparent',
                    width: props.giftItemWidth ? props.giftItemWidth : responsiveScreenWidth(44.5),
                    gap: props.qty === 0 ? responsiveScreenHeight(0.1) : responsiveScreenHeight(1),
                }
                ]}>
                <Image style={styles.giftImage} source={props.imageSource} />
                <Text style={styles.giftText}>Rose</Text>
                <View style={styles.giftPriceWrapper}>
                    {props.isInventory ?
                        <View style={styles.footerWrapper}>
                            <Text style={styles.qtyText}>{getQtyText()}</Text>
                            {props.qty === 0 && !props.isRedeeming ?
                                <View style={styles.buttonWrapper}>
                                    <Button
                                        onPress={handleGoToShopPress}
                                        imageSource={require('../assets/gradients/splash.png')}
                                        variant={'primary'}
                                        height={responsiveScreenHeight(4)}
                                    >
                                        <Text style={styles.headerText}>GO TO SHOP</Text>
                                    </Button>
                                </View>
                                : null}
                        </View>
                        :
                        <>
                            <ManifestCurrency />
                            <Text style={styles.giftPriceText}>30</Text>
                        </>
                    }
                </View>
            </View>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    singleGiftWrapper: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: getRadioGroupBackgroundColor(THEME.DARK),
        height: responsiveScreenHeight(20),
        borderRadius: 5,
        borderWidth: 2,
        borderColor: 'transparent'
    },
    giftImage: {
        width: responsiveScreenWidth(15),
        height: responsiveScreenHeight(9),
        // backgroundColor: 'red'
    },
    giftText: {
        color: 'white',
        fontFamily: 'RedHatDisplay-Regular',
        fontSize: responsiveScreenFontSize(2.2),
    },
    giftPriceWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: responsiveScreenWidth(1),
    },
    giftPriceText: {
        color: 'white',
        fontFamily: 'RedHatDisplay-Regular',
        fontSize: responsiveScreenFontSize(2),
    },
    qtyText: {
        color: getTextSecondaryColor(THEME.DARK),
        fontFamily: 'RedHatDisplay-Regular',
        fontSize: responsiveScreenFontSize(2),
        alignSelf: 'center',
    },
    buttonWrapper: {
        width: responsiveScreenWidth(40),
        marginTop: responsiveScreenHeight(0.2)
    },
    headerText: {
        fontSize: responsiveFontSize(2),
        fontFamily: 'Audrey-Medium',
        color: getTextPrimaryColor(THEME.DARK),
    },
    footerWrapper: {
        display: 'flex'
    }
});