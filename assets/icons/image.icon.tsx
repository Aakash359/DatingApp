import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"
import { IconProps } from "./facebook.icon"

export const ImageIcon = (props: IconProps) => {
    const {width = '41px', height = '41px', fill1 ='#D9D9D9', fill2='url(#a)', fill3='#C6C6CD', fill4='#C6C6CD'} = props;
    return (
  <Svg fill="none" {...props} width={width} height={height}>
    <Path
      fill={fill1}
      d="M12.25 41h10.5C31.5 41 35 37.6 35 29.1V18.9C35 10.4 31.5 7 22.75 7h-10.5C3.5 7 0 10.4 0 18.9v10.2C0 37.6 3.5 41 12.25 41Z"
    />
    <Path
      fill={fill2}
      d="M12.25 41h10.5C31.5 41 35 37.6 35 29.1V18.9C35 10.4 31.5 7 22.75 7h-10.5C3.5 7 0 10.4 0 18.9v10.2C0 37.6 3.5 41 12.25 41Z"
    />
    <Path
      stroke={fill3}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.63}
      d="M15.375 37.585h10.25c8.541 0 11.958-3.417 11.958-11.959v-10.25c0-8.541-3.416-11.958-11.958-11.958h-10.25c-8.542 0-11.959 3.417-11.959 11.958v10.25c0 8.542 3.417 11.959 11.959 11.959Z"
    />
    <Path
      stroke={fill4}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.63}
      d="M15.375 17.083a3.417 3.417 0 1 0 0-6.833 3.417 3.417 0 0 0 0 6.833ZM4.561 32.373l8.422-5.654c1.35-.906 3.297-.803 4.51.239l.564.495c1.332 1.145 3.485 1.145 4.817 0l7.107-6.098c1.332-1.145 3.485-1.145 4.817 0l2.785 2.391"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={7.366}
        x2={97.419}
        y1={-79.097}
        y2={-40.014}
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
