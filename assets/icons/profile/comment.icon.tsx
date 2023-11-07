import * as React from "react"
import Svg, { Path } from "react-native-svg"

export const CommentIcon = () => (
  <Svg
    width={21}
    height={21}
    fill="none"
  >
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.5}
      d="M7.833 16.211h-.406c-3.255 0-4.883-.813-4.883-4.882V7.26c0-3.255 1.628-4.882 4.883-4.882h6.51c3.254 0 4.882 1.627 4.882 4.882v4.069c0 3.255-1.628 4.882-4.883 4.882h-.406a.825.825 0 0 0-.651.326l-1.221 1.627c-.537.716-1.416.716-1.953 0l-1.22-1.627c-.13-.18-.432-.326-.652-.326Z"
    />
    <Path
      stroke="#fff"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M13.933 9.701h.008m-3.264 0h.009m-3.264 0h.007"
    />
  </Svg>
)
