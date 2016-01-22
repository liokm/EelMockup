import React, {
  StyleSheet,
  PixelRatio,
} from 'react-native';

export const bstyles = StyleSheet.create({
  container: {
    flex: 1
  },
  row: {
    flexDirection: 'row'
  },
  center: {
    alignItems: 'center',
  },
  absolute: {
    position: 'absolute',
    top: 0,
    right: 0,
    bottom: 0,
    left: 0,
  },
  d: {
    backgroundColor: '#f0f0f0'
  }
});

export const colors = {
  main: '#ee3124'
}

export const onepixel = 1 / PixelRatio.get();

export const fonts = StyleSheet.create({
  small: {
    fontSize: 8
  },
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
