import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

export const FAQPlusIcon = () => (
  <Svg
    width={24}
    height={24}
    fill="none"
  >
    <Path
      fill="#D9D9D9"
      fillRule="evenodd"
      d="M12 6a1 1 0 0 0-1 1v4H7a1 1 0 1 0 0 2h4v4a1 1 0 1 0 2 0v-4h4a1 1 0 1 0 0-2h-4V7a1 1 0 0 0-1-1Z"
      clipRule="evenodd"
    />
    <Path
      fill="url(#a)"
      fillRule="evenodd"
      d="M12 6a1 1 0 0 0-1 1v4H7a1 1 0 1 0 0 2h4v4a1 1 0 1 0 2 0v-4h4a1 1 0 1 0 0-2h-4V7a1 1 0 0 0-1-1Z"
      clipRule="evenodd"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={8.525}
        x2={39.679}
        y1={-24.387}
        y2={-11.253}
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
