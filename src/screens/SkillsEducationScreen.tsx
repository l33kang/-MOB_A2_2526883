import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { SKILLS, EDUCATION } from '../data/initialData';
import { Card, SectionTitle, ValueText, Divider } from '../components/Card';
import { TagList } from '../components/Tag';
import { globalStyles } from '../utils/styled';

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
            <Text style={{ fontSize: 16, fontWeight: '600', color: '#ffffff', marginBottom: 4 }}>
              {edu.qualification}
            </Text>
            <Text style={{ fontSize: 14, color: '#cccccc', marginBottom: 4 }}>
              {edu.institution}
            </Text>
            {edu.startDate || edu.endDate ? (
              <Text style={{ fontSize: 13, color: '#888888', marginBottom: 4 }}>
                {edu.startDate} - {edu.endDate || 'Present'}
              </Text>
            ) : null}
            {edu.description && (
              <Text style={{ fontSize: 14, color: '#cccccc', marginBottom: 4, lineHeight: 20 }}>
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