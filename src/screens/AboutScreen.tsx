import React from 'react';
import { View, Text, ScrollView, StyleSheet, Linking } from 'react-native';
import { APP_METADATA } from '../data/initialData';
import { Card, SectionTitle, Divider } from '../components/Card';
import { globalStyles } from '../utils/styled';
import { Button } from '../components/Button';
import Constants from 'expo-constants';

export const AboutScreen: React.FC = () => {
  const version = Constants.expoConfig?.version || APP_METADATA.version;

  const handleOpenGitHub = () => {
    Linking.openURL('https://github.com').catch(() => {});
  };

  return (
    <ScrollView style={globalStyles.container} contentContainerStyle={globalStyles.screenContent}>
      <Card>
        <View style={{ alignItems: 'center', marginBottom: 16 }}>
          <Text style={{ fontSize: 28, fontWeight: '700', color: '#ffffff' }}>{APP_METADATA.appName}</Text>
          <Text style={{ fontSize: 14, color: '#888888', marginTop: 4 }}>Version {version}</Text>
        </View>
        <Divider />

        <View style={globalStyles.aboutSection}>
          <Text style={globalStyles.aboutTitle}>About This App</Text>
          <Text style={globalStyles.aboutText}>
            {APP_METADATA.appName} is a personal portfolio application built as part of the SWE 3409 Mobile Application Development course at INES-Ruhengeri.
            It showcases technical skills, education background, and projects developed during the program.
          </Text>
        </View>

        <Divider />

        <View style={globalStyles.aboutSection}>
          <Text style={globalStyles.aboutTitle}>Data & Privacy</Text>
          <Text style={globalStyles.aboutText}>
            {APP_METADATA.dataUseStatement}
          </Text>
        </View>

        <Divider />

        <View style={globalStyles.aboutSection}>
          <Text style={globalStyles.aboutTitle}>Technical Details</Text>
          <Text style={globalStyles.aboutText}>
            Built with React Native, Expo, and TypeScript. Uses React Navigation for routing,
            AsyncStorage for local persistence, and Expo ImagePicker for profile photo management.
          </Text>
          <Text style={globalStyles.versionInfo}>
            Target Platform: Android
          </Text>
          <Text style={globalStyles.versionInfo}>
            Offline-first: Core functionality works without internet connection
          </Text>
        </View>

        <Divider />

        <View style={globalStyles.aboutSection}>
          <Text style={globalStyles.aboutTitle}>Developer</Text>
          <Text style={globalStyles.aboutText}>
            Ali Salaheldin<br />
            Registration: 2526883<br />
            Verification: MOB-A2-6883
          </Text>
        </View>
      </Card>

      <View style={{ paddingHorizontal: 16, marginTop: 16 }}>
        <Button title="View on GitHub" onPress={handleOpenGitHub} variant="outline" />
      </View>
    </ScrollView>
  );
};