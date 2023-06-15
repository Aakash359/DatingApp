import React, { forwardRef, ReactNode } from 'react';
import { TouchableOpacity, ImageBackground, StyleSheet, View } from 'react-native';

interface ImageButtonProps {
    onPress: () => void;
    imageSource?: any; // The type of this prop might depend on how you're getting your images
    children: ReactNode;
    variant: 'primary' | 'ghost' | 'secondary' | 'outline' | 'disabled';
    height: number;
}

export const Button = forwardRef<TouchableOpacity, ImageButtonProps>(({ onPress, imageSource, children, variant, height }, ref) => {
    const variantStyle = styles[variant];

    return variant === 'primary'
        ? (
            <TouchableOpacity ref={ref} onPress={onPress} activeOpacity={0.7} style={{ borderRadius: 5, overflow: 'hidden', height }}>
                <ImageBackground source={imageSource} style={{ width: '100%', height: '100%' }}>
                    <View style={variantStyle}>
                        {children}
                    </View>
                </ImageBackground>
            </TouchableOpacity>
        )
        : variant === 'disabled' ? (
                <ImageBackground source={imageSource} style={{ width: '100%', height: '100%', borderRadius: 5, overflow: 'hidden', minHeight: height }}>
                    <View style={variantStyle}>
                        {children}
                    </View>
                </ImageBackground>
        ) : 
        <TouchableOpacity ref={ref} onPress={onPress} activeOpacity={0.7} style={variantStyle}>
            {children}
        </TouchableOpacity>;
});

const styles = StyleSheet.create({
    ghost: {
        borderWidth: 1,
        borderColor: 'white',
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    secondary: {
        backgroundColor: 'grey',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    outline: {
        borderWidth: 1,
        borderColor: '#96969E',
        backgroundColor: 'transparent',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    primary: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
    },
    disabled: {
        justifyContent: 'center',
        alignItems: 'center',
        height: '100%',
        backgroundColor: 'rgba(0,0,0,0.6)',
        opacity: 0.5,
    },
});