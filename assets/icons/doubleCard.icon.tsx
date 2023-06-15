import * as React from "react"
import Svg, { Rect, Defs, LinearGradient, Stop } from "react-native-svg"
import { IconProps } from "./facebook.icon"

export const DoubleCard = (props: IconProps) => {
    return (
        <Svg
            width={23}
            height={22}
            fill="none"
            {...props}
        >
            <Rect width={13} height={18} x={9.499} y={3.498} fill="#D9D9D9" rx={2} />
            <Rect width={13} height={18} x={9.499} y={3.498} fill="url(#a)" rx={2} />
            <Rect width={13} height={18} x={9.499} y={3.498} stroke="#202027" rx={2} />
            <Rect
                width={13}
                height={18}
                x={0.392}
                y={3.49}
                fill="#D9D9D9"
                rx={2}
                transform="rotate(-15 .392 3.49)"
            />
            <Rect
                width={13}
                height={18}
                x={0.392}
                y={3.49}
                fill="url(#b)"
                rx={2}
                transform="rotate(-15 .392 3.49)"
            />
            <Rect
                width={13}
                height={18}
                x={0.392}
                y={3.49}
                stroke="#202027"
                rx={2}
                transform="rotate(-15 .392 3.49)"
            />
            <Defs>
                <LinearGradient
                    id="a"
                    x1={12.235}
                    x2={48.611}
                    y1={-42.083}
                    y2={-31.007}
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
                <LinearGradient
                    id="b"
                    x1={3.127}
                    x2={39.503}
                    y1={-42.09}
                    y2={-31.015}
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
