import * as React from "react"
import Svg, {
    G,
    Circle,
    Path,
    Defs,
    LinearGradient,
    Stop,
} from "react-native-svg"

export const CardLikeIcon = () => {
    return (
        <Svg
            width={154}
            height={155}
            fill="none"
        >
            <G filter="url(#a)">
                <G filter="url(#b)">
                    <Circle
                        cx={76.551}
                        cy={60.485}
                        r={34.023}
                        fill="#fff"
                        transform="rotate(-.896 76.551 60.485)"
                    />
                </G>
                <G filter="url(#c)">
                    <Path
                        fill="#D9D9D9"
                        d="M70.044 49.668a8.033 8.033 0 0 0-7.906 8.158c.126 8.033 9.732 15.186 14.87 16.805 5.085-1.779 14.464-9.23 14.338-17.262a8.033 8.033 0 0 0-14.676-4.39 8.023 8.023 0 0 0-6.626-3.31Z"
                    />
                    <Path
                        fill="url(#d)"
                        d="M70.044 49.668a8.033 8.033 0 0 0-7.906 8.158c.126 8.033 9.732 15.186 14.87 16.805 5.085-1.779 14.464-9.23 14.338-17.262a8.033 8.033 0 0 0-14.676-4.39 8.023 8.023 0 0 0-6.626-3.31Z"
                    />
                </G>
            </G>
            <Defs>
                <LinearGradient
                    id="d"
                    x1={67.166}
                    x2={139.662}
                    y1={-13.774}
                    y2={20.444}
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
