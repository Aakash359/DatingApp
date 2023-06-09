import * as React from "react"
import Svg, {
    Path,
    G,
    Defs,
    LinearGradient,
    Stop,
    ClipPath,
} from "react-native-svg"
import { IconProps } from "./facebook.icon"

export const ProfileIcon = (props: IconProps) => {
    const { width = 50, height = 50 } = props;
    return (
        <Svg fill="none" width={width} height={height} {...props}>
            <Path
                fill="#FD683D"
                d="M8.814 28.29c-4.134 2.768-4.134 7.278 0 10.028 4.698 3.143 12.403 3.143 17.1 0 4.135-2.768 4.135-7.278 0-10.028-4.68-3.126-12.385-3.126-17.1 0Z"
            />
            <Path
                fill="url(#a)"
                d="M8.814 28.29c-4.134 2.768-4.134 7.278 0 10.028 4.698 3.143 12.403 3.143 17.1 0 4.135-2.768 4.135-7.278 0-10.028-4.68-3.126-12.385-3.126-17.1 0Z"
            />
            <Path
                fill="#FD683D"
                d="M17.356 21.985a3.121 3.121 0 0 0-.564 0c-4.066-.137-7.294-3.468-7.294-7.568a7.579 7.579 0 0 1 7.585-7.585 7.59 7.59 0 0 1 7.585 7.585c-.017 4.1-3.246 7.431-7.312 7.568Z"
            />
            <Path
                fill="url(#b)"
                d="M17.356 21.985a3.121 3.121 0 0 0-.564 0c-4.066-.137-7.294-3.468-7.294-7.568a7.579 7.579 0 0 1 7.585-7.585 7.59 7.59 0 0 1 7.585 7.585c-.017 4.1-3.246 7.431-7.312 7.568Z"
            />
            <G
                stroke="#C6C6CD"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.63}
                clipPath="url(#c)"
            >
                <Path d="M20.773 18.57a3.103 3.103 0 0 0-.563 0c-4.066-.136-7.295-3.467-7.295-7.567A7.579 7.579 0 0 1 20.5 3.418a7.59 7.59 0 0 1 7.585 7.585c-.017 4.1-3.246 7.431-7.312 7.568ZM12.232 24.872c-4.135 2.768-4.135 7.278 0 10.028 4.697 3.143 12.402 3.143 17.1 0 4.134-2.768 4.134-7.278 0-10.028-4.68-3.126-12.386-3.126-17.1 0Z" />
            </G>
            <Defs>
                <LinearGradient
                    id="a"
                    x1={13.574}
                    x2={40.764}
                    y1={-2.068}
                    y2={6.264}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#7931B9" />
                    <Stop offset={1} stopColor="#DC4BCF" />
                </LinearGradient>
                <LinearGradient
                    id="b"
                    x1={14.615}
                    x2={33.276}
                    y1={-21.986}
                    y2={-18.366}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#7931B9" />
                    <Stop offset={1} stopColor="#DC4BCF" />
                </LinearGradient>
                <ClipPath id="c">
                    <Path fill="#fff" d="M0 0h41v41H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}
