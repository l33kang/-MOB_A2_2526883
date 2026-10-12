import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { PROJECTS } from '../data/initialData';
import { Card, SectionTitle, Divider } from '../components/Card';
import { TagList } from '../components/Tag';
import { globalStyles, Colors, Typography, Spacing } from '../utils/styled';
import { useRoute } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';
import { RouteProp } from '@react-navigation/native';

type ProjectDetailsRouteProp = RouteProp<RootStackParamList, 'ProjectDetails'>;

export const ProjectDetailsScreen: React.FC = () => {
  const route = useRoute<ProjectDetailsRouteProp>();
  const project = PROJECTS.find(p => p.id === route.params.projectId);

  if (!project) {
    return (
      <ScrollView style={globalStyles.container} contentContainerStyle={globalStyles.screenContent}>
        <View style={globalStyles.centerContent}>
          <Text style={{ ...Typography.h4, color: Colors.textPrimary, ...globalStyles.textWrap }}>Project not found</Text>
        </View>
      </ScrollView>
    );
  }

  return (
    <ScrollView style={globalStyles.container} contentContainerStyle={globalStyles.screenContent}>
      <Card>
        <Text style={[globalStyles.projectTitle, globalStyles.textWrap]}>{project.title}</Text>
        <TagList items={project.technologies} />
      </Card>

      <Card>
        <SectionTitle>Problem Statement</SectionTitle>
        <Text style={[globalStyles.detailText, globalStyles.textWrap]}>{project.problem}</Text>
      </Card>

      <Card>
        <SectionTitle>My Contribution</SectionTitle>
        <Text style={[globalStyles.detailText, globalStyles.textWrap]}>{project.contribution}</Text>
      </Card>

      <Card>
        <SectionTitle>Description</SectionTitle>
        <Text style={[globalStyles.detailText, globalStyles.textWrap]}>{project.description}</Text>
      </Card>
    </ScrollView>
  );
};