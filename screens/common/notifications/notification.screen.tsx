import React from "react";
import { Layout } from "../../../layout";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { LeftArrow } from "../../../assets";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../App";
import { useNavigation } from "@react-navigation/native";
import { responsiveScreenWidth, responsiveWidth, responsiveFontSize, responsiveScreenHeight } from "react-native-responsive-dimensions";
import { getTextPrimaryColor, THEME } from "../../../utils";
import { FilterMenuIcon } from "../../../assets/icons/filterMenu.icon";
import { NotificationComponent } from "../../../components";
import { NotificationsData } from "../../../constants/notification.data";

type NotificationsScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'NotificationsScreen'
>;

export const NotificationScreen = () => {

    const navigation = useNavigation<NotificationsScreenNavigationProp>();

    return (
        <Layout>
            <View style={styles.mainWrapper}>
                {/* header section */}
                <View style={styles.headerWrapperPrimary}>
                    <View style={styles.headerWrapper}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <LeftArrow width={20} height={20} />
                        </TouchableOpacity>
                        <Text style={styles.headerText}>NOTIFICATIONS</Text>
                    </View>
                    <TouchableOpacity>
                        <FilterMenuIcon />
                    </TouchableOpacity>
                </View>
                {/* notfications section */}
                <View style={styles.notficationsWrapper}>
                    {NotificationsData.map((notification, index) => (
                        <NotificationComponent
                            key={index}
                            type={notification.type}
                            name={notification.name}
                            date={notification.date}
                            giftType={notification.giftType}
                            giftAmount={notification.giftAmount}
                            isSeen={true}
                        />
                    ))}
                </View>
            </View>
        </Layout>
    )
}

const styles = StyleSheet.create({
    // header styles
    headerWrapperPrimary: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingRight: responsiveScreenWidth(5),
    },
    headerWrapper: {
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
    notficationsWrapper: {
        // width: responsiveScreenWidth(90),
        display: 'flex',
        flexDirection: 'column'
    }
})