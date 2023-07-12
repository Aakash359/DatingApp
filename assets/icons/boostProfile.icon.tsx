import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

export const BoostProfileIcon = () => {
    return (
        <Svg
            width={43}
            height={42}
            fill="none"
        >
            <Path
                fill="#D9D9D9"
                fillRule="evenodd"
                d="M19.328 2.652C8.657 2.652 0 11.31 0 21.98c0 10.67 8.657 19.327 19.328 19.327 10.67 0 19.327-8.656 19.327-19.327 0-10.67-8.657-19.328-19.327-19.328ZM18.32 33.367V27h-1.777c-2.21 0-5.284-1.125-4.226-3.064L21.444 7.05c.445-.91 1.82-.58 1.82.446L25.5 17.5h4.919a.972.972 0 0 1 .872 1.394l-11.13 14.9c-.466.929-1.84.6-1.84-.427Z"
                clipRule="evenodd"
            />
            <Path
                fill="url(#a)"
                fillRule="evenodd"
                d="M19.328 2.652C8.657 2.652 0 11.31 0 21.98c0 10.67 8.657 19.327 19.328 19.327 10.67 0 19.327-8.656 19.327-19.327 0-10.67-8.657-19.328-19.327-19.328ZM18.32 33.367V27h-1.777c-2.21 0-5.284-1.125-4.226-3.064L21.444 7.05c.445-.91 1.82-.58 1.82.446L25.5 17.5h4.919a.972.972 0 0 1 .872 1.394l-11.13 14.9c-.466.929-1.84.6-1.84-.427Z"
                clipRule="evenodd"
            />
            <Path
                stroke="#DDDDE5"
                strokeWidth={2}
                d="M22.672 1.316c-10.67 0-19.327 8.657-19.327 19.328 0 10.67 8.656 19.328 19.327 19.328C33.343 39.972 42 31.315 42 20.644c0-10.67-8.657-19.328-19.328-19.328Zm-1.007 30.715v-8.017h-5.151c-.717 0-1.2-.775-.852-1.414l7.126-13.886c.446-.91 1.82-.58 1.82.446v8.114h4.92a.972.972 0 0 1 .872 1.395l-6.895 13.788c-.465.93-1.84.6-1.84-.426Z"
                clipRule="evenodd"
            />
            <Defs>
                <LinearGradient
                    id="a"
                    x1={8.135}
                    x2={108.489}
                    y1={-95.233}
                    y2={-52.924}
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
