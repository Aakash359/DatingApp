import React from 'react';
import { StyleSheet, View, Image, Text, InteractionManager } from 'react-native';
import { responsiveFontSize, responsiveScreenHeight, responsiveScreenWidth } from 'react-native-responsive-dimensions';
import { getBorderPrimaryColor, getTextButtonColor, getTextPrimaryColor, getTextSecondaryColor, THEME } from '../utils';
import { BoostProfileIcon } from '../assets';
import { Button } from './button.component';

interface Props {
    isProfileBoosted: boolean
    setIsProfileBoosted: React.Dispatch<React.SetStateAction<boolean>>
}

export const ProfileBoosterCard = (props: Props) => {
    const { isProfileBoosted, setIsProfileBoosted } = props
    const [time, setTime] = React.useState<number>(1 * 10);
    const [timerStarted, setTimerStarted] = React.useState(false);
    const [formattedTime, setFormattedTime] = React.useState<string>('4:00');
    const timerIdRef = React.useRef<any>(null);

    const formatTime = (timeInSeconds: number) => {
        const hours = Math.floor(timeInSeconds / 60 / 60);
        const minutes = Math.floor((timeInSeconds % (60 * 60)) / 60);
        const seconds = timeInSeconds % 60;
        return `${hours} hr : ${minutes} min : ${seconds.toString().padStart(2, '0')} sec`;
    };

    React.useEffect(() => {
        const startTimer = () => {
            timerIdRef.current = setInterval(() => {
                setTime(prevTime => {
                    if (prevTime === 0) {
                        clearInterval(timerIdRef.current!);
                        return prevTime;
                    }
                    return prevTime - 1;
                });
            }, 1000);

            return () => {
                clearInterval(timerIdRef.current!);
            };
        };

        if (!timerStarted) {
            const interactionHandle = InteractionManager.runAfterInteractions(() => {
                startTimer();
            });

            setTimerStarted(true);

            return () => {
                interactionHandle.cancel();
            };
        }
    }, [timerStarted]);


    React.useEffect(() => {
        setFormattedTime(formatTime(time));
        if (time === 0) {
            setIsProfileBoosted(false);
        }
    }, [time]);

    return (
        isProfileBoosted ?
            <View style={styles.mainContainer}>
                <View style={styles.headerContainer}>
                    <Image
                        source={require('../assets/images/home/likes/avatar2.png')}
                        resizeMode='contain'
                    />
                    <Text style={styles.headerText}>Profile Booster Activated</Text>
                </View>
                <Text style={styles.descriptionText}>Your profile is visible to more people for</Text>
                <Text style={styles.timerText}>{formattedTime}</Text>
            </View>
            :
            <View style={styles.mainContainer}>
                <View style={styles.headerContainer}>
                    <BoostProfileIcon />
                    <Text style={styles.headerText}>Boost Profile for More Likes</Text>
                </View>
                <Text style={styles.descriptionText}>Get noticed match instantly</Text>
                <View style={styles.buttonWrapper}>
                    <Button
                        variant={"outline"}
                        height={responsiveScreenHeight(4)}
                        onPress={() => {
                            setIsProfileBoosted(true);
                            setTime(1 * 10);
                            if (timerIdRef.current) {
                                clearInterval(timerIdRef.current);
                            }
                            setTimerStarted(false);
                        }}>
                        <Text style={styles.buttonText}>BOOST</Text>
                    </Button>
                </View>
            </View>
    )
};

const styles = StyleSheet.create({
    mainContainer: {
        width: responsiveScreenWidth(45),
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingHorizontal: responsiveScreenWidth(1),
        paddingVertical: responsiveScreenHeight(2),
        borderRadius: 5,
        borderWidth: 1,
        borderColor: getBorderPrimaryColor(THEME.DARK),
        height: responsiveScreenHeight(33),
    },
    headerContainer: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        paddingVertical: responsiveScreenHeight(2),
        gap: responsiveScreenHeight(1.3),
    },
    headerText: {
        fontFamily: 'RedHatDisplay-Medium',
        textAlign: 'center',
        fontSize: responsiveFontSize(2.3),
        color: getTextPrimaryColor(THEME.DARK),
    },
    descriptionText: {
        fontFamily: 'RedHatDisplay-Regular',
        textAlign: 'center',
        fontSize: responsiveFontSize(1.8),
        color: getTextSecondaryColor(THEME.DARK),
        marginBottom: responsiveScreenHeight(1),
        width: '80%',
    },
    timerText: {
        fontFamily: 'RedHatDisplay-Regular',
        textAlign: 'center',
        fontSize: responsiveFontSize(1.5),
        color: getTextSecondaryColor(THEME.DARK),
        marginBottom: responsiveScreenHeight(1),
    },
    buttonWrapper: {
        width: '100%',
        marginVertical: responsiveScreenHeight(1),
        paddingHorizontal: responsiveScreenWidth(3),
        paddingBottom: responsiveScreenHeight(0),
    },
    buttonText: {
        fontFamily: 'RedHatDisplay-Medium',
        textAlign: 'center',
        fontSize: responsiveFontSize(1.8),
        color: getTextButtonColor(THEME.DARK),
    }
})