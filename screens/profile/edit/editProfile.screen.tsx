import React from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Layout } from "../../../layout"
import { LeftArrow } from "../../../assets"
import { responsiveScreenHeight, responsiveScreenWidth, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions"
import { getTextPrimaryColor, THEME } from "../../../utils"
import { NativeStackNavigationProp } from "@react-navigation/native-stack"
import { RootStackParamList } from "../../../App"
import { useNavigation } from "@react-navigation/native"

type EditProfileScreenScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'EditProfileScreen'
>;


export const EditProfileScreen = () => {

    const navigation = useNavigation<EditProfileScreenScreenNavigationProp>();

    return (
        <Layout>
            <View style={styles.mainWrapper}>
                {/* header section */}
                <View style={styles.headerWrapper}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <LeftArrow width={20} height={20} />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>EDIT PROFILE</Text>
                </View>
            </View>
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
})