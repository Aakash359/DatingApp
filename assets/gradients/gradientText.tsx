import React from 'react';
import Svg, { Defs, Line, LinearGradient, Stop, Text as SvgText } from 'react-native-svg';

interface Props {
    fontSize:number;
    isUnderlinedText?:boolean;
    children:string
}

export const GradientText = ({ fontSize, isUnderlinedText, children }:Props) => {
  const textProps = {
    fill: 'url(#textGradient)',
    fontSize,
    textDecoration: isUnderlinedText ? 'underline' : 'none',
  };

  const textY = fontSize;
  const underlineY = fontSize * 1.2; // Adjust multiplier as needed
  const underlineWidth = children.length * (fontSize * 0.45); // Rough estimation

  return (
    <Svg height="100%" width="100%">
      <Defs>
        <LinearGradient id="textGradient" x1="0%" y1="0%" x2="100%" y2="0%">
          {/* Gradient stops derived from the provided CSS gradient */}
          <Stop offset="-60.29%" stopColor="#DE49CC" />
          <Stop offset="-45.95%" stopColor="#DD49CC" />
          {/* Add all other gradient stops */}
          <Stop offset="154.79%" stopColor="#5134A9" />
        </LinearGradient>
      </Defs>
      <SvgText {...textProps} x="0" y={fontSize}>
        {children}
      </SvgText>
      {isUnderlinedText && (
        <Line
          x1="0"
          y1={underlineY}
          x2={underlineWidth}
          y2={underlineY}
          stroke="url(#textGradient)"
          strokeWidth="1"
        />
      )}
    </Svg>
  );
};

// // Usage
// <GradientText fontSize={20} isUnderlinedText={true}>
//   Your Gradient Text
// </GradientText>
