import React from 'react';
import { View, Text, ScrollView, TouchableOpacity } from 'react-native';
import { PROJECTS } from '../data/initialData';
import { Card, SectionTitle } from '../components/Card';
import { TagList } from '../components/Tag';
import { globalStyles } from '../utils/styled';
import { useNavigation } from '@react-navigation/native';
import { RootStackParamList } from '../navigation/types';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';

type ProjectsNavProp = NativeStackNavigationProp<RootStackParamList, 'MainTabs'>;

export const ProjectsScreen: React.FC = () => {
  const navigation = useNavigation<ProjectsNavProp>();

  return (
    <ScrollView style={globalStyles.container} contentContainerStyle={globalStyles.screenContent}>
      {PROJECTS.map(project => (
        <TouchableOpacity
          key={project.id}
          onPress={() => navigation.navigate('ProjectDetails', { projectId: project.id })}
          style={globalStyles.projectCard}
          activeOpacity={0.8}
        >
          <Text style={globalStyles.projectTitle}>{project.title}</Text>
          <Text style={globalStyles.projectMeta}>
            {project.technologies.length} technologies • Tap for details
          </Text>
          <TagList items={project.technologies} />
        </TouchableOpacity>
      ))}
    </ScrollView>
  );
};