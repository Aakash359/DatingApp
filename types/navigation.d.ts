declare global {
    type RootStackParamList = {
        OnboardingScreen: undefined;
        PhoneNumberScreen: undefined;
        OtpScreen: undefined;
        NameScreen: undefined;
        DateOfBirthScreen: undefined;
        GenderScreen: undefined;
        GenderPreferenceScreen: undefined;
        ProfilePhotoScreen: undefined;
    };
  
    namespace ReactNavigation {
      interface RootParamList extends RootStackParamList {}
    }
  }
  