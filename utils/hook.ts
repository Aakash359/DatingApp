import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'
import type { RootState, AppDispatch } from '../redux/store'
import { useState, useEffect } from 'react';
import { Platform, Keyboard } from 'react-native';

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

export const useKeyboardOffset = () => {
    const [keyboardOffset, setKeyboardOffset] = useState(0);

    useEffect(() => {
        if (Platform.OS === 'ios') {
            const keyboardDidShowListener = Keyboard.addListener('keyboardDidShow', (e) => {
                setKeyboardOffset(e.endCoordinates.height);
            });
            const keyboardDidHideListener = Keyboard.addListener('keyboardDidHide', () => {
                setKeyboardOffset(0);
            });

            return () => {
                keyboardDidHideListener.remove();
                keyboardDidShowListener.remove();
            };
        }
    }, []);

    return keyboardOffset;
};