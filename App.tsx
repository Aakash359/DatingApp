import React from 'react';
import { StyleSheet } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import { store } from './redux';
import { PurchaseGiftsScreen } from './screens/common/purchaseGifts';
import { ConversationScreen } from './screens/home/chat';
import { GestureHandlerRootView } from 'react-native-gesture-handler';
import {
  AddYourPhotosScreen, AgePreferenceScreen, DateOfBirthScreen,
  GenderPreferenceScreen, GenderScreen, HelpCenterScreen,
  HomeScreen, InterestScreen, NameScreen, NotificationScreen, OnboardingScreen,
  OtpScreen, PhoneNumberScreen, ProfilePhotoScreen,
  PurchaseGemsScreen, PurchaseTokensScreen, SettingsScreen,
  ThemesPreviewScreen,
  ThemesScreen,
  VisibilityDistanceScreen
} from './screens';
import { FAQScreen } from './screens/common/faq';

export type RootStackParamList = {
  OnboardingScreen: undefined;
  PhoneNumberScreen: { isSignup: boolean };
  OtpScreen: { isSignup: boolean };
  NameScreen: undefined;
  DateOfBirthScreen: undefined;
  GenderScreen: undefined;
  GenderPreferenceScreen: undefined;
  ProfilePhotoScreen: undefined;
  AddYourPhotosScreen: undefined;
  VisibilityDistanceScreen: undefined;
  AgePreferenceScreen: undefined;
  InterestScreen: undefined;
  HomeScreen: undefined;
  PurchaseGemsScreen: undefined;
  PurchaseTokensScreen: undefined;
  PurchaseGiftsScreen: undefined;
  ConversationScreen: undefined;
  SettingsScreen: undefined;
  HelpCenterScreen: undefined;
  FAQScreen: undefined;
  NotificationsScreen: undefined;
  ThemesScreen: undefined;
  ThemesPreviewScreen: undefined;
};

const Stack = createNativeStackNavigator<RootStackParamList>();

function App(): JSX.Element {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Provider store={store}>
        <SafeAreaProvider style={styles.mainView}>
          <NavigationContainer>
            <Stack.Navigator screenOptions={{
              animation: 'none'
            }}>
              <Stack.Screen name="OnboardingScreen" component={OnboardingScreen} options={{ headerShown: false }} />
              <Stack.Screen name="PhoneNumberScreen" component={PhoneNumberScreen} options={{ headerShown: false }} />
              <Stack.Screen name="OtpScreen" component={OtpScreen} options={{ headerShown: false }} />
              <Stack.Screen name="NameScreen" component={NameScreen} options={{ headerShown: false }} />
              <Stack.Screen name="DateOfBirthScreen" component={DateOfBirthScreen} options={{ headerShown: false }} />
              <Stack.Screen name="GenderScreen" component={GenderScreen} options={{ headerShown: false }} />
              <Stack.Screen name="GenderPreferenceScreen" component={GenderPreferenceScreen} options={{ headerShown: false }} />
              <Stack.Screen name="ProfilePhotoScreen" component={ProfilePhotoScreen} options={{ headerShown: false }} />
              <Stack.Screen name="AddYourPhotosScreen" component={AddYourPhotosScreen} options={{ headerShown: false }} />
              <Stack.Screen name="VisibilityDistanceScreen" component={VisibilityDistanceScreen} options={{ headerShown: false }} />
              <Stack.Screen name="AgePreferenceScreen" component={AgePreferenceScreen} options={{ headerShown: false }} />
              <Stack.Screen name="InterestScreen" component={InterestScreen} options={{ headerShown: false }} />
              {/* Home screens */}
              <Stack.Screen name="HomeScreen" component={HomeScreen} options={{ headerShown: false }} />
              <Stack.Screen name="ConversationScreen" component={ConversationScreen} options={{ headerShown: false }} />
              {/* Common Screens */}
              <Stack.Screen name="PurchaseGemsScreen" component={PurchaseGemsScreen} options={{ headerShown: false }} />
              <Stack.Screen name="PurchaseTokensScreen" component={PurchaseTokensScreen} options={{ headerShown: false }} />
              <Stack.Screen name="PurchaseGiftsScreen" component={PurchaseGiftsScreen} options={{ headerShown: false }} />
              <Stack.Screen name="SettingsScreen" component={SettingsScreen} options={{ headerShown: false }} />
              <Stack.Screen name="HelpCenterScreen" component={HelpCenterScreen} options={{ headerShown: false }} />
              <Stack.Screen name="FAQScreen" component={FAQScreen} options={{ headerShown: false }} />
              <Stack.Screen name="NotificationsScreen" component={NotificationScreen} options={{ headerShown: false }} />
              <Stack.Screen name="ThemesScreen" component={ThemesScreen} options={{ headerShown: false }} />
              <Stack.Screen name="ThemesPreviewScreen" component={ThemesPreviewScreen} options={{ headerShown: false }} />
            </Stack.Navigator>
          </NavigationContainer>
        </SafeAreaProvider>
      </Provider>
    </GestureHandlerRootView>
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
