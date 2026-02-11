import { StyleSheet } from 'react-native';
import { COLORS } from './colors';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: COLORS.card,
    paddingVertical: 20,
    paddingHorizontal: 16,
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#E5E7EB',
  },

  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    marginRight: 12,
  },

  textContainer: {
    flex: 1,
  },

  welcome: {
    fontSize: 16,
    fontWeight: '600',
    color: COLORS.text,
  },

  fullName: {
    fontSize: 13,
    color: COLORS.muted,
    marginTop: 2,
  },
});
