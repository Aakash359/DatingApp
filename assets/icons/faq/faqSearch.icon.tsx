import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"

export const FAQSearchIcon = () => (
  <Svg
    width={24}
    height={24}
    fill="none"
  >
    <Path
      fill="#D9D9D9"
      d="M11 2c4.968 0 9 4.032 9 9s-4.032 9-9 9-9-4.032-9-9 4.032-9 9-9Zm0 16c3.867 0 7-3.133 7-7 0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7Zm8.485.071 2.829 2.828-1.415 1.415-2.828-2.829 1.414-1.414Z"
    />
    <Path
      fill="url(#a)"
      d="M11 2c4.968 0 9 4.032 9 9s-4.032 9-9 9-9-4.032-9-9 4.032-9 9-9Zm0 16c3.867 0 7-3.133 7-7 0-3.868-3.133-7-7-7-3.868 0-7 3.132-7 7 0 3.867 3.132 7 7 7Zm8.485.071 2.829 2.828-1.415 1.415-2.828-2.829 1.414-1.414Z"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={6.275}
        x2={59.013}
        y1={-49.44}
        y2={-27.206}
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
