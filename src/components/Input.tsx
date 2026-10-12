import React from 'react';
import { TextInput, Text, View, StyleSheet } from 'react-native';
import { globalStyles } from '../utils/styled';

interface InputProps {
  label: string;
  value: string;
  onChangeText: (text: string) => void;
  onBlur?: () => void;
  placeholder?: string;
  error?: string;
  secureTextEntry?: boolean;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  multiline?: boolean;
  numberOfLines?: number;
  editable?: boolean;
  style?: any;
}

export const Input: React.FC<InputProps> = ({
  label,
  value,
  onChangeText,
  onBlur,
  placeholder,
  error,
  secureTextEntry = false,
  keyboardType = 'default',
  multiline = false,
  numberOfLines,
  editable = true,
  style,
}) => {
  const hasError = !!error;

  return (
    <View style={[globalStyles.inputContainer, style]}>
      <Text style={globalStyles.inputLabel}>{label}</Text>
      <TextInput
        style={[
          globalStyles.input,
          hasError && globalStyles.inputError,
          !editable && { backgroundColor: '#2a2a2a' },
        ]}
        value={value}
        onChangeText={onChangeText}
        onBlur={onBlur}
        placeholder={placeholder}
        placeholderTextColor="#666666"
        secureTextEntry={secureTextEntry}
        keyboardType={keyboardType}
        multiline={multiline}
        numberOfLines={numberOfLines}
        editable={editable}
        selectionColor="#007aff"
      />
      {hasError && <Text style={globalStyles.errorText}>{error}</Text>}
    </View>
  );
};