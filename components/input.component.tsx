/* eslint-disable react-native/no-inline-styles */
import React, { useState } from 'react';
import { StyleSheet, TextInput, TextInputProps, View, Text } from 'react-native';
import { COLORS, THEME, getTextPrimaryColor } from '../utils/theme';
import { responsiveFontSize } from 'react-native-responsive-dimensions';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface Props extends TextInputProps {
  isValid?: boolean;
  isPassword?: boolean;
  isError?: boolean;
  value: string;
  setValue: (text: string) => void;
  icon?: React.ReactNode;
  type?: 'text' | 'number' | 'password';
  fontFamily?: string;
  fontSize?: number;
  isInputDisabled?:boolean;
}

export const Input: React.FC<Props> = props => {
  const { isPassword, isError, value, setValue, ...otherProps } = props;
  const [isFocused, setIsFocused] = useState<boolean>();
  const [isPasswordMasked, setIsPasswordMasked] = useState<boolean>(true);

  return (
    <View style={styles.container}>
      <TextInput
        editable={props.isInputDisabled ? false : true}
        value={value}
        secureTextEntry={isPassword && isPasswordMasked}
        style={[
          styles.input,
          {
            borderColor: isError ? COLORS.ERROR : isFocused ? COLORS.LIGHT_40 : COLORS.LIGHT_60,
            color: isError ? COLORS.ERROR : getTextPrimaryColor(THEME.DARK),
            fontFamily: props.fontFamily ? props.fontFamily : 'Audrey-Medium',
            fontSize: props.fontSize ? props.fontSize : responsiveFontSize(3),
          },
        ]}
        placeholderTextColor="#888888CC"
        onChangeText={text => setValue(text)}
        onFocus={() => setIsFocused(true)}
        onBlur={() => setIsFocused(false)}
        keyboardType={props.type === 'number' ? 'number-pad' : 'default'}
        {...otherProps}
      />
      {props.icon &&
        <View style={styles.iconContainer}>
          <TouchableOpacity>
            {props.icon}
          </TouchableOpacity>
        </View>
      }
      {isPassword && value?.length > 0 && (
        <View style={styles.iconContainer}>
          <Text
            style={{ color: 'black' }}
            onPress={() => setIsPasswordMasked(prev => !prev)}>
            {/* {isPasswordMasked ? <Visiblity width={20} height={20} /> : 'Hide'} */}
          </Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    height: 50,
  },
  input: {
    height: 50,
    borderBottomWidth: 1,
    paddingHorizontal: 10,
  },
  iconContainer: {
    position: 'absolute',
    right: 9,
    top: 9,
    bottom: 0,
  },
});
