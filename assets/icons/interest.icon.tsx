import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"
import { IconProps } from "./facebook.icon"

export const InterestIcon = (props: IconProps) => {
    const { width = '36px', height = '38px', fill1="#D9D9D9", fill2='#C6C6CD', fill3='#DDDDE5' } = props;
    return (
  <Svg
    width={width}
    height={height}
    fill="none"
    {...props}
  >
    <Path
      fill={fill1}
      d="M25.833 32.386h-1.309c-1.377 0-2.686.512-3.65 1.437l-2.946 2.79c-1.343 1.271-3.53 1.271-4.874 0l-2.945-2.79c-.964-.925-2.29-1.437-3.65-1.437H5.166C2.307 32.386 0 30.19 0 27.483V9.47c0-2.708 2.308-4.904 5.167-4.904h20.666C28.693 4.566 31 6.762 31 9.47v18.013c0 2.69-2.308 4.903-5.167 4.903Z"
    />
    <Path
      fill="url(#a)"
      d="M25.833 32.386h-1.309c-1.377 0-2.686.512-3.65 1.437l-2.946 2.79c-1.343 1.271-3.53 1.271-4.874 0l-2.945-2.79c-.964-.925-2.29-1.437-3.65-1.437H5.166C2.307 32.386 0 30.19 0 27.483V9.47c0-2.708 2.308-4.904 5.167-4.904h20.666C28.693 4.566 31 6.762 31 9.47v18.013c0 2.69-2.308 4.903-5.167 4.903Z"
    />
    <Path
      stroke={fill2}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={2.63}
      d="M28.75 30.785h-1.298c-1.367 0-2.665.53-3.622 1.487l-2.921 2.887a3.455 3.455 0 0 1-4.835 0l-2.921-2.887a5.133 5.133 0 0 0-3.622-1.487H8.25c-2.836 0-5.125-2.272-5.125-5.073V7.074C3.125 4.272 5.415 2 8.25 2h20.5c2.836 0 5.125 2.272 5.125 5.074v18.638c0 2.784-2.29 5.073-5.125 5.073Z"
    />
    <Path
      stroke={fill3}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2.63}
      d="M18.978 24.122c-.256.085-.683.085-.956 0-2.221-.769-7.21-3.93-7.21-9.31a4.276 4.276 0 0 1 4.271-4.289c1.401 0 2.631.667 3.417 1.709a4.255 4.255 0 0 1 3.417-1.709 4.276 4.276 0 0 1 4.27 4.288c-.017 5.382-4.988 8.542-7.209 9.31Z"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={6.524}
        x2={88.457}
        y1={-78.998}
        y2={-46.549}
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