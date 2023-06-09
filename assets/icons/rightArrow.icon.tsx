import * as React from "react"
import Svg, { Path } from "react-native-svg"

export const RightArrow = (props: any) => (
    <Svg xmlns="http://www.w3.org/2000/svg" fill="none" {...props} width={8} height={16}>
        <Path
            fill="#F5F5FD"
            fillRule="evenodd"
            d="M.407 15.05c.401.402 1.048.402 1.449 0l6.799-6.798a.815.815 0 0 0 0-1.154L1.855.3C1.456-.1.809-.1.408.3c-.4.401-.4 1.047 0 1.448L6.331 7.68.4 13.611a1.02 1.02 0 0 0 .008 1.44Z"
            clipRule="evenodd"
        />
    </Svg>
)
