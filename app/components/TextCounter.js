import React, {
  Component,
  StyleSheet,
  View,
  Text,
  ToastAndroid,
  PixelRatio
} from 'react-native';

export default class TextCounter extends Component {
  render() {
    const { text, value, ratio, color } = this.props;
    return (
      <View style={{flex: 1, marginHorizontal: 12}}>
        <Text style={styles.text}>{ text }</Text>
        <Text style={styles.timer}>{ value }</Text>
        <View style={styles.container}>
          <View style={[styles.progress, {flex: ratio, backgroundColor: color}]}></View>
          <View style={[styles.progressBg, {flex: 1 - ratio}]}></View>
        </View>
      </View>
    );
  }
}

const progressHeight = 5;
const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  text: {
    textAlign: 'center',
  },
  timer: {
    textAlign: 'center',
    fontSize: 20
  },
  progress: {
    height: progressHeight,
    borderRadius: progressHeight,
  },
  progressBg: {
    backgroundColor: 'gray',
    height: 1 / PixelRatio.get(),
    marginVertical: progressHeight / 2,
  },
});
