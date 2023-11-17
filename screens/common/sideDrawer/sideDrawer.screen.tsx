import React, { useMemo } from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Layout } from "../../../layout";
import { DrawerContentComponentProps, DrawerNavigationProp } from "@react-navigation/drawer";
import { GemLargeIcon, GiftIcon, ManifestLargeIcon } from "../../../assets";
import { responsiveScreenFontSize, responsiveScreenHeight, responsiveScreenWidth } from "react-native-responsive-dimensions";
import { THEME, getDarkBackgroundColor, getTextPrimaryColor } from "../../../utils";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../App";
import { useNavigation } from "@react-navigation/native";

interface Props extends DrawerContentComponentProps {

}

type SideDrawerNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'SettingsScreen'
> & { [key: string]: any };


export const SideDrawerScreen: React.FC<DrawerContentComponentProps> = ({ }) => {
    const navigation = useNavigation<DrawerNavigationProp<SideDrawerNavigationProp>>();
    const sideDrawerMenuOptions = useMemo(() => {
        return [
            {
                label: 'Edit Profile',
                onPress: () => {
                    navigation.navigate('EditProfileScreen');
                }
            },
            {
                label: 'Settings',
                onPress: () => {
                    navigation.navigate('SettingsScreen');
                }
            },
            {
                label: 'Notifications',
                onPress: () => {
                    navigation.navigate('NotificationsScreen');
                }
            },
            {
                label: 'Inventory',
                onPress: () => {
                    navigation.navigate('InventoryScreen');
                }
            },
            {
                label: 'Gems Shop',
                onPress: () => {
                    navigation.navigate('PurchaseGemsScreen');
                }
            },
            {
                label: 'Tokens Shop',
                onPress: () => {
                    navigation.navigate('PurchaseTokensScreen');
                }
            },
            {
                label: 'Gifts Shop',
                onPress: () => {
                    navigation.navigate('PurchaseGiftsScreen');
                }
            },
            {
                label: 'Help Center',
                onPress: () => {
                    navigation.navigate('HelpCenterScreen');
                }
            },
            {
                label: 'FAQ',
                onPress: () => {
                    navigation.navigate('FAQScreen');
                }
            },
            {
                label: 'Themes',
                onPress: () => {
                    navigation.navigate('ThemesScreen');
                }
            },
        ]
    }, [])
    return (
        <Layout>
            <ScrollView style={styles.drawerWrapper}>
                <View style={styles.drawerContainer}>
                    <View style={styles.currencyAmountWrapper}>
                        <View style={styles.gemWrapper}>
                            <GemLargeIcon />
                        </View>
                        <Text style={styles.currencyQtyText}>200</Text>
                    </View>
                    <View style={styles.currencyAmountWrapper}>
                        <View style={styles.gemWrapper}>
                            <ManifestLargeIcon />
                        </View>
                        <Text style={styles.currencyQtyText}>200</Text>
                    </View>
                    <View style={styles.currencyAmountWrapper}>
                        <View style={[styles.gemWrapper, {
                            transform: [{ scale: 0.85 }],
                            // backgroundColor: 'red',
                            width: responsiveScreenWidth(10),
                            marginLeft: responsiveScreenWidth(1),
                            height: responsiveScreenHeight(3),
                        }]}>
                            <GiftIcon />
                        </View>
                        <Text style={styles.currencyQtyText}>200</Text>
                    </View>
                </View>
                {
                    sideDrawerMenuOptions.map((data, index) => {
                        return (
                            <TouchableOpacity
                                style={styles.drawerItem}
                                key={index + data.label}
                                onPress={data.onPress}
                            >
                                <Text style={styles.drawerText}>{data.label}</Text>
                            </TouchableOpacity>
                        )
                    })
                }
            </ScrollView>
        </Layout>
    )
};

const styles = StyleSheet.create({
    drawerWrapper: {
        width: responsiveScreenWidth(70),
        paddingVertical: responsiveScreenHeight(2),
        paddingHorizontal: responsiveScreenWidth(3.5),
        // backgroundColor: 'green',
    },
    drawerContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: responsiveScreenWidth(60),
    },
    currencyAmountWrapper: {
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        // backgroundColor: 'green',
        gap: -responsiveScreenWidth(2),
    },
    gemWrapper: {
        // scale it down to 40%,
        // backgroundColor: 'blue',
        transform: [{ scale: 0.4 }],
        width: responsiveScreenWidth(15),
        marginLeft: -responsiveScreenWidth(2),
    },
    currencyQtyText: {
        color: getTextPrimaryColor(THEME.DARK),
        fontSize: responsiveScreenFontSize(2),
        // backgroundColor: 'red',
    },
    drawerItem: {
        paddingVertical: responsiveScreenHeight(1.5),
        marginVertical: responsiveScreenHeight(1),
        // backgroundColor: getDarkBackgroundColor(THEME.DARK),
        borderRadius: 8,
        paddingHorizontal: responsiveScreenWidth(2),
    },
    drawerText: {
        color: getTextPrimaryColor(THEME.DARK),
        fontSize: responsiveScreenFontSize(2),
    }
});