import * as React from "react"
import Svg, { Path } from "react-native-svg"
import { IconProps } from "./facebook.icon"

export const GiftIcon = (props: IconProps) => {
    return (
        <Svg fill="none" {...props}>
            <Path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M20 12v10H4V12M22 7H2v5h20V7ZM12 22V7M12 7H7.5a2.5 2.5 0 1 1 0-5C11 2 12 7 12 7ZM12 7h4.5a2.5 2.5 0 0 0 0-5C13 2 12 7 12 7Z"
            />
        </Svg>
    )
}
