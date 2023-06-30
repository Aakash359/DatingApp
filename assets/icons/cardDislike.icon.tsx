import * as React from "react"
import Svg, {
    G,
    Circle,
    Path,
    Defs,
    LinearGradient,
    Stop,
} from "react-native-svg"

export const CardDislikeIcon = () => {
    return (
        <Svg
            width={179}
            height={179}
            fill="none"
        >
            <G filter="url(#a)">
                <Circle cx={89.765} cy={69.765} r={39} fill="#fff" />
            </G>
            <G clipRule="evenodd" filter="url(#b)">
                <Path
                    fill="#D9D9D9"
                    fillRule="evenodd"
                    d="M82.631 62.63a1.25 1.25 0 0 1 1.768 0l5.366 5.367 5.366-5.366a1.25 1.25 0 1 1 1.768 1.767l-5.366 5.367 5.366 5.366a1.25 1.25 0 1 1-1.768 1.767l-5.366-5.366-5.366 5.367a1.25 1.25 0 1 1-1.768-1.768l5.366-5.366-5.366-5.367a1.25 1.25 0 0 1 0-1.767Z"
                />
                <Path
                    fill="url(#c)"
                    fillRule="evenodd"
                    d="M82.631 62.63a1.25 1.25 0 0 1 1.768 0l5.366 5.367 5.366-5.366a1.25 1.25 0 1 1 1.768 1.767l-5.366 5.367 5.366 5.366a1.25 1.25 0 1 1-1.768 1.767l-5.366-5.366-5.366 5.367a1.25 1.25 0 1 1-1.768-1.768l5.366-5.366-5.366-5.367a1.25 1.25 0 0 1 0-1.767Z"
                />
                <Path
                    stroke="#D9D9D9"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M82.631 62.63a1.25 1.25 0 0 1 1.768 0l5.366 5.367 5.366-5.366a1.25 1.25 0 1 1 1.768 1.767l-5.366 5.367 5.366 5.366a1.25 1.25 0 1 1-1.768 1.767l-5.366-5.366-5.366 5.367a1.25 1.25 0 1 1-1.768-1.768l5.366-5.366-5.366-5.367a1.25 1.25 0 0 1 0-1.767Z"
                />
                <Path
                    stroke="url(#d)"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M82.631 62.63a1.25 1.25 0 0 1 1.768 0l5.366 5.367 5.366-5.366a1.25 1.25 0 1 1 1.768 1.767l-5.366 5.367 5.366 5.366a1.25 1.25 0 1 1-1.768 1.767l-5.366-5.366-5.366 5.367a1.25 1.25 0 1 1-1.768-1.768l5.366-5.366-5.366-5.367a1.25 1.25 0 0 1 0-1.767Z"
                />
            </G>
            <Defs>
                <LinearGradient
                    id="c"
                    x1={85.422}
                    x2={124.364}
                    y1={24.281}
                    y2={40.698}
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
                    id="d"
                    x1={85.422}
                    x2={124.364}
                    y1={24.281}
                    y2={40.698}
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
