import React from "react";
import { StyleSheet, View, TouchableOpacity, TextInput, NativeSyntheticEvent, TextInputContentSizeChangeEventData, ImageBackground, KeyboardAvoidingView, Platform, Text, ScrollView } from "react-native";
import { CameraIcon, FAQMinusIcon, FAQPlusIcon, GiftIcon, LocationIcon, LoveStickerIcon, MicrophoneIcon, RightArrow } from "../../../../../assets";
import { responsiveFontSize, responsiveHeight, responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth, responsiveWidth } from "react-native-responsive-dimensions";
import { getBorderPrimaryColor, getPlaceholderTextColor, getTextButtonColor, getTextPrimaryColor, THEME, useAppDispatch, useAppSelector } from "../../../../../utils";
import Animated, { useSharedValue, withTiming, Easing, useAnimatedStyle } from 'react-native-reanimated';
import Modal from "react-native-modal/dist/modal";
import { LikesModal } from "../../../likes";
import { Button, Input, RadioButtonArea, SearchInput, SelectableGift } from "../../../../../components";
import { ConversationFooterModalPage, setConversationFooterModalPage, setConversationFooterModalVisibility } from "../../../../../redux";
import { useFocusEffect } from "@react-navigation/native";
import { DateLocation } from "../../../../../components/dateLocation.component";

const fontSize = responsiveFontSize(1.8);


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

