declare global {
  type RootStackParamList = {
    OnboardingScreen: undefined;
    PhoneNumberScreen: {isSignup: boolean};
    OtpScreen: {isSignup: boolean};
    NameScreen: undefined;
    DateOfBirthScreen: undefined;
    GenderScreen: undefined;
    GenderPreferenceScreen: undefined;
    ProfilePhotoScreen: undefined;
    AddYourPhotosScreen: undefined;
    VisibilityDistanceScreen: undefined;
    AgePreferenceScreen: undefined;
    InterestScreen: undefined;
  };

  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList { }
  }
}
