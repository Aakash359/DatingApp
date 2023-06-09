/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, StyleSheet, Text, Platform, ViewStyle} from 'react-native';
import DateTimePicker, {
  DateTimePickerEvent,
} from '@react-native-community/datetimepicker';
import { COLORS, THEME, getTextButtonColor, getTextPrimaryColor } from '../utils/theme';
import { responsiveFontSize, responsiveScreenHeight } from 'react-native-responsive-dimensions';

interface Props {
  validDates: boolean;
  date: Date | undefined;
  setDate: (date: Date) => void;
  label?: string;
  mode?: string;
  dateTimeInputContainerStyle?: ViewStyle;
  dateTimePickerStyle?: ViewStyle;
  placeholder?: string;
}

interface State {
  showDateModalAndroid: boolean;
}

export function getCurrentTime(milliseconds: number): string {
  const date = new Date(milliseconds);
  let hours: string | number =
    date.getHours() > 12 ? date.getHours() - 12 : date.getHours();
  hours = hours < 10 ? '0' + hours : hours;
  const am_pm = date.getHours() >= 12 ? 'PM' : 'AM';
  const minutes =
    date.getMinutes() < 10 ? '0' + date.getMinutes() : date.getMinutes();
  return `${hours}:${minutes} ${am_pm}`;
}

export class CustomDatePicker extends React.Component<Props, State> {
  private _isMounted = false;

  constructor(props: Props) {
    super(props);

    this.state = {
      showDateModalAndroid: false,
    };

    this.showModal = this.showModal.bind(this);
    this.onDateChange = this.onDateChange.bind(this);
  }

  componentDidMount() {
    this._isMounted = true;
  }

  componentWillUnmount() {
    this._isMounted = false;
  }

  private onDateChange(
    event: DateTimePickerEvent,
    selectedDate: Date | undefined,
  ) {
    if (this._isMounted) {
      this.setState({showDateModalAndroid: false});
      const currentDate = selectedDate || this.props.date;
      currentDate && this.props.setDate(currentDate);
    }
  }

  showModal() {
    if (this._isMounted && Platform.OS === 'android') {
      this.setState({showDateModalAndroid: true});
    }
  }

  render() {
    if (!this.props.validDates) {
      return <></>;
    }

    if (Platform.OS === 'android') {
      return (
        <>
          <View
            style={[
              styles.dateInputContainer,
              this.props.dateTimeInputContainerStyle,
            ]}
            onTouchEnd={this.showModal.bind(this)}>
            <Text
              style={[
                styles.labelText,
                {color: this.props.date ? getTextPrimaryColor(THEME.DARK) : '#888888CC'},
              ]}>
              {this.props.date
                ? `${this.props.label ? this.props.label + ': ' : ' '}` +
                  (this.props.mode === 'time'
                    ? getCurrentTime(
                        new Date(this.props.date).getTime() * 1000000,
                      )
                    : new Date(this.props.date).toLocaleDateString())
                : this.props.placeholder}
            </Text>
          </View>

          {this.state.showDateModalAndroid && (
            <DateTimePicker
              style={styles.pickerContainer}
              testID="dateTimePicker"
              value={this.props.date ? new Date(this.props.date) : new Date()}
              placeholderText="Select Date"
              is24Hour={true}
              mode={'date'}
              display={'default'}
              onChange={this.onDateChange.bind(this)}
              textColor={'black'}
              minimumDate={new Date(1939, 8, 1)}
            />
          )}
        </>
      );
    }

    return (
      <View
        style={[
          styles.dateInputContainer,
          this.props.dateTimeInputContainerStyle,
        ]}>
        {this.props.label && (
          <Text style={[styles.labelText]}>{this.props.label}: </Text>
        )}
        <DateTimePicker
          style={[styles.pickerContainer, this.props.dateTimePickerStyle]}
          testID="dateTimePicker"
          mode={'date'}
          placeholderText="Select Date"
          value={this.props.date ? new Date(this.props.date) : new Date()}
          is24Hour={true}
          display={'spinner'}
          onChange={this.onDateChange.bind(this)}
          textColor={'black'}
          minimumDate={new Date(1939, 8, 1)}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  dateInputContainer: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 2,
    height: 36,
    // borderRadius: 3,
    borderColor: COLORS.LIGHT_60,
    paddingHorizontal: 10,
  },
  labelText: {
    fontFamily: 'Audrey-Medium',
    fontSize: responsiveFontSize(3),
    width: Platform.OS === 'android' ? '80%' : '40%',
  },
  pickerContainer: {
    width: '100%',
    height: responsiveScreenHeight(100),
  },
  button: {
    width: '35%',
  },
});
