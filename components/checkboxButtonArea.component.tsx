import React from 'react';
import { StyleSheet, View, TouchableOpacity } from 'react-native';
import { responsiveHeight, responsiveScreenWidth, responsiveScreenHeight } from 'react-native-responsive-dimensions';
import { COLORS, getBrandColor, getRadioGroupBackgroundColor, THEME } from '../utils';
import LinearGradient from 'react-native-linear-gradient';
import { CheckBox } from './checkBox.component';

interface CheckboxButtonAreaProps {
    id: string;
    selectedIds: string[];
    setSelectedIds: React.Dispatch<React.SetStateAction<string[]>>;
    height?: number;
    children: React.ReactNode | JSX.Element;
    width?: number;
    bordersHidden?: boolean
    borderRadius?: number
    zeroBorderRadius?: boolean
}

export const CheckboxButtonArea = ({ id, selectedIds, setSelectedIds, height, children, width, bordersHidden, zeroBorderRadius }: CheckboxButtonAreaProps) => {

    const handleCheckboxButtonPress = () => {
        if (selectedIds.includes(id)) {
            setSelectedIds(selectedIds.filter(selectedId => selectedId !== id));
        } else {
            setSelectedIds([...selectedIds, id]);
        }
    };

    const isCheckboxSelected = selectedIds.includes(id);

    return (
        <TouchableOpacity activeOpacity={1} onPress={handleCheckboxButtonPress}>
            <LinearGradient
                start={{ x: 0, y: 0 }}
                end={{ x: 0.5, y: 1 }}
                colors={[getBrandColor(THEME.LIGHT), getBrandColor(THEME.DARK)]}
                style={{
                    alignItems: 'center',
                    justifyContent: 'center',
                    borderRadius: zeroBorderRadius ? 0 : 5,
                    width: width ? width : 'auto',
                    paddingHorizontal: isCheckboxSelected ? responsiveScreenWidth(0.3) : 0,
                    paddingVertical: isCheckboxSelected ? responsiveScreenHeight(0.2) : 0,
                    zIndex: -1,
                }}
            >
                <View style={[styles.mainWrapper, {
                    height: height ? isCheckboxSelected ? height - responsiveScreenHeight(0.4) : height : isCheckboxSelected ? responsiveHeight(10) - responsiveScreenHeight(0.4) : responsiveHeight(10),
                    width: '100%',
                    paddingHorizontal: isCheckboxSelected ? 0 : responsiveScreenWidth(0.3),
                    paddingVertical: isCheckboxSelected ? 0 : responsiveScreenHeight(0.2),
                    borderRadius: zeroBorderRadius ? 0 : 5,
                    borderWidth: bordersHidden ? 0 : 1,
                }]}>
                    <View>
                        {children}
                    </View>
                    <View style={{ marginRight: responsiveScreenWidth(4) }}>
                        <CheckBox isChecked={isCheckboxSelected} onPress={handleCheckboxButtonPress} />
                    </View>
                </View>
            </LinearGradient>
        </TouchableOpacity>
    )
};

const styles = StyleSheet.create({
    mainWrapper: {
        position: 'relative',
        backgroundColor: getRadioGroupBackgroundColor(THEME.DARK),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: responsiveScreenWidth(3),
    },
    // You can add additional styles if needed
});
