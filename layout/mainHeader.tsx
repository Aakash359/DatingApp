import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { responsiveHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import { MenuIcon } from '../assets/icons/menu.icon';
import { FilterMenuIcon } from '../assets/icons/filterMenu.icon';
import { THEME, getTextButtonColor } from '../utils';
import { useNavigation } from '@react-navigation/native';
import { DrawerNavigationProp } from '@react-navigation/drawer';
import { RootStackParamList } from '../App';

export const MainHeader: React.FC = () => {
    const navigation = useNavigation<DrawerNavigationProp<RootStackParamList>>();

    const handleMenuIconPress = () => {
        navigation.openDrawer();
    }

    const handleFilterIconPress = () => {
        navigation.navigate('FilterScreen');
    }

    return (
        <View style={styles.mainWrapper}>
            <TouchableOpacity onPress={handleMenuIconPress}>
                <MenuIcon />
            </TouchableOpacity>
            <Text style={styles.headerText}>MANIFEST</Text>
            <TouchableOpacity onPress={handleFilterIconPress}>
                <FilterMenuIcon />
            </TouchableOpacity>
        </View>
    )
}

const styles = StyleSheet.create({
    mainWrapper: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: responsiveScreenWidth(3),
        marginVertical: responsiveHeight(2),
    },
    headerText: {
        fontSize: responsiveScreenWidth(7),
        fontFamily: 'Audrey-Medium',
        color: getTextButtonColor(THEME.DARK),
    }
})