import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity, Platform } from 'react-native';
import { responsiveScreenWidth, responsiveScreenHeight, responsiveFontSize } from 'react-native-responsive-dimensions';
import { Layout } from '../../layout/layout';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view'
import { AddImageVerticalBox, ImageIcon, RightArrow } from '../../assets';
import { THEME, getTextPrimaryColor } from '../../utils/theme';
import { Button } from '../../components';
import { Stepper } from '../../components/stepper.component';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { RootStackParamList } from '../../App';
import mime from 'mime';
import { useNavigation } from '@react-navigation/native';
import { launchImageLibrary } from 'react-native-image-picker';
import { uploadImageAndroid } from '../../utils';

type otpScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'AddYourPhotosScreen'
>;

export const AddYourPhotosScreen = () => {
    const navigation = useNavigation<otpScreenNavigationProp>();
    const [isPhotoUploading, setIsPhotoUploading] = React.useState(false);
    const [photo, setPhoto] = React.useState('');
    const handleNavigateToProfilePhotoScreen = () => {
        navigation.navigate('VisibilityDistanceScreen')
    };

    const handleOpenAddPhoto = async () => {
        const result = await launchImageLibrary({
            mediaType: 'photo',
            selectionLimit: 1,
        });
        if (result?.assets?.[0]?.uri) {
            try {
                setIsPhotoUploading(true);
                const asset = result.assets[0];
                if (asset && asset.uri) {
                    const newImageUri =
                        Platform.OS === 'android'
                            ? asset.uri
                            : asset.uri.replace('file://', '');

                    const file = {
                        name: asset.uri.split('/').pop(),
                        type: mime.getType(newImageUri),
                        uri: newImageUri,
                    };
                    const resp = await uploadImageAndroid(file);
                    setPhoto(resp[0].location);
                }
                setIsPhotoUploading(false);
            } catch (e) {
                setIsPhotoUploading(false);
            }
        }
    };

    return (
        <Layout>
            <KeyboardAwareScrollView contentContainerStyle={styles.mainScrollView}>
                <Stepper stepCount={11} activeSteps={8} />
                <View style={styles.mainWrapper}>
                    <View style={styles.headerWrapper}>
                        <ImageIcon />
                        <Text style={styles.headerText}>ADD PROFILE PHOTO</Text>
                    </View>
                    <View style={styles.bodyContainer}>
                        <TouchableOpacity onPress={handleOpenAddPhoto}>
                            <AddImageVerticalBox />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleOpenAddPhoto}>
                            <AddImageVerticalBox />
                        </TouchableOpacity>
                    </View>
                </View>
                <View style={styles.footerWrapper}>
                    <View style={styles.buttonWrapper}>
                        <Button
                            onPress={handleNavigateToProfilePhotoScreen}
                            imageSource={require('../../assets/gradients/splash.png')}
                            variant="primary"
                            height={responsiveScreenHeight(8)}
                        >
                            <RightArrow />
                        </Button>
                    </View>
                </View>
            </KeyboardAwareScrollView>
        </Layout>
    )
}

const styles = StyleSheet.create({
    mainScrollView: {
        display: 'flex',
        justifyContent: 'space-between',
        flex: 1,
    },
    mainWrapper: {
        flexGrow: 1,
    },
    footerWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        height: responsiveScreenHeight(10),
        width: responsiveScreenWidth(60),
        marginBottom: responsiveScreenHeight(2),
    },
    buttonWrapper: {
        marginTop: responsiveScreenHeight(3),
        width: responsiveScreenHeight(8),
        marginBottom: responsiveScreenHeight(3),
        marginStart: responsiveScreenWidth(80),
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
    image: {
        display: 'flex',
        justifyContent: 'center',
        height: responsiveScreenHeight(40),
        width: responsiveScreenWidth(100),
        transform: [{ scale: responsiveFontSize(0.7) }],
        marginTop: responsiveScreenHeight(5),
        position: 'relative',
    },
    iconContainer: {
        position: 'absolute',
        bottom: responsiveScreenHeight(5),
        right: responsiveScreenWidth(20),
        transform: [{ scale: responsiveFontSize(0.17) }],
    },
    bodyContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: responsiveScreenWidth(8),
        paddingHorizontal: responsiveScreenWidth(3),
        marginTop: responsiveScreenHeight(5),
    },
})