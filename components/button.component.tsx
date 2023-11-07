import React, { forwardRef, ReactNode } from 'react';
import { TouchableOpacity, ImageBackground, StyleSheet, View } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { responsiveScreenWidth } from 'react-native-responsive-dimensions';
import { getBrandColor, getModalBackgroundColor, THEME } from '../utils';

interface ImageButtonProps {
    onPress: () => void;
    imageSource?: any; // The type of this prop might depend on how you're getting your images
    children: ReactNode;
    variant: 'primary' | 'ghost' | 'secondary' | 'outline' | 'disabled';
    height: number;
    borderRadius?: number;
    borderTopLeftRadius?: number;
    borderTopRightRadius?: number;
}

export const Button = forwardRef<TouchableOpacity, ImageButtonProps>
    (({ onPress, imageSource, children, variant, height, borderRadius, borderTopLeftRadius, borderTopRightRadius }, ref) => {
        const variantStyle = styles[variant];

        return variant === 'primary'
            ? (
                <TouchableOpacity
                    ref={ref}
                    onPress={onPress}
                    activeOpacity={0.7}
                    style={{
                        borderRadius: borderRadius ? borderRadius : 5,
                        overflow: 'hidden',
                        height,
                        borderTopLeftRadius,
                        borderTopRightRadius
                    }}
                >
                    <ImageBackground source={imageSource} style={{ width: '100%', height: '100%' }}>
                        <View style={variantStyle}>
                            {children}
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
            )
            : variant === 'disabled' ? (
                <TouchableOpacity
                    ref={ref}
                    disabled={true}
                    onPress={onPress}
                    activeOpacity={0.7}
                    style=
                    {{
                        borderRadius: borderRadius ? borderRadius : 5,
                        overflow: 'hidden',
                        height,
                        borderTopLeftRadius,
                        borderTopRightRadius
                    }}
                >
                    <ImageBackground source={imageSource} style={{ width: '100%', height: '100%' }}>
                        <View style={variantStyle}>
                            {children}
                        </View>
                    </ImageBackground>
                </TouchableOpacity>
            ) : variant === 'outline' ?
                <LinearGradient
                    start={{ x: 0, y: 0 }}
                    end={{ x: 0.5, y: 1 }}
                    colors={[getBrandColor(THEME.LIGHT), getBrandColor(THEME.DARK)]}
                    style={{
                        alignItems: 'center',
                        justifyContent: 'center',
                        borderRadius: borderRadius ? borderRadius : 5,
                        height: 'auto',
                        width: 'auto',
                        zIndex: -1,
                    }}
                >
                    <TouchableOpacity
                        ref={ref}
                        onPress={onPress}
                        activeOpacity={0.8}
                        style=
                        {{
                            borderRadius: borderRadius ? borderRadius : 5,
                            overflow: 'hidden',
                            height,
                            borderTopLeftRadius,
                            borderTopRightRadius
                        }}
                    >
                        <View style={variantStyle}>
                            {children}
                        </View>
                    </TouchableOpacity>
                </LinearGradient>
                :
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
        backgroundColor: getModalBackgroundColor(THEME.LIGHT),
        justifyContent: 'center',
        alignItems: 'center',
        height: '92%',
        width: responsiveScreenWidth(36),
        marginTop: 1,
        zIndex: 2,
        borderRadius: 5,
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