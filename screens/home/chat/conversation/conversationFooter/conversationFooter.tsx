import React from "react";
import { StyleSheet, Animated, View, TouchableOpacity, TextInput, NativeSyntheticEvent, TextInputContentSizeChangeEventData } from "react-native";
import { CameraIcon, GiftIcon, LoveStickerIcon, MicrophoneIcon, RightArrow } from "../../../../../assets";
import { responsiveFontSize, responsiveScreenHeight, responsiveScreenWidth } from "react-native-responsive-dimensions";
import { getPlaceholderTextColor, getTextPrimaryColor, THEME } from "../../../../../utils";

const fontSize = responsiveFontSize(1.8);
const animationDuration = 300;

export const ConversationFooter = () => {
    const [height, setHeight] = React.useState(40);
    const [message, setMessage] = React.useState('');
    const animatedIconSize = React.useRef(new Animated.Value(0)).current;
    const animatedInputWidth = React.useRef(new Animated.Value(60)).current;
    const animatedCameraIconWidth = React.useRef(new Animated.Value(25)).current;
    const animatedIconMargin = React.useRef(new Animated.Value(4)).current;
    const [isSendIconVisible, setIsSendIconVisible] = React.useState(false);
    const animateSendIconSize = React.useRef(new Animated.Value(0)).current;

    const animateIcons = () => {
        if (message) {
            Animated.timing(animatedIconSize, {
                toValue: 0,
                duration: animationDuration,
                useNativeDriver: false,
            }).start();
            Animated.timing(animateSendIconSize, {
                toValue: 1.3,
                duration: animationDuration,
                useNativeDriver: false,
            }).start();
            Animated.timing(animatedInputWidth, {
                toValue: responsiveScreenWidth(84),
                duration: animationDuration,
                useNativeDriver: false,
            }).start();
            Animated.timing(animatedCameraIconWidth, {
                toValue: 0,
                duration: animationDuration,
                useNativeDriver: false,
            }).start();
            Animated.timing(animatedIconMargin, {
                toValue: 0,
                duration: animationDuration,
                useNativeDriver: false,
            }).start();

        } else if (message === '') {
            Animated.timing(animatedIconMargin, {
                toValue: responsiveScreenWidth(4),
                duration: animationDuration,
                useNativeDriver: false,
            }).start();
            Animated.timing(animateSendIconSize, {
                toValue: 0,
                duration: animationDuration,
                useNativeDriver: false,
            }).start();
            Animated.timing(animatedInputWidth, {
                toValue: responsiveScreenWidth(60),
                duration: animationDuration,
                useNativeDriver: false,
            }).start();
            Animated.timing(animatedIconSize, {
                toValue: 1,
                duration: animationDuration,
                useNativeDriver: false,
            }).start();
            Animated.timing(animatedCameraIconWidth, {
                toValue: 25,
                duration: animationDuration,
                useNativeDriver: false,
            }).start();

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
        <View style={[styles.footerMainWrapper, {
            minHeight: height,
        }]}>
            <Animated.View style={{ width: animatedCameraIconWidth, transform: [{ scale: animatedIconSize }] }}>
                <TouchableOpacity>
                    <CameraIcon width={25} height={25} />
                </TouchableOpacity>
            </Animated.View>
            <Animated.View style={[styles.textInputWrapper, { width: animatedInputWidth, marginLeft: animatedIconMargin }]}>
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
                <Animated.View style={{ transform: [{ scale: animateSendIconSize }] }}>
                    {isSendIconVisible &&
                        <TouchableOpacity>
                            <RightArrow />
                        </TouchableOpacity>
                    }
                </Animated.View>
                <Animated.View style={{ transform: [{ scale: animatedIconSize }], marginRight: responsiveScreenWidth(2) }}>
                    <TouchableOpacity>
                        <GiftIcon width={25} height={25} />
                    </TouchableOpacity>
                </Animated.View>
                <Animated.View style={{ transform: [{ scale: animatedIconSize }], marginLeft: responsiveScreenWidth(2) }}>
                    <TouchableOpacity>
                        <MicrophoneIcon width={25} height={25} />
                    </TouchableOpacity>
                </Animated.View>
            </View>
        </View>
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
    }
});