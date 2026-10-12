import React from 'react';
import { View, Text, ScrollView, StyleSheet, Alert, Platform } from 'react-native';
import { useProfile } from '../hooks/useProfile';
import { Avatar } from '../components/Avatar';
import { Card, SectionTitle, ValueText, Divider } from '../components/Card';
import { Button } from '../components/Button';
import { globalStyles } from '../utils/styled';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import * as ImagePicker from 'expo-image-picker';
import { launchImageLibraryAsync, launchCameraAsync } from 'expo-image-picker';

type ProfileNavProp = NativeStackNavigationProp<RootStackParamList, 'MainTabs'>;

export const ProfileScreen: React.FC = () => {
  const { profile, setProfileImage, resetProfile } = useProfile();
  const navigation = useNavigation<ProfileNavProp>();

  const pickImage = async (source: 'camera' | 'gallery') => {
    try {
      let result;
      if (source === 'camera') {
        const permission = await ImagePicker.requestCameraPermissionsAsync();
        if (!permission.granted) {
          Alert.alert('Permission denied', 'Camera permission is required to take photos.');
          return;
        }
        result = await launchCameraAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [1, 1],
          quality: 0.8,
        });
      } else {
        const permission = await ImagePicker.requestMediaLibraryPermissionsAsync();
        if (!permission.granted) {
          Alert.alert('Permission denied', 'Gallery permission is required to select photos.');
          return;
        }
        result = await launchImageLibraryAsync({
          mediaTypes: ImagePicker.MediaTypeOptions.Images,
          allowsEditing: true,
          aspect: [1, 1],
          quality: 0.8,
        });
      }

      if (!result.canceled && result.assets[0]) {
        await setProfileImage(result.assets[0].uri);
      }
    } catch (error) {
      Alert.alert('Error', 'Failed to pick image. Please try again.');
    }
  };

  const showImagePickerOptions = () => {
    Alert.alert(
      'Update Profile Photo',
      'Choose an option',
      [
        { text: 'Take Photo', onPress: () => pickImage('camera') },
        { text: 'Choose from Gallery', onPress: () => pickImage('gallery') },
        { text: 'Remove Photo', onPress: () => setProfileImage(null), style: 'destructive' },
        { text: 'Cancel', style: 'cancel' },
      ],
      { cancelable: true }
    );
  };

  const handleReset = () => {
    Alert.alert(
      'Reset Profile',
      'This will restore all profile fields to their default values. This action cannot be undone.',
      [
        { text: 'Cancel', style: 'cancel' },
        { text: 'Reset', onPress: resetProfile, style: 'destructive' },
      ]
    );
  };

  return (
    <ScrollView style={globalStyles.container} contentContainerStyle={globalStyles.screenContent}>
      <View style={globalStyles.centerContent}>
        <Avatar
          uri={profile.profileImageUri}
          size={120}
          name={profile.fullName}
          onPress={showImagePickerOptions}
          editable
        />
        <Text style={{ marginTop: 12, fontSize: 14, color: '#888888' }}>Tap to change photo</Text>
      </View>

      <Card>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
          <SectionTitle style={{ marginBottom: 0 }}>Profile Information</SectionTitle>
          <Button title="Edit" onPress={() => navigation.navigate('ProfileEditor')} variant="outline" />
        </View>

        <View>
          <Text style={globalStyles.label}>Full Name</Text>
          <ValueText>{profile.fullName}</ValueText>
        </View>
        <Divider />
        <View>
          <Text style={globalStyles.label}>Registration Number</Text>
          <ValueText>{profile.registrationNumber}</ValueText>
        </View>
        <Divider />
        <View>
          <Text style={globalStyles.label}>Verification Code</Text>
          <ValueText>{profile.verificationCode}</ValueText>
        </View>
        <Divider />
        <View>
          <Text style={globalStyles.label}>Headline</Text>
          <ValueText>{profile.headline}</ValueText>
        </View>
        <Divider />
        <View>
          <Text style={globalStyles.label}>Biography</Text>
          <ValueText>{profile.biography}</ValueText>
        </View>
        <Divider />
        <View>
          <Text style={globalStyles.label}>Primary Skill</Text>
          <ValueText>{profile.primarySkill}</ValueText>
        </View>
        <Divider />
        <View>
          <Text style={globalStyles.label}>Availability</Text>
          <ValueText style={{ textTransform: 'capitalize' }}>{profile.availability.replace('-', ' ')}</ValueText>
        </View>
      </Card>

      <Card style={{ marginTop: 16 }}>
        <Button title="Reset to Defaults" onPress={handleReset} variant="danger" />
      </Card>
    </ScrollView>
  );
};