import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "./facebook.icon"

export const LeftArrow = (props: IconProps) => {
    return (
        <Svg fill="none" {...props}>
            <Path
                fill="#F5F5FD"
                fillRule="evenodd"
                d="M8.598.3c-.4-.4-1.047-.4-1.448 0L.35 7.1a.815.815 0 0 0 0 1.153l6.8 6.8c.4.4 1.047.4 1.448 0 .401-.401.401-1.048 0-1.449L2.675 7.673 8.606 1.74A1.02 1.02 0 0 0 8.598.3Z"
                clipRule="evenodd"
            />
        </Svg>
    )
}
