import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';
import { LeftArrow } from "../assets"; // Make sure the path is correct
import Animated, { useAnimatedStyle, useSharedValue, withTiming, runOnJS, Easing } from 'react-native-reanimated';
import { CheckboxButtonArea } from './checkboxButtonArea.component';
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import { THEME, getRadioGroupBackgroundColor, getTextButtonColor, getTextSecondaryColor } from '../utils';

interface Props {
    title: string;
    options: { text: string, id: string }[];
    accordionCheckboxSelectedIds: string[];
    setAccordionCheckboxSelectedIds: React.Dispatch<React.SetStateAction<string[]>>
}

export const AccordionCheckboxButtonArea = ({ title, options, accordionCheckboxSelectedIds, setAccordionCheckboxSelectedIds }: Props) => {
    const [expanded, setExpanded] = useState(false);
    const rotation = useSharedValue(180);
    const height = useSharedValue(0); // Shared value to animate the height

    // Helper function to run state updates outside of the Reanimated worklet
    const updateExpandedState = (newState: boolean) => {
        setExpanded(newState);
    };

    const arrowAnimatedStyle = useAnimatedStyle(() => {
        return {
            transform: [{ rotateZ: `${rotation.value}deg` }],
        };
    });

    // Animated style for the content height
    const contentAnimatedStyle = useAnimatedStyle(() => {
        return {
            height: height.value,
            overflow: 'hidden',
            maxHeight: runOnJS(responsiveScreenHeight)(40) as unknown as  number
        };
    });

    const toggleExpanded = () => {
        const newState = !expanded;
        runOnJS(updateExpandedState)(newState);
        rotation.value = withTiming(newState ? 270 : 180,
            { duration: 300, easing: Easing.bezier(0.25, 0.1, 0.25, 1) });
        height.value = withTiming(newState ? Math.min(options.length * responsiveScreenHeight(7), responsiveScreenHeight(40)) : 0,
            { duration: 300, easing: Easing.bezier(0.25, 0.1, 0.25, 1) });
    };

    return (
        <View style={styles.container}>
            <TouchableOpacity onPress={toggleExpanded} style={styles.header}>
                <Text style={styles.titleText}>{title}</Text>
                <Animated.View style={arrowAnimatedStyle}>
                    <LeftArrow width={20} height={20} />
                </Animated.View>
            </TouchableOpacity>
            <Animated.ScrollView style={contentAnimatedStyle}>
                {expanded && options.map((option) => (
                    <CheckboxButtonArea
                        key={option.id}
                        id={option.id}
                        selectedIds={accordionCheckboxSelectedIds}
                        setSelectedIds={setAccordionCheckboxSelectedIds}
                        height={responsiveScreenHeight(7)}
                        bordersHidden
                        zeroBorderRadius
                    >
                        <Text style={styles.optionText}>{option.text}</Text>
                    </CheckboxButtonArea>
                ))}
            </Animated.ScrollView>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: responsiveScreenWidth(90),
        overflow: 'hidden', // Ensure the overflow content is hidden
    },
    header: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: responsiveScreenWidth(5),
        paddingVertical: responsiveScreenHeight(2),
        backgroundColor: getRadioGroupBackgroundColor(THEME.DARK),
    },
    content: {
        // If you have specific styles for the content, apply them here
    },
    optionText: {
        fontFamily: 'RedHatDisplay-Regular',
        paddingHorizontal: responsiveScreenWidth(5),
        color: getTextButtonColor(THEME.DARK),
        fontSize: responsiveScreenFontSize(2)
    },
    titleText: {
        fontFamily: 'RedHatDisplay-SemiBold',
        color: getTextButtonColor(THEME.DARK),
        fontSize: responsiveScreenFontSize(2.25),
        // paddingHorizontal: responsiveScreenWidth(3),
    }
});
