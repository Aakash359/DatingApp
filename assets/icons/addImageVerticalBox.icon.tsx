import * as React from "react"
import Svg, { Rect, Path, Defs, LinearGradient, Stop } from "react-native-svg"
import { IconProps } from "./facebook.icon"

export const AddImageVerticalBox = (props: IconProps) => {
  const { width = '160px', height = '221px' } = props;
    return (
  <Svg
    width={width}
    height={height}
    fill="none"
    {...props}
  >
    <Rect
      width={160}
      height={221}
      fill="url(#a)"
      fillOpacity={0.1}
      rx={5.825}
    />
    <Rect
      width={158.884}
      height={219.884}
      x={0.558}
      y={0.558}
      stroke="url(#b)"
      strokeDasharray="5.23 5.23"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeOpacity={0.5}
      strokeWidth={1.116}
      rx={5.267}
    />
    <Path
      fill="#D9D9D9"
      d="M101 112.588H82.537V131h-4.125v-18.412H60v-4.125h18.412V90h4.125v18.463H101v4.125Z"
    />
    <Path
      fill="url(#c)"
      d="M101 112.588H82.537V131h-4.125v-18.412H60v-4.125h18.412V90h4.125v18.463H101v4.125Z"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={33.672}
        x2={481.191}
        y1={-559.629}
        y2={-423.036}
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
        x1={33.672}
        x2={481.191}
        y1={-559.629}
        y2={-423.036}
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
        x1={68.628}
        x2={175.07}
        y1={-13.823}
        y2={31.052}
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
