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
import { fonts } from '../Styles';

// TODO use ToolbarAndroid when <Icon> can be used inside it..
export default class Toolbar extends Component {
  render() {
    const {
      title,
      subtitle,
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
          title ? <Text style={[fonts.title, styles.title]}>{ title }</Text> : null
        }
        {
          subtitle ? <Text style={[fonts.subheading, styles.title]}>{ subtitle }</Text> : null
        }
        { this.props.children }
        {
          actions.length
            ? (
              <View style={styles.actions}>
              { actions.map((action, i) => <IconItem key={i} {...action} />) }
              </View>
            )
            : null
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
    //flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  title: {
    color: 'white'
  },
});