const dateTypes = [
    {
        id: '1',
        text: 'Dinner date'
    },
    {
        id: '2',
        text: 'Movie date'
    },
    {
        id: '3',
        text: 'Coffee date'
    },
    {
        id: '4',
        text: 'Road trip date'
    }
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
    const dispatch = useAppDispatch();
    const { conversationFooter: { isModalVisible, modalPage } } = useAppSelector(state => state.ui)
    // const [isModalVisible, setIsModalVisible] = React.useState(false);
    // const [modalPage, setModalPage] = React.useState<ModalPage>();
    const [giftOptionsSelectedId, setGiftOptionsSelectedId] = React.useState('');
    const [selectedGiftId, setSelectedGiftId] = React.useState('');
    const [dateTypeSelectedId, setDateTypeSelectedId] = React.useState('');


    const [height, setHeight] = React.useState(40);
    const [message, setMessage] = React.useState('');
    const inputWidth = useSharedValue(responsiveScreenWidth(60));
    const inputMarginLeft = useSharedValue(responsiveScreenWidth(4));
    const cameraIconWidth = useSharedValue(25);
    const iconSize = useSharedValue(1);
    const animatedSendIconSize = useSharedValue(0);
    const [isSendIconVisible, setIsSendIconVisible] = React.useState(false);
    const [giftQty, setGiftQty] = React.useState(1);
    const [modalKey, setModalKey] = React.useState(0);
    const [dateLocationText, setDateLocationText] = React.useState('');

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

    const handleSelectLocationPress = () => {
        dispatch(
            setConversationFooterModalPage(ConversationFooterModalPage.SELECT_LOCATION_SCREEN)
        )
    }

    const handleDateLocationPress = () => {
        dispatch(
            setConversationFooterModalPage(ConversationFooterModalPage.ASK_FOR_DATE_SCREEN)
        )
    }

    const dateLocations = [
        {
            id: '1',
            heading: 'The coffee house',
            description: 'Coffee Shop',
            distance: '0.2 km',
            imageSource: require('../../../../../assets/images/home/likes/avatar2.png'),
            onPress: handleDateLocationPress
        },
        {
            id: '2',
            heading: 'Hard rock cafe',
            description: 'Restaurant',
            distance: '3 km',
            imageSource: require('../../../../../assets/images/home/likes/avatar2.png'),
            onPress: handleDateLocationPress
        },
        {
            id: '3',
            heading: 'The Bar',
            description: 'Bar',
            distance: '7 km',
            imageSource: require('../../../../../assets/images/home/likes/avatar2.png'),
            onPress: handleDateLocationPress
        },
        {
            id: '4',
            heading: 'The coffee house',
            description: 'Coffee Shop',
            distance: '0.2 km',
            imageSource: require('../../../../../assets/images/home/likes/avatar2.png'),
            onPress: handleDateLocationPress
        },
        {
            id: '5',
            heading: 'Hard rock cafe',
            description: 'Restaurant',
            distance: '3 km',
            imageSource: require('../../../../../assets/images/home/likes/avatar2.png'),
            onPress: handleDateLocationPress
        },
        {
            id: '6',
            heading: 'The Bar',
            description: 'Bar',
            distance: '7 km',
            imageSource: require('../../../../../assets/images/home/likes/avatar2.png'),
            onPress: handleDateLocationPress
        },
    ]

    const renderModalPage = () => {
        switch (modalPage) {
            case ConversationFooterModalPage.GIFT_OPTIONS_SCREEN:
                return <LikesModal
                    isNoHeader
                    nextButtonText='NEXT'
                    onNextPress={() => {
                        if (!giftOptionsSelectedId) return;
                        dispatch(setConversationFooterModalPage(ConversationFooterModalPage.GIFT_INVENTORY_SCREEN))
                    }}
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
            case ConversationFooterModalPage.GIFT_INVENTORY_SCREEN:
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
                                onPress={() => {
                                    // dispatch(setConversationFooterModalVisibility(false))
                                    if (giftOptionsSelectedId === '1') {
                                        dispatch(
                                            setConversationFooterModalPage(ConversationFooterModalPage.CONFIRM_GIFT_SCREEN)
                                        )
                                    }
                                    if (giftOptionsSelectedId === '2') {
                                        dispatch(
                                            setConversationFooterModalPage(ConversationFooterModalPage.ASK_FOR_DATE_SCREEN)
                                        )
                                    }
                                }}
                                imageSource={require('../../../../../assets/gradients/splash.png')}
                                variant={'primary'}
                                height={responsiveScreenHeight(8)}
                            >
                                <Text style={styles.headerText}>SEND</Text>
                            </Button>
                        </Animated.View>
                    </View>
                </LikesModal>
            case ConversationFooterModalPage.CONFIRM_GIFT_SCREEN:
                return <LikesModal
                    modalPrimaryImage={require('../../../../../assets/images/common/roseGift.png')}
                    modalDescription='will be deducted from your account are you sure?'
                    nextButtonText='CONFIRM'
                    onNextPress={() => dispatch(
                        setConversationFooterModalPage(ConversationFooterModalPage.GIFT_SENT_SCREEN)
                    )}
                    isNoHeader={true}
                    modalImageText='5'
                />
            case ConversationFooterModalPage.ASK_FOR_DATE_SCREEN:
                return <LikesModal
                    modalHeader='ASK FOR A DATE'
                    nextButtonText='SEND'
                    onNextPress={() => {
                        // dispatch(setConversationFooterModalVisibility(false))
                        dispatch(
                            setConversationFooterModalPage(ConversationFooterModalPage.GIFT_DEDUCTION_SCREEN)
                        )
                    }}
                    onBackPress={() => console.log('e')}
                >
                    <View style={styles.reportInputWrapper}>
                        <TouchableOpacity onPress={handleSelectLocationPress}>
                            <Input
                                value={''}
                                setValue={() => { }}
                                placeholder='Select Location'
                                fontFamily='RedHatDisplay-Regular'
                                fontSize={responsiveFontSize(2)}
                                icon={<LocationIcon />}
                                isInputDisabled
                            />
                        </TouchableOpacity>
                        <Text style={styles.dateTypeText}>Select date type</Text>
                        {
                            dateTypes.map((type) => {
                                return (
                                    <View
                                        key={type.id}
                                        style={styles.radioButtonAreaWrapper}
                                    >
                                        <RadioButtonArea
                                            id={type.id}
                                            selectedId={dateTypeSelectedId}
                                            setSelectedId={setDateTypeSelectedId}
                                            isBestValue={false}
                                            height={responsiveScreenHeight(5.5)}
                                            isRadioHidden
                                        >
                                            <Text style={[styles.radioText, {
                                                fontSize: responsiveScreenFontSize(2)
                                            }]}>{type.text}</Text>
                                        </RadioButtonArea>
                                    </View>
                                )
                            })
                        }
                    </View>
                </LikesModal>
            case ConversationFooterModalPage.SELECT_LOCATION_SCREEN:
                return <LikesModal
                    isNoFooter
                    isNoHeader
                    onNextPress={() => {
                        dispatch(setConversationFooterModalVisibility(false))
                    }}
                    onBackPress={() => console.log('e')}
                >
                    <View style={styles.reportInputWrapper}>
                        <TouchableOpacity onPress={handleSelectLocationPress}>
                            <SearchInput
                                searchText={dateLocationText}
                                setSearchText={setDateLocationText}
                                placeholder='Search for a date location'
                            // fontFamily='RedHatDisplay-Regular'
                            // fontSize={responsiveFontSize(2)}
                            />
                        </TouchableOpacity>
                        <Text style={styles.dateTypeText}>Date locations around you</Text>
                        <ScrollView style={styles.dateLocationsScrollViewStyles}>
                            {
                                dateLocations.map((location) => {
                                    return (
                                        <DateLocation
                                            key={location.id}
                                            heading={location.heading}
                                            description={location.description}
                                            distance={location.distance}
                                            imageSource={location.imageSource}
                                            onPress={location.onPress}
                                        />
                                    )
                                })
                            }
                        </ScrollView>
                    </View>
                </LikesModal>
            case ConversationFooterModalPage.GIFT_DEDUCTION_SCREEN:
                return <LikesModal
                    modalPrimaryImage={require('../../../../../assets/images/common/roseGift.png')}
                    modalDescription='will be deducted from your account'
                    nextButtonText='CONFIRM'
                    onNextPress={() => dispatch(
                        setConversationFooterModalPage(ConversationFooterModalPage.DATE_PROPOSAL_SENT_SCREEN)
                    )}
                    isNoHeader={true}
                    modalImageText='5'
                />
            case ConversationFooterModalPage.DATE_PROPOSAL_SENT_SCREEN:
                return <LikesModal
                    modalPrimaryImage={require('../../../../../assets/images/home/likes/successCheckmark.png')}
                    modalHeader='DATE PROPOSAL SENT'
                    modalDescription='Your gift and date proposal sent to Alex Linderson'
                    nextButtonText='THANKS'
                    onNextPress={() => {
                        dispatch(setConversationFooterModalVisibility(false))
                    }}
                />
            case ConversationFooterModalPage.GIFT_SENT_SCREEN:
                return <LikesModal
                    modalPrimaryImage={require('../../../../../assets/images/home/likes/successCheckmark.png')}
                    modalHeader='GIFT SENT'
                    modalDescription='Your gift has been sent to Alex Linderson'
                    nextButtonText='THANKS'
                    onNextPress={() => {
                        dispatch(setConversationFooterModalVisibility(false))
                    }}
                />
        }
    }

    const handleGiftPress = () => {
        dispatch(setConversationFooterModalVisibility(true))
        dispatch(setConversationFooterModalPage(ConversationFooterModalPage.GIFT_OPTIONS_SCREEN))
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

    useFocusEffect(
        React.useCallback(() => {
            // to solve the bug of modal not showing when navigating back from other screens
            setModalKey(prev => prev + 1)
        }, [])
    )

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
                    key={modalKey}
                    useNativeDriverForBackdrop={true}
                    style={styles.modal}
                    onBackdropPress={() => {
                        dispatch(setConversationFooterModalVisibility(false))
                    }}
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
    },
    reportInputWrapper: {
        width: responsiveScreenWidth(90),
        display: 'flex',
        gap: responsiveScreenHeight(1.5)
    },
    reportDescText: {
        color: getTextPrimaryColor(THEME.DARK),
        fontFamily: 'RedHatDisplay-Regular',
        marginTop: responsiveScreenHeight(1)
    },
    dateTypeText: {
        color: getTextPrimaryColor(THEME.DARK),
        fontFamily: 'RedHatDisplay-Bold',
        fontSize: responsiveScreenFontSize(2)
    },
    dateLocationsScrollViewStyles: {
        maxHeight: responsiveScreenHeight(50),
        display: 'flex',
    }
});