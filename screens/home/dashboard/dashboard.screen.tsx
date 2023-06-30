import React, { useRef, useState } from 'react';
import { StyleSheet, Image, Dimensions, PanResponder, Animated, View, Text } from 'react-native';
import { Layout } from '../../../layout/layout';
import { MainHeader } from '../../../layout';
import { CardDislikeIcon, CardLikeIcon } from '../../../assets';
import { responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';


const SCREEN_HEIGHT = Dimensions.get('window').height
const SCREEN_WIDTH = Dimensions.get('window').width

const users = [
  {
    id: 1,
    firstName: 'John',
    lastName: 'Doe',
    email: 'john@doe.com',
    phone: '8961242572',
    photo: "https://images.unsplash.com/photo-1673912401872-a128c7c94edd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=398&q=80 398w, https://images.unsplash.com/photo-1673912401872-a128c7c94edd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=698&q=80 698w, https://images.unsplash.com/photo-1673912401872-a128c7c94edd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=796&q=80 796w, https://images.unsplash.com/photo-1673912401872-a128c7c94edd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=998&q=80 998w, https://images.unsplash.com/photo-1673912401872-a128c7c94edd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1298&q=80 1298w, https://images.unsplash.com/photo-1673912401872-a128c7c94edd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1396&q=80 1396w, https://images.unsplash.com/photo-1673912401872-a128c7c94edd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1598&q=80 1598w, https://images.unsplash.com/photo-1673912401872-a128c7c94edd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1898&q=80 1898w, https://images.unsplash.com/photo-1673912401872-a128c7c94edd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1996&q=80 1996w, https://images.unsplash.com/photo-1673912401872-a128c7c94edd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2198&q=80 2198w, https://images.unsplash.com/photo-1673912401872-a128c7c94edd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2498&q=80 2498w, https://images.unsplash.com/photo-1673912401872-a128c7c94edd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2596&q=80 2596w, https://images.unsplash.com/photo-1673912401872-a128c7c94edd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2798&q=80 2798w, https://images.unsplash.com/photo-1673912401872-a128c7c94edd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3098&q=80 3098w, https://images.unsplash.com/photo-1673912401872-a128c7c94edd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3196&q=80 3196w, https://images.unsplash.com/photo-1673912401872-a128c7c94edd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3398&q=80 3398w, https://images.unsplash.com/photo-1673912401872-a128c7c94edd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3698&q=80 3698w, https://images.unsplash.com/photo-1673912401872-a128c7c94edd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3796&q=80 3796w, https://images.unsplash.com/photo-1673912401872-a128c7c94edd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3998&q=80 3998w, https://images.unsplash.com/photo-1673912401872-a128c7c94edd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4000&q=80 4000w",
  },
  {
    id: 2,
    firstName: 'Mary',
    lastName: 'S',
    email: 'john@doe.com',
    phone: '8961242572',
    photo: "https://images.unsplash.com/photo-1673912401872-a128c7c94edd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=398&q=80 398w, https://images.unsplash.com/photo-1673912401872-a128c7c94edd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=698&q=80 698w, https://images.unsplash.com/photo-1673912401872-a128c7c94edd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=796&q=80 796w, https://images.unsplash.com/photo-1673912401872-a128c7c94edd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=998&q=80 998w, https://images.unsplash.com/photo-1673912401872-a128c7c94edd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1298&q=80 1298w, https://images.unsplash.com/photo-1673912401872-a128c7c94edd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1396&q=80 1396w, https://images.unsplash.com/photo-1673912401872-a128c7c94edd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1598&q=80 1598w, https://images.unsplash.com/photo-1673912401872-a128c7c94edd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1898&q=80 1898w, https://images.unsplash.com/photo-1673912401872-a128c7c94edd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1996&q=80 1996w, https://images.unsplash.com/photo-1673912401872-a128c7c94edd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2198&q=80 2198w, https://images.unsplash.com/photo-1673912401872-a128c7c94edd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2498&q=80 2498w, https://images.unsplash.com/photo-1673912401872-a128c7c94edd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2596&q=80 2596w, https://images.unsplash.com/photo-1673912401872-a128c7c94edd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2798&q=80 2798w, https://images.unsplash.com/photo-1673912401872-a128c7c94edd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3098&q=80 3098w, https://images.unsplash.com/photo-1673912401872-a128c7c94edd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3196&q=80 3196w, https://images.unsplash.com/photo-1673912401872-a128c7c94edd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3398&q=80 3398w, https://images.unsplash.com/photo-1673912401872-a128c7c94edd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3698&q=80 3698w, https://images.unsplash.com/photo-1673912401872-a128c7c94edd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3796&q=80 3796w, https://images.unsplash.com/photo-1673912401872-a128c7c94edd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=3998&q=80 3998w, https://images.unsplash.com/photo-1673912401872-a128c7c94edd?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=4000&q=80 4000w",
  }
]
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
  const scrollY = useRef(new Animated.Value(0)).current;

  const createdPanResponder = PanResponder.create({
    onStartShouldSetPanResponder: (evt, gestureState) => true,
    onPanResponderMove: (evt, gestureState) => {
      //   position.setValue({ x: gestureState.dx, y: gestureState.dy })
      position.setValue({ x: gestureState.dx, y: 0 })
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
                    {/* <Text
                      style={{
                        borderWidth: 1,
                        borderColor: "green",
                        color: "green",
                        fontSize: 32,
                        fontWeight: "800",
                        padding: 10
                      }}
                    >
                      LIKE
                    </Text> */}
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
                    {/* <Text
                      style={{
                        borderWidth: 1,
                        borderColor: "red",
                        color: "red",
                        fontSize: 32,
                        fontWeight: "800",
                        padding: 10
                      }}
                    >
                      NOPE
                    </Text> */}
                    <CardDislikeIcon />
                  </Animated.View>
                  <Image source={{ uri: user.photo }} style={styles.img} resizeMode='contain' />
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
    height: SCREEN_HEIGHT - 120,
    width: SCREEN_WIDTH,
    padding: 10,
  },
  img: {
    height: SCREEN_HEIGHT - 120,
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