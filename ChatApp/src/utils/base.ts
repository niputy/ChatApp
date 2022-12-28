import { StyleSheet } from 'react-native';

const spacer = 8;

export const colors = {
  primary: '#0f4f49',
  secondary: '#63d471',
  tertiary: '#4e7d55',
  warning: '#ffc107',
  success: '#28a745',
  successLight: '#e6ebe7',
  dark: '#231f20',
  danger: '#dc355d',
  dangerLight: '#ea869e',
  black: '#000000',
  white: '#ffffff',
  transparent: 'transparent',
};

export const base = StyleSheet.create({
  flex: {
    flex: 1,
  },
  flexRow: {
    flexDirection: 'row',
  },
  flexColumn: {
    flexDirection: 'column',
  },
  bg: {
    backgroundColor: colors.white,
  },
  h1: {
    color: colors.black,
    fontFamily: 'Raleway-Black',
    fontSize: 35,
    fontWeight: '900',
  },
  h3: {
    color: colors.black,
    fontFamily: 'Raleway-Black',
    fontSize: 20,
    fontWeight: '900',
  },
  textCenter: {
    textAlign: 'center',
  },
  alignItemsCenter: {
    alignItems: 'center',
  },
  primary: {
    color: colors.primary,
  },
  mt1: {
    marginTop: spacer * 0.5,
  },
  mt2: {
    marginTop: spacer * 1,
  },
  mt3: {
    marginTop: spacer * 2,
  },
  mt4: {
    marginTop: spacer * 3,
  },
  mt5: {
    marginTop: spacer * 4,
  },
  mb3: {
    marginBottom: spacer * 2,
  },
  m3: {
    margin: spacer * 2,
  },
  mX: {
    marginHorizontal: spacer * 5,
  },
});

export const components = StyleSheet.create({
  button: { paddingVertical: spacer * 2, backgroundColor: colors.secondary, borderRadius: spacer * 3 },
});
