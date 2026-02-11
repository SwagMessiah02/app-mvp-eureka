import { StyleSheet } from 'react-native';
import { COLORS } from './colors';

const headerStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.background,
    padding: 24,
    justifyContent: 'center',
  },

  headerLoginButton: {
    borderWidth: 1,
    borderColor: COLORS.primary,
    borderRadius: 999, // totalmente arredondado
    paddingVertical: 8,
    paddingHorizontal: 18,
  },
  headerLoginText: {
    color: COLORS.primary,
    fontSize: 14,
    fontWeight: '600',
  },
  headerLogo: {
    width: 120,
    height: 120,
    resizeMode: 'contain',
  },
});

export default headerStyles;
