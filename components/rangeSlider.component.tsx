import React from 'react';
import { View, Text, Image } from 'react-native';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import { THEME, getBrandColor, getBrandSecondaryColor } from '../utils';
import { responsiveScreenWidth } from 'react-native-responsive-dimensions';

const CustomMarker = () => <Image source={require('../assets/images/auth/sliderThumbSmall.png')} />;

interface Props {
    sliderValues: any;
    setSliderValues: React.Dispatch<React.SetStateAction<number[]>>;
}

export const CustomRangeSlider = (props: Props) => {
  const {sliderValues, setSliderValues} = props;
  const multiSliderValuesChange = (values: number[]) => setSliderValues(values);

  return (
    <View style={{ flex: 1, alignItems: 'stretch', justifyContent: 'center', marginLeft: responsiveScreenWidth(4) }}>
      <MultiSlider
        values={[sliderValues[0], sliderValues[1]]}
        sliderLength={responsiveScreenWidth(80)}
        onValuesChange={multiSliderValuesChange as any}
        min={18}
        max={60}
        step={0.5}
        allowOverlap
        snapped
        customMarker={CustomMarker}
        minMarkerOverlapDistance={40}
        selectedStyle={{
          backgroundColor: getBrandSecondaryColor(THEME.DARK),
        }}
        unselectedStyle={{
          backgroundColor: getBrandColor(THEME.DARK),
        }}
      />
    </View>
  );
}
