import { StyleSheet, View, Text, TextInput, Pressable, Image, ScrollView, ActivityIndicator } from 'react-native';

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121212',
  },
  safeArea: {
    flex: 1,
    backgroundColor: '#121212',
  },
  screenContent: {
    flex: 1,
    paddingBottom: 24,
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 24,
  },
  title: {
    fontSize: 28,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 16,
    color: '#aaaaaa',
    marginBottom: 24,
    textAlign: 'center',
  },
  inputContainer: {
    width: '100%',
    marginBottom: 16,
  },
  inputLabel: {
    fontSize: 14,
    fontWeight: '500',
    color: '#cccccc',
    marginBottom: 6,
  },
  input: {
    backgroundColor: '#1e1e1e',
    borderWidth: 1,
    borderColor: '#333',
    borderRadius: 8,
    paddingHorizontal: 14,
    paddingVertical: 12,
    fontSize: 16,
    color: '#ffffff',
  },
  inputFocused: {
    borderColor: '#007aff',
  },
  inputError: {
    borderColor: '#ff6b6b',
  },
  errorText: {
    fontSize: 12,
    color: '#ff6b6b',
    marginTop: 4,
    marginLeft: 4,
  },
  button: {
    backgroundColor: '#007aff',
    borderRadius: 8,
    paddingVertical: 14,
    paddingHorizontal: 24,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 48,
  },
  buttonDisabled: {
    backgroundColor: '#0056cc',
    opacity: 0.7,
  },
  buttonText: {
    color: '#ffffff',
    fontSize: 16,
    fontWeight: '600',
  },
  buttonOutline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#007aff',
  },
  buttonOutlineText: {
    color: '#007aff',
  },
  buttonDanger: {
    backgroundColor: '#dc3545',
  },
  buttonDangerDisabled: {
    backgroundColor: '#dc3545',
    opacity: 0.7,
  },
  card: {
    backgroundColor: '#1e1e1e',
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: '#333',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 12,
    marginHorizontal: 16,
  },
  label: {
    fontSize: 14,
    fontWeight: '500',
    color: '#cccccc',
    marginBottom: 4,
  },
  valueText: {
    fontSize: 16,
    color: '#ffffff',
    marginBottom: 12,
  },
  divider: {
    height: 1,
    backgroundColor: '#333',
    marginVertical: 12,
  },
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  tag: {
    backgroundColor: '#007aff',
    borderRadius: 16,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  tagText: {
    color: '#ffffff',
    fontSize: 13,
    fontWeight: '500',
  },
  avatar: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: '#007aff',
  },
  avatarPlaceholder: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#333',
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: '#007aff',
  },
  avatarText: {
    fontSize: 36,
    fontWeight: '600',
    color: '#ffffff',
  },
  projectCard: {
    backgroundColor: '#1e1e1e',
    borderRadius: 12,
    padding: 16,
    marginVertical: 8,
    marginHorizontal: 16,
    borderWidth: 1,
    borderColor: '#333',
  },
  projectTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#ffffff',
    marginBottom: 8,
  },
  projectMeta: {
    fontSize: 13,
    color: '#888888',
    marginBottom: 12,
  },
  detailSection: {
    marginBottom: 20,
  },
  detailLabel: {
    fontSize: 13,
    fontWeight: '600',
    color: '#888888',
    textTransform: 'uppercase',
    letterSpacing: 0.5,
    marginBottom: 6,
  },
  detailText: {
    fontSize: 15,
    color: '#ffffff',
    lineHeight: 22,
  },
  aboutSection: {
    marginBottom: 24,
    marginHorizontal: 16,
  },
  aboutTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#ffffff',
    marginBottom: 12,
  },
  aboutText: {
    fontSize: 15,
    color: '#cccccc',
    lineHeight: 22,
  },
  versionInfo: {
    fontSize: 13,
    color: '#888888',
    marginTop: 8,
  },
});

export { View, Text, TextInput, Pressable, Image, ScrollView, ActivityIndicator };