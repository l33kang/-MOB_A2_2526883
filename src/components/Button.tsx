import React from 'react';
import { Pressable, Text, TextStyle, ViewStyle } from 'react-native';
import { globalStyles } from '../utils/styled';

interface ButtonProps {
  title: string;
  onPress: () => void;
  disabled?: boolean;
  variant?: 'primary' | 'outline' | 'danger';
  style?: ViewStyle;
  loading?: boolean;
}

export const Button: React.FC<ButtonProps> = ({
  title,
  onPress,
  disabled = false,
  variant = 'primary',
  style,
  loading = false,
}) => {
  const isDisabled = disabled || loading;

  const baseStyle = globalStyles.button;
  let variantStyle: ViewStyle = {};
  let textStyle: TextStyle = globalStyles.buttonText;

  if (variant === 'outline') {
    variantStyle = globalStyles.buttonOutline;
    textStyle = { ...globalStyles.buttonOutlineText, fontSize: 16, fontWeight: '600' };
  } else if (variant === 'danger') {
    variantStyle = globalStyles.buttonDanger;
  }

  const disabledStyle = isDisabled
    ? variant === 'danger'
      ? globalStyles.buttonDangerDisabled
      : globalStyles.buttonDisabled
    : {};

  const combinedStyle: ViewStyle[] = [baseStyle, variantStyle, disabledStyle, style].filter(Boolean) as ViewStyle[];

  return (
    <Pressable
      onPress={onPress}
      disabled={isDisabled}
      style={combinedStyle}
      android_ripple={{ color: variant === 'outline' ? '#007aff33' : '#ffffff33' }}
    >
      {loading ? (
        <Text style={[textStyle, { color: variant === 'outline' ? '#007aff' : '#ffffff' }]}>Loading...</Text>
      ) : (
        <Text style={textStyle}>{title}</Text>
      )}
    </Pressable>
  );
};