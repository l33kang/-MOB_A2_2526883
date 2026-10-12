import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { useProfile } from '../hooks/useProfile';
import { Avatar } from '../components/Avatar';
import { Card, SectionTitle, ValueText, Divider } from '../components/Card';
import { Button } from '../components/Button';
import { globalStyles, Colors, Typography, Spacing } from '../utils/styled';

export const HomeScreen: React.FC = () => {
  const { profile } = useProfile();

  return (
    <ScrollView style={globalStyles.container} contentContainerStyle={globalStyles.screenContent}>
      <View style={globalStyles.centerContent}>
        <Avatar uri={profile.profileImageUri} size={120} name={profile.fullName} />
      </View>

      <View style={{ alignItems: 'center', marginTop: Spacing.md, marginBottom: Spacing.sm }}>
        <Text style={[globalStyles.title, globalStyles.textWrap]}>{profile.fullName}</Text>
        <Text style={[globalStyles.subtitle, globalStyles.textWrap]}>{profile.headline}</Text>
      </View>

      <Card>
        <Text style={{ ...Typography.body, color: Colors.textPrimary, textAlign: 'center', lineHeight: 24, marginBottom: 16 }}>
          "My name is Ali Salaheldin."
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
        <ValueText style={globalStyles.textWrap}>{profile.biography}</ValueText>
      </Card>

      <Card>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: Spacing.sm }}>
          <View style={{ flex: 1, minWidth: 120 }}>
            <Text style={globalStyles.label}>Primary Skill</Text>
            <ValueText style={{ marginBottom: 0, ...globalStyles.textWrap }}>{profile.primarySkill}</ValueText>
          </View>
          <View style={{ alignItems: 'flex-end', flex: 1, minWidth: 120 }}>
            <Text style={globalStyles.label}>Availability</Text>
            <ValueText style={{ marginBottom: 0, textTransform: 'capitalize', ...globalStyles.textWrap }}>
              {profile.availability.replace('-', ' ')}
            </ValueText>
          </View>
        </View>
      </Card>
    </ScrollView>
  );
};