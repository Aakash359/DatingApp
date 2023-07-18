import React, { useState } from 'react';
import { StyleSheet, Image, Dimensions, PanResponder, Animated, View, Text } from 'react-native';
import { Layout } from '../../../layout/layout';
import { MainHeader } from '../../../layout';
import { CardDislikeIcon, CardLikeIcon } from '../../../assets';
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import { users } from '../../../constants';

const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

const SWIPE_THRESHOLD = 30;

const position = new Animated.ValueXY();

const rotate = position.x.interpolate({
  inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
  outputRange: ['-10deg', '0deg', '10deg'],
  extrapolate: 'clamp'
});

const likeOpacity = position.x.interpolate({
  inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
  outputRange: [0, 0, 1],
  extrapolate: 'clamp'
})

const nopeOpacity = position.x.interpolate({
  inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
  outputRange: [1, 0, 0],
  extrapolate: 'clamp'
})

const nextCardOpacity = position.x.interpolate({
  inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
  outputRange: [1, 0, 1],
  extrapolate: 'clamp'
})

const nextCardScale = position.x.interpolate({
  inputRange: [-SCREEN_WIDTH / 2, 0, SCREEN_WIDTH / 2],
  outputRange: [1, 0.8, 1],
  extrapolate: 'clamp'
})
export const DashboardScreen = () => {

  const [currentIndex, setCurrentIndex] = useState(0);

  let initialGestureX = 0;
  let initialGestureY = 0;

  const createdPanResponder = PanResponder.create({
    onMoveShouldSetPanResponder: (evt, gestureState) => {
      const dx = Math.abs(gestureState.dx);
      const dy = Math.abs(gestureState.dy);
      
      return dx > SWIPE_THRESHOLD && dx > dy; // Takes control only for horizontal swipe
    },
    onPanResponderGrant: (evt, gestureState) => {
      initialGestureX = gestureState.x0;
      initialGestureY = gestureState.y0;
    },
    onPanResponderMove: (evt, gestureState) => {
      const currentGestureX = gestureState.moveX;
      const currentGestureY = gestureState.moveY;
  
      // Calculate distances in both directions
      const dx = Math.abs(currentGestureX - initialGestureX);
      const dy = Math.abs(currentGestureY - initialGestureY);
  
      if (dx > SWIPE_THRESHOLD && dx > dy) {
        // This is a horizontal swipe, handle it
        position.setValue({ x: gestureState.dx, y: 0 });
      }
    },
    onPanResponderRelease: (evt, gestureState) => {
      if (gestureState.dx > 120) {
        Animated.spring(position, {
          toValue: { x: SCREEN_WIDTH + 100, y: gestureState.dy },
          useNativeDriver: false
        }).start(() => {

          setCurrentIndex((prev) => prev + 1);
          position.setValue({ x: 0, y: 0 })
        })
      } else if (gestureState.dx < -120) {
        Animated.spring(position, {
          toValue: { x: -SCREEN_WIDTH - 100, y: gestureState.dy },
          useNativeDriver: false
        }).start(() => {
          setCurrentIndex((prev) => prev + 1);
          position.setValue({ x: 0, y: 0 })
        })
      } else {
        Animated.spring(position, {
          toValue: { x: 0, y: 0 },
          friction: 10,
          useNativeDriver: false
        }).start()
      }
    }
  })

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
                    transform: [{
                      rotate
                    },
                    ...position.getTranslateTransform()
                    ]
                  }
                ]}
                key={user.id}
                {...createdPanResponder.panHandlers}
              >
                <Animated.ScrollView
                  scrollEventThrottle={16}
                  style={{ flex: 1 }}
                  contentContainerStyle={{ padding: 10 }}
                  scrollEnabled={true}
                >
                  <Animated.View
                    style={{
                      opacity: likeOpacity,
                      transform: [{ scale: 1.2 }],
                      position: "absolute",
                      top: responsiveScreenHeight(30),
                      left: responsiveScreenWidth(5),
                      zIndex: 1000
                    }}
                  >
                    <CardLikeIcon />
                  </Animated.View>
                  <Animated.View
                    style={{
                      opacity: nopeOpacity,
                      transform: [{ scale: 1.2 }],
                      position: "absolute",
                      top: responsiveScreenHeight(30),
                      right: responsiveScreenWidth(3),
                      zIndex: 1000
                    }}
                  >
                    <CardDislikeIcon />
                  </Animated.View>
                  <Image source={{ uri: user.photo }} style={styles.img} resizeMode='cover' />
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
                  <Text>asddasdasasd</Text>
                </Animated.ScrollView>
              </Animated.View>
            )
          } else {
            return (
              <Animated.View
                style={[
                  {
                    ...styles.imgContainer,
                    opacity: nextCardOpacity,
                    transform: [{ scale: nextCardScale }]
                  }
                ]}
                key={user.id}
              >
                <Image source={{ uri: user.photo }} style={styles.img} />
                <Text style={styles.userName}>{user.firstName}</Text>
              </Animated.View>
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
    borderRadius: 20
  },
  userName: {
    position: 'absolute',
    top: '85%',
    left: '10%',
    fontSize: 32,
    fontWeight: 'bold',
  }
});