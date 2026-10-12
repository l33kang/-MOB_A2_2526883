import React, { useState, useEffect } from 'react';
import { View, Text, ScrollView, StyleSheet, Keyboard, Alert } from 'react-native';
import { useProfile } from '../hooks/useProfile';
import { validateProfile, getFieldError } from '../utils/validation';
import { Input } from '../components/Input';
import { Button } from '../components/Button';
import { Card, SectionTitle, Divider } from '../components/Card';
import { globalStyles } from '../utils/styled';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { Profile, AvailabilityStatus } from '../types';

type ProfileEditorNavProp = NativeStackNavigationProp<RootStackParamList, 'ProfileEditor'>;

const AVAILABILITY_OPTIONS: AvailabilityStatus[] = ['available', 'unavailable', 'not-specified'];

export const ProfileEditorScreen: React.FC = () => {
  const { profile, updateProfile } = useProfile();
  const navigation = useNavigation<ProfileEditorNavProp>();

  const [formData, setFormData] = useState<Profile>(profile);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [touched, setTouched] = useState<Record<string, boolean>>({});
  const [isSaving, setIsSaving] = useState(false);

  useEffect(() => {
    setFormData(profile);
  }, [profile]);

  const handleChange = (field: keyof Profile, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (touched[field]) {
      const newErrors = validateProfile({ ...formData, [field]: value });
      const fieldError = newErrors.find(e => e.field === field);
      setErrors(prev => ({ ...prev, [field]: fieldError?.message || '' }));
    }
  };

  const handleBlur = (field: keyof Profile) => {
    setTouched(prev => ({ ...prev, [field]: true }));
    const fieldError = getFieldError(validateProfile(formData), field);
    setErrors(prev => ({ ...prev, [field]: fieldError || '' }));
  };

  const handleSave = async () => {
    Keyboard.dismiss();
    const allTouched = { ...touched };
    Object.keys(formData).forEach(key => {
      allTouched[key] = true;
    });
    setTouched(allTouched);

    const validationErrors = validateProfile(formData);
    if (validationErrors.length > 0) {
      const newErrors: Record<string, string> = {};
      validationErrors.forEach(e => {
        newErrors[e.field] = e.message;
      });
      setErrors(newErrors);
      Alert.alert('Validation Error', 'Please fix the highlighted fields before saving.');
      return;
    }

    setIsSaving(true);
    const success = await updateProfile(formData);
    setIsSaving(false);

    if (success) {
      Alert.alert('Success', 'Profile saved successfully!', [
        { text: 'OK', onPress: () => navigation.goBack() },
      ]);
    } else {
      Alert.alert('Error', 'Failed to save profile. Please try again.');
    }
  };

  const renderAvailabilityPicker = () => {
    const field = 'availability';
    const error = touched[field] ? errors[field] : undefined;

    return (
      <View style={globalStyles.inputContainer}>
        <Text style={globalStyles.inputLabel}>Availability</Text>
        <View style={{ flexDirection: 'row', gap: 8, flexWrap: 'wrap' }}>
          {AVAILABILITY_OPTIONS.map(option => (
            <Button
              key={option}
              title={option.replace('-', ' ')}
              onPress={() => handleChange(field, option)}
              variant={formData[field] === option ? 'primary' : 'outline'}
              style={{ paddingHorizontal: 16, paddingVertical: 10, minHeight: 40 }}
            />
          ))}
        </View>
        {error && <Text style={globalStyles.errorText}>{error}</Text>}
      </View>
    );
  };

  return (
    <ScrollView
      style={globalStyles.container}
      contentContainerStyle={globalStyles.screenContent}
      keyboardShouldPersistTaps="handled"
    >
      <Card>
        <SectionTitle>Edit Profile</SectionTitle>
        <Text style={{ color: '#cccccc', marginBottom: 16, fontSize: 14 }}>
          Fields marked with * are required. Changes are saved locally on your device.
        </Text>

        <Input
          label="Full Name *"
          value={formData.fullName}
          onChangeText={v => handleChange('fullName', v)}
          onBlur={() => handleBlur('fullName')}
          placeholder="Enter your full name"
          error={touched.fullName ? errors.fullName : undefined}
        />

        <Input
          label="Registration Number *"
          value={formData.registrationNumber}
          onChangeText={v => handleChange('registrationNumber', v)}
          onBlur={() => handleBlur('registrationNumber')}
          placeholder="7-digit number"
          keyboardType="numeric"
          error={touched.registrationNumber ? errors.registrationNumber : undefined}
        />

        <Input
          label="Verification Code *"
          value={formData.verificationCode}
          onChangeText={v => handleChange('verificationCode', v)}
          onBlur={() => handleBlur('verificationCode')}
          placeholder="Format: MOB-A2-XXXX"
          error={touched.verificationCode ? errors.verificationCode : undefined}
        />

        <Divider />

        <Input
          label="Headline *"
          value={formData.headline}
          onChangeText={v => handleChange('headline', v)}
          onBlur={() => handleBlur('headline')}
          placeholder="e.g., Mobile Application Developer"
          error={touched.headline ? errors.headline : undefined}
        />

        <Input
          label="Biography *"
          value={formData.biography}
          onChangeText={v => handleChange('biography', v)}
          onBlur={() => handleBlur('biography')}
          placeholder="Tell us about yourself (20-500 characters)"
          multiline
          numberOfLines={4}
          error={touched.biography ? errors.biography : undefined}
        />

        <Divider />

        <Input
          label="Primary Skill *"
          value={formData.primarySkill}
          onChangeText={v => handleChange('primarySkill', v)}
          onBlur={() => handleBlur('primarySkill')}
          placeholder="e.g., React Native"
          error={touched.primarySkill ? errors.primarySkill : undefined}
        />

        {renderAvailabilityPicker()}
      </Card>

      <View style={{ paddingHorizontal: 16, marginTop: 16 }}>
        <Button
          title="Save Changes"
          onPress={handleSave}
          disabled={isSaving}
          loading={isSaving}
          style={{ marginBottom: 12 }}
        />
        <Button
          title="Cancel"
          onPress={() => navigation.goBack()}
          variant="outline"
          disabled={isSaving}
        />
      </View>
    </ScrollView>
  );
};