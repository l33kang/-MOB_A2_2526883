import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useProfile } from '../hooks/useProfile';
import { Avatar } from '../components/Avatar';
import { Card, SectionTitle, ValueText, Divider } from '../components/Card';
import { Button } from '../components/Button';
import { globalStyles } from '../utils/styled';

export const HomeScreen: React.FC = () => {
  const { profile } = useProfile();

  return (
    <ScrollView style={globalStyles.container} contentContainerStyle={globalStyles.screenContent}>
      <View style={globalStyles.centerContent}>
        <Avatar uri={profile.profileImageUri} size={120} name={profile.fullName} />
      </View>

      <View style={{ alignItems: 'center', marginTop: 16, marginBottom: 8 }}>
        <Text style={globalStyles.title}>{profile.fullName}</Text>
        <Text style={globalStyles.subtitle}>{profile.headline}</Text>
      </View>

      <Card>
        <Text style={{ fontSize: 16, color: '#ffffff', textAlign: 'center', lineHeight: 24, marginBottom: 16 }}>
          "My name is Ali salaheldin."
        </Text>
        <Divider />
        <Text style={globalStyles.label}>Registration Number</Text>
        <ValueText>{profile.registrationNumber}</ValueText>
        <Divider />
        <Text style={globalStyles.label}>Verification Code</Text>
        <ValueText>{profile.verificationCode}</ValueText>
      </Card>

      <Card>
        <SectionTitle>Biography</SectionTitle>
        <ValueText>{profile.biography}</ValueText>
      </Card>

      <Card>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
          <View>
            <Text style={globalStyles.label}>Primary Skill</Text>
            <ValueText style={{ marginBottom: 0 }}>{profile.primarySkill}</ValueText>
          </View>
          <View style={{ alignItems: 'flex-end' }}>
            <Text style={globalStyles.label}>Availability</Text>
            <ValueText style={{ marginBottom: 0, textTransform: 'capitalize' }}>
              {profile.availability.replace('-', ' ')}
            </ValueText>
          </View>
        </View>
      </Card>
    </ScrollView>
  );
};