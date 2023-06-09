import React from 'react';
import {ImageBackground, StyleSheet, Text} from 'react-native';

function App(): JSX.Element {
  return (
      <ImageBackground
        source={require('../assets/gradients/splash.png')}
        style={styles.image}>
        <Text style={styles.text}>MANIFEST</Text>
      </ImageBackground>
  );
}

const styles = StyleSheet.create({
  mainView: {
    flex: 1,
    backgroundColor: 'black',
  },
  linearGradient: {
    flex: 1,
  },
  image: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  text: {
    color: 'white',
    fontSize: 42,
    lineHeight: 84,
    textAlign: 'center',
    fontFamily: 'Audrey-Medium',
  },
});

export default App;
