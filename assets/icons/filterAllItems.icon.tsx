import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"

export const FilterAllItemsIcon = () => {
    return (
        <Svg
            width={17}
            height={17}
            fill="none"
        >
            <G clipPath="url(#a)">
                <Path
                    stroke="#F5F5FD"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeMiterlimit={10}
                    strokeWidth={1.5}
                    d="M3.968 7.356H5.34c1.372 0 2.057-.685 2.057-2.057V3.928c0-1.371-.685-2.057-2.057-2.057H3.97c-1.372 0-2.058.686-2.058 2.057v1.371c0 1.372.686 2.057 2.057 2.057Zm8.228 0h1.371c1.371 0 2.057-.685 2.057-2.057V3.928c0-1.371-.686-2.057-2.057-2.057h-1.371c-1.371 0-2.057.686-2.057 2.057v1.371c0 1.372.686 2.057 2.057 2.057Zm0 8.228h1.371c1.371 0 2.057-.686 2.057-2.057v-1.371c0-1.372-.686-2.057-2.057-2.057h-1.371c-1.371 0-2.057.685-2.057 2.057v1.371c0 1.371.686 2.057 2.057 2.057Zm-8.228 0H5.34c1.372 0 2.057-.686 2.057-2.057v-1.371c0-1.372-.685-2.057-2.057-2.057H3.97c-1.372 0-2.058.685-2.058 2.057v1.371c0 1.371.686 2.057 2.057 2.057Z"
                />
            </G>
            <Defs>
                <ClipPath id="a">
                    <Path fill="#fff" d="M.54.5h16.455v16.455H.54z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}
