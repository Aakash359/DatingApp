import * as React from "react";
import Svg, { Path } from "react-native-svg";
import { IconProps } from "./facebook.icon";

export const VideoIcon = (props: IconProps) => {
    return (
        <Svg fill="none" {...props}>
            <Path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M13.125 17.75H5.25A2.25 2.25 0 0 1 3 15.5v-7a2.25 2.25 0 0 1 2.25-2.25h7.875a2.25 2.25 0 0 1 2.25 2.25v7a2.25 2.25 0 0 1-2.25 2.25Z"
                clipRule="evenodd"
            />
            <Path
                stroke="#fff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="m15.375 13.097 3.795 3.054c.736.593 1.83.069 1.83-.876v-6.55c0-.945-1.094-1.47-1.83-.876l-3.795 3.054"
            />
        </Svg>
    )
}
