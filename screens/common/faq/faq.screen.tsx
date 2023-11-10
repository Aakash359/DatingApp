import React from "react"
import { StyleSheet, Text, TouchableOpacity, View } from "react-native"
import { Layout } from "../../../layout"
import { useNavigation } from "@react-navigation/native"
import { FAQSearchIcon, LeftArrow } from "../../../assets"
import { responsiveScreenHeight, responsiveScreenWidth, responsiveWidth, responsiveFontSize } from "react-native-responsive-dimensions"
import { getTextPrimaryColor, THEME } from "../../../utils"
import { GradientText } from "../../../assets/gradients/gradientText"
import { FAQComponent, SearchInput } from "../../../components"
import { ScrollView } from "react-native-gesture-handler"

export const FAQScreen = () => {
    const navigation = useNavigation();
    const [searchText, setSearchText] = React.useState('')
    return (
        <Layout>
            <View style={styles.mainWrapper}>
                {/* header section */}
                <View style={styles.headerWrapper}>
                    <View style={styles.headerLeftWrapper}>
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <LeftArrow width={20} height={20} />
                        </TouchableOpacity>
                        <Text style={styles.headerText}>FAQ'S</Text>
                    </View>
                    <TouchableOpacity style={styles.gradientTextWrapper}>
                        <GradientText fontSize={20} isUnderlinedText={true}>
                            Get in touch
                        </GradientText>
                    </TouchableOpacity>
                    {/* search input section */}
                </View>
                {/* search input section */}
                <View style={styles.searchInputWrapper}>
                    <SearchInput
                        CustomSearchIcon={<FAQSearchIcon/>}
                        searchText={searchText}
                        setSearchText={setSearchText}
                        placeholder="Search Question"
                    />
                </View>
                {/* faq section */}
                <ScrollView style={styles.scrollViewStyle}>
                    <FAQComponent
                        question="How can I purchase and gift a rose in manifest?"
                        answer="You can visit rose shop by clicking rose icon on your profile, you can buy it by using gens that can be purchased with real money, watch video for mode help"
                    />
                    <FAQComponent
                        question="How can I purchase and gift a rose in manifest?"
                        answer="You can visit rose shop by clicking rose icon on your profile, you can buy it by using gens that can be purchased with real money, watch video for mode help"
                    />
                    <FAQComponent
                        question="How can I purchase and gift a rose in manifest?"
                        answer="You can visit rose shop by clicking rose icon on your profile, you can buy it by using gens that can be purchased with real money, watch video for mode help"
                    />
                    <FAQComponent
                        question="How can I purchase and gift a rose in manifest How can I purchase and gift a rose in manifest?"
                        answer="You can visit rose shop by clicking rose icon on your profile, you can buy it ou can visit rose shop by clicking rose icon on your profile, you can buy it ou can visit rose shop by clicking rose icon on your profile, you can buy it by using gens that can be purchased with real money, watch video for mode help"
                    />
                    <FAQComponent
                        question="How can I purchase and gift a rose in manifest?"
                        answer="You can visit rose shop by clicking rose icon on your profile, you can buy it by using gens that can be purchased with real money, watch video for mode help"
                    />
                    <FAQComponent
                        question="How can I purchase and gift a rose in manifest?"
                        answer="You can visit rose shop by clicking rose icon on your profile, you can buy it by using gens that can be purchased with real money, watch video for mode help"
                    />
                    <FAQComponent
                        question="How can I purchase and gift a rose in manifest?"
                        answer="You can visit rose shop by clicking rose icon on your profile, you can buy it by using gens that can be purchased with real money, watch video for mode help"
                    />
                    <FAQComponent
                        question="is this the last question?"
                        answer="You can visit rose shop by clicking rose icon on your profile, you can buy it by using gens that can be purchased with real money, watch video for mode help"
                    />
                </ScrollView>
            </View>
        </Layout>
    )
}

const styles = StyleSheet.create({
    mainWrapper: {
        flexGrow: 1,
        marginVertical: responsiveScreenHeight(1)
    },
    // header styles
    headerWrapper: {
        marginTop: responsiveScreenHeight(2),
        paddingHorizontal: responsiveScreenWidth(5),
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        gap: responsiveWidth(2),
    },
    headerLeftWrapper: {
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
    gradientTextWrapper: {
        // backgroundColor: 'red',
        height: responsiveScreenHeight(3.5),
        width: responsiveScreenWidth(30)
    },
    // search input styles
    searchInputWrapper: {
        width: responsiveScreenWidth(90),
        alignSelf: 'center',
        marginTop: responsiveScreenHeight(2)
    },
    scrollViewStyle: {
        flexGrow: 1, // This is important to make the ScrollView content-flexible,
        height: responsiveScreenHeight(75)
    },
})