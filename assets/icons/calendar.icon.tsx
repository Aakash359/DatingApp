import * as React from "react"
import Svg, {
    Path,
    G,
    Rect,
    Defs,
    LinearGradient,
    Stop,
    ClipPath,
} from "react-native-svg"
import { IconProps } from "./facebook.icon";

export const CalendarIcon = (props: IconProps) => {
    const { width = '41px', height = '42px', fill1 = '#FD683D', fill2 = 'url(#a)', fill3 = '#C6C6CD', fill4 = '#fff' } = props;
    return (
        <Svg fill="none" {...props} width={width} height={height}>
            <Path
                fill={fill1}
                d="M23.917 9.395c5.689.307 8.541 2.477 8.541 10.506v10.557c0 7.039-1.708 10.558-10.25 10.558h-10.25c-8.541 0-10.25-3.52-10.25-10.558V19.901c0-8.03 2.853-10.182 8.542-10.506h13.667Z"
            />
            <Path
                fill={fill2}
                d="M23.917 9.395c5.689.307 8.541 2.477 8.541 10.506v10.557c0 7.039-1.708 10.558-10.25 10.558h-10.25c-8.541 0-10.25-3.52-10.25-10.558V19.901c0-8.03 2.853-10.182 8.542-10.506h13.667Z"
            />
            <G
                stroke={fill3}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeMiterlimit={10}
                strokeWidth={2.63}
                clipPath="url(#b)"
            >
                <Path d="M13.666 3.418v5.125M27.334 3.418v5.125M27.333 5.98c5.69.308 8.542 2.478 8.542 10.507v10.557c0 7.039-1.708 10.558-10.25 10.558h-10.25c-8.542 0-10.25-3.52-10.25-10.558V16.487c0-8.03 2.853-10.182 8.542-10.507h13.666Z" />
            </G>
            <Rect width={5} height={5} x={12} y={15.5} fill={fill3} rx={2} />
            <Rect width={5} height={5} x={22} y={15.5} fill={fill3} rx={2} />
            <Rect width={5} height={5} x={12} y={26.5} fill={fill3} rx={2} />
            <Rect width={5} height={5} x={22} y={26.5} fill={fill3} rx={2} />
            <Defs>
                <LinearGradient
                    id="a"
                    x1={12.081}
                    x2={49.986}
                    y1={-50.742}
                    y2={-43.601}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#7931B9" />
                    <Stop offset={1} stopColor="#DC4BCF" />
                </LinearGradient>
                <ClipPath id="b">
                    <Path fill={fill4} d="M0 0h41v41H0z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}