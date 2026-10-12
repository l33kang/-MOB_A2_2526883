import { StyleSheet, View, Text, TextInput, Pressable, Image, ScrollView, ActivityIndicator, Platform } from 'react-native';

const isAndroid = Platform.OS === 'android';

export const Colors = {
  background: '#0f0f0f',
  surface: '#1a1a1a',
  surfaceElevated: '#242424',
  surfaceOverlay: '#2d2d2d',
  border: '#2a2a2a',
  borderLight: '#3a3a3a',
  primary: '#007aff',
  primaryLight: '#4da3ff',
  primaryDark: '#0056cc',
  secondary: '#0a84ff',
  accent: '#ff9f0a',
  success: '#30d158',
  error: '#ff453a',
  warning: '#ff9f0a',
  textPrimary: '#ffffff',
  textSecondary: '#a1a1a6',
  textTertiary: '#6e6e73',
  textInverse: '#000000',
  textOnPrimary: '#ffffff',
  placeholder: '#5a5a5e',
  overlay: 'rgba(0, 0, 0, 0.5)',
  shadow: 'rgba(0, 0, 0, 0.3)',
  divider: '#2a2a2a',
  cardBorder: '#2a2a2a',
} as const;

export const Spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
} as const;

export const BorderRadius = {
  sm: 8,
  md: 12,
  lg: 16,
  xl: 24,
  full: 9999,
} as const;

export const Typography = {
  h1: { fontSize: 32, fontWeight: '700' as const, lineHeight: 40, letterSpacing: -0.5 },
  h2: { fontSize: 24, fontWeight: '600' as const, lineHeight: 32, letterSpacing: -0.3 },
  h3: { fontSize: 20, fontWeight: '600' as const, lineHeight: 28, letterSpacing: -0.2 },
  h4: { fontSize: 18, fontWeight: '600' as const, lineHeight: 24 },
  body: { fontSize: 16, fontWeight: '400' as const, lineHeight: 24 },
  bodyStrong: { fontSize: 16, fontWeight: '500' as const, lineHeight: 24 },
  bodySmall: { fontSize: 14, fontWeight: '400' as const, lineHeight: 20 },
  bodySmallStrong: { fontSize: 14, fontWeight: '500' as const, lineHeight: 20 },
  caption: { fontSize: 12, fontWeight: '400' as const, lineHeight: 16 },
  captionStrong: { fontSize: 12, fontWeight: '600' as const, lineHeight: 16 },
  overline: { fontSize: 11, fontWeight: '500' as const, lineHeight: 16, letterSpacing: 0.5, textTransform: 'uppercase' as const },
  button: { fontSize: 16, fontWeight: '600' as const, lineHeight: 20 },
} as const;

