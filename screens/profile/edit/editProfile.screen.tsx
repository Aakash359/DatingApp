import React from "react"
import { Platform, ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Layout } from "../../../layout"
import { AddImageVerticalBox, LeftArrow } from "../../../assets"
import { responsiveScreenHeight, responsiveScreenWidth, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions"
import { getBorderPrimaryColor, getBrandColor, getBrandSecondaryColor, getTextPrimaryColor, THEME, uploadImageAndroid } from "../../../utils"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { RootStackParamList } from "../../../App"
import { useNavigation } from "@react-navigation/native"
import mime from "mime"
import { launchImageLibrary } from "react-native-image-picker"
import { interestPillData } from "../../../constants"
import { Pill } from "../../../components"

type EditProfileScreenScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'EditProfileScreen'
>;


export const EditProfileScreen = () => {

    const navigation = useNavigation<EditProfileScreenScreenNavigationProp>();

    const [isPhotoUploading, setIsPhotoUploading] = React.useState(false);
    const [photo, setPhoto] = React.useState('');

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
            <ScrollView>
                <View style={styles.mainWrapper}>
                    {/* header section */}
                    <View style={styles.headerWrapper}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <LeftArrow width={20} height={20} />
                        </TouchableOpacity>
                        <Text style={styles.headerText}>EDIT PROFILE</Text>
                    </View>
                    {/* profile photo section */}
                    <View style={styles.subHeaderWrapper}>
                        <Text style={styles.subHeaderText}>My photos</Text>
                    </View>
                    <View style={styles.bodyContainer}>
                        <TouchableOpacity onPress={handleOpenAddPhoto}>
                            <AddImageVerticalBox />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={handleOpenAddPhoto}>
                            <AddImageVerticalBox />
                        </TouchableOpacity>
                    </View>
                    {/* interests section */}
                    <View style={styles.subHeaderWrapper}>
                        <Text style={styles.subHeaderText}>My interests</Text>
                    </View>
                    <TouchableOpacity style={styles.interestsWrapper}>
                        <View style={styles.pillContainer}>
                            {interestPillData.map((item, index) => (
                                <View style={styles.inputDescriptionWrapper} key={index}>
                                    <Pill icon={item.icon} text={item.text} />
                                </View>
                            ))}
                        </View>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        </Layout>
    )
}

const styles = StyleSheet.create({
    // header section
    headerWrapper: {
        marginTop: responsiveScreenHeight(2),
        paddingHorizontal: responsiveScreenWidth(5),
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        gap: responsiveWidth(2),
    },
    headerText: {
        fontFamily: 'Audrey-Medium',
        fontSize: responsiveFontSize(3),
        color: getTextPrimaryColor(THEME.DARK)
    },
    mainWrapper: {
        // paddingHorizontal: responsiveScreenWidth(5),
        paddingVertical: responsiveScreenHeight(1),
        flex: 1
    },
    // photo section
    bodyContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: responsiveScreenWidth(8),
        paddingHorizontal: responsiveScreenWidth(3),
        marginTop: responsiveScreenHeight(3),
    },
    subHeaderWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        gap: responsiveScreenWidth(8),
        paddingHorizontal: responsiveScreenWidth(7),
        marginTop: responsiveScreenHeight(3),
    },
    subHeaderText: {
        fontSize: responsiveFontSize(3),
        fontFamily: 'Audrey-Medium',
        color: getTextPrimaryColor(THEME.DARK),
    },
    // interests section
    interestsWrapper: {
        borderColor: getBorderPrimaryColor(THEME.DARK),
        borderRadius: 2,
        borderStyle: 'dashed',
        borderWidth: 1,
        width: responsiveScreenWidth(86),
        height: 'auto',
        paddingHorizontal: responsiveScreenWidth(3),
        marginTop: responsiveScreenHeight(3),
        marginHorizontal: responsiveScreenWidth(7),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        flexWrap: 'wrap'
    },
    inputDescriptionWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: responsiveScreenWidth(1),
        // marginTop: responsiveScreenHeight(1.5),
    },
    pillContainer: {
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        justifyContent: 'flex-start',
        alignItems: 'center',
        gap: responsiveScreenWidth(2),
        marginTop: responsiveScreenHeight(2),
        width: responsiveScreenWidth(95),
        marginBottom: responsiveScreenHeight(3),
    },
})