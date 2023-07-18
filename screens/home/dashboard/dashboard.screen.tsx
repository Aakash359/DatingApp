import React, { useState } from 'react';
import { StyleSheet, Image, Dimensions, PanResponder, View, Text } from 'react-native';
import { Layout } from '../../../layout/layout';
import { MainHeader } from '../../../layout';
import { CardDislikeIcon, CardLikeIcon } from '../../../assets';
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import { users } from '../../../constants';
import Animated, { runOnJS, useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { GestureEventPayload, PanGestureHandler, PanGestureHandlerEventPayload } from 'react-native-gesture-handler';

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

const startingPosition = 0;

export const DashboardScreen = () => {

  const pressed = useSharedValue(false);
  const imageXPostition = useSharedValue(startingPosition);
  const rotation = useSharedValue(0);
  const dislikeIconOpacity = useSharedValue(0);
  const likeIconOpacity = useSharedValue(0);
  const nextImageScale = useSharedValue(0.5);
  const nextImageOpacity = useSharedValue(0);
  const [currentIndex, setCurrentIndex] = useState(0);
  const scrollHandlerRef = React.useRef(null);

  const finishGesture = (event: Readonly<GestureEventPayload & PanGestureHandlerEventPayload>) => {
    if (event.translationX > 50) {
      imageXPostition.value = withSpring(500, { damping: 15 });
    } else if (event.translationX < -50) {
      imageXPostition.value = withSpring(-500, { damping: 15 });
    }
    nextImageScale.value = withSpring(0.95, { damping: 15 });
    nextImageOpacity.value = withSpring(1, { damping: 15 });
    setTimeout(() => {
      setCurrentIndex((prev) => prev + 1);
    }, 100);
    console.log('finish');
  };

  const imageSwipeHandler = useAnimatedGestureHandler({
    onStart: (event, ctx) => {
      pressed.value = true;
      imageXPostition.value = 0;
      rotation.value = 0;
    },
    onActive: (event, ctx) => {
      imageXPostition.value = event.translationX / 1.25;
      rotation.value = (event.translationX / 100) * 3;
      if (event.translationX > 50) {
        dislikeIconOpacity.value = event.translationX / 200;
        likeIconOpacity.value = 0;
      }
      if (event.translationX < 50) {
        likeIconOpacity.value = event.translationX / -200;
        dislikeIconOpacity.value = 0;
      }
      if (event.translationX < 0) {
        nextImageScale.value = Math.min(-event.translationX / 3, 0.95);
        nextImageOpacity.value = Math.min(-event.translationX / 300, 1);
      } else if (event.translationX > 0) {
        nextImageScale.value = Math.min(event.translationX / 3, 0.95);
        nextImageOpacity.value = Math.min(event.translationX / 300, 1);
      }
    },
    onEnd: (event, ctx) => {
      pressed.value = false;
      imageXPostition.value = withSpring(startingPosition);
      rotation.value = withSpring(0);
      dislikeIconOpacity.value = withSpring(0);
      likeIconOpacity.value = withSpring(0);
      nextImageScale.value = withSpring(0);
      nextImageOpacity.value = withSpring(0);
      if (event.translationX > 150 || event.translationX < -150) {
        runOnJS(finishGesture)(event);
      }
    },
  });

  const currentImageStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: imageXPostition.value }, { rotate: rotation.value + 'deg' }]
    };
  });

  const dislikeIconOpacityStyle = useAnimatedStyle(() => {
    return {
      opacity: dislikeIconOpacity.value
    };
  });

  const likeIconOpacityStyle = useAnimatedStyle(() => {
    return {
      opacity: likeIconOpacity.value
    };
  });

  const nextImageScaleStyle = useAnimatedStyle(() => {
    return {
      transform: [{ scale: nextImageScale.value }],
      opacity: nextImageOpacity.value
    };
  });

  React.useEffect(() => {
    imageXPostition.value = 0;
    rotation.value = 0;
    if(currentIndex === 4) {
      setCurrentIndex(0)
    }
  }, [currentIndex]);

  return (
    <Layout>
      <MainHeader />
      <View style={styles.container}>
        {users.map((user, index) => {
          if (index < currentIndex) {
            return null;
          } else if (index === currentIndex) {
            return (
              <Animated.View
                style={[
                  {
                    ...styles.imgContainer,
                  }
                ]}
                key={user.id}
              >
                <PanGestureHandler 
                  onGestureEvent={imageSwipeHandler} 
                  activeOffsetX={[-15, 15]} // Only capture horizontal gestures
                >
                  <Animated.ScrollView
                    scrollEventThrottle={16}
                    style={{ flex: 1 }}
                    contentContainerStyle={{ padding: 10 }}
                    scrollEnabled={true}
                  >
                    <Animated.View
                      style={[likeIconOpacityStyle, {
                        transform: [{ scale: 1.2 }],
                        position: "absolute",
                        top: responsiveScreenHeight(30),
                        left: responsiveScreenWidth(3),
                        zIndex: 1000

                      }]}
                    >
                      <CardDislikeIcon />
                    </Animated.View>
                    <Animated.View
                      style={[dislikeIconOpacityStyle, {
                        transform: [{ scale: 1.1 }],
                        position: "absolute",
                        top: responsiveScreenHeight(31),
                        right: responsiveScreenWidth(3),
                        zIndex: 1000
                      }]}
                    >
                      <CardLikeIcon />
                    </Animated.View>
                    <Animated.View style={[currentImageStyle]}>
                      <Image source={{ uri: user.photo }} style={styles.img} resizeMode='cover' />
                    </Animated.View>
                    <Animated.View style={[currentImageStyle]}>
                      <Text style={styles.userName}>{user.firstName}</Text>
                      <Text>asddasdasasd</Text>
                      <Text>asddasdasasd</Text>
                      <Text>asddasdasasd</Text>
                      <Text>asddasdasasd</Text>
                      <Text>asddasdasasd</Text>
                      <Text>asddasdasasd</Text>
                      <Text>asddasdasasd</Text>
                      <Text>asddasdasasd</Text>
                      <Text>asddasdasasd</Text>
                      <Text>asddasdasasd</Text>
                      <Text>asddasdasasd</Text>
                    </Animated.View>
                  </Animated.ScrollView>
                </PanGestureHandler>
              </Animated.View>
            )
          } else {
            return (
              <View key={user.id} style={styles.imgContainer}>
                <Animated.View
                  style={[nextImageScaleStyle]}
                >
                  <Image source={{ uri: user.photo }} style={styles.img} />
                  <Text style={styles.userName}>{user.firstName}</Text>
                </Animated.View>
              </View>
            )
          }
        }).reverse()}
      </View>
    </Layout>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imgContainer: {
    position: 'absolute',
    height: SCREEN_HEIGHT - responsiveScreenHeight(10),
    width: SCREEN_WIDTH,
    padding: 10,
  },
  img: {
    height: SCREEN_HEIGHT - responsiveScreenHeight(18),
    width: undefined,
    resizeMode: "cover",
    borderRadius: 20,
  },
  userName: {
    position: 'absolute',
    top: '85%',
    left: '10%',
    fontSize: 32,
    fontWeight: 'bold',
  }
});