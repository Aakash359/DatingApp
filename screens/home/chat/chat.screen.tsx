import React from 'react'
import { Layout } from '../../../layout'
import { View, Text, StyleSheet, FlatList } from 'react-native'
import { responsiveFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions'
import { THEME, getTextPrimaryColor } from '../../../utils'
import { Conversation, SearchInput } from '../../../components'
import { RecentMatchAvatar } from '../../../components/recentMatchAvatar.component'
import { FilterMenuIcon } from '../../../assets/icons/filterMenu.icon'

const recentMatches = [
    { image: require('../../../assets/images/home/likes/avatar1.png'), likes: 2 },
    { image: require('../../../assets/images/home/likes/avatar1.png') },
    { image: require('../../../assets/images/home/likes/avatar1.png') },
    { image: require('../../../assets/images/home/likes/avatar1.png') },
    { image: require('../../../assets/images/home/likes/avatar1.png') }
];

const conversations = [
    {
        matchProfileImgSrc: require('../../../assets/images/home/likes/avatar1.png'),
        matchName: 'Alex Linderson',
        lastTextTime: '2 min',
        message: 'How are you today ?',
        noOfUnreadTexts: 3,
        isOnline: false
    },
    {
        matchProfileImgSrc: require('../../../assets/images/home/likes/avatar1.png'),
        matchName: 'Alex Linderson',
        lastTextTime: '2 min',
        message: 'How are you today ?',
        noOfUnreadTexts: 0,
        isOnline: true
    },
    {
        matchProfileImgSrc: require('../../../assets/images/home/likes/avatar1.png'),
        matchName: 'Alex Linderson',
        lastTextTime: '2 min',
        message: 'How are you today ?',
        noOfUnreadTexts: 0,
        isOnline: true
    },
    {
        matchProfileImgSrc: require('../../../assets/images/home/likes/avatar1.png'),
        matchName: 'Alex Linderson',
        lastTextTime: '2 min',
        message: 'How are you today ?',
        noOfUnreadTexts: 0,
        isOnline: true
    },
    {
        matchProfileImgSrc: require('../../../assets/images/home/likes/avatar1.png'),
        matchName: 'Alex Linderson',
        lastTextTime: '2 min',
        message: 'How are you today ?',
        noOfUnreadTexts: 0,
        isOnline: true
    },
    {
        matchProfileImgSrc: require('../../../assets/images/home/likes/avatar1.png'),
        matchName: 'Alex Linderson',
        lastTextTime: '2 min',
        message: 'How are you today ?',
        noOfUnreadTexts: 0,
        isOnline: true
    },
    {
        matchProfileImgSrc: require('../../../assets/images/home/likes/avatar1.png'),
        matchName: 'Alex Linderson',
        lastTextTime: '2 min',
        message: 'How are you today ?',
        noOfUnreadTexts: 0,
        isOnline: true
    },
    {
        matchProfileImgSrc: require('../../../assets/images/home/likes/avatar1.png'),
        matchName: 'Alex Linderson',
        lastTextTime: '8 min',
        message: 'How are you today ?',
        noOfUnreadTexts: 0,
        isOnline: true
    },
];

export const ChatScreen = () => {

    const [searchText, setSearchText] = React.useState('');

    return (
        <Layout>
            <View style={styles.mainWrapper}>
                <View style={styles.searchInputWrapper}>
                    <SearchInput
                        placeholder='Search Matches..'
                        searchText={searchText}
                        setSearchText={setSearchText}
                    />
                </View>
                <View style={styles.recentMatchesContainer}>
                    <Text style={styles.recentMatchText}>Recent Matches</Text>
                    <FlatList
                        contentContainerStyle={styles.recentMatchesWrapper}
                        horizontal={true}
                        data={recentMatches}
                        renderItem={({ item }) => {
                            return (
                                <RecentMatchAvatar
                                    imageSrc={item.image}
                                    likes={item.likes}
                                />
                            );
                        }}
                        keyExtractor={(item, index) => index.toString()}
                        showsHorizontalScrollIndicator={false}
                    />
                </View>
                <View style={styles.conversationWrapper}>
                    <View style={styles.conversationHeaderWrapper}>
                        <Text style={styles.recentMatchText}>Coversations</Text>
                        <View style={styles.conversationHeaderIconWrapper}>
                            <FilterMenuIcon />
                            <FilterMenuIcon />
                        </View>
                    </View>
                    <FlatList
                        style={styles.conversationContainer}
                        data={conversations}
                        renderItem={({ item }) => (
                            <Conversation
                                matchProfileImgSrc={item.matchProfileImgSrc}
                                matchName={item.matchName}
                                lastTextTime={item.lastTextTime}
                                message={item.message}
                                noOfUnreadTexts={item.noOfUnreadTexts}
                                isOnline={item.isOnline}
                            />
                        )}
                        keyExtractor={(item, index) => index.toString()}
                        showsVerticalScrollIndicator={false}
                    />
                </View>
            </View>
        </Layout>
    )
}

const styles = StyleSheet.create({
    mainWrapper: {
        display: 'flex',
        flexDirection: 'column',
        paddingTop: responsiveScreenHeight(2),
        flex: 1,
    },
    searchInputWrapper: {
        width: responsiveScreenWidth(100),
        paddingHorizontal: responsiveScreenWidth(3),
    },
    headerText: {
        fontSize: responsiveFontSize(4),
        fontFamily: 'Audrey-Bold',
        color: getTextPrimaryColor(THEME.DARK)
    },
    recentMatchesWrapper: {
        gap: responsiveScreenWidth(2),
    },
    recentMatchesContainer: {
        paddingHorizontal: responsiveScreenWidth(3),
        marginTop: responsiveScreenHeight(2),
    },
    recentMatchText: {
        marginBottom: responsiveScreenHeight(1),
        color: getTextPrimaryColor(THEME.DARK),
        fontFamily: 'RedHatDisplay-SemiBold',
        fontSize: responsiveFontSize(2.1),
    },
    conversationWrapper: {
        backgroundColor: '#292D34',
        paddingHorizontal: responsiveScreenWidth(3),
        marginTop: responsiveScreenHeight(2),
        borderTopLeftRadius: 25,
        borderTopRightRadius: 25,
        flex: 1,
    },
    conversationHeaderWrapper: {
        paddingVertical: responsiveScreenHeight(1.5),
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
    },
    conversationHeaderIconWrapper: {
        display: 'flex',
        flexDirection: 'row',
        gap: responsiveScreenWidth(2),
    },
    conversationContainer: {
        flex: 1,
    }
});