import React from "react";
import { StyleSheet, TextInput, View } from "react-native";
import { SearchIcon } from "../assets";
import { responsiveFontSize, responsiveScreenHeight, responsiveScreenWidth } from "react-native-responsive-dimensions";
import { THEME, getPlaceholderTextColor, getSearchInputBorderColor, getTextPrimaryColor } from "../utils";

interface Props {
    placeholder: string;
    searchText: string;
    setSearchText: React.Dispatch<React.SetStateAction<string>>;
    CustomSearchIcon?: any;
}

export const SearchInput: React.FC<Props> = (props) => {
    const { CustomSearchIcon } = props;
    return (
        <View style={styles.wrapper}>
            <TextInput
                style={styles.textInput}
                placeholder={props.placeholder}
                placeholderTextColor={getPlaceholderTextColor(THEME.DARK)}
                value={props.searchText}
                onChangeText={props.setSearchText}
            />
            <View style={styles.searchIconWrapper}>
                {CustomSearchIcon ? CustomSearchIcon : <SearchIcon />}
            </View>
        </View>
    )
};

const styles = StyleSheet.create({
    wrapper: {
        // backgroundColor: 'red',
        position: 'relative',
    },
    searchIconWrapper: {
        position: 'absolute',
        // backgroundColor: 'blue',
        width: 30,
        height: 30,
        top: responsiveScreenHeight(1),
        marginHorizontal: responsiveScreenWidth(1.5)
        // marginHorizontal: responsiveScreenWidth(2),
        // marginVertical: responsiveScreenHeight(1.5),
    },
    textInput: {
        borderWidth: 1,
        paddingHorizontal: 40,
        borderRadius: 10,
        height: responsiveScreenHeight(5),
        borderColor: getSearchInputBorderColor(THEME.DARK),
        fontFamily: 'RedHatDisplay-Regular',
        color: getTextPrimaryColor(THEME.DARK),
        fontSize: responsiveFontSize(2),
    }
});