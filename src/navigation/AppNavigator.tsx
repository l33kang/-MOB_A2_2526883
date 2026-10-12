import React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { NavigationContainer } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/MaterialCommunityIcons';
import { HomeScreen } from '../screens/HomeScreen';
import { SkillsEducationScreen } from '../screens/SkillsEducationScreen';
import { ProjectsScreen } from '../screens/ProjectsScreen';
import { ProfileScreen } from '../screens/ProfileScreen';
import { AboutScreen } from '../screens/AboutScreen';
import { ProjectDetailsScreen } from '../screens/ProjectDetailsScreen';
import { ProfileEditorScreen } from '../screens/ProfileEditorScreen';
import { RootStackParamList, TabParamListType } from './types';
import { globalStyles, Colors, Shadows } from '../utils/styled';

const Tab = createBottomTabNavigator<TabParamListType>();
const Stack = createNativeStackNavigator<RootStackParamList>();

const headerStyle = {
  backgroundColor: Colors.surface,
  borderBottomWidth: 1,
  borderBottomColor: Colors.divider,
  ...Shadows.sm,
};

const TabNavigator: React.FC = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        tabBarIcon: ({ focused, color, size }) => {
          let iconName: string;
          if (route.name === 'Home') {
            iconName = focused ? 'home' : 'home-outline';
          } else if (route.name === 'SkillsEducation') {
            iconName = focused ? 'school' : 'school-outline';
          } else if (route.name === 'Projects') {
            iconName = focused ? 'folder' : 'folder-outline';
          } else if (route.name === 'Profile') {
            iconName = focused ? 'account' : 'account-outline';
          } else {
            iconName = focused ? 'information' : 'information-outline';
          }
          return <Icon name={iconName} size={size} color={color} />;
        },
        tabBarActiveTintColor: Colors.primary,
        tabBarInactiveTintColor: Colors.textTertiary,
        tabBarStyle: globalStyles.tabBarStyle,
        tabBarLabelStyle: {
          fontSize: 11,
          fontWeight: '500' as const,
        },
        headerShown: false,
      })}
    >
      <Tab.Screen name="Home" component={HomeScreen} options={{ title: 'Home' }} />
      <Tab.Screen name="SkillsEducation" component={SkillsEducationScreen} options={{ title: 'Skills & Education' }} />
      <Tab.Screen name="Projects" component={ProjectsScreen} options={{ title: 'Projects' }} />
      <Tab.Screen name="Profile" component={ProfileScreen} options={{ title: 'Profile' }} />
      <Tab.Screen name="About" component={AboutScreen} options={{ title: 'About' }} />
    </Tab.Navigator>
  );
};

export const AppNavigator: React.FC = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        screenOptions={{
          headerStyle,
          headerTintColor: Colors.textPrimary,
          headerTitleStyle: {
            fontWeight: '600' as const,
            fontSize: 18,
          },
          headerBackTitleStyle: {
            fontSize: 16,
          },
        }}
      >
        <Stack.Screen name="MainTabs" component={TabNavigator} options={{ headerShown: false }} />
        <Stack.Screen name="ProjectDetails" component={ProjectDetailsScreen} />
        <Stack.Screen name="ProfileEditor" component={ProfileEditorScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};