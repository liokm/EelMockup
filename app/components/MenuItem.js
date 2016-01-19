import React, {
  Component,
  StyleSheet,
  View,
  Text,
  ToastAndroid,
  TouchableNativeFeedback,
  PixelRatio
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class MenuItem extends Component {
  render() {
    const {
      onPress,
      text,
      icon,
      iconSize=32,
    } = this.props;
    return (
      <TouchableNativeFeedback
        onPress={ onPress || (() => ToastAndroid.show(text, ToastAndroid.LONG)) }
        background={TouchableNativeFeedback.Ripple('white')}
        //delayPressIn={10}
        >
        <View style={[styles.item, {height: iconSize + 12}]}>
          <Icon name={icon} size={iconSize} style={styles.icon} />
          <Text style={styles.text}>{ text }</Text>
        </View>
      </TouchableNativeFeedback>
    );
  }
}

const styles = StyleSheet.create({
  item: {
    flexDirection: 'row',
    borderBottomColor: 'white',
    borderBottomWidth: 1 / PixelRatio.get(),
    alignItems: 'center',
    overflow: 'visible',
  },
  icon: {
    color: 'red',
    marginRight: 8,
  },
  text: {
    color: 'white'
  }
});
