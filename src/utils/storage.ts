import AsyncStorage from '@react-native-async-storage/async-storage';
import { Profile } from '../types';

const STORAGE_KEYS = {
  PROFILE: '@AliPortfolio:profile',
} as const;

export const loadProfile = async (): Promise<Profile | null> => {
  try {
    const stored = await AsyncStorage.getItem(STORAGE_KEYS.PROFILE);
    if (stored) {
      return JSON.parse(stored) as Profile;
    }
    return null;
  } catch {
    return null;
  }
};

export const saveProfile = async (profile: Profile): Promise<boolean> => {
  try {
    await AsyncStorage.setItem(STORAGE_KEYS.PROFILE, JSON.stringify(profile));
    return true;
  } catch {
    return false;
  }
};

export const clearProfile = async (): Promise<void> => {
  try {
    await AsyncStorage.removeItem(STORAGE_KEYS.PROFILE);
  } catch {
    // Ignore errors
  }
};