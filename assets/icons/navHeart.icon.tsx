import * as React from "react"
import Svg, { Path, Circle, Defs, LinearGradient, Stop } from "react-native-svg"
export const NavHeartIcon = () => {
    return (
        <Svg
            width={26}
            height={24}
            fill="none"
        >
            <Path
                fill="#F5F5FD"
                stroke="#F5F5FD"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M7.5 4A5.5 5.5 0 0 0 2 9.5C2 15 8.5 20 12 21.163 15.5 20 22 15 22 9.5a5.5 5.5 0 0 0-10-3.163A5.493 5.493 0 0 0 7.5 4Z"
            />
            <Circle cx={20} cy={6} r={5} fill="#D9D9D9" />
            <Circle cx={20} cy={6} r={5} fill="url(#a)" />
            <Circle cx={20} cy={6} r={5} stroke="#22252B" strokeWidth={2} />
            <Defs>
                <LinearGradient
                    id="a"
                    x1={17.684}
                    x2={38.453}
                    y1={-18.258}
                    y2={-9.502}
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
