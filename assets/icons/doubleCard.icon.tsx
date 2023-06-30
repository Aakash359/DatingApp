import * as React from "react"
import Svg, { Rect } from "react-native-svg"
export const DoubleCardIcon = () => {
    return (
        <Svg
            width={24}
            height={24}
            fill="none"
        >
            <Rect
                width={13}
                height={18}
                x={9.499}
                y={4.5}
                fill="#F5F5FD"
                stroke="#202027"
                rx={2}
            />
            <Rect
                width={13}
                height={18}
                x={0.392}
                y={4.488}
                fill="#F5F5FD"
                stroke="#202027"
                rx={2}
                transform="rotate(-15 .392 4.488)"
            />
        </Svg>
    )
}
