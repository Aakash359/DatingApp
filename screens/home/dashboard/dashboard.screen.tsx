import React, { useState } from 'react';
import { StyleSheet, Image, View, Text, TouchableOpacity } from 'react-native';
import { Layout } from '../../../layout/layout';
import { MainHeader } from '../../../layout';
import { CardDislikeIcon, CardLikeIcon } from '../../../assets';
import { responsiveFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import { users } from '../../../constants';
import Animated, { runOnJS, useAnimatedGestureHandler, useAnimatedStyle, useSharedValue, withSpring } from 'react-native-reanimated';
import { GestureEventPayload, PanGestureHandler, PanGestureHandlerEventPayload } from 'react-native-gesture-handler';
import { THEME, getDarkBackgroundColor, getTextButtonColor } from '../../../utils';

const startingPosition = 0;

export const DashboardScreen = () => {
  const pressed = useSharedValue(false);
  const imageXPostition = useSharedValue(startingPosition);
  const rotation = useSharedValue(0);
  const likeIconOpacity = useSharedValue(0);
  const dislikeIconOpacity = useSharedValue(0);
  const nextImageScale = useSharedValue(0.5);
  const [currentIndex, setCurrentIndex] = useState(0);
  const overrideNopeOpacity = useSharedValue(0);
   const overrideLikeOpacity = useSharedValue(0);
  // const finishGesture = (event: Readonly<GestureEventPayload & PanGestureHandlerEventPayload>) => {
  //   if (event.translationX > 20) {
  //     imageXPostition.value = withSpring(500, { damping: 15 });
  //   } else if (event.translationX < -20) {
  //     imageXPostition.value = withSpring(-500, { damping: 15 });
  //   }
  //   nextImageScale.value = withSpring(0.95, { damping: 15 });
  //   likeIconOpacity.value = 0;
  //   dislikeIconOpacity.value = 0;
  //   setTimeout(() => {
  //     setCurrentIndex((prev) => prev + 1);
  //   }, 150);
  // };

  const changeCurrentIndex = () => {
    setCurrentIndex(prev => prev + 1);
    imageXPostition.value = startingPosition;
  };

  const finishGesture = (event: Readonly<GestureEventPayload & PanGestureHandlerEventPayload>) => {
    if (event.translationX > 20) {
      imageXPostition.value = withSpring(400, { damping: 15 }, () => {
        runOnJS(changeCurrentIndex)()
      });
    } else if (event.translationX < -20) {
      imageXPostition.value = withSpring(-400, { damping: 15 }, () => {
        runOnJS(changeCurrentIndex)()
      });
    }
    // nextImageScale.value = withSpring(0.95, { damping: 15 });
    likeIconOpacity.value = 0;
    dislikeIconOpacity.value = 0;
  };

  console.log('currentIndex', currentIndex);

  const imageSwipeHandler = useAnimatedGestureHandler({
    onStart: () => {
      pressed.value = true;
      imageXPostition.value = 0;
      rotation.value = 0;
    },
    onActive: (event) => {
      imageXPostition.value = event.translationX / 1.25;
      rotation.value = (event.translationX / 100) * 3;
      if (event.translationX > 50) {
        likeIconOpacity.value = event.translationX / 150;
        dislikeIconOpacity.value = 0;
      }
      if (event.translationX < 50) {
        dislikeIconOpacity.value = event.translationX / -150;
        likeIconOpacity.value = 0;
      }
      // if (event.translationX < 0) {
      //   nextImageScale.value = Math.min(-event.translationX / 3, 0.95);
      // } else if (event.translationX > 0) {
      //   nextImageScale.value = Math.min(event.translationX / 3, 0.95);
      // }
    },
    onEnd: (event) => {
      pressed.value = false;
      imageXPostition.value = withSpring(startingPosition, {
        velocity: event.velocityX,
      });
      rotation.value = withSpring(0);
      likeIconOpacity.value = withSpring(0);
      dislikeIconOpacity.value = withSpring(0);
      // nextImageScale.value = withSpring(0);

      if (event.translationX > 150 || event.translationX < -150 || Math.abs(event.velocityX) > 1500) {
        runOnJS(finishGesture)(event);
      }
    },
  });

  const currentImageStyle = useAnimatedStyle(() => {
    return {
      transform: [{ translateX: imageXPostition.value }, { rotate: rotation.value + 'deg' }]
    };
  });

  const likeIconOpacityStyle = useAnimatedStyle(() => {
    return {
      opacity: likeIconOpacity.value
    };
  });

  const dislikeIconOpacityStyle = useAnimatedStyle(() => {
    return {
      opacity: dislikeIconOpacity.value
    };
  });

  const nextImageScaleStyle = useAnimatedStyle(() => {
    return {
      // transform: [{ scale: nextImageScale.value }],
    };
  });

  React.useEffect(() => {
    imageXPostition.value = 0;
    rotation.value = 0;

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
                  activeOffsetX={[-15, 15]}
                >
                  <Animated.ScrollView
                    style={{ flex: 1 }}
                    contentContainerStyle={{ padding: responsiveScreenWidth(3) }}
                    showsVerticalScrollIndicator={false}
                  >
                    <Animated.View
                      style={[dislikeIconOpacityStyle, {
                        transform: [{ scale: 1.1 }],
                        position: "absolute",
                        top: responsiveScreenHeight(30),
                        left: responsiveScreenWidth(3),
                        zIndex: 1000

                      }]}
                    >
                      <CardDislikeIcon />
                    </Animated.View>
                    <Animated.View
                      style={[likeIconOpacityStyle, {
                        transform: [{ scale: 1.2 }],
                        position: "absolute",
                        top: responsiveScreenHeight(32),
                        right: responsiveScreenWidth(3),
                        zIndex: 1000
                      }]}
                    >
                      <CardLikeIcon />
                    </Animated.View>
                    <Animated.View style={[currentImageStyle, { position: 'relative' }]}>
                      <Image source={{ uri: user.photo }} style={styles.img} resizeMode='cover' />
                      <View style={styles.userNameWrapper}>
                        <Text style={styles.userName}>{user.firstName}</Text>
                      </View>
                      <View style={styles.detailsWrapper}>
                        <Text>asddasdasasd</Text>
                        <Text>asddasdasasd</Text>
                         <View style={[styles.headFoot, { marginBottom: 16 }]}>
          <TouchableOpacity
            onPress={() => {
              // let "nope" stay a bit, before swiping
              overrideNopeOpacity.value = withSpring(1);
              setTimeout(() => onSwiped(false), 500);
            }}
            style={styles.icon}>
            <Text>Left</Text>
            {/* <CrossSVG /> */}
          </TouchableOpacity>

          <TouchableOpacity
            onPress={() => {
              // let "like" stay a bit, before swiping
              overrideLikeOpacity.value = withSpring(1);
              setTimeout(() => onSwiped(true), 500);
            }}
            style={[styles.icon, {}]}>
           <Text>Right</Text>
          </TouchableOpacity>
        </View>
                      </View>
                    </Animated.View>
                  </Animated.ScrollView>
                </PanGestureHandler>
              </Animated.View>
            )
          } else if (index > currentIndex) {
            return (
              <View key={user.id} style={[styles.imgContainer, { padding: responsiveScreenWidth(3) }]}>
                <Animated.View
                  style={[nextImageScaleStyle]}
                >
                  <Image source={{ uri: user.photo }} style={styles.img} resizeMode='cover' />
                  <View style={styles.userNameWrapper}>
                    <Text style={styles.userName}>{user.firstName}</Text>
                  </View>
                  <View style={styles.detailsWrapper}>
                    <Text>zzzzzzzzzzzzzz</Text>
                    <Text>zzzzzzzzzzzzzz</Text>
                    <Text>zzzzzzzzzzzzzz</Text>
                    <Text>zzzzzzzzzzzzzz</Text>
                    <Text>zzzzzzzzzzzzzz</Text>
                    <Text>zzzzzzzzzzzzzz</Text>
                    <Text>zzzzzzzzzzzzzz</Text>
                    <Text>zzzzzzzzzzzzzz</Text>
                    <Text>zzzzzzzzzzzzzz</Text>
                    <Text>zzzzzzzzzzzzzz</Text>
                    <Text>zzzzzzzzzzzzzz</Text>
                  </View>
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
    height: responsiveScreenHeight(80),
    width: responsiveScreenWidth(100),
  },
  img: {
    height: responsiveScreenHeight(72),
    width: undefined,
    resizeMode: "cover",
    borderRadius: 20,
    borderBottomRightRadius: 0,
    borderBottomLeftRadius: 0,
    marginBottom: -1,
  },
  userName: {
    position: 'absolute',
    top: '85%',
    left: '10%',
    fontSize: responsiveFontSize(4),
    fontWeight: 'bold',
    color: getTextButtonColor(THEME.DARK),
  },
  userNameWrapper: {
    position: 'absolute',
    top: responsiveScreenHeight(65),
    left: responsiveScreenWidth(5),
    zIndex: 10,
  },
  detailsWrapper: {
    backgroundColor: getDarkBackgroundColor(THEME.DARK),
    padding: responsiveScreenWidth(5),
  }
});