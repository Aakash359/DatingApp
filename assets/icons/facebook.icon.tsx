import React from "react";
import {Svg, Path} from 'react-native-svg';

export type IconProps = {
    width?: number;
    height?: number;
    fill1?: string;
    fill2?: string;
    fill3?: string;
    fill4?: string;
};

export const FacebookIcon = (props : IconProps) => {
    const {width = '66px', height = '47px', fill1 ='#1877F2', fill2='#fff'} = props;
  return (
    <Svg
    //   xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 46 37"
    >
      <Path
        fill={fill1}
        d="M35.429 17.95c0-6.628-5.373-12-12-12-6.628 0-12 5.372-12 12 0 5.989 4.388 10.953 10.125 11.853v-8.385h-3.047v-3.469h3.047v-2.644c0-3.007 1.791-4.668 4.532-4.668 1.313 0 2.687.234 2.687.234v2.953h-1.514c-1.49 0-1.955.925-1.955 1.874v2.251h3.328l-.532 3.469h-2.796v8.385c5.737-.9 10.125-5.864 10.125-11.854z"
      ></Path>
      <Path
        fill={fill2}
        d="M28.1 21.418l.532-3.469h-3.328V15.7c0-.95.465-1.875 1.955-1.875h1.514v-2.953s-1.374-.234-2.687-.234c-2.74 0-4.532 1.661-4.532 4.668v2.644h-3.047v3.469h3.047v8.385a12.087 12.087 0 003.75 0v-8.385H28.1z"
      ></Path>
    </Svg>
  );
}
