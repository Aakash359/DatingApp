import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
export const FilterCommentItemsIcon = () => {
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
                    d="M6.005 7.701h4.799m-5.828 5.437H7.72l3.05 2.03a.683.683 0 0 0 1.063-.57v-1.46c2.057 0 3.429-1.371 3.429-3.428V5.596c0-2.057-1.372-3.428-3.428-3.428H4.975c-2.057 0-3.428 1.371-3.428 3.428V9.71c0 2.057 1.371 3.428 3.428 3.428Z"
                />
            </G>
            <Defs>
                <ClipPath id="a">
                    <Path fill="#fff" d="M.177.5h16.455v16.455H.177z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}
