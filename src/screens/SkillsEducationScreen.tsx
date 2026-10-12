import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SKILLS, EDUCATION } from '../data/initialData';
import { Card, SectionTitle, ValueText, Divider } from '../components/Card';
import { TagList } from '../components/Tag';
import { globalStyles, Colors, Typography, Spacing } from '../utils/styled';

export const SkillsEducationScreen: React.FC = () => {
  return (
    <ScrollView style={globalStyles.container} contentContainerStyle={globalStyles.screenContent}>
      <Card>
        <SectionTitle>Technical Skills</SectionTitle>
        <TagList items={SKILLS.map(s => s.name)} />
      </Card>

      <Card>
        <SectionTitle>Education & Training</SectionTitle>
        {EDUCATION.map((edu, index) => (
          <View key={edu.id}>
            <Text style={{ ...Typography.h4, color: Colors.textPrimary, marginBottom: Spacing.xs }}>
              {edu.qualification}
            </Text>
            <Text style={{ ...Typography.bodySmall, color: Colors.textSecondary, marginBottom: Spacing.xs }}>
              {edu.institution}
            </Text>
            {edu.startDate || edu.endDate ? (
              <Text style={{ ...Typography.caption, color: Colors.textTertiary, marginBottom: Spacing.xs }}>
                {edu.startDate} - {edu.endDate || 'Present'}
              </Text>
            ) : null}
            {edu.description && (
              <Text style={{ ...Typography.bodySmall, color: Colors.textSecondary, marginBottom: Spacing.xs, lineHeight: 20 }}>
                {edu.description}
              </Text>
            )}
            {index < EDUCATION.length - 1 && <Divider />}
          </View>
        ))}
      </Card>
    </ScrollView>
  );
};