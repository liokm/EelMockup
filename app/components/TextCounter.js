import React, {
  Component,
  StyleSheet,
  View,
  Text,
  ToastAndroid,
} from 'react-native';
import { fonts, colors, bstyles, onepixel } from '../Styles';

export default class TextCounter extends Component {
  render() {
    const { text, value, ratio, color } = this.props;
    return (
      <View style={[bstyles.container, bstyles.row, {paddingVertical: 8}]}>
        <View style={[bstyles.container, {alignSelf: 'stretch', justifyContent: 'center', alignItems: 'flex-end'}]}>
          <Text style={[fonts.caption, {}]}>{ text }</Text>
          <Text style={[fonts.small, {color: 'gray'}]}>REMAINING</Text>
        </View>
        <View style={[bstyles.container_, {flex: .5, marginLeft: 8}]}>
          <Text style={fonts.subheading, {textAlign: 'center'}}>{ value }</Text>
          <View style={[bstyles.container_, bstyles.row]}>
            <View style={[styles.progress, {flex: ratio, backgroundColor: color}]}></View>
            <View style={[styles.progressBg, {flex: 1 - ratio}]}></View>
          </View>
        </View>
      </View>
    );
  }
}

const progressHeight = 5;

const styles = StyleSheet.create({
  progress: {
    height: progressHeight,
    borderRadius: progressHeight,
  },
  progressBg: {
    backgroundColor: 'gray',
    height: onepixel,
    marginVertical: progressHeight / 2,
  },
});
