import * as React from "react"
import Svg, { Rect } from "react-native-svg"
import { IconProps } from "./facebook.icon"

export const RadioCircle = (props: IconProps) => {
    const { width = 24, height = 25 } = props;
    return (
        <Svg
            width={width}
            height={height}
            fill="none"
            {...props}
        >
            <Rect
                width={18}
                height={18}
                x={3}
                y={3.5}
                stroke="#C6C6CD"
                strokeWidth={2}
                rx={9}
            />
        </Svg>
    )
}
