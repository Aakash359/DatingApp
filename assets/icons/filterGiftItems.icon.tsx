import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
export const FilterGiftItemIcon = () => {
    return (
        <Svg
            width={18}
            height={17}
            fill="none"
        >
            <G
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                clipPath="url(#a)"
            >
                <Path stroke="#F5F5FD" d="M14.465 8.727v6.856H3.495V8.727" />
                <Path
                    stroke="#fff"
                    d="M15.836 5.3H2.124V8.73h13.712V5.301ZM8.98 15.585V5.301M8.98 5.3H5.895a1.714 1.714 0 1 1 0-3.429c2.4 0 3.085 3.428 3.085 3.428ZM8.98 5.3h3.085a1.714 1.714 0 1 0 0-3.429C9.665 1.871 8.98 5.3 8.98 5.3Z"
                />
            </G>
            <Defs>
                <ClipPath id="a">
                    <Path fill="#fff" d="M.752.5h16.455v16.455H.752z" />
                </ClipPath>
            </Defs>
        </Svg>
    )
}
