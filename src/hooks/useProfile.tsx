import React, { createContext, useContext, useState, useEffect, ReactNode } from 'react';
import { Profile } from '../types';
import { loadProfile, saveProfile, clearProfile } from '../utils/storage';
import { DEFAULT_PROFILE } from '../data/initialData';

interface ProfileContextType {
  profile: Profile;
  isLoading: boolean;
  updateProfile: (updates: Partial<Profile>) => Promise<boolean>;
  resetProfile: () => Promise<void>;
  setProfileImage: (uri: string | null) => Promise<boolean>;
}

const ProfileContext = createContext<ProfileContextType | undefined>(undefined);

export const ProfileProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [profile, setProfile] = useState<Profile>(DEFAULT_PROFILE);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const initProfile = async () => {
      const stored = await loadProfile();
      if (stored) {
        setProfile(stored);
      }
      setIsLoading(false);
    };
    initProfile();
  }, []);

  const updateProfile = async (updates: Partial<Profile>): Promise<boolean> => {
    const newProfile = { ...profile, ...updates };
    const success = await saveProfile(newProfile);
    if (success) {
      setProfile(newProfile);
    }
    return success;
  };

  const setProfileImage = async (uri: string | null): Promise<boolean> => {
    return updateProfile({ profileImageUri: uri });
  };

  const resetProfile = async () => {
    await clearProfile();
    setProfile(DEFAULT_PROFILE);
  };

  return (
    <ProfileContext.Provider value={{ profile, isLoading, updateProfile, resetProfile, setProfileImage }}>
      {children}
    </ProfileContext.Provider>
  );
};

export const useProfile = (): ProfileContextType => {
  const context = useContext(ProfileContext);
  if (!context) {
    throw new Error('useProfile must be used within a ProfileProvider');
  }
  return context;
};