import * as React from "react"
import Svg, {
  Circle,
  G,
  Path,
  Defs,
  LinearGradient,
  Stop,
} from "react-native-svg"

export const UpgradeProfileIcon = ({width = 78 , height = 68}) => (
  <Svg
    width={width}
    height={height}
    fill='none'
  >
    <Circle
      cx={39.221}
      cy={35.016}
      r={24.797}
      fill='url(#a)'
      fillOpacity={0.25}
    />
    <Circle
      cx={39.221}
      cy={35.016}
      r={24.797}
      stroke='#D9D9D9'
      strokeWidth={1.722}
    />
    <Circle
      cx={39.221}
      cy={35.016}
      r={24.797}
      stroke='url(#b)'
      strokeWidth={1.722}
    />
    <G filter='url(#c)'>
      <Path
        fill='#FF004D'
        d='M11.808 57.283a.165.165 0 0 1-.066-.066l-.96-1.755-.96 1.755a.166.166 0 0 1-.066.066L8 58.243l1.756.96c.028.016.05.039.066.067l.96 1.756.96-1.756a.166.166 0 0 1 .066-.066l1.756-.96-1.756-.96Z'
      />
    </G>
    <Path
      fill='#fff'
      d='M11.808 57.283a.165.165 0 0 1-.066-.066l-.96-1.755-.96 1.755a.166.166 0 0 1-.066.066L8 58.243l1.756.96c.028.016.05.039.066.067l.96 1.756.96-1.756a.166.166 0 0 1 .066-.066l1.756-.96-1.756-.96Z'
    />
    <G filter='url(#d)'>
      <Path
        fill='#FF004D'
        d='M67.24 9.837a.26.26 0 0 1-.103-.103l-1.509-2.76-1.509 2.76a.26.26 0 0 1-.103.103l-2.76 1.51 2.76 1.508a.26.26 0 0 1 .103.104l1.51 2.759 1.508-2.76a.26.26 0 0 1 .104-.103L70 11.346l-2.76-1.509Z'
      />
    </G>
    <Path
      fill='#fff'
      d='M67.24 9.837a.26.26 0 0 1-.103-.103l-1.509-2.76-1.509 2.76a.26.26 0 0 1-.103.103l-2.76 1.51 2.76 1.508a.26.26 0 0 1 .103.104l1.51 2.759 1.508-2.76a.26.26 0 0 1 .104-.103L70 11.346l-2.76-1.509ZM36.701 38.411l-6.507-1.288 12.95-15.319-2.194 9.785 6.507 1.288-12.95 15.319 2.194-9.785Z'
    />
    <Defs>
      <LinearGradient
        id='a'
        x1={24.363}
        x2={157.583}
        y1={-120.583}
        y2={-64.419}
        gradientUnits='userSpaceOnUse'
      >
        <Stop stopColor='#DE49CC' />
        <Stop offset={0.067} stopColor='#DD49CC' />
        <Stop offset={0.133} stopColor='#D948CB' />
        <Stop offset={0.2} stopColor='#D247C9' />
        <Stop offset={0.267} stopColor='#C946C7' />
        <Stop offset={0.333} stopColor='#BD44C4' />
        <Stop offset={0.4} stopColor='#AF42C0' />
        <Stop offset={0.467} stopColor='#A040BD' />
        <Stop offset={0.533} stopColor='#8F3DB8' />
        <Stop offset={0.6} stopColor='#803BB5' />
        <Stop offset={0.667} stopColor='#7239B1' />
        <Stop offset={0.733} stopColor='#6637AE' />
        <Stop offset={0.8} stopColor='#5D36AC' />
        <Stop offset={0.867} stopColor='#5635AA' />
        <Stop offset={0.933} stopColor='#5234A9' />
        <Stop offset={1} stopColor='#5134A9' />
      </LinearGradient>
      <LinearGradient
        id='b'
        x1={24.363}
        x2={157.583}
        y1={-120.583}
        y2={-64.419}
        gradientUnits='userSpaceOnUse'
      >
        <Stop stopColor='#DE49CC' />
        <Stop offset={0.067} stopColor='#DD49CC' />
        <Stop offset={0.133} stopColor='#D948CB' />
        <Stop offset={0.2} stopColor='#D247C9' />
        <Stop offset={0.267} stopColor='#C946C7' />
        <Stop offset={0.333} stopColor='#BD44C4' />
        <Stop offset={0.4} stopColor='#AF42C0' />
        <Stop offset={0.467} stopColor='#A040BD' />
        <Stop offset={0.533} stopColor='#8F3DB8' />
        <Stop offset={0.6} stopColor='#803BB5' />
        <Stop offset={0.667} stopColor='#7239B1' />
        <Stop offset={0.733} stopColor='#6637AE' />
        <Stop offset={0.8} stopColor='#5D36AC' />
        <Stop offset={0.867} stopColor='#5635AA' />
        <Stop offset={0.933} stopColor='#5234A9' />
        <Stop offset={1} stopColor='#5134A9' />
      </LinearGradient>
    </Defs>
  </Svg>
)