export const Shadows = {
  none: { shadowOpacity: 0, elevation: 0 },
  sm: isAndroid ? { elevation: 2 } : { shadowColor: Colors.shadow, shadowOffset: { width: 0, height: 1 }, shadowOpacity: 0.18, shadowRadius: 2 },
  md: isAndroid ? { elevation: 4 } : { shadowColor: Colors.shadow, shadowOffset: { width: 0, height: 2 }, shadowOpacity: 0.2, shadowRadius: 4 },
  lg: isAndroid ? { elevation: 8 } : { shadowColor: Colors.shadow, shadowOffset: { width: 0, height: 4 }, shadowOpacity: 0.25, shadowRadius: 8 },
  xl: isAndroid ? { elevation: 12 } : { shadowColor: Colors.shadow, shadowOffset: { width: 0, height: 8 }, shadowOpacity: 0.3, shadowRadius: 16 },
} as const;

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  safeArea: {
    flex: 1,
    backgroundColor: Colors.background,
  },
  screenContent: {
    flex: 1,
    paddingHorizontal: Spacing.md,
    paddingBottom: Spacing.xl,
    paddingTop: Spacing.lg,
  },
  centerContent: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: Spacing.lg,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  spaceBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    ...Typography.h1,
    color: Colors.textPrimary,
  },
  subtitle: {
    ...Typography.body,
    color: Colors.textSecondary,
    textAlign: 'center',
  },
  sectionTitle: {
    ...Typography.h3,
    color: Colors.textPrimary,
    marginBottom: Spacing.md,
  },
  card: {
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.md,
    padding: Spacing.md,
    marginVertical: Spacing.xs,
    borderWidth: 1,
    borderColor: Colors.cardBorder,
    ...Shadows.sm,
  },
  cardElevated: {
    backgroundColor: Colors.surfaceElevated,
    borderRadius: BorderRadius.md,
    padding: Spacing.md,
    marginVertical: Spacing.xs,
    borderWidth: 1,
    borderColor: Colors.borderLight,
    ...Shadows.md,
  },
  label: {
    ...Typography.captionStrong,
    color: Colors.textTertiary,
    marginBottom: Spacing.xs,
  },
  valueText: {
    ...Typography.body,
    color: Colors.textPrimary,
    marginBottom: Spacing.md,
  },
  divider: {
    height: 1,
    backgroundColor: Colors.divider,
    marginVertical: Spacing.md,
  },
  inputContainer: {
    width: '100%',
    marginBottom: Spacing.md,
  },
  inputLabel: {
    ...Typography.bodySmallStrong,
    color: Colors.textSecondary,
    marginBottom: Spacing.xs,
  },
  input: {
    backgroundColor: Colors.surfaceOverlay,
    borderWidth: 1,
    borderColor: Colors.border,
    borderRadius: BorderRadius.sm,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.md,
    ...Typography.body,
    color: Colors.textPrimary,
  },
  inputFocused: {
    borderColor: Colors.primary,
    borderWidth: 2,
  },
  inputError: {
    borderColor: Colors.error,
  },
  errorText: {
    ...Typography.caption,
    color: Colors.error,
    marginTop: Spacing.xs,
    marginLeft: Spacing.xs,
  },
  button: {
    backgroundColor: Colors.primary,
    borderRadius: BorderRadius.sm,
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.lg,
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: 48,
    ...Shadows.sm,
  },
  buttonDisabled: {
    backgroundColor: Colors.primaryDark,
    opacity: 0.6,
    ...Shadows.none,
  },
  buttonText: {
    ...Typography.button,
    color: Colors.textOnPrimary,
  },
  buttonOutline: {
    backgroundColor: 'transparent',
    borderWidth: 1.5,
    borderColor: Colors.primary,
    ...Shadows.none,
  },
  buttonOutlineText: {
    ...Typography.button,
    color: Colors.primary,
  },
  buttonDanger: {
    backgroundColor: Colors.error,
    ...Shadows.sm,
  },
  buttonDangerDisabled: {
    backgroundColor: Colors.error,
    opacity: 0.6,
    ...Shadows.none,
  },
  buttonSecondary: {
    backgroundColor: Colors.surfaceOverlay,
    borderWidth: 1,
    borderColor: Colors.border,
    ...Shadows.none,
  },
  buttonSecondaryText: {
    ...Typography.button,
    color: Colors.textPrimary,
  },
  buttonGhost: {
    backgroundColor: 'transparent',
    borderWidth: 0,
    ...Shadows.none,
  },
  buttonGhostText: {
    ...Typography.button,
    color: Colors.primary,
  },
  tagContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: Spacing.xs,
  },
  tag: {
    backgroundColor: Colors.primary + '1a',
    borderRadius: BorderRadius.full,
    paddingHorizontal: Spacing.md,
    paddingVertical: Spacing.xs,
    borderWidth: 1,
    borderColor: Colors.primary + '33',
  },
  tagText: {
    ...Typography.captionStrong,
    color: Colors.primaryLight,
  },
  tagOutline: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: Colors.borderLight,
  },
  tagOutlineText: {
    ...Typography.captionStrong,
    color: Colors.textSecondary,
  },
  avatar: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: Colors.primary,
    ...Shadows.lg,
  },
  avatarPlaceholder: {
    width: 120,
    height: 120,
    borderRadius: 60,
    backgroundColor: Colors.surfaceOverlay,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 3,
    borderColor: Colors.primary,
    ...Shadows.lg,
  },
  avatarText: {
    fontSize: 42,
    fontWeight: '700' as const,
    color: Colors.textPrimary,
  },
  avatarSmall: {
    width: 40,
    height: 40,
    borderRadius: 20,
    borderWidth: 2,
    borderColor: Colors.primary,
  },
  avatarSmallText: {
    fontSize: 14,
    fontWeight: '600' as const,
    color: Colors.textPrimary,
  },
  projectCard: {
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.md,
    padding: Spacing.md,
    marginVertical: Spacing.xs,
    borderWidth: 1,
    borderColor: Colors.cardBorder,
    ...Shadows.sm,
  },
  projectTitle: {
    ...Typography.h4,
    color: Colors.textPrimary,
    marginBottom: Spacing.xs,
  },
  projectMeta: {
    ...Typography.caption,
    color: Colors.textTertiary,
    marginBottom: Spacing.md,
  },
  detailSection: {
    marginBottom: Spacing.lg,
  },
  detailLabel: {
    ...Typography.overline,
    color: Colors.textTertiary,
    marginBottom: Spacing.xs,
  },
  detailText: {
    ...Typography.body,
    color: Colors.textPrimary,
    lineHeight: 24,
  },
  aboutSection: {
    marginBottom: Spacing.lg,
  },
  aboutTitle: {
    ...Typography.h3,
    color: Colors.textPrimary,
    marginBottom: Spacing.md,
  },
  aboutText: {
    ...Typography.body,
    color: Colors.textSecondary,
    lineHeight: 24,
  },
  versionInfo: {
    ...Typography.caption,
    color: Colors.textTertiary,
    marginTop: Spacing.xs,
  },
  emptyState: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: Spacing.xl,
  },
  emptyStateText: {
    ...Typography.body,
    color: Colors.textSecondary,
    textAlign: 'center',
    marginTop: Spacing.md,
  },
  emptyStateIcon: {
    fontSize: 64,
    color: Colors.textTertiary,
  },
  headerStyle: {
    backgroundColor: Colors.surface,
    borderBottomWidth: 1,
    borderBottomColor: Colors.divider,
    ...Shadows.sm,
  },
  tabBarStyle: {
    backgroundColor: Colors.surface,
    borderTopWidth: 1,
    borderTopColor: Colors.divider,
    height: isAndroid ? 68 : 83,
    paddingBottom: isAndroid ? Spacing.xs : Spacing.md,
    ...Shadows.lg,
  },
  listItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: Spacing.md,
    paddingHorizontal: Spacing.md,
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.md,
    marginVertical: Spacing.xs,
    borderWidth: 1,
    borderColor: Colors.cardBorder,
    ...Shadows.sm,
  },
  listItemText: {
    ...Typography.body,
    color: Colors.textPrimary,
    flex: 1,
  },
  modalOverlay: {
    flex: 1,
    backgroundColor: Colors.overlay,
    justifyContent: 'center',
    alignItems: 'center',
    padding: Spacing.lg,
  },
  modalContent: {
    backgroundColor: Colors.surface,
    borderRadius: BorderRadius.lg,
    padding: Spacing.lg,
    width: '100%',
    maxWidth: 400,
    ...Shadows.xl,
  },
  modalTitle: {
    ...Typography.h3,
    color: Colors.textPrimary,
    marginBottom: Spacing.md,
    textAlign: 'center',
  },
  modalText: {
    ...Typography.body,
    color: Colors.textSecondary,
    marginBottom: Spacing.lg,
    textAlign: 'center',
  },
  buttonGroup: {
    flexDirection: 'row',
    gap: Spacing.md,
    marginTop: Spacing.lg,
  },
  flex1: {
    flex: 1,
  },
  absoluteFill: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
  },
});

export { View, Text, TextInput, Pressable, Image, ScrollView, ActivityIndicator };