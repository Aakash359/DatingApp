import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { responsiveHeight, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import { COLORS, getBrandColor, getRadioGroupBackgroundColor, THEME } from '../utils';
import { RadioCircle, RadioCircleFilled } from '../assets';
import LinearGradient from 'react-native-linear-gradient';

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
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0.5, y: 1 }}
                    colors={[getBrandColor(THEME.LIGHT), getBrandColor(THEME.DARK)]}
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: 5,
                        height: responsiveScreenHeight(3.6),
                        width: 'auto',
                        paddingHorizontal: responsiveScreenWidth(3),
                        zIndex: -1,
                    }}
                >
                    <Text style={styles.bestOfferText}>BEST VALUE</Text>
                </LinearGradient>
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