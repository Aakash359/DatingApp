import React from 'react'
import { NoLikesScreen } from './noLikesScreen'
import { LikesScreen } from './likesScreen'
import { likeProfileData } from '../../../constants'

export const LikesMainScreen = () => {
    // const numberOfLikes = React.useState('likeProfileData.length.toString()')[0];
    const numberOfLikes = React.useState('0') [0];
    return (
        numberOfLikes === '0' ?
            <NoLikesScreen />
            :
            <LikesScreen numberOfLikes={numberOfLikes} />
    )
}