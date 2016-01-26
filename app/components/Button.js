import React, {
  Component,
  StyleSheet,
  ScrollView,
  Text,
  ToolbarAndroid,
  TouchableNativeFeedback,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { bstyles, fonts, theme } from '../Styles';

export default class Button extends Component {
  render() {
    const {
      width=this.constructor.DEFAULT_WIDTH, icon='check', size=24,
      style: {icon: iconStyle, wrapper: wrapperStyle} = {},
      onPress=() => {}
    } = this.props;
    return (
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.SelectableBackground()}
        delayPressIn={0}
        onPress={onPress}
      >
        <View style={[styles.button, {borderRadius: width / 2, width, height: width}, wrapperStyle]}>
          <Icon name={icon} size={size} style={[styles.icon, iconStyle]} />
        </View>
      </TouchableNativeFeedback>
    );
  }
}

// XXX Simply use a global theme setting
export class DialogButton extends Component {
  render() {
    const { onPress=() => {}, text, style: {text: textStyle, wrapper: wrapperStyle} = {} } = this.props;
    return (
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.SelectableBackgroundBorderless()}
        delayPressIn={0}
        onPress={onPress}
      >
        <View style={[bstyles.center, bstyles.rcenter, styles.dbtnWrapper, theme.btn , wrapperStyle]}>
          <Text style={[fonts.button, theme.btnText, textStyle]}>{ text.toUpperCase() }</Text>
        </View>
      </TouchableNativeFeedback>
    );
  }
}

const DEFAULT_WIDTH = 56;
const styles = StyleSheet.create({
  dbtnWrapper: {
    minWidth: 64,
    paddingHorizontal: 8,
    height: 36,
    marginRight: 8,
  },
  button: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#74d9cd',
  },
  icon: {
     color: 'white',
  },
  rightTop: {
    position: 'absolute',
    top: -DEFAULT_WIDTH / 2,
    right: 16,
  },
});
Button.styles = styles;
Button.DEFAULT_WIDTH = DEFAULT_WIDTH;
