import React, {
  Component,
  StyleSheet,
  View,
  Text,
  TouchableNativeFeedback,
  Image,
  ToastAndroid,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialIcons';

// TODO use ToolbarAndroid when <Icon> can be used inside it..
class ToolbarItem extends Component {
  render() {
    const { onPress, logo, icon='close' } = this.props;
    if (!onPress) {
      return (
        <View style={styles.iconWrapper}>
        {
          logo
            ? <Image source={logo} style={styles.logo} />
            : <Icon name={icon} size={24} style={styles.icon} />
        }
        </View>
      );
    }
    return (
      <TouchableNativeFeedback
        background={TouchableNativeFeedback.SelectableBackgroundBorderless()}
        onPress={onPress}
        delayPressIn={0}
        >
        <View style={styles.iconWrapper}>
        {
          logo
            ? <Image source={logo} style={[styles.icon, {height: 24, width: 24}]} />
            : <Icon name={icon} size={24} style={styles.icon} />
        }
        </View>
      </TouchableNativeFeedback>
    );
  }
}

export default class Toolbar extends Component {
  render() {
    const {
      title,
      onPress=Actions.pop,
      // chevron-left
      icon='close',
      logo,
      actions=[],
    } = this.props;
    return (
      <View style={styles.toolbar}>
        <ToolbarItem
          icon={icon}
          logo={logo}
          onPress={onPress}
        />
        {
          title ? <Text style={styles.title}>{ title }</Text> : null
        }
        {this.props.children}
        {
          <View style={styles.actions}>
          { actions.map((action, i) => <ToolbarItem key={i} {...action} />) }
          </View>
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
  toolbar: {
    height: 56,
    backgroundColor: '#ee3124',
    flexDirection: 'row',
    alignItems: 'center',
    //justifyContent: 'center',
  },
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
  title: {
    fontSize: 20,
    fontFamily: 'roboto medium',
    color: 'white'
  },
  actions: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  }
});
