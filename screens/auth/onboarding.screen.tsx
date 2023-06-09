import React from 'react';
import { StyleSheet, ImageBackground, View, Image, Text, TouchableOpacity } from 'react-native';
import { responsiveScreenWidth, responsiveScreenHeight, responsiveFontSize } from 'react-native-responsive-dimensions';
import { COLORS, THEME, getIconBackgroundColor, getSeperatorColor, getTextButtonColor, getTextPrimaryColor, getTextSecondaryColor } from '../../utils/theme';
import { Button } from '../../components';
import { AppleIcon, FacebookIcon, GoogleIcon } from '../../assets';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import { Layout } from '../../layout/layout';

type OnboardingScreenNavigationProp = NativeStackNavigationProp<
  RootStackParamList,
  'OnboardingScreen'
>;

export const OnboardingScreen = () => {

  const navigation = useNavigation<OnboardingScreenNavigationProp>();

  const handleSignInPress = () => {
    navigation.navigate('PhoneNumberScreen');
  }

  return (
    <Layout>
      <View style={styles.loveCircleWrapper}>
        <Image
          source={require('../../assets/images/auth/love-circle.png')}
          resizeMode='contain'
          style={styles.loveCircle}
        />
      </View>
      <View style={styles.signInWrapper}>
        <Text style={styles.headerText}>LET’S MEET NEW{"\n"} PEOPLE AROUND YOU</Text>
        <Button
          onPress={handleSignInPress}
          imageSource={require('../../assets/gradients/splash.png')}
          variant="primary"
          height={responsiveScreenHeight(8)}
        >
          <Text style={styles.buttonText}>SIGN IN WITH MOBILE</Text>
        </Button>
        <View style={styles.seperatorContainer}>
          <View style={styles.seperator} />
          <Text>
            <Text style={styles.seperatorText}>OR</Text>
          </Text>
          <View style={styles.seperator} />
        </View>
        <View style={styles.iconContainer}>
          <TouchableOpacity style={styles.icon}>
            <FacebookIcon />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <GoogleIcon />
          </TouchableOpacity>
          <TouchableOpacity style={styles.icon}>
            <AppleIcon />
          </TouchableOpacity>
        </View>
      </View>
    </Layout>
  )
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
    resizeMode: 'contain',
    justifyContent: 'center',
  },
  wrapper: {
    flex: 1,
  },
  loveCircleWrapper: {
    paddingTop: responsiveScreenHeight(10),
    flex: 5,
  },
  loveCircle: {
    width: responsiveScreenWidth(93),
    height: responsiveScreenHeight(40),
  },
  signInWrapper: {
    flex: 4,
    display: 'flex',
    alignItems: 'center',
  },
  headerText: {
    fontFamily: 'Audrey-Medium',
    textAlign: 'center',
    fontSize: responsiveFontSize(3.5),
    marginBottom: responsiveScreenHeight(2),
    color: getTextPrimaryColor(THEME.DARK),
  },
  buttonText: {
    fontFamily: 'Audrey-Medium',
    textAlign: 'center',
    color: getTextButtonColor(THEME.DARK),
    fontSize: responsiveFontSize(2.8),
    paddingHorizontal: responsiveScreenWidth(10),
  },
  seperatorContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: responsiveScreenHeight(2),
  },
  seperator: {
    width: responsiveScreenWidth(36.6),
    height: 2,
    backgroundColor: getSeperatorColor(THEME.DARK),
    marginHorizontal: responsiveScreenWidth(3),
  },
  seperatorText: {
    fontFamily: 'Aurdery-Bold',
    fontSize: responsiveFontSize(2.7),
    color: getTextSecondaryColor(THEME.DARK),
  },
  iconContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    gap: responsiveScreenWidth(5),
    marginTop: responsiveScreenHeight(2),
  },
  icon: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: getIconBackgroundColor(THEME.DARK),
    borderRadius: 1000,
    height: responsiveScreenHeight(6.9),
    width: responsiveScreenHeight(6.9),
  },
});