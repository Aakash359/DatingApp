import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { responsiveScreenWidth, responsiveScreenHeight, responsiveFontSize } from 'react-native-responsive-dimensions';
import { Layout } from '../../layout/layout';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import { ProfileIcon, RightArrow } from '../../assets';
import { COLORS, THEME, getBrandColor, getTextPrimaryColor, getTextSecondaryColor } from '../../utils/theme';
import { Button, Input } from '../../components';
import { Stepper } from '../../components/stepper.component';
import { useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';

type NameScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'NameScreen'
>;

export const NameScreen = () => {
    const navigation = useNavigation<NameScreenNavigationProp>();
    const [firstName, setFirstName] = React.useState('');
    const [lastName, setLastName] = React.useState('');
    const [firstNameError, setFirstNameError] = React.useState('');
    const [lastNameError, setLastNameError] = React.useState('');

    const validateName = (name: string) => {
        if(name.length === 0) return 'This field is required';
        const regex = /^[A-Za-z]+$/;
        return name.match(regex) ? '' : 'Name should only contain alphabets';
    };

    const handleNavigateToDOBScreen = () => {
        const firstNameError = validateName(firstName);
        const lastNameError = validateName(lastName);

        if (!firstNameError && !lastNameError) {
            navigation.navigate('DateOfBirthScreen');
        } else {
            setFirstNameError(firstNameError);
            setLastNameError(lastNameError);
        }
    };

    React.useEffect(() => {
        if (firstName) {
            setFirstNameError(validateName(firstName));
        }
    }, [firstName]);

    React.useEffect(() => {
        if (lastName) {
            setLastNameError(validateName(lastName));
        }
    }, [lastName]);

    return (
        <Layout>
            <KeyboardAwareScrollView contentContainerStyle={styles.mainScrollView}>
                <Stepper stepCount={11} activeSteps={3} />
                <View style={styles.mainWrapper}>
                    <View style={styles.headerWrapper}>
                        <ProfileIcon />
                        <Text style={styles.headerText}>WHAT'S YOUR NAME</Text>
                    </View>
                    <View style={styles.inputWrapper}>
                        <View style={styles.input}>
                            <Input
                                value={firstName}
                                setValue={setFirstName}
                                placeholder='FIRST NAME'
                                isError={!!firstNameError}
                            />
                            {
                                !!firstNameError && (
                                    <Text style={styles.errorText}>{firstNameError}</Text>
                                )
                            }
                        </View>
                        <View style={styles.input}>
                            <Input
                                value={lastName}
                                setValue={setLastName}
                                placeholder='LAST NAME'
                                isError={!!lastNameError}
                            />
                            {
                                !!lastNameError && (
                                    <Text style={styles.errorText}>{lastNameError}</Text>
                                )
                            }
                        </View>
                        <Text style={styles.inputDescription}>
                            This will be shown in your profile. and you wont be able to change it later
                        </Text>
                    </View>
                </View>
                <View style={styles.buttonWrapper}>
                    <Button
                        onPress={handleNavigateToDOBScreen}
                        imageSource={require('../../assets/gradients/splash.png')}
                        variant={firstNameError || lastNameError ? 'disabled' : "primary"}
                        height={responsiveScreenHeight(8)}
                    >
                        <RightArrow />
                    </Button>
                </View>
            </KeyboardAwareScrollView>
        </Layout>
    );
};

const styles = StyleSheet.create({
    mainScrollView: {
        display: 'flex',
        justifyContent: 'space-between',
        flex: 1,
    },
    mainWrapper: {
        flexGrow: 1,
    },
    footerTextWrapper: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: responsiveScreenWidth(1.5),
        maxWidth: responsiveScreenWidth(100),
        paddingHorizontal: responsiveScreenWidth(3),
        marginTop: responsiveScreenHeight(5),
    },
    buttonWrapper: {
        marginTop: responsiveScreenHeight(3),
        width: responsiveScreenHeight(8),
        marginBottom: responsiveScreenHeight(3),
        position: 'absolute',
        bottom: 0,
        right: responsiveScreenWidth(3),
    },
    headerWrapper: {
        display: 'flex',
        paddingHorizontal: responsiveScreenWidth(3),
        paddingTop: responsiveScreenHeight(3),
        height: responsiveScreenHeight(15),
    },
    headerText: {
        fontSize: responsiveFontSize(3),
        fontFamily: 'Audrey-Medium',
        color: getTextPrimaryColor(THEME.DARK),
        marginTop: responsiveScreenHeight(2),
    },
    inputWrapper: {
        paddingHorizontal: responsiveScreenWidth(3),
    },
    inputDescription: {
        marginTop: responsiveScreenHeight(2),
        fontSize: responsiveFontSize(2),
        fontFamily: 'RedHatDisplay-Regular',
        color: getTextSecondaryColor(THEME.DARK),
    },
    gradientText: {
        color: getBrandColor(THEME.LIGHT),
        fontFamily: 'RedHatDisplay-Regular',
        fontSize: responsiveFontSize(1.5),
    },
    inputDescriptionAlt: {
        fontSize: responsiveFontSize(1.5),
        fontFamily: 'RedHatDisplay-Regular',
        color: getTextSecondaryColor(THEME.DARK),
    },
    centeredView: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        marginTop: responsiveScreenHeight(4),
    },
    errorText: {
        color: COLORS.ERROR,
        fontSize: responsiveFontSize(1.5),
        fontFamily: 'RedHatDisplay-Regular',
        marginTop: responsiveScreenHeight(1),
    }
})