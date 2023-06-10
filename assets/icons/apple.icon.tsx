import React from "react";
import {Svg, Path} from 'react-native-svg';
import { IconProps } from "./facebook.icon";

export const AppleIcon = (props: IconProps) => {
    const {width = '66px', height = '47px', fill1 ='#C6C6CD'} = props;

  return (
    <Svg
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 46 37"
    >
      <Path
        fill={fill1}
        d="M32.684 24.652c-.363.839-.792 1.61-1.29 2.32-.679.968-1.234 1.637-1.662 2.01-.664.61-1.375.922-2.137.94-.546 0-1.205-.156-1.973-.471-.77-.314-1.477-.47-2.124-.47-.679 0-1.407.156-2.185.47-.78.315-1.407.48-1.887.496-.73.031-1.458-.29-2.185-.966-.464-.404-1.044-1.098-1.739-2.08-.745-1.049-1.358-2.265-1.838-3.651-.514-1.498-.772-2.948-.772-4.353 0-1.608.348-2.995 1.044-4.158a6.123 6.123 0 012.186-2.21 5.88 5.88 0 012.955-.835c.58 0 1.34.18 2.285.532.943.354 1.548.534 1.814.534.198 0 .87-.21 2.01-.628 1.078-.388 1.987-.549 2.732-.486 2.02.163 3.537.96 4.545 2.393-1.806 1.095-2.699 2.627-2.681 4.593.016 1.531.572 2.806 1.664 3.818.494.47 1.047.832 1.662 1.09-.133.387-.274.757-.424 1.113zM28.054 6.43c0 1.2-.44 2.321-1.313 3.359-1.055 1.233-2.331 1.945-3.715 1.833a3.718 3.718 0 01-.027-.455c0-1.152.501-2.385 1.392-3.394.445-.51 1.01-.935 1.696-1.273.685-.334 1.332-.518 1.94-.55.019.16.026.321.026.48z"
      ></Path>
    </Svg>
  );
}