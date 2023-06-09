import React from 'react';
import { StyleSheet, ImageBackground, View } from 'react-native';

interface Props {
    children: React.ReactNode;
}

export const Layout: React.FC<Props> = (props) => {
    return (
        <ImageBackground
            resizeMode='cover'
            source={require('../assets/gradients/gradient-bg.png')}
            style={styles.image}>
            <View style={styles.wrapper}>
                {props.children}
            </View>
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
})