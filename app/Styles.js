import React, {
  StyleSheet
} from 'react-native';

export const bstyles = StyleSheet.create({
  container: {
    flex: 1
  },
  row: {
    flexDirection: 'row'
  }
});

export const colors = {
  main: '#ee3124'
}

export const fonts = StyleSheet.create({
  headline: {
    fontSize: 24
  },
  title: {
    fontSize: 20,
    fontFamily: 'roboto medium',
  },
  subheading: {
    fontSize: 16
  },
  body2: {
    fontSize: 14,
    fontFamily: 'roboto medium',
  },
  body1: {
    fontSize: 14
  },
  caption: {
    fontSize: 12
  },
  button: {
    // TODO cap
    fontSize: 14,
    fontFamily: 'roboto medium',
  },
  display1: {
    fontSize: 34
  },
  display2: {
    fontSize: 45
  },
  display3: {
    fontSize: 56
  },
  display4: {
    fontSize: 112,
    fontFamily: 'roboto light',
  },
});
