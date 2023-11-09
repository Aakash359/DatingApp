// FAQComponent.tsx
import React, { useRef, useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, LayoutChangeEvent } from 'react-native';
import Animated, { useSharedValue, useAnimatedStyle, withTiming } from 'react-native-reanimated';
import { FAQMinusIcon, FAQPlusIcon } from '../assets';
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import { THEME, getDarkBackgroundColor, getTextPrimaryColor, getTextSecondaryColor } from '../utils';

interface FAQProps {
    question: string;
    answer: string;
}

export const FAQComponent: React.FC<FAQProps> = ({ question, answer }) => {
    const [expanded, setExpanded] = useState(false);
    // const heightRef = useRef(new Animated.Value()); // Store the height as a ref to avoid triggering re-renders
    const measuredHeight = useRef(0);
    const animatedHeight = useSharedValue(0);

    const animatedStyles = useAnimatedStyle(() => ({
        height: animatedHeight.value,
        overflow: 'hidden',
    }));

    const toggle = () => {
        if (measuredHeight.current > 0) {
            setExpanded(prev => !prev);
            animatedHeight.value = withTiming(expanded ? 0 : measuredHeight.current, {
                duration: 300,
            });
        }
    };

    const onLayout = ({ nativeEvent }: LayoutChangeEvent) => {
        if (!measuredHeight.current) {
            measuredHeight.current = nativeEvent.layout.height;
            // If initially expanded, set the height right away
            if (expanded) {
                animatedHeight.value = withTiming(measuredHeight.current, {
                    duration: 0,
                });
            }
        }
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={toggle} style={styles.header}>
                <Text style={styles.question}>{question}</Text>
                {expanded ? <FAQMinusIcon /> : <FAQPlusIcon />}
            </TouchableOpacity>
            <Animated.View style={[styles.content, animatedStyles]}>
                {/* Render the answer outside the view's boundaries to measure its height */}
                <Text onLayout={onLayout} style={[styles.answer, { position: 'absolute', opacity: 0 }]}>
                    {answer}
                </Text>
                {expanded && (
                    <Text style={styles.answer}>
                        {answer}
                    </Text>
                )}
            </Animated.View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: responsiveScreenWidth(90),
        alignSelf: 'center',
        backgroundColor: getDarkBackgroundColor(THEME.DARK), // Set your desired background color
        marginTop: responsiveScreenHeight(2),
        borderRadius: 8,
    },
    header: {
        paddingHorizontal: responsiveScreenWidth(4), // Adjust the padding as needed
        paddingTop: responsiveScreenHeight(2),
        flexDirection: 'row', // Aligns the question and icon horizontally
        alignItems: 'center', // Centers the items vertically within the row
        justifyContent: 'space-between', // Puts space between the question and the icon
        paddingBottom: responsiveScreenHeight(2)
    },
    question: {
        color: getTextPrimaryColor(THEME.DARK),
        fontFamily: 'RedHatDisplay-Bold',
        fontSize: responsiveScreenFontSize(2)
    },
    content: {
        overflow: 'hidden', // Keeps the animated content clipped
    },
    answer: {
        position: 'relative', // Ensures that this Text is positioned according to the Animated.View
        fontFamily: 'RedHatDisplay-Regular',
        color: getTextSecondaryColor(THEME.DARK),
        paddingHorizontal: responsiveScreenWidth(4),
        paddingTop: responsiveScreenHeight(1),
        fontSize: responsiveScreenFontSize(2),
        paddingBottom: responsiveScreenHeight(2),
    },
});


