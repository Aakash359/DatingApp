import * as React from "react"
import Svg, { Circle, Path, Defs, LinearGradient, Stop } from "react-native-svg"
import { IconProps } from "./facebook.icon"
export const CirclePlusIcon = (props: IconProps) => {
    const {width = '55px', height = '55px', fill1 ='#D9D9D9', fill2='url(#a)'} = props;
    return (
        <Svg
            width={width}
            height={height}
            fill="none"
            {...props}
        >
            <Circle cx={27.5} cy={27.5} r={27} fill={fill1} />
            <Circle cx={27.5} cy={27.5} r={27} stroke={fill1} />
            <Circle cx={27.5} cy={27.5} r={27} stroke={fill2} />
            <Path
                fill={fill1}
                d="M40 28.773H28.742V40h-2.515V28.773H15v-2.515h11.227V15h2.515v11.258H40v2.515Z"
            />
            <Path
                fill="url(#b)"
                d="M40 28.773H28.742V40h-2.515V28.773H15v-2.515h11.227V15h2.515v11.258H40v2.515Z"
            />
            <Defs>
                <LinearGradient
                    id="a"
                    x1={11.575}
                    x2={154.362}
                    y1={-139.274}
                    y2={-79.076}
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
                    x1={20.261}
                    x2={85.165}
                    y1={-48.306}
                    y2={-20.944}
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