import * as React from "react"
import Svg, { Circle, Path, Defs, LinearGradient, Stop } from "react-native-svg"

export const ManifestLargeIcon = () => (
  <Svg
    width={65}
    height={64}
    fill="none"
  >
    <Circle
      cx={32.422}
      cy={31.998}
      r={25.517}
      fill="url(#a)"
      stroke="url(#b)"
      strokeWidth={0.4}
    />
    <Circle cx={32.422} cy={31.997} r={20.504} fill="url(#c)" />
    <Path
      fill="#FFE26F"
      fillRule="evenodd"
      d="M30.946 51.028c11.324 0 20.504-9.18 20.504-20.504 0-5.285-2-10.103-5.283-13.739a20.452 20.452 0 0 1 6.76 15.216c0 11.324-9.181 20.504-20.505 20.504A20.452 20.452 0 0 1 17.2 45.739a20.429 20.429 0 0 0 13.745 5.29Z"
      clipRule="evenodd"
      opacity={0.32}
    />
    <Path
      fill="#F99335"
      fillRule="evenodd"
      d="M47.643 18.258a20.43 20.43 0 0 0-13.745-5.29c-11.325 0-20.505 9.18-20.505 20.505 0 5.285 2 10.103 5.284 13.739a20.452 20.452 0 0 1-6.76-15.216c0-11.324 9.18-20.504 20.505-20.504 6.04 0 11.469 2.611 15.22 6.766Z"
      clipRule="evenodd"
      opacity={0.61}
    />
    <Path
      fill="#FFF4C7"
      d="M43.422 42h-3.607V25.758L32.349 42h-1.147l-7.41-16.242V42h-1.37V22h3.355l7.159 15.517L40.066 22h3.356v20Z"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={16.252}
        x2={47.996}
        y1={11.968}
        y2={50.753}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FFC700" />
        <Stop offset={1} stopColor="#FFA800" />
      </LinearGradient>
      <LinearGradient
        id="b"
        x1={18.744}
        x2={48.308}
        y1={10.494}
        y2={50.084}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FB9B21" stopOpacity={0.75} />
        <Stop offset={1} stopColor="#F08906" />
      </LinearGradient>
      <LinearGradient
        id="c"
        x1={22.716}
        x2={43.956}
        y1={20.047}
        y2={47.519}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#FFA800" />
        <Stop offset={0.939} stopColor="#FFC838" />
      </LinearGradient>
    </Defs>
  </Svg>
)
