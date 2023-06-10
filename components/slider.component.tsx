import React from 'react';
import { View, ViewStyle, StyleProp } from 'react-native';
import Slider from '@react-native-community/slider';
import { THEME, getBrandColor, getBrandSecondaryColor } from '../utils';

interface Props {
    sliderStyle: StyleProp<ViewStyle>;
    sliderValue: number;
    setSliderValue: React.Dispatch<React.SetStateAction<number>>;
  }

export const CustomSlider = (props: Props) => {
    const {sliderStyle, sliderValue, setSliderValue} = props;
    return (
      <View style={{flex: 1, justifyContent: 'center',}}>
        <Slider
          style={sliderStyle}
          minimumValue={0}
          maximumValue={100}
          minimumTrackTintColor={getBrandSecondaryColor(THEME.DARK)}
          maximumTrackTintColor={getBrandColor(THEME.DARK)}
          thumbImage={require('../assets/images/auth/sliderThumb.png')}
          onValueChange={(value) => setSliderValue(value)}
          value={sliderValue}
        />
      </View>
    );
}
