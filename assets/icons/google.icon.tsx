import React from "react";
import { IconProps } from "./facebook.icon";
import {Svg, Path} from 'react-native-svg';

export const GoogleIcon = (props: IconProps) => {
    const {width = '66px', height = '47px', fill1 ='#4285F4', fill2='#34A853', fill3='#FBBC04', fill4='#EA4335'} = props;
  return (
    <Svg
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 46 37"
    >
      <Path
        fill={fill1}
        d="M34.565 18.749a13.792 13.792 0 00-.2-2.354H23.446v4.459H29.7a5.358 5.358 0 01-2.312 3.518v2.895h3.732c2.186-2.015 3.445-4.995 3.445-8.518z"
      ></Path>
      <Path
        fill={fill2}
        d="M23.446 30.066c3.125 0 5.756-1.026 7.674-2.795l-3.732-2.895c-1.04.704-2.377 1.107-3.942 1.107-3.02 0-5.583-2.036-6.5-4.78h-3.845v2.983a11.578 11.578 0 0010.345 6.38z"
      ></Path>
      <Path
        fill={fill3}
        d="M16.946 20.704a6.937 6.937 0 010-4.432V13.29h-3.845a11.578 11.578 0 000 10.398l3.845-2.983z"
      ></Path>
      <Path
        fill={fill4}
        d="M23.446 11.49a6.286 6.286 0 014.442 1.737l3.305-3.305a11.125 11.125 0 00-7.747-3.015 11.579 11.579 0 00-10.345 6.38l3.845 2.983c.917-2.744 3.48-4.78 6.5-4.78z"
      ></Path>
    </Svg>
  );
}