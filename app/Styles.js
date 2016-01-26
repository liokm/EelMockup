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
  rcenter: {
    justifyContent: 'center',
  },
  right: {
    alignItems: 'flex-end',
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
  },
  panel: {
    flex: 1,
    padding: 16,
  }
});

export const colors = {
  main: '#ee3124',
  main2: '#fff',
  bg: '#74d9cd',
  bg2: '#57d1c2',
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

export const theme = StyleSheet.create({
  btnText: {
    color: colors.bg2
  }
});
