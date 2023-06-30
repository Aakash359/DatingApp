import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'

interface AuthState {
    signUpDetails: {
        phoneNumber: string,
        otp: string,
        firstName: string,
        lastName: string,
        dateOfBirth: string,
        gender: string,
        preferredGender: string[],
        profilePhoto: string,
        otherPhotos: string[],
        visibleDistance: number,
        preferredAge: {
            min: number,
            max: number
        },
        interests: string[],
    },
    loginDetails: {
        phoneNumber: string,
        otp: string,
    }
}

const initialState: AuthState = {
    signUpDetails: {
        phoneNumber: '',
        otp: '',
        firstName: '',
        lastName: '',
        dateOfBirth: new Date().toISOString().split('T')[0],
        gender: '',
        preferredGender: [],
        profilePhoto: '',
        otherPhotos: [],
        visibleDistance: 0,
        preferredAge: {
            min: 0,
            max: 0
        },
        interests: [],
    },
    loginDetails: {
        phoneNumber: '',
        otp: '',
    }
}

export const authSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setPhoneNumber: (state, action: PayloadAction<string>) => {
            state.signUpDetails.phoneNumber = action.payload;
        },

        setOtp: (state, action: PayloadAction<string>) => {
            state.signUpDetails.otp = action.payload;
        },

        setFirstName: (state, action: PayloadAction<string>) => {
            state.signUpDetails.firstName = action.payload;
        },

        setLastName: (state, action: PayloadAction<string>) => {
            state.signUpDetails.lastName = action.payload;
        },

        setDateOfBirth: (state, action: PayloadAction<string>) => {
            state.signUpDetails.dateOfBirth = action.payload;
        },

        setGender: (state, action: PayloadAction<string>) => {
            state.signUpDetails.gender = action.payload;
        },

        setPreferredGender: (state, action: PayloadAction<string[]>) => {
            state.signUpDetails.preferredGender = action.payload;
        },

        setProfilePhoto: (state, action: PayloadAction<string>) => {
            state.signUpDetails.profilePhoto = action.payload;
        },

        setOtherPhotos: (state, action: PayloadAction<string[]>) => {
            state.signUpDetails.otherPhotos = action.payload;
        },

        setVisibleDistance: (state, action: PayloadAction<number>) => {
            state.signUpDetails.visibleDistance = action.payload;
        },

        setPreferredAge: (state, action: PayloadAction<{ min: number, max: number }>) => {
            state.signUpDetails.preferredAge = action.payload;
        },

        setInterests: (state, action: PayloadAction<string[]>) => {
            state.signUpDetails.interests = action.payload;
        },

        setLoginPhoneNumber: (state, action: PayloadAction<string>) => {
            state.loginDetails.phoneNumber = action.payload;
        },

        setLoginOtp: (state, action: PayloadAction<string>) => {
            state.loginDetails.otp = action.payload;
        },
    },
})

export const {
    setPhoneNumber,
    setOtp,
    setFirstName,
    setLastName,
    setDateOfBirth,
    setGender,
    setPreferredGender,
    setProfilePhoto,
    setOtherPhotos,
    setVisibleDistance,
    setPreferredAge,
    setInterests,
    setLoginPhoneNumber,
    setLoginOtp
} = authSlice.actions

export default authSlice.reducer