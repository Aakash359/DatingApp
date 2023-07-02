import * as React from "react"
import Svg, { Circle, Path, Defs, LinearGradient, Stop } from "react-native-svg"
import { IconProps } from "./facebook.icon";

export const ManifestCurrency = (props: IconProps) => {
    const { width = 24, height = 24 } = props;
    return (
        <Svg
            width={width}
            height={height}
            fill="none"
            {...props}
        >
            <Circle
                cx={11.818}
                cy={11.816}
                r={9.424}
                fill="url(#a)"
                stroke="url(#b)"
                strokeWidth={0.148}
            />
            <Circle cx={11.818} cy={11.817} r={7.573} fill="url(#c)" />
            <Path
                fill="#FFE26F"
                fillRule="evenodd"
                d="M11.273 18.845a7.573 7.573 0 0 0 5.619-12.65A7.573 7.573 0 1 1 6.2 16.894a7.545 7.545 0 0 0 5.073 1.951Z"
                clipRule="evenodd"
                opacity={0.32}
            />
            <Path
                fill="#F99335"
                fillRule="evenodd"
                d="M17.437 6.74A7.573 7.573 0 0 0 6.745 17.439 7.573 7.573 0 1 1 17.437 6.74Z"
                clipRule="evenodd"
                opacity={0.61}
            />
            <Path
                fill="#FFF4C7"
                d="M15.88 15.511h-1.332V9.513l-2.757 5.998h-.423L8.63 9.513v5.998h-.506V8.125h1.24l2.643 5.73 2.633-5.73h1.24v7.386Z"
            />
            <Defs>
                <LinearGradient
                    id="a"
                    x1={5.846}
                    x2={17.57}
                    y1={4.419}
                    y2={18.743}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#FFC700" />
                    <Stop offset={1} stopColor="#FFA800" />
                </LinearGradient>
                <LinearGradient
                    id="b"
                    x1={6.767}
                    x2={17.685}
                    y1={3.874}
                    y2={18.495}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#FB9B21" stopOpacity={0.75} />
                    <Stop offset={1} stopColor="#F08906" />
                </LinearGradient>
                <LinearGradient
                    id="c"
                    x1={8.234}
                    x2={16.078}
                    y1={7.403}
                    y2={17.55}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#FFA800" />
                    <Stop offset={0.939} stopColor="#FFC838" />
                </LinearGradient>
            </Defs>
        </Svg>
    )
}
