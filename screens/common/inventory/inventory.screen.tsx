import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FAQMinusIcon, FAQPlusIcon, LeftArrow } from "../../../assets";
import { responsiveScreenHeight, responsiveScreenWidth, responsiveWidth, responsiveFontSize, responsiveScreenFontSize } from "react-native-responsive-dimensions";
import { getBorderPrimaryColor, getTextPrimaryColor, THEME } from "../../../utils";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../App";
import { useNavigation } from "@react-navigation/native";
import { Layout } from "../../../layout";
import { Button, SelectableGift } from "../../../components";
import Animated, { useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

type InventoryScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'InventoryScreen'
>;

const giftItems = [
    { id: '1', imageSource: require('../../../assets/images/common/roseGift.png'), qty: 3 },
    { id: '2', imageSource: require('../../../assets/images/common/roseGift.png'), qty: 4 },
    { id: '3', imageSource: require('../../../assets/images/common/roseGift.png'), qty: 1 },
    { id: '4', imageSource: require('../../../assets/images/common/roseGift.png'), qty: 7 },
    { id: '5', imageSource: require('../../../assets/images/common/roseGift.png'), qty: 0 },
    { id: '6', imageSource: require('../../../assets/images/common/roseGift.png'), qty: 2 },
    { id: '7', imageSource: require('../../../assets/images/common/roseGift.png'), qty: 2 },
    { id: '8', imageSource: require('../../../assets/images/common/roseGift.png'), qty: 2 },
    { id: '9', imageSource: require('../../../assets/images/common/roseGift.png'), qty: 2 },
    { id: '10', imageSource: require('../../../assets/images/common/roseGift.png'), qty: 2 },
    // ... you can add more items here
];

export const InventoryScreen = () => {

    const navigation = useNavigation<InventoryScreenNavigationProp>();
    const [selectedGiftId, setSelectedGiftId] = React.useState('');
    const [giftQty, setGiftQty] = React.useState(1);

    const quantityControlWidth = useSharedValue(0);
    const buttonWidth = useSharedValue(responsiveScreenWidth(90));
    const quantityControlPaddingHorizontal = useSharedValue(responsiveScreenWidth(0))

    const quantityControlAnimatedStyle = useAnimatedStyle(() => {
        return {
            width: quantityControlWidth.value,
            paddingHorizontal: quantityControlPaddingHorizontal.value
            // include other styles that you want to apply to the animated component
        };
    });

    const buttonWidthAnimatedStyle = useAnimatedStyle(() => {
        return {
            width: buttonWidth.value
        }
    })

    const animateQuantityControls = (selected: boolean) => {
        // This assignment is correct; it triggers an animation on the UI thread.
        quantityControlWidth.value = selected ? withTiming(responsiveScreenWidth(30)) : withTiming(responsiveScreenWidth(0));
        quantityControlPaddingHorizontal.value = selected ? withTiming(responsiveScreenWidth(3)) : withTiming(responsiveScreenWidth(0))
    };

    const animateButtonWidth = (selected: boolean) => {
        buttonWidth.value = selected ? withTiming(responsiveScreenWidth(60)) : withTiming(responsiveScreenWidth(90))
    }

    const handleReduceGift = () => {
        if (giftQty === 1) return;
        setGiftQty(prev => prev - 1)
    }

    const handleIncreaseGift = () => {
        const currentGift = giftItems.filter((item) => item.id === selectedGiftId)
        if (giftQty === currentGift[0].qty) return;
        setGiftQty(prev => prev + 1)
    }

    React.useEffect(() => {
        animateQuantityControls(!!selectedGiftId);
        animateButtonWidth(!!selectedGiftId)
        setGiftQty(1);
    }, [selectedGiftId]);

    return (
        <Layout>
            <View style={styles.mainWrapper}>
                {/* header section */}
                <View style={styles.headerWrapper}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <LeftArrow width={20} height={20} />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>INVENTORY</Text>
                </View>
                <ScrollView
                    style={styles.selectableGiftWrapperStyle}
                    contentContainerStyle={styles.selectableGiftWrapper}
                >
                    {giftItems.map((item) => (
                        <SelectableGift
                            key={item.id}
                            id={item.id}
                            selectedId={selectedGiftId}
                            imageSource={item.imageSource}
                            setSelectedId={setSelectedGiftId}
                            isInventory
                            qty={item.qty}
                            isRedeeming
                        // giftItemWidth={responsiveScreenWidth(40)}
                        />
                    ))}
                </ScrollView>
                <View style={styles.mainBtnWrapper}>
                    <Animated.View style={[styles.qualityControlWrapper, quantityControlAnimatedStyle]}>
                        <TouchableOpacity onPress={handleReduceGift}>
                            <FAQMinusIcon />
                        </TouchableOpacity>
                        <Text style={styles.qtyText}>{giftQty}</Text>
                        <TouchableOpacity onPress={handleIncreaseGift}>
                            <FAQPlusIcon />
                        </TouchableOpacity>
                    </Animated.View>
                    <Animated.View style={[buttonWidthAnimatedStyle, styles.buttonWrapper]}>
                        <Button
                            onPress={() => {
                                // dispatch(setConversationFooterModalVisibility(false))

                            }}
                            imageSource={require('../../../assets/gradients/splash.png')}
                            variant={'primary'}
                            height={responsiveScreenHeight(8)}
                        >
                            <Text style={styles.headerText}>REDEEM</Text>
                        </Button>
                    </Animated.View>
                </View>
            </View>
        </Layout>
    )
};

const styles = StyleSheet.create({
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
    selectableGiftWrapperStyle: {
        width: responsiveScreenWidth(100),
        height: responsiveScreenHeight(55),
        maxHeight: responsiveScreenHeight(60)

    },
    selectableGiftWrapper: {
        marginTop: responsiveScreenHeight(2),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: responsiveScreenWidth(5),
        flexWrap: 'wrap',
        paddingBottom: responsiveScreenHeight(2),
    },
    mainBtnWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
    },
    qualityControlWrapper: {
        display: 'flex',
        flexDirection: 'row',
        height: responsiveScreenHeight(8),
        // width: responsiveScreenWidth(20),
        marginTop: responsiveScreenHeight(3),
        backgroundColor: 'white',
        alignSelf: 'center',
        alignItems: 'center',
        justifyContent: 'space-between',
        // paddingHorizontal: responsiveScreenWidth(3)
    },
    qtyText: {
        fontSize: responsiveScreenFontSize(2.75),
        color: getBorderPrimaryColor(THEME.DARK),
        fontFamily: 'Audrey-Bold'
    },
    buttonWrapper: {
        // width: responsiveScreenWidth(90),
        marginTop: responsiveScreenHeight(3),
    },
});