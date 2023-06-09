import * as React from "react";
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg";
import { IconProps } from "./facebook.icon";

export const TickIcon = (props: IconProps) => {
    const { width = '11px', height = '8px', fill1 = '#D9D9D9', fill2 = 'url(#a)'} = props;
    return (
        <Svg fill="none" width={width} height={height} >
            <Path
                fill={fill1}
                fillRule="evenodd"
                d="M9.914.293a1 1 0 0 1 0 1.414L4.2 7.421a1 1 0 0 1-1.414 0L.293 4.914A1 1 0 1 1 1.707 3.5l1.786 1.8L8.5.293a1 1 0 0 1 1.414 0Z"
                clipRule="evenodd"
            />
            <Path
                fill={fill2}
                fillRule="evenodd"
                d="M9.914.293a1 1 0 0 1 0 1.414L4.2 7.421a1 1 0 0 1-1.414 0L.293 4.914A1 1 0 1 1 1.707 3.5l1.786 1.8L8.5.293a1 1 0 0 1 1.414 0Z"
                clipRule="evenodd"
            />
            <Defs>
                <LinearGradient
                    id="a"
                    x1={2.148}
                    x2={25.95}
                    y1={-19.535}
                    y2={-6.257}
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
};