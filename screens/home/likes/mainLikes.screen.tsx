import React from 'react'
import { NoLikesScreen } from './noLikesScreen'
import { LikesScreen } from './likesScreen'

export const LikesMainScreen = () => {
    const [numberOfLikes, setNumberOfLikes] = React.useState('0')
    return (
        numberOfLikes === '0' ?
        <NoLikesScreen />
        :
        <LikesScreen numberOfLikes={numberOfLikes}/>
    )
}