import * as React from "react"
import Svg, {
  Mask,
  Path,
  G,
  Defs,
  LinearGradient,
  Stop,
  Pattern,
  Use,
  Image,
} from "react-native-svg"

export const GemLargeIcon = () => (
    <Svg
      width={64}
      height={64}
      fill="none"
    >
      <Mask
        id="a"
        width={60}
        height={47}
        x={2}
        y={10}
        maskUnits="userSpaceOnUse"
        style={{ maskType: "alpha" }}
      >
        <Path
          fill="#fff"
          d="M3.823 29.803a6.33 6.33 0 0 1-.428-8.304l6.61-8.439a6.415 6.415 0 0 1 5.05-2.454h34.024c1.99 0 3.866.92 5.077 2.489l6.504 8.423a6.33 6.33 0 0 1-.443 8.257L36.703 54.312c-2.518 2.628-6.733 2.633-9.258.012L3.823 29.803Z"
        />
      </Mask>
      <G mask="url(#a)">
        <Path
          fill="url(#b)"
          d="m0 25.834 11.926-15.228h40.309l11.758 15.228L32.08 59.136 0 25.834Z"
        />
        <Path
          fill="#000"
          fillOpacity={0.1}
          d="m0 25.835 14.768 4.846L32.08 59.136 0 25.835ZM63.912 25.835 48.897 30.68 32.08 59.136l31.832-33.301Z"
        />
        <Path
          fill="#fff"
          d="M31.835 13.937 11.795 10.6l2.974 20.081h34.129L51.872 10.6l-20.037 3.337Z"
          style={{ mixBlendMode: "overlay" }}
        />
        <Path
          fill="#fff"
          d="m11.795 10.6 20.286 6.694 20.154-6.688-40.44-.006Z"
          style={{ mixBlendMode: "soft-light" }}
        />
        <Path
          fill="#fff"
          d="M31.834 13.936 14.768 30.68h34.129L31.834 13.936Z"
          style={{ mixBlendMode: "overlay" }}
        />
        <Path
          fill="#fff"
          d="M32.08 17.293 14.768 30.681h34.129L32.08 17.293ZM14.768 30.681 0 25.835 11.794 10.6h2.974V30.68Z"
          style={{ mixBlendMode: "soft-light" }}
        />
        <Path
          fill="#fff"
          d="M48.897 30.681 64 25.835 52.205 10.6H49.23l-.334 20.081Z"
          style={{ mixBlendMode: "soft-light" }}
        />
        <Path
          fill="#fff"
          d="m14.768 30.681 17.228 28.412 16.9-28.412H14.769Z"
          opacity={0.5}
          style={{ mixBlendMode: "soft-light" }}
        />
        <G
          filter="url(#c)"
          opacity={0.3}
          style={{ mixBlendMode: "soft-light" }}
        >
          <Path
            fill="#000"
            d="m14.768 30.681 17.228 28.412 16.9-28.412H14.769Z"
          />
        </G>
        <Path
          fill="url(#d)"
          fillOpacity={0.6}
          d="M-.001 66.248h63.598v64H-.001z"
          style={{ mixBlendMode: "soft-light" }}
          transform="rotate(-90 0 66.248)"
        />
      </G>
      <Defs>
        <LinearGradient
          id="b"
          x1={31.996}
          x2={31.996}
          y1={10.606}
          y2={59.136}
          gradientUnits="userSpaceOnUse"
        >
          <Stop stopColor="#AA41FB" />
          <Stop offset={0.432} stopColor="#413FCB" />
          <Stop offset={1} stopColor="#BB29FF" />
        </LinearGradient>
        <Pattern
          id="d"
          width={2.987}
          height={1.781}
          patternContentUnits="objectBoundingBox"
        >
          <Use xlinkHref="#e" transform="scale(.00233 .00232)" />
        </Pattern>
        <Image
          id="e"
          width={1280}
          height={768}
        />
      </Defs>
    </Svg>
  )