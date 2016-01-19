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
      iconSize=24,
    } = this.props;
    return (
      <TouchableNativeFeedback
        onPress={ onPress || (() => ToastAndroid.show(text, ToastAndroid.LONG)) }
        background={TouchableNativeFeedback.Ripple('white')}
        //delayPressIn={10}
        >
        <View style={[styles.item, {height: 48}]}>
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
    //marginRight: 72 - 16 - 24,
    marginRight: 12,
  },
  text: {
    color: 'white'
  }
});
