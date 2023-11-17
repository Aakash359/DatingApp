import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from "react-native-responsive-dimensions";
import { LeftArrow } from "../assets";
import { getRadioGroupBackgroundColor, getTextButtonColor, THEME } from "../utils";

interface Props {
    title: string;
    onPress: () => void;
    height?: number;
}

export const ClickableArea: React.FC<Props> = (props) => {
    return (
        <TouchableOpacity onPress={props.onPress} style={[styles.header, {
            height: props.height ? props.height : responsiveScreenHeight(7)
        }]}>
            <Text style={styles.titleText}>{props.title}</Text>
            <View style={styles.arrowStyle}>
                <LeftArrow width={20} height={20} />
            </View>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: responsiveScreenWidth(5),
        // paddingVertical: responsiveScreenHeight(2),
        backgroundColor: getRadioGroupBackgroundColor(THEME.DARK),
        borderRadius: 8
    },
    titleText: {
        fontFamily: 'RedHatDisplay-Regular',
        color: getTextButtonColor(THEME.DARK),
        fontSize: responsiveScreenFontSize(2.25),
    },
    arrowStyle: {
        transform: [{ rotateZ: '180deg' }],
    }
});