import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { responsiveHeight, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import { COLORS, getRadioGroupBackgroundColor, THEME } from '../utils';
import { RadioCircle, RadioCircleFilled } from '../assets';

interface Props {
    selectedId: string;
    setSelectedId: React.Dispatch<React.SetStateAction<string>>;
    id: string;
    height?: number;
    isBestValue?: boolean;
    children: React.ReactNode | JSX.Element;
}

export const RadioButtonArea = (props: Props) => {

    const handleRadioButtonAreaPress = () => {
        props.setSelectedId(props.id);
    };

    const isCurrentRadioBtnSelected = props.id === props.selectedId;

    return (
        <TouchableOpacity onPress={handleRadioButtonAreaPress}>
            <View style={[styles.mainWrapper, {
                height: props.height ? props.height : responsiveHeight(10),
                borderColor: isCurrentRadioBtnSelected ? COLORS.BRAND_LIGHT : 'transparent',
            }]}>
                <View>
                    {props.children}
                </View>
                <View>
                    {isCurrentRadioBtnSelected ? (
                        <RadioCircleFilled />
                    ) : (
                        <RadioCircle />
                    )}
                </View>
            </View>
            {props.isBestValue ? <View style={styles.bestOfferWrapper}>
                <Text style={styles.bestOfferText}>BEST VALUE</Text>
            </View> : null}
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    mainWrapper: {
        position: 'relative',
        backgroundColor: getRadioGroupBackgroundColor(THEME.DARK),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: responsiveScreenWidth(3),
        borderRadius: 5,
        borderWidth: 1
    },
    bestOfferWrapper: {
        position: 'absolute',
        backgroundColor: COLORS.BRAND_LIGHT,
        paddingHorizontal: responsiveScreenWidth(3),
        paddingVertical: responsiveScreenHeight(0.5),
        borderRadius: 5,
        top: -responsiveScreenHeight(1.5),
        right: responsiveScreenWidth(10),
    },
    bestOfferText: {
        color: 'white',
        fontFamily: 'RedHatDisplay-Bold',
    }
})