import React, { useRef } from "react";
import { Layout } from "../../../../layout";
import { FlatList, KeyboardAvoidingView, Platform, StyleSheet, Text, View } from "react-native";
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from "react-native-responsive-dimensions";
import { ConversationHeader } from "./conversationHeader";
import { ConversationFooter } from "./conversationFooter";
import { format, isSameMinute } from 'date-fns';
import { messageData } from "../../../../constants";
import { THEME, getBrandColor, getTextPrimaryColor, getTextSecondaryColor } from "../../../../utils";
import LinearGradient from "react-native-linear-gradient";
import { useFocusEffect } from "@react-navigation/native";

export const ConversationScreen = () => {
    const isIos = Platform.OS === 'ios'
    const flatListRef = useRef<FlatList>(null);  // Reference to the FlatList
    const scrollToBottom = () => {
        flatListRef.current?.scrollToEnd({ animated: false });
    };

    useFocusEffect(
        React.useCallback(() => {
            scrollToBottom();
        }, [])
    );

    return (
        <Layout>
            <KeyboardAvoidingView style={styles.mainWrapper} behavior="padding">

                <ConversationHeader />
                <FlatList
                    ref={flatListRef}
                    style={styles.conversationBodyWrapper}
                    data={messageData}
                    keyExtractor={item => item.id.toString()}
                    onLayout={scrollToBottom}
                    onContentSizeChange={scrollToBottom}
                    renderItem={
                        ({ item, index }) => {
                            const showTime = index === messageData.length - 1 ||
                                messageData[index].isMe !== messageData[index + 1].isMe ||
                                !isSameMinute(new Date(messageData[index].createdAt), new Date(messageData[index + 1].createdAt));

                            return (
                                <View style={styles.messageContainer}>
                                    {item.isMe ?
                                        <View style={item.isMe ? styles.myMessage : styles.otherMessage}>
                                            <LinearGradient
                                                start={{ x: 0, y: 0 }}
                                                end={{ x: 1, y: 1.5 }}
                                                colors={[getBrandColor(THEME.LIGHT), getBrandColor(THEME.DARK)]}
                                                style={{
                                                    borderBottomRightRadius: 0,
                                                    borderTopRightRadius: isIos ? 0 : 10,
                                                    borderBottomLeftRadius: isIos ? 0 : 10,
                                                    borderTopLeftRadius: isIos ? 0 : 10,
                                                    paddingHorizontal: responsiveScreenWidth(0.3),
                                                    paddingVertical: responsiveScreenWidth(0.3),
                                                }}
                                            >
                                                {/* <View style={styles.borderStylesMeText}> */}
                                                    <Text style={styles.isMeMessageText}>{item.message}</Text>
                                                {/* </View> */}
                                            </LinearGradient>
                                        </View>
                                        :
                                        <View style={item.isMe ? styles.myMessage : styles.otherMessage}>
                                            <LinearGradient
                                                start={{ x: 0, y: 0 }}
                                                end={{ x: 1, y: 1.8 }}
                                                colors={[getTextPrimaryColor(THEME.DARK), '#292a34']}
                                                style={{
                                                    borderBottomRightRadius: isIos ? 0 : 10,
                                                    borderTopRightRadius: isIos ? 0 : 10,
                                                    borderBottomLeftRadius: 0,
                                                    borderTopLeftRadius: isIos ? 0 : 10,
                                                    paddingHorizontal: responsiveScreenWidth(0.3),
                                                    paddingVertical: responsiveScreenWidth(0.3),
                                                }}
                                            >
                                                {/* <View style={styles.borderStylesMessageText}> */}
                                                    <Text style={styles.messageText}>{item.message}</Text>
                                                {/* </View> */}
                                            </LinearGradient>
                                        </View>

                                    }
                                    {showTime && <Text style={item.isMe ? styles.messageDateRight : styles.messageDateLeft}>{format(new Date(item.createdAt), 'h:mm a')}</Text>}
                                </View>
                            );
                        }
                    }
                />
                <ConversationFooter />
            </KeyboardAvoidingView>
        </Layout>
    )
};

const styles = StyleSheet.create({
    mainWrapper: {
        flex: 1,
    },
    conversationBodyWrapper: {
        flex: 1,
        backgroundColor: '#292D34',
        padding: 10,
    },
    messageContainer: {
        marginBottom: 10,
        alignItems: 'flex-end',
    },
    myMessage: {
        maxWidth: responsiveScreenWidth(75),
        // borderBottomRightRadius: 0,
        // borderTopRightRadius: 10,
        // borderBottomLeftRadius: 10,
        // borderTopLeftRadius: 10,
    },
    otherMessage: {
        alignSelf: 'flex-start',
        maxWidth: responsiveScreenWidth(75),
    },
    isMeMessageText: {
        backgroundColor: '#292D34',
        borderBottomRightRadius: 0,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
        paddingHorizontal: responsiveScreenWidth(2.5),
        paddingVertical: responsiveScreenWidth(2.5),
        fontFamily: 'RedHatDisplay-SemiBold',
        color: getTextPrimaryColor(THEME.DARK),
        fontSize: responsiveScreenFontSize(2),
    },
    messageText: {
        backgroundColor: '#292D34',
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 0,
        borderTopLeftRadius: 10,
        paddingHorizontal: responsiveScreenWidth(2.5),
        paddingVertical: responsiveScreenWidth(2.5),
        fontFamily: 'RedHatDisplay-SemiBold',
        color: getTextPrimaryColor(THEME.DARK),
        fontSize: responsiveScreenFontSize(2),
    },
    messageDateRight: {
        color: getTextSecondaryColor(THEME.DARK),
        fontSize: responsiveScreenFontSize(1.35),
        marginTop: responsiveScreenHeight(0.5),
        alignSelf: 'flex-end',
    },
    messageDateLeft: {
        color: getTextSecondaryColor(THEME.DARK),
        fontSize: responsiveScreenFontSize(1.35),
        marginTop: responsiveScreenHeight(0.5),
        alignSelf: 'flex-start',
    },
    borderStylesMeText: {
        borderBottomRightRadius: 0,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 10,
        borderTopLeftRadius: 10,
        backgroundColor:'red'
    },
    borderStylesMessageText: {
        borderBottomRightRadius: 10,
        borderTopRightRadius: 10,
        borderBottomLeftRadius: 0,
        borderTopLeftRadius: 10,
        backgroundColor:'red'
    }
});