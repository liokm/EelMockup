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

const DEFAULT_WIDTH = 56;
const styles = StyleSheet.create({
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
