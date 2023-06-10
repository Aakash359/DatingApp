import * as React from "react"
import Svg, {
    Ellipse,
    Path,
    Defs,
    LinearGradient,
    Stop,
} from "react-native-svg"
import { IconProps } from "./facebook.icon"
export const DistanceRadarIcon = (props: IconProps) => {
    const {width = '41px', height = '41px', fill1 ='#D9D9D9', fill2='#C6C6CD'} = props;
    return (
        <Svg
            width={width}
            height={height}
            fill="none"
            {...props}
        >
            <Ellipse
                cx={19.035}
                cy={21.82}
                fill={fill1}
                rx={15.456}
                ry={15.719}
                transform="rotate(-39.097 19.035 21.82)"
            />
            <Ellipse
                cx={19.035}
                cy={21.82}
                fill="url(#a)"
                rx={15.456}
                ry={15.719}
                transform="rotate(-39.097 19.035 21.82)"
            />
            <Path
                stroke={fill2}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeWidth={2.63}
                d="M10.25 6.835A17.068 17.068 0 0 1 20.5 3.418c9.43 0 17.084 7.653 17.084 17.083S29.93 37.585 20.5 37.585 3.417 29.93 3.417 20.5c0-3.092.82-5.996 2.272-8.507L20.5 20.5"
            />
            <Path
                stroke={fill2}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeWidth={2.63}
                d="M11.668 15.307A10.114 10.114 0 0 0 10.25 20.5c0 5.655 4.595 10.25 10.25 10.25s10.25-4.595 10.25-10.25-4.595-10.25-10.25-10.25c-1.555 0-3.04.342-4.356.974"
            />
            <Defs>
                <LinearGradient
                    id="a"
                    x1={10.085}
                    x2={90.741}
                    y1={-73.511}
                    y2={-40.076}
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
