import React from "react";
import { StyleSheet, View, TouchableOpacity, TextInput, NativeSyntheticEvent, TextInputContentSizeChangeEventData, ImageBackground, KeyboardAvoidingView, Platform, Text, ScrollView } from "react-native";
import { CameraIcon, FAQMinusIcon, FAQPlusIcon, GiftIcon, LoveStickerIcon, MicrophoneIcon, RightArrow } from "../../../../../assets";
import { responsiveFontSize, responsiveHeight, responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth, responsiveWidth } from "react-native-responsive-dimensions";
import { getBorderPrimaryColor, getPlaceholderTextColor, getTextButtonColor, getTextPrimaryColor, THEME } from "../../../../../utils";
import Animated, { useSharedValue, withTiming, Easing, useAnimatedStyle } from 'react-native-reanimated';
import Modal from "react-native-modal/dist/modal";
import { LikesModal } from "../../../likes";
import { Button, RadioButtonArea, SelectableGift } from "../../../../../components";

const fontSize = responsiveFontSize(1.8);

enum ModalPage {
    GIFT_OPTIONS_SCREEN = 'GIFT_OPTIONS_SCREEN',
    GIFT_INVENTORY_SCREEN = 'GIFT_INVENTORY_SCREEN'
}

const giftOptions = [
    {
        id: '1',
        text: 'Send Gift'
    },
    {
        id: '2',
        text: 'Send Gift & Ask for a date'
    },
]

const giftItems = [
    { id: '1', imageSource: require('../../../../../assets/images/common/roseGift.png'), qty: 3 },
    { id: '2', imageSource: require('../../../../../assets/images/common/roseGift.png'), qty: 4 },
    { id: '3', imageSource: require('../../../../../assets/images/common/roseGift.png'), qty: 1 },
    { id: '4', imageSource: require('../../../../../assets/images/common/roseGift.png'), qty: 7 },
    { id: '5', imageSource: require('../../../../../assets/images/common/roseGift.png'), qty: 0 },
    { id: '6', imageSource: require('../../../../../assets/images/common/roseGift.png'), qty: 2 },
    // ... you can add more items here
];

