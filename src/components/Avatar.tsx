import React from 'react';
import { View, Text, Image, Pressable, ViewStyle, TextStyle, ImageStyle } from 'react-native';
import { globalStyles } from '../utils/styled';

interface AvatarProps {
  uri: string | null;
  size?: number;
  onPress?: () => void;
  editable?: boolean;
  name?: string;
}

export const Avatar: React.FC<AvatarProps> = ({
  uri,
  size = 100,
  onPress,
  editable = false,
  name = 'AS',
}) => {
  const initials = name
    .split(' ')
    .map(n => n[0])
    .join('')
    .toUpperCase()
    .slice(0, 2);

  const avatarContainerStyle: ViewStyle = {
    width: size,
    height: size,
    borderRadius: size / 2,
    borderWidth: 3,
    borderColor: '#007aff',
  };

  const avatarImageStyle: ImageStyle = {
    width: size,
    height: size,
    borderRadius: size / 2,
  };

  const placeholderStyle: ViewStyle = {
    ...avatarContainerStyle,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
  };

  const textStyle: TextStyle = {
    fontSize: size * 0.36,
    fontWeight: '600',
    color: '#ffffff',
  };

  const editBadgeStyle: ViewStyle = {
    position: 'absolute',
    bottom: 0,
    right: 0,
    backgroundColor: '#007aff',
    borderRadius: 12,
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 2,
    borderColor: '#121212',
  };

  const badgeTextStyle: TextStyle = {
    color: '#fff',
    fontSize: 12,
    fontWeight: 'bold',
  };

  if (uri) {
    return (
      <Pressable onPress={onPress} style={avatarContainerStyle} android_ripple={{ color: '#007aff33' }}>
        <Image source={{ uri }} style={avatarImageStyle} resizeMode="cover" />
        {editable && (
          <View style={editBadgeStyle}>
            <Text style={badgeTextStyle}>✎</Text>
          </View>
        )}
      </Pressable>
    );
  }

  return (
    <Pressable onPress={onPress} style={placeholderStyle} android_ripple={{ color: '#007aff33' }}>
      <Text style={textStyle}>{initials}</Text>
      {editable && (
        <View style={editBadgeStyle}>
          <Text style={badgeTextStyle}>+</Text>
        </View>
      )}
    </Pressable>
  );
};