import React from "react";
import { Layout } from "../../../layout";
import { View, Text, TouchableOpacity, StyleSheet } from "react-native";
import { LeftArrow, NoNotificationIcon } from "../../../assets";
import { NativeStackNavigationProp } from "@react-navigation/native-stack";
import { RootStackParamList } from "../../../App";
import { useNavigation } from "@react-navigation/native";
import { responsiveScreenWidth, responsiveWidth, responsiveFontSize, responsiveScreenHeight, responsiveHeight, responsiveScreenFontSize } from "react-native-responsive-dimensions";
import { getTextButtonColor, getTextPrimaryColor, THEME } from "../../../utils";
import { FilterMenuIcon } from "../../../assets/icons/filterMenu.icon";
import { NotificationComponent, RadioButtonArea } from "../../../components";
import { NotificationsData } from "../../../constants/notification.data";
import { ScrollView } from "react-native-gesture-handler";
import Modal from "react-native-modal/dist/modal";
import { LikesModal } from "../../home";

type NotificationsScreenNavigationProp = NativeStackNavigationProp<
    RootStackParamList,
    'NotificationsScreen'
>;

export const NotificationScreen = () => {

    const navigation = useNavigation<NotificationsScreenNavigationProp>();
    const [isModalVisible, setIsModalVisible] = React.useState(false);
    const [selectedId, setSelectedId] = React.useState('');

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
                    <TouchableOpacity onPress={() => setIsModalVisible(true)}>
                        <FilterMenuIcon />
                    </TouchableOpacity>
                </View>
                {/* notfications section */}
                {NotificationsData?.length > 0 ? <ScrollView style={styles.notficationsWrapper}>
                    {NotificationsData.map((notification, index) => (
                        <NotificationComponent
                            key={index + notification.date.toString()}
                            type={notification.type}
                            name={notification.name}
                            date={notification.date}
                            giftType={notification.giftType}
                            giftAmount={notification.giftAmount}
                            isSeen={notification.isSeen}
                        />
                    ))}
                </ScrollView> :
                    <View style={styles.noNotificationsPresentWrapper}>
                        <NoNotificationIcon />
                        <Text style={styles.headerText}>NO NOTIFICATIONS</Text>
                    </View>
                }
                <Modal
                    useNativeDriverForBackdrop={true}
                    style={styles.modal}
                    onBackdropPress={() => setIsModalVisible(false)}
                    isVisible={isModalVisible}>
                    <LikesModal
                        // modalHeader='FILTERS'
                        isNoHeader
                        nextButtonText='APPLY'
                        onNextPress={() => {
                            setIsModalVisible(false)
                        }}
                        onBackPress={() => console.log('e')}
                    >
                        <View style={styles.clearWrapper}>
                            <Text style={styles.clearText}>
                                Clear Filter
                            </Text>
                        </View>
                        <View style={styles.radioButtonAreaWrapper}>
                            <RadioButtonArea
                                id={'1'}
                                selectedId={selectedId}
                                setSelectedId={setSelectedId}
                                isBestValue={false}
                                height={responsiveScreenHeight(7)}
                            >
                                <Text style={styles.radioText}>Likes</Text>
                            </RadioButtonArea>
                        </View>
                        <View style={styles.radioButtonAreaWrapper}>
                            <RadioButtonArea
                                id={'2'}
                                selectedId={selectedId}
                                setSelectedId={setSelectedId}
                                isBestValue={false}
                                height={responsiveScreenHeight(7)}
                            >
                                <Text style={styles.radioText}>Gifts</Text>
                            </RadioButtonArea>
                        </View>
                        <View style={styles.radioButtonAreaWrapper}>
                            <RadioButtonArea
                                id={'3'}
                                selectedId={selectedId}
                                setSelectedId={setSelectedId}
                                isBestValue={false}
                                height={responsiveScreenHeight(7)}
                            >
                                <Text style={styles.radioText}>Matches</Text>
                            </RadioButtonArea>
                        </View>
                    </LikesModal>
                </Modal>
            </View>
        </Layout>
    )
}

const styles = StyleSheet.create({
    modal: {
        width: '100%',
        height: '100%',
        maxHeight: '100%',
        display: 'flex',
        justifyContent: 'flex-end',
        alignItems: 'flex-end',
        backgroundColor: 'rgba(0,0,0,0.5)',
        margin: 0,
    },
    // header styles
    headerWrapperPrimary: {
        marginTop: responsiveScreenHeight(2),
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
        flexDirection: 'column',
        marginVertical: responsiveScreenWidth(5),
    },
    noNotificationsPresentWrapper: {
        flex: 1,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: responsiveScreenHeight(3)
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
    clearText: {
        fontFamily: 'RedHatDisplay-Regular',
        color: getTextButtonColor(THEME.DARK),
        fontSize: responsiveScreenFontSize(2.5),
        textDecorationLine: 'underline'
    },
    clearWrapper: {
        display: 'flex',
        alignItems: 'flex-end',
        width: responsiveScreenWidth(90),
        marginBottom: responsiveScreenHeight(3),
    }
})