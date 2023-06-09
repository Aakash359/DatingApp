import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"
export const DarkBgGradient = () => {
    return (
  <Svg fill="none">
    <Path fill="#F5F5FD" d="M0 0h375v841H0z" />
    <Path fill="url(#a)" d="M0 0h375v841H0z" />
    <Defs>
      <LinearGradient
        id="a"
        x1={-74.871}
        x2={435.95}
        y1={24.048}
        y2={597.151}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#30353D" />
        <Stop offset={1} stopColor="#0E1013" />
      </LinearGradient>
    </Defs>
  </Svg>
)
}