export const ConversationFooter = () => {
    const [isModalVisible, setIsModalVisible] = React.useState(false);
    const [modalPage, setModalPage] = React.useState<ModalPage>();
    const [giftOptionsSelectedId, setGiftOptionsSelectedId] = React.useState('');
    const [selectedGiftId, setSelectedGiftId] = React.useState('');


    const [height, setHeight] = React.useState(40);
    const [message, setMessage] = React.useState('');
    const inputWidth = useSharedValue(responsiveScreenWidth(60));
    const inputMarginLeft = useSharedValue(responsiveScreenWidth(4));
    const cameraIconWidth = useSharedValue(25);
    const iconSize = useSharedValue(1);
    const animatedSendIconSize = useSharedValue(0);
    const [isSendIconVisible, setIsSendIconVisible] = React.useState(false);
    const [giftQty, setGiftQty] = React.useState(1)
    const animateIcons = () => {
        if (message) {
            inputWidth.value = withTiming(responsiveScreenWidth(85), { duration: 300, easing: Easing.linear });
            inputMarginLeft.value = withTiming(responsiveScreenWidth(0), { duration: 300, easing: Easing.linear });
            cameraIconWidth.value = withTiming(0, { duration: 300, easing: Easing.linear });
            iconSize.value = withTiming(0, { duration: 300, easing: Easing.linear });
            animatedSendIconSize.value = withTiming(1.4, { duration: 300, easing: Easing.linear });

        } else if (message === '') {
            inputWidth.value = withTiming(responsiveScreenWidth(60), { duration: 300, easing: Easing.linear });
            inputMarginLeft.value = withTiming(responsiveScreenWidth(4), { duration: 300, easing: Easing.linear });
            cameraIconWidth.value = withTiming(25, { duration: 300, easing: Easing.linear });
            iconSize.value = withTiming(1, { duration: 300, easing: Easing.linear });
            animatedSendIconSize.value = withTiming(0, { duration: 300, easing: Easing.linear });
        }
    };

    const onContentSizeChange = (event: NativeSyntheticEvent<TextInputContentSizeChangeEventData>) => {
        const lineHeight = fontSize * 1.5;
        const newHeight = event.nativeEvent.contentSize.height;
        if (newHeight <= 4.5 * lineHeight) {
            setHeight(newHeight);
        }
    };

    const quantityControlWidth = useSharedValue(0);
    const quantityControlPaddingHorizontal = useSharedValue(responsiveScreenWidth(0))
    const buttonWidth = useSharedValue(responsiveScreenWidth(90));

    // This function will be called to start the animation
    const animateQuantityControls = (selected: boolean) => {
        // This assignment is correct; it triggers an animation on the UI thread.
        quantityControlWidth.value = selected ? withTiming(responsiveScreenWidth(30)) : withTiming(responsiveScreenWidth(0));
        quantityControlPaddingHorizontal.value = selected ? withTiming(responsiveScreenWidth(3)) : withTiming(responsiveScreenWidth(0))
    };

    const animateButtonWidth = (selected: boolean) => {
        buttonWidth.value = selected ? withTiming(responsiveScreenWidth(60)) : withTiming(responsiveScreenWidth(90))
    }

    // Side-effect to start the animation when selectedGiftId changes
    React.useEffect(() => {
        animateQuantityControls(!!selectedGiftId);
        animateButtonWidth(!!selectedGiftId)
        setGiftQty(1);
    }, [selectedGiftId]);

    // This hook creates an animated style that will be applied to the component.
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

    const handleReduceGift = () => {
        if (giftQty === 1) return;
        setGiftQty(prev => prev - 1)
    }

    const handleIncreaseGift = () => {
        const currentGift = giftItems.filter((item) => item.id === selectedGiftId)
        if (giftQty === currentGift[0].qty) return;
            setGiftQty(prev => prev + 1)
    }

    const renderModalPage = () => {
        switch (modalPage) {
            case ModalPage.GIFT_OPTIONS_SCREEN:
                return <LikesModal
                    isNoHeader
                    nextButtonText='NEXT'
                    onNextPress={() => {
                        setModalPage(ModalPage.GIFT_INVENTORY_SCREEN)
                    }}
                    onBackPress={() => console.log('e')}
                >
                    {giftOptions.map((options, index) => {
                        return (
                            <View
                                key={index + options.id}
                                style={styles.radioButtonAreaWrapper}
                            >
                                <RadioButtonArea
                                    id={options.id}
                                    selectedId={giftOptionsSelectedId}
                                    setSelectedId={setGiftOptionsSelectedId}
                                    isBestValue={false}
                                    height={responsiveScreenHeight(7)}
                                    isRadioHidden
                                >
                                    <Text style={styles.radioText}>{options.text}</Text>
                                </RadioButtonArea>
                            </View>

                        )
                    })}
                </LikesModal>
            case ModalPage.GIFT_INVENTORY_SCREEN:
                return <LikesModal
                    modalHeader='SELECT GIFT'
                    isNoFooter
                >
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
                                onPress={() => setIsModalVisible(false)}
                                imageSource={require('../../../../../assets/gradients/splash.png')}
                                variant={'primary'}
                                height={responsiveScreenHeight(8)}
                            >
                                <Text style={styles.headerText}>SEND</Text>
                            </Button>
                        </Animated.View>
                    </View>
                </LikesModal>
        }
    }

    const handleGiftPress = () => {
        setIsModalVisible(true);
        setModalPage(ModalPage.GIFT_OPTIONS_SCREEN)
    }

    React.useEffect(() => {
        animateIcons();
        if (message !== '') {
            setIsSendIconVisible(true);
        }
        if (message === '') {
            setIsSendIconVisible(false);
        }
    }, [message]);

    return (
        <ImageBackground
            resizeMode='cover'
            source={require('../../../../../assets/gradients/gradient-bg.png')}
            style={[styles.image, {
                height: responsiveScreenHeight(4) + height,
                // paddingBottom: Math.max(40, height)
                // paddingBottom: 150,
                // bottom: Keyboard.isVisible() ? keyboardOffset : keyboardOffset - responsiveScreenHeight(5)
            }]}
        >
            <View style={[styles.footerMainWrapper, {
                minHeight: height,
            }]}>
                <Animated.View style={{ width: cameraIconWidth, transform: [{ scale: iconSize }] }}>
                    <TouchableOpacity>
                        <CameraIcon width={25} height={25} />
                    </TouchableOpacity>
                </Animated.View>
                <Animated.View style={[styles.textInputWrapper, { width: inputWidth, marginLeft: inputMarginLeft }]}>
                    <TextInput
                        placeholder="Write your message"
                        style={[styles.textInput, {
                            height: Math.max(40, height)
                        }]}
                        placeholderTextColor={getPlaceholderTextColor(THEME.DARK)}
                        multiline={true}
                        numberOfLines={4}
                        onContentSizeChange={onContentSizeChange}
                        value={message}
                        onChange={(e) => setMessage(e.nativeEvent.text)}
                    />
                    <View style={styles.loveStickerWrapper}>
                        <TouchableOpacity>
                            <LoveStickerIcon width={25} height={25} />
                        </TouchableOpacity>
                    </View>
                </Animated.View>
                <View style={styles.endIconWrapper}>
                    {isSendIconVisible
                        ?
                        <Animated.View style={{ transform: [{ scale: animatedSendIconSize }], marginRight: responsiveScreenWidth(2) }}>
                            <TouchableOpacity>
                                <RightArrow />
                            </TouchableOpacity>
                        </Animated.View>
                        :
                        <Animated.View style={{ transform: [{ scale: iconSize }], marginRight: responsiveScreenWidth(2) }}>
                            <TouchableOpacity onPress={handleGiftPress}>
                                <GiftIcon width={25} height={25} />
                            </TouchableOpacity>
                        </Animated.View>
                    }
                    <Animated.View style={{ transform: [{ scale: iconSize }], marginLeft: responsiveScreenWidth(2) }}>
                        <TouchableOpacity>
                            <MicrophoneIcon width={25} height={25} />
                        </TouchableOpacity>
                    </Animated.View>
                </View>
                <Modal
                    useNativeDriverForBackdrop={true}
                    style={styles.modal}
                    onBackdropPress={() => setIsModalVisible(false)}
                    isVisible={isModalVisible}>
                    <KeyboardAvoidingView
                        behavior={Platform.OS === 'ios' ? "padding" : "height"}
                    >
                        {renderModalPage()}
                    </KeyboardAvoidingView>
                </Modal>
            </View>
        </ImageBackground>

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
    footerMainWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        paddingHorizontal: responsiveScreenWidth(6),
        paddingVertical: responsiveScreenHeight(2),
    },
    textInputWrapper: {
        position: "relative",
        marginLeft: responsiveScreenWidth(4),
        width: responsiveScreenWidth(60),
    },
    textInput: {
        backgroundColor: '#292D34',
        paddingLeft: responsiveScreenWidth(3),
        color: getTextPrimaryColor(THEME.DARK),
        borderRadius: 8,
        paddingRight: responsiveScreenWidth(8),
        fontSize: fontSize,
    },
    loveStickerWrapper: {
        position: "absolute",
        right: 10,
        bottom: responsiveScreenHeight(2.25) - 12.5,
    },
    endIconWrapper: {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        marginLeft: responsiveScreenWidth(4),
    },
    image: {
        width: responsiveScreenWidth(100),
    },
    radioButtonAreaWrapper: {
        width: responsiveScreenWidth(90),
        // marginBottom: responsiveScreenHeight(1)
    },
    radioText: {
        fontFamily: 'RedHatDisplay-Regular',
        color: getTextButtonColor(THEME.DARK),
        marginHorizontal: responsiveScreenWidth(5),
        fontSize: responsiveScreenFontSize(2.25)
    },
    selectableGiftWrapperStyle: {
        width: responsiveScreenWidth(100),
        height: responsiveHeight(55)
    },
    selectableGiftWrapper: {
        marginTop: responsiveHeight(2),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: responsiveWidth(5),
        flexWrap: 'wrap',
        paddingBottom: responsiveHeight(2),
    },
    buttonWrapper: {
        marginTop: responsiveScreenHeight(3),
        // width: responsiveScreenHeight(40),
    },
    headerText: {
        fontSize: responsiveFontSize(3),
        fontFamily: 'Audrey-Medium',
        color: getTextPrimaryColor(THEME.DARK),
    },
    mainBtnWrapper: {
        display: 'flex',
        flexDirection: 'row'
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
    }
});