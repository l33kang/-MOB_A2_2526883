import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { globalStyles } from '../utils/styled';

interface TagProps {
  children: React.ReactNode;
  style?: any;
}

export const Tag: React.FC<TagProps> = ({ children, style }) => {
  return (
    <View style={[globalStyles.tag, style]}>
      <Text style={globalStyles.tagText}>{children}</Text>
    </View>
  );
};

interface TagListProps {
  items: string[];
  style?: any;
}

export const TagList: React.FC<TagListProps> = ({ items, style }) => {
  return (
    <View style={[globalStyles.tagContainer, style]}>
      {items.map((item, index) => (
        <Tag key={index}>{item}</Tag>
      ))}
    </View>
  );
};