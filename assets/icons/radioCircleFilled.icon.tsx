import * as React from "react"
import Svg, { Rect, Circle, Defs, LinearGradient, Stop } from "react-native-svg"
import { IconProps } from "./facebook.icon"

export const RadioCircleFilled = (props: IconProps) => {
    const { width = 20, height = 20 } = props;
    return (
        <Svg
            width={width}
            height={height}
            fill="none"
            {...props}
        >
            <Rect width={18} height={18} x={1} y={1} fill="#D9D9D9" rx={9} />
            <Rect width={18} height={18} x={1} y={1} fill="url(#a)" rx={9} />
            <Circle cx={10} cy={10} r={3} fill="#202027" />
            <Rect
                width={18}
                height={18}
                x={1}
                y={1}
                stroke="#1D272F"
                strokeWidth={2}
                rx={9}
            />
            <Defs>
                <LinearGradient
                    id="a"
                    x1={4.209}
                    x2={56.132}
                    y1={-50.645}
                    y2={-28.755}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#DE49CC" />
                    <Stop offset={0.067} stopColor="#DD49CC" />
                    <Stop offset={0.133} stopColor="#D948CB" />
                    <Stop offset={0.2} stopColor="#D247C9" />
                    <Stop offset={0.267} stopColor="#C946C7" />
                    <Stop offset={0.333} stopColor="#BD44C4" />
                    <Stop offset={0.4} stopColor="#AF42C0" />
                    <Stop offset={0.467} stopColor="#A040BD" />
                    <Stop offset={0.533} stopColor="#8F3DB8" />
                    <Stop offset={0.6} stopColor="#803BB5" />
                    <Stop offset={0.667} stopColor="#7239B1" />
                    <Stop offset={0.733} stopColor="#6637AE" />
                    <Stop offset={0.8} stopColor="#5D36AC" />
                    <Stop offset={0.867} stopColor="#5635AA" />
                    <Stop offset={0.933} stopColor="#5234A9" />
                    <Stop offset={1} stopColor="#5134A9" />
                </LinearGradient>
            </Defs>
        </Svg>
    )
}
