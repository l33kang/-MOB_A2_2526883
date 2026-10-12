import React from 'react';
import { View, Text, Pressable, StyleSheet } from 'react-native';
import { globalStyles } from '../utils/styled';

interface CardProps {
  children: React.ReactNode;
  style?: any;
  onPress?: () => void;
}

export const Card: React.FC<CardProps> = ({ children, style, onPress }) => {
  const containerStyle = [globalStyles.card, style];

  if (onPress) {
    return (
      <Pressable onPress={onPress} style={containerStyle} android_ripple={{ color: '#007aff33' }}>
        {children}
      </Pressable>
    );
  }
  return <View style={containerStyle}>{children}</View>;
};

export const SectionTitle: React.FC<{ children: React.ReactNode; style?: any }> = ({ children, style }) => (
  <Text style={[globalStyles.sectionTitle, style]}>{children}</Text>
);

export const Label: React.FC<{ children: React.ReactNode; style?: any }> = ({ children, style }) => (
  <Text style={[globalStyles.label, style]}>{children}</Text>
);

export const ValueText: React.FC<{ children: React.ReactNode; style?: any }> = ({ children, style }) => (
  <Text style={[globalStyles.valueText, style]}>{children}</Text>
);

export const ErrorText: React.FC<{ children: React.ReactNode; style?: any }> = ({ children, style }) => (
  <Text style={[globalStyles.errorText, style]}>{children}</Text>
);

export const Divider: React.FC<{ style?: any }> = ({ style }) => (
  <View style={[globalStyles.divider, style]} />
);