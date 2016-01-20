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
import IconItem from './IconItem';

// TODO use ToolbarAndroid when <Icon> can be used inside it..
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
        <IconItem
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
          { actions.map((action, i) => <IconItem key={i} {...action} />) }
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
  actions: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  title: {
    fontSize: 20,
    fontFamily: 'roboto medium',
    color: 'white'
  },
});
