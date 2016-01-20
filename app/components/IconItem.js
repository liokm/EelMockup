import React, {
  Component,
  StyleSheet,
  View,
  Text,
  TouchableNativeFeedback,
  Image,
  ToastAndroid,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class IconItem extends Component {
  renderIcon() {
    const { logo, icon, count } = this.props;
    return (
      <View style={styles.iconWrapper}>
      {
        logo
          ? <Image source={logo} style={styles.logo} />
          : <Icon name={icon} size={24} style={styles.icon} />
      }
      {
        count
          ? (
            <View style={styles.countWrapper}>
              <Text style={styles.count}>{ count }</Text>
            </View>
          )
          : null
      }
      </View>
    );
  }

  render() {
    const { onPress, logo, icon='close', count } = this.props;
    if (!onPress) {
      return this.renderIcon();
    }
    return (
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.SelectableBackgroundBorderless()}
        onPress={onPress}
        delayPressIn={0}
        >
        { this.renderIcon() }
      </TouchableNativeFeedback>
    );
  }
}

const styles = StyleSheet.create({
  iconWrapper: {
    width: 48,
    height: 48,
    //marginRight: 72 - 48,
    justifyContent: 'center',
    alignItems: 'center'
  },
  logo: {
    alignSelf: 'center',
    height: 24,
    width: 24
  },
  icon: {
    color: 'white',
    alignSelf: 'center'
  },
  countWrapper: {
    position: 'absolute',
    top: 0,
    right: 0,
    borderWidth: 1,
    borderColor: 'white',
    backgroundColor: 'lightblue',
    borderRadius: 5,
  },
  count: {
    fontSize: 9
  }
});
