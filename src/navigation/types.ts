export const TabParamList = {
  Home: undefined,
  SkillsEducation: undefined,
  Projects: undefined,
  Profile: undefined,
  About: undefined,
};

export type TabParamListType = typeof TabParamList;

export type RootStackParamList = {
  MainTabs: undefined;
  ProjectDetails: { projectId: string };
  ProfileEditor: undefined;
  ImagePickerOptions: undefined;
};