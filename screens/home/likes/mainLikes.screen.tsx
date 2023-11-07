import React from 'react'
import { NoLikesScreen } from './noLikesScreen'
import { LikesScreen } from './likesScreen'

export const LikesMainScreen = () => {
    // const numberOfLikes = React.useState(likeProfileData.length.toString())[0];
    // const numberOfLikes = 0;
    const numberOfActions = '1'
    return (
        numberOfActions === '1' ?
            <NoLikesScreen />
            :
            <LikesScreen numberOfLikes={numberOfActions} />
    )
}