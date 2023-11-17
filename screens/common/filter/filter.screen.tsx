import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import React from "react";
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { RootStackParamList } from "../../../App";
import { useNavigation } from "@react-navigation/native";
import { LeftArrow } from "../../../assets";
import { responsiveScreenHeight, responsiveScreenWidth, responsiveWidth, responsiveFontSize, responsiveScreenFontSize } from "react-native-responsive-dimensions";
import { getTextButtonColor, getTextPrimaryColor, THEME } from "../../../utils";
import { Layout } from "../../../layout";
import { CheckboxButtonArea, ClickableArea, CustomRangeSlider, CustomSlider } from "../../../components";

type FilterScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'FilterScreen'
>;

const lookingForFilterOptions = [
    {
        id: '1',
        text: 'Men'
    },
    {
        id: '2',
        text: 'Women'
    },
    {
        id: '3',
        text: 'Non binary'
    }
]

const educationalLevelFilterOptions = [
    {
        id: '1',
        text: 'All'
    },
    {
        id: '2',
        text: 'Primary education'
    },
    {
        id: '3',
        text: 'Secondary education'
    },
    {
        id: '4',
        text: 'Vocational education'
    }
]

export const FilterScreen = () => {
    const navigation = useNavigation<FilterScreenNavigationProp>();
    const [lookingForFilterIds, setLookingForFilterIds] = React.useState<string[]>([]);
    const [educationalLevelFilterIds, setEducationalLevelFilterIds] = React.useState<string[]>([]);
    const [ageValues, setAgeValues] = React.useState([18, 32]);
    const [distance, setDistance] = React.useState(100);

    const handleInterestPress = () => {}
    const handleAdvancedFiltersPress = () => {}

    return (
        <Layout>
            <View style={styles.mainWrapper}>
                {/* header section */}
                <View style={styles.headerWrapper}>
                    <TouchableOpacity onPress={() => navigation.goBack()}>
                        <LeftArrow width={20} height={20} />
                    </TouchableOpacity>
                    <Text style={styles.headerText}>FILTERS</Text>
                </View>
                <ScrollView>
                    <Text style={styles.filterLabelText}>I'm looking for</Text>
                    {lookingForFilterOptions.map((options, index) => {
                        return (
                            <View
                                key={index + options.id}
                                style={styles.radioButtonAreaWrapper}
                            >
                                <CheckboxButtonArea
                                    id={options.id}
                                    selectedIds={lookingForFilterIds}
                                    setSelectedIds={setLookingForFilterIds}
                                    height={responsiveScreenHeight(6)}
                                    bordersHidden
                                >
                                    <Text style={styles.radioText}>{options.text}</Text>
                                </CheckboxButtonArea>
                            </View>
                        )
                    })}
                    <Text style={styles.filterLabelText}>Educational level</Text>
                    {educationalLevelFilterOptions.map((options, index) => {
                        return (
                            <View
                                key={index + options.id}
                                style={styles.radioButtonAreaWrapper}
                            >
                                <CheckboxButtonArea
                                    id={options.id}
                                    selectedIds={educationalLevelFilterIds}
                                    setSelectedIds={setEducationalLevelFilterIds}
                                    height={responsiveScreenHeight(6)}
                                    bordersHidden
                                >
                                    <Text style={styles.radioText}>{options.text}</Text>
                                </CheckboxButtonArea>
                            </View>
                        )
                    })}
                    <Text style={styles.filterLabelText}>Age</Text>
                    <View style={styles.ageBodyContainer}>
                        <CustomRangeSlider
                            sliderValues={ageValues}
                            setSliderValues={setAgeValues}
                        />
                    </View>
                    <View style={styles.ageSliderTextContainer}>
                        <Text style={styles.sliderText}>MIN: {Math.round(ageValues[0])}</Text>
                        <Text style={styles.sliderText}>MAX: {Math.round(ageValues[1])}</Text>
                    </View>
                    <Text style={styles.filterLabelText}>Distance</Text>
                    <View style={styles.distanceBodyContainer}>
                        <CustomSlider sliderValue={distance} setSliderValue={setDistance} sliderStyle={styles.sliderStyle} />
                    </View>
                    <View style={styles.distanceTextContainer}>
                        <Text style={styles.sliderText}>{Math.round(distance)} KM</Text>
                    </View>
                    <View style={styles.clickableAreaWrapper}>
                        <ClickableArea
                            title='Interests'
                            height={responsiveScreenHeight(6)}
                            onPress={handleInterestPress}
                        />
                        <ClickableArea
                            title='Advanced Filters'
                            height={responsiveScreenHeight(6)}
                            onPress={handleAdvancedFiltersPress}
                        />
                    </View>
                </ScrollView>
            </View>
        </Layout>
    )
};

const styles = StyleSheet.create({
    headerWrapper: {
        marginTop: responsiveScreenHeight(2),
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
        paddingHorizontal: responsiveScreenWidth(5),
        paddingVertical: responsiveScreenHeight(1),
        flex: 1
    },
    filterLabelText: {
        fontFamily: 'RedHatDisplay-SemiBold',
        color: getTextButtonColor(THEME.DARK),
        fontSize: responsiveScreenFontSize(2),
        marginVertical: responsiveScreenHeight(1.5)
    },
    radioButtonAreaWrapper: {
        width: responsiveScreenWidth(90),
        marginBottom: responsiveScreenHeight(1)
    },
    radioText: {
        fontFamily: 'RedHatDisplay-Regular',
        color: getTextButtonColor(THEME.DARK),
        marginHorizontal: responsiveScreenWidth(5),
        fontSize: responsiveScreenFontSize(2.25)
    },
    ageBodyContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: responsiveScreenWidth(3),
        marginTop: responsiveScreenHeight(5),
    },
    ageSliderTextContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        gap: responsiveScreenWidth(20),
        marginTop: responsiveScreenHeight(1),
    },
    sliderText: {
        fontSize: responsiveFontSize(2.5),
        fontFamily: 'Audrey-Medium',
        color: getTextPrimaryColor(THEME.DARK),
    },
    distanceBodyContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        paddingHorizontal: responsiveScreenWidth(3),
        marginTop: responsiveScreenHeight(5),
    },
    sliderStyle: {
        display: 'flex',
        justifyContent: 'center',
        marginLeft: responsiveScreenWidth(3),
        width: '95%',
        height: responsiveScreenHeight(10),
    },
    distanceTextContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        marginTop: responsiveScreenHeight(1),
    },
    clickableAreaWrapper: {
        display: 'flex',
        marginVertical: responsiveScreenHeight(1),
        gap: responsiveScreenHeight(1),
    }
});