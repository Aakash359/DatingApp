import React from "react";
import { StyleSheet, View, TouchableOpacity, TextInput, NativeSyntheticEvent, TextInputContentSizeChangeEventData, ImageBackground, Keyboard } from "react-native";
import { CameraIcon, GiftIcon, LoveStickerIcon, MicrophoneIcon, RightArrow } from "../../../../../assets";
import { responsiveFontSize, responsiveScreenHeight, responsiveScreenWidth } from "react-native-responsive-dimensions";
import { getPlaceholderTextColor, getTextPrimaryColor, THEME, useKeyboardOffset } from "../../../../../utils";
import Animated, { useSharedValue, withTiming, Easing } from 'react-native-reanimated';

const fontSize = responsiveFontSize(1.8);

export const ConversationFooter = () => {
    const [height, setHeight] = React.useState(40);
    const [message, setMessage] = React.useState('');
    const inputWidth = useSharedValue(responsiveScreenWidth(60));
    const inputMarginLeft = useSharedValue(responsiveScreenWidth(4));
    const cameraIconWidth = useSharedValue(25);
    const iconSize = useSharedValue(1);
    const animatedSendIconSize = useSharedValue(0);
    const keyboardOffset = useKeyboardOffset();
    const [isSendIconVisible, setIsSendIconVisible] = React.useState(false);

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
                            <TouchableOpacity>
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
            </View>
        </ImageBackground>

    )
}

const styles = StyleSheet.create({
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
        height: responsiveScreenHeight(10)
    },
});