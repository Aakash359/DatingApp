import * as React from "react"
import Svg, { Circle } from "react-native-svg"

export const ThreeDotsIcon = () => {
    return (
        <Svg
            width={3}
            height={14}
            fill="none"
        >
            <Circle cx={1.5} cy={1.5} r={1.5} fill="#F5F5FD" />
            <Circle cx={1.5} cy={7} r={1.5} fill="#F5F5FD" />
            <Circle cx={1.5} cy={12.5} r={1.5} fill="#F5F5FD" />
        </Svg>
    )
}
