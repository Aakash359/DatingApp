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
  isTextArea?: boolean;
  customTextAreaHeight?: number;
}

export const Input: React.FC<Props> = props => {
  const { customTextAreaHeight, isPassword, isError, value, setValue, isTextArea, ...otherProps } = props;
  const [isFocused, setIsFocused] = useState<boolean>();
  const [isPasswordMasked, setIsPasswordMasked] = useState<boolean>(true);

  return (
    <View style={{
        height: isTextArea ? customTextAreaHeight : 50,
        position: 'relative'
      }
    }>
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
            height: isTextArea ? customTextAreaHeight : 'auto',
            textAlignVertical: isTextArea ? 'top' : 'auto',
            lineHeight: isTextArea ? 25 : 20,
            borderBottomWidth: isTextArea ? 1 : 1,
            borderWidth: isTextArea ? 1 : 0,
            borderRadius: isTextArea ? 5 : 0,
            borderStyle: isTextArea ? 'dashed' : 'solid',
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
