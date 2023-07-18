import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { IconProps } from "./facebook.icon"

export const MicrophoneIcon = (props: IconProps) => {
    return (
        <Svg fill="none" {...props}>
            <Path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 11v1a7 7 0 0 1-7 7m-7-8v1a7 7 0 0 0 7 7m0 0v3m0 0h3m-3 0H9m3-6a4 4 0 0 1-4-4V6a4 4 0 1 1 8 0v6a4 4 0 0 1-4 4Z"
            />
            <Path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M19 11v1a7 7 0 0 1-7 7m-7-8v1a7 7 0 0 0 7 7m0 0v3m0 0h3m-3 0H9m3-6a4 4 0 0 1-4-4V6a4 4 0 1 1 8 0v6a4 4 0 0 1-4 4Z"
            />
        </Svg>
    )
}
