import React from 'react';
import { StyleSheet, ImageBackground, View, TouchableWithoutFeedback, Keyboard } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

interface Props {
    children?: React.ReactNode;
}

export const Layout: React.FC<Props> = (props) => {
    return (
        <ImageBackground
            resizeMode='cover'
            source={require('../assets/gradients/gradient-bg.png')}
            style={styles.image}
        >
            <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
                <SafeAreaView style={styles.wrapper}>
                    {props.children}
                </SafeAreaView>
            </TouchableWithoutFeedback>
        </ImageBackground>
    )
}

const styles = StyleSheet.create({
    image: {
        flex: 1,
        justifyContent: 'center',
    },
    wrapper: {
        flex: 1,
    },
});
