import * as React from "react"
import Svg, {
    Circle,
    Path,
    G,
    Defs,
    LinearGradient,
    Stop,
} from "react-native-svg"

export const NoLikesIcon = () => {
    return (
        <Svg
            width={121}
            height={97}
            fill="none"
        >
            <Circle
                cx={59.297}
                cy={50.769}
                r={43.43}
                fill="url(#a)"
                fillOpacity={0.25}
            />
            <Circle
                cx={59.297}
                cy={50.769}
                r={43.43}
                stroke="#D9D9D9"
                strokeWidth={2.38}
            />
            <Circle
                cx={59.297}
                cy={50.769}
                r={43.43}
                stroke="url(#b)"
                strokeWidth={2.38}
            />
            <Path
                fill="#D9D9D9"
                d="M69.144 33.797c-6.459 0-10.04 4.793-10.04 4.793s-3.58-4.793-10.04-4.793c-6.777 0-12.27 5.646-12.27 12.612 0 10.744 16.188 21.22 20.985 24.908.79.607 1.858.607 2.648 0 4.8-3.688 20.987-14.164 20.987-24.908 0-6.966-5.492-12.612-12.27-12.612Z"
            />
            <Path
                fill="#fff"
                d="M69.144 33.797c-6.459 0-10.04 4.793-10.04 4.793s-3.58-4.793-10.04-4.793c-6.777 0-12.27 5.646-12.27 12.612 0 10.744 16.188 21.22 20.985 24.908.79.607 1.858.607 2.648 0 4.8-3.688 20.987-14.164 20.987-24.908 0-6.966-5.492-12.612-12.27-12.612Z"
            />
            <G filter="url(#c)">
                <Path
                    fill="#FF004D"
                    d="M11.623 89.492a.288.288 0 0 1-.115-.114l-1.67-3.054-1.67 3.054a.288.288 0 0 1-.114.114L5 91.162l3.054 1.67a.287.287 0 0 1 .114.115l1.67 3.054 1.67-3.054a.288.288 0 0 1 .115-.114l3.054-1.67-3.054-1.67Z"
                />
            </G>
            <Path
                fill="#fff"
                d="M11.623 89.492a.288.288 0 0 1-.115-.114l-1.67-3.054-1.67 3.054a.288.288 0 0 1-.114.114L5 91.162l3.054 1.67a.287.287 0 0 1 .114.115l1.67 3.054 1.67-3.054a.288.288 0 0 1 .115-.114l3.054-1.67-3.054-1.67ZM6.623 10.168a.289.289 0 0 1-.115-.114L4.838 7l-1.67 3.054a.288.288 0 0 1-.114.114L0 11.838l3.054 1.67a.288.288 0 0 1 .114.115l1.67 3.054 1.67-3.054a.288.288 0 0 1 .115-.115l3.053-1.67-3.053-1.67ZM119.422 79.977a.15.15 0 0 1-.059-.06l-.863-1.577-.863 1.578a.15.15 0 0 1-.059.059L116 80.84l1.578.863a.15.15 0 0 1 .059.059l.863 1.578.863-1.578a.15.15 0 0 1 .059-.06L121 80.84l-1.578-.863Z"
            />
            <G filter="url(#d)">
                <Path
                    fill="#FF004D"
                    d="M108.025 6.979a.456.456 0 0 1-.18-.18L105.221 2l-2.625 4.799a.45.45 0 0 1-.18.18l-4.798 2.624 4.798 2.624a.45.45 0 0 1 .18.18l2.625 4.799 2.624-4.799a.456.456 0 0 1 .18-.18l4.799-2.624-4.799-2.624Z"
                />
            </G>
            <Path
                fill="#fff"
                d="M108.025 6.979a.456.456 0 0 1-.18-.18L105.221 2l-2.625 4.799a.45.45 0 0 1-.18.18l-4.798 2.624 4.798 2.624a.45.45 0 0 1 .18.18l2.625 4.799 2.624-4.799a.456.456 0 0 1 .18-.18l4.799-2.624-4.799-2.624Z"
            />
            <Defs>
                <LinearGradient
                    id="a"
                    x1={33.457}
                    x2={265.137}
                    y1={-219.832}
                    y2={-122.157}
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
                    x1={33.457}
                    x2={265.137}
                    y1={-219.832}
                    y2={-122.157}
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
