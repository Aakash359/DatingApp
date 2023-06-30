import React from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';
import { responsiveHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import { MenuIcon } from '../assets/icons/menu.icon';
import { FilterMenuIcon } from '../assets/icons/filterMenu.icon';
import { THEME, getTextButtonColor } from '../utils';

export const MainHeader: React.FC = () => {
    return (
        <View style={styles.mainWrapper}>
            <TouchableOpacity>
                <MenuIcon />
            </TouchableOpacity>
            <Text style={styles.headerText}>MANIFEST</Text>
            <TouchableOpacity>
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