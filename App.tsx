import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { DateOfBirthScreen, GenderPreferenceScreen, GenderScreen, NameScreen, OnboardingScreen, OtpScreen, PhoneNumberScreen, ProfilePhotoScreen } from './screens';

export type RootStackParamList = {
  OnboardingScreen: undefined;
  PhoneNumberScreen: undefined;
  OtpScreen: undefined;
  NameScreen: undefined;
  DateOfBirthScreen: undefined;
  GenderScreen: undefined;
  GenderPreferenceScreen: undefined;
  ProfilePhotoScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  return (
    <SafeAreaProvider style={styles.mainView}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} options={{ headerShown: false }} />
          <Stack.Screen name="PhoneNumberScreen" component={PhoneNumberScreen} options={{ headerShown: false }} />
          <Stack.Screen name="OtpScreen" component={OtpScreen} options={{ headerShown: false }} />
          <Stack.Screen name="NameScreen" component={NameScreen} options={{ headerShown: false }} />
          <Stack.Screen name="DateOfBirthScreen" component={DateOfBirthScreen} options={{ headerShown: false }} />
          <Stack.Screen name="GenderScreen" component={GenderScreen} options={{ headerShown: false }} />
          <Stack.Screen name="GenderPreferenceScreen" component={GenderPreferenceScreen} options={{ headerShown: false }} />
          <Stack.Screen name="ProfilePhotoScreen" component={ProfilePhotoScreen} options={{ headerShown: false }} />
        </Stack.Navigator>
      </NavigationContainer>
    </SafeAreaProvider>
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
