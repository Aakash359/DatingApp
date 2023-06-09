import * as React from "react"
import Svg, {
    Circle,
    Mask,
    G,
    Path,
    Defs,
    LinearGradient,
    Stop,
} from "react-native-svg"
import { IconProps } from "./facebook.icon"

export const BigProfilePhotoIcon = (props: IconProps) => {
    const { width = '183px', height = '183px' } = props;
    return (
        <Svg fill="none" width={width} height={height}>
            <Circle cx={91.5} cy={91.5} r={91.5} fill="url(#a)" fillOpacity={0.1} />
            <Circle
                cx={91.5}
                cy={91.5}
                r={90.942}
                stroke="url(#b)"
                strokeOpacity={0.5}
                strokeWidth={1.116}
            />
            <Mask
                id="e"
                width={183}
                height={183}
                x={0}
                y={0}
                maskUnits="userSpaceOnUse"
            >
                <G opacity={0.81}>
                    <Circle cx={91.5} cy={91.5} r={91.5} fill="url(#c)" />
                    <Circle cx={91.5} cy={91.5} r={91.5} stroke="#D9D9D9" />
                    <Circle cx={91.5} cy={91.5} r={91.5} stroke="url(#d)" />
                </G>
            </Mask>
            <G fillRule="evenodd" clipRule="evenodd" mask="url(#e)">
                <Path
                    fill="#D9D9D9"
                    d="M62.575 85.053a29.26 29.26 0 1 1 58.52 0 29.26 29.26 0 0 1-58.52 0Zm0 43.89A36.576 36.576 0 0 0 26 165.519a21.943 21.943 0 0 0 21.945 21.945h87.781c5.82 0 11.402-2.312 15.517-6.428a21.942 21.942 0 0 0 6.428-15.517 36.576 36.576 0 0 0-36.575-36.576h-58.52Z"
                />
                <Path
                    fill="url(#f)"
                    d="M62.575 85.053a29.26 29.26 0 1 1 58.52 0 29.26 29.26 0 0 1-58.52 0Zm0 43.89A36.576 36.576 0 0 0 26 165.519a21.943 21.943 0 0 0 21.945 21.945h87.781c5.82 0 11.402-2.312 15.517-6.428a21.942 21.942 0 0 0 6.428-15.517 36.576 36.576 0 0 0-36.575-36.576h-58.52Z"
                />
            </G>
            <Defs>
                <LinearGradient
                    id="a"
                    x1={38.512}
                    x2={513.605}
                    y1={-463.403}
                    y2={-263.109}
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
                    x1={38.512}
                    x2={513.605}
                    y1={-463.403}
                    y2={-263.109}
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
                    id="c"
                    x1={38.512}
                    x2={513.605}
                    y1={-463.403}
                    y2={-263.109}
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
                    x1={38.512}
                    x2={513.605}
                    y1={-463.403}
                    y2={-263.109}
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
                    id="f"
                    x1={53.71}
                    x2={395.545}
                    y1={-277.631}
                    y2={-133.517}
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
