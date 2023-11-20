import React from "react";
import {
  Dimensions,
  PanResponder,
  Platform,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  ViewStyle,
  ScrollView,
} from "react-native";
import Animated from "react-native-reanimated";
import ImageBackground from 'react-native-fast-image';


   const images = [
  {Src: require("../assets/images/1.jpg") },
//   { src: require("../../../assets/images/2.jpg") },
//   { src: require("../../../assets/images/3.jpg") },
//   { src: require("../../../assets/images/4.jpg") },
//   { src: require("../../../assets/images/5.jpg") },
//   { src: require("../../../assets/images/6.jpg") },
//   { src: require("../../../assets/images/7.jpg") },
//   { src: require("../../../assets/images/8.jpg") },
//   { src: require("../../../assets/images/9.jpg") },
  //   { src: require('./assets/images/10.jpg') },
  //   { src: require('./assets/images/11.jpg') },
  //   { src: require('./assets/images/12.jpg') },
  //   { src: require('./assets/images/13.jpg') },
  //   { src: require('./assets/images/14.jpg') },
  //   { src: require('./assets/images/15.jpg') },
  //   { src: require('./assets/images/16.jpg') },
  //   { src: require('./assets/images/17.jpg') },
];


const AnimatedCard = ({
  style,
  index,
  children,
  ...rest
}: {
  style: ViewStyle;
  index: number;
  children?: React.ReactNode;
    }) => {
 
  return (
    <Animated.View {...{ style }} {...rest}>
      <View style={styles.imgOut}>
        <ImageBackground style={styles.img} source={images[index].Src}>
          {children}
        </ImageBackground>
      </View>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  imgOut: {
    borderRadius: 8,
    width: "95%",
    height: "100%",
    marginTop: 30,
    overflow: "hidden",
    alignSelf: "center",
    justifyContent: "center",
  },

  img: {
    width: "100%",
    overflow: "hidden",
    borderRadius: 8,
    height: "100%",
  },
});

export default AnimatedCard;
