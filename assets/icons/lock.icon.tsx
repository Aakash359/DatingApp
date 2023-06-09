import * as React from "react"
import Svg, {
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
  ClipPath,
} from "react-native-svg"
import { IconProps } from "./facebook.icon"

export const LockIcon = (props: IconProps) => {
    const {width = '41px', height = '41px', fill1 ='#FCD715', fill2='url(#b)', fill3='url(#c)', fill4='#C6C6CD'} = props;
    return (
    <Svg fill="none" {...props} width={width} height={height}>
    <G clipPath="url(#a)">
      <Path
        fill={fill1}
        fillRule="evenodd"
        d="M9.313 16c0-2.818.438-5.059 1.678-6.599 1.19-1.478 3.359-2.588 7.509-2.588s6.318 1.11 7.51 2.588c1.24 1.54 1.677 3.781 1.677 6.599v3.502l-.437-.002H9.75c-.148 0-.294 0-.438.002V16Zm-2.616 3.659a1.327 1.327 0 0 1-.01-.159V16c0-2.975.437-5.983 2.26-8.246C10.818 5.431 13.9 4.188 18.5 4.188c4.6 0 7.682 1.243 9.553 3.566 1.822 2.263 2.26 5.271 2.26 8.246v3.5c0 .054-.004.107-.01.159C34.78 20.22 36 22.405 36 28.25v3.5c0 7-1.75 8.75-8.75 8.75H9.75c-7 0-8.75-1.75-8.75-8.75v-3.5c0-5.845 1.22-8.03 5.697-8.591Z"
        clipRule="evenodd"
      />
      <Path
        fill={fill2}
        fillRule="evenodd"
        d="M9.313 16c0-2.818.438-5.059 1.678-6.599 1.19-1.478 3.359-2.588 7.509-2.588s6.318 1.11 7.51 2.588c1.24 1.54 1.677 3.781 1.677 6.599v3.502l-.437-.002H9.75c-.148 0-.294 0-.438.002V16Zm-2.616 3.659a1.327 1.327 0 0 1-.01-.159V16c0-2.975.437-5.983 2.26-8.246C10.818 5.431 13.9 4.188 18.5 4.188c4.6 0 7.682 1.243 9.553 3.566 1.822 2.263 2.26 5.271 2.26 8.246v3.5c0 .054-.004.107-.01.159C34.78 20.22 36 22.405 36 28.25v3.5c0 7-1.75 8.75-8.75 8.75H9.75c-7 0-8.75-1.75-8.75-8.75v-3.5c0-5.845 1.22-8.03 5.697-8.591Z"
        clipRule="evenodd"
      />
      <Path
        fill={fill3}
        fillRule="evenodd"
        d="M9.313 16c0-2.818.438-5.059 1.678-6.599 1.19-1.478 3.359-2.588 7.509-2.588s6.318 1.11 7.51 2.588c1.24 1.54 1.677 3.781 1.677 6.599v3.502l-.437-.002H9.75c-.148 0-.294 0-.438.002V16Zm-2.616 3.659a1.327 1.327 0 0 1-.01-.159V16c0-2.975.437-5.983 2.26-8.246C10.818 5.431 13.9 4.188 18.5 4.188c4.6 0 7.682 1.243 9.553 3.566 1.822 2.263 2.26 5.271 2.26 8.246v3.5c0 .054-.004.107-.01.159C34.78 20.22 36 22.405 36 28.25v3.5c0 7-1.75 8.75-8.75 8.75H9.75c-7 0-8.75-1.75-8.75-8.75v-3.5c0-5.845 1.22-8.03 5.697-8.591Z"
        clipRule="evenodd"
      />
      <Path
        stroke={fill4}
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.625}
        d="M11.5 16v-3.5C11.5 6.707 13.25 2 22 2s10.5 4.707 10.5 10.5V16"
      />
      <Path
        fill="url(#d)"
        stroke="#C6C6CD"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={2.625}
        d="M30.75 37h-17.5c-7 0-8.75-1.75-8.75-8.75v-3.5c0-7 1.75-8.75 8.75-8.75h17.5c7 0 8.75 1.75 8.75 8.75v3.5c0 7-1.75 8.75-8.75 8.75Z"
      />
      <Path
        stroke="#C6C6CD"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={3.5}
        d="M28.994 26.5h.016M21.992 26.5h.016M14.99 26.5h.016"
      />
    </G>
    <Defs>
      <LinearGradient
        id="b"
        x1={9.307}
        x2={14.321}
        y1={7.723}
        y2={44.31}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FF9466" />
        <Stop offset={1} stopColor="#FF636C" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={12.806}
        x2={55.976}
        y1={-64.871}
        y2={-56.81}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#7931B9" />
        <Stop offset={1} stopColor="#DC4BCF" />
      </LinearGradient>
      <LinearGradient
        id="d"
        x1={16.306}
        x2={56.764}
        y1={-23.938}
        y2={-10.875}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#7931B9" />
        <Stop offset={1} stopColor="#DC4BCF" />
      </LinearGradient>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h41v41H0z" />
      </ClipPath>
    </Defs>
  </Svg>
    )
    }
