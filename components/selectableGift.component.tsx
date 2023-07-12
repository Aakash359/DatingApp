import React from "react";
import { View, Text, StyleSheet, Image, TouchableOpacity } from "react-native";
import { COLORS, THEME, getRadioGroupBackgroundColor } from "../utils";
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from "react-native-responsive-dimensions";
import { ManifestCurrency } from "../assets";

interface Props {
    id: string;
    selectedId: string;
    imageSource: any;
    setSelectedId: React.Dispatch<React.SetStateAction<string>>;
}

export const SelectableGift: React.FC<Props> = (props) => {

    const isCurrentGiftSelected = props.id === props.selectedId;

    return (
        <TouchableOpacity onPress={() => props.setSelectedId(props.id)}>
            <View
                style={[styles.singleGiftWrapper,
                { borderColor: isCurrentGiftSelected ? COLORS.BRAND_LIGHT : 'transparent' }]}>
                <Image style={styles.giftImage} source={props.imageSource} />
                <Text style={styles.giftText}>Rose</Text>
                <View style={styles.giftPriceWrapper}>
                    <ManifestCurrency />
                    <Text style={styles.giftPriceText}>30</Text>
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
        gap: responsiveScreenHeight(1),
        backgroundColor: getRadioGroupBackgroundColor(THEME.DARK),
        height: responsiveScreenHeight(20),
        width: responsiveScreenWidth(44.5),
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
        fontSize: responsiveScreenFontSize(2.2)
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
        fontSize: responsiveScreenFontSize(2)
    }
});