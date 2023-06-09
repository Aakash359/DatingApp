import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"
import { IconProps } from "./facebook.icon";

export const GenderIcon = (props: IconProps) => {
    const {width = '41px', height = '41px', fill1 ='url(#a)', fill2='#C6C6CD', fill3='#C6C6CD'} = props;
    return (
        <Svg fill="none" {...props} width={width} height={height}>
            <Path
                fill={fill1}
                d="M33.04 17.24v11.686a5.422 5.422 0 0 1-2.682 4.664l-10.147 5.86a5.403 5.403 0 0 1-5.381 0L4.682 33.59A5.38 5.38 0 0 1 2 28.926V17.24a5.422 5.422 0 0 1 2.682-4.664l10.148-5.86a5.404 5.404 0 0 1 5.38 0l10.148 5.86a5.401 5.401 0 0 1 2.682 4.664Z"
            />
            <Path
                stroke={fill2}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.63}
                d="M36.012 14.659v11.685a5.422 5.422 0 0 1-2.682 4.664l-10.148 5.86a5.403 5.403 0 0 1-5.381 0l-10.148-5.86a5.38 5.38 0 0 1-2.682-4.664V14.659a5.422 5.422 0 0 1 2.682-4.664l10.148-5.86a5.404 5.404 0 0 1 5.381 0l10.148 5.86a5.401 5.401 0 0 1 2.682 4.664Z"
            />
            <Path
                stroke={fill3}
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2.63}
                d="M20.5 18.793a3.98 3.98 0 1 0 0-7.961 3.98 3.98 0 0 0 0 7.96ZM26.833 28.464c0-3.075-3.058-5.57-6.833-5.57-3.776 0-6.834 2.495-6.834 5.57"
            />
            <Defs>
                <LinearGradient
                    id="a"
                    x1={12.47}
                    x2={50.901}
                    y1={-58.978}
                    y2={-52.214}
                    gradientUnits="userSpaceOnUse"
                >
                    <Stop stopColor="#7931B9" />
                    <Stop offset={1} stopColor="#DC4BCF" />
                </LinearGradient>
            </Defs>
        </Svg>
    )
}