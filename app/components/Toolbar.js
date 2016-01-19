import React, {
  Component,
  StyleSheet,
  View,
  Text,
  TouchableNativeFeedback,
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class Toolbar extends Component {
  render() {
    const {
      title,
      onPress=Actions.pop,
      // chevron-left
      icon='close',
    } = this.props;
    return (
      <View style={styles.toolbar}>
        <TouchableNativeFeedback
          background={TouchableNativeFeedback.SelectableBackgroundBorderless()}
          onPress={onPress}
          delayPressIn={0} >
          <View style={styles.iconWrapper}>
            <Icon name={icon} size={24} style={styles.icon} />
          </View>
        </TouchableNativeFeedback>
        <Text style={styles.title}>{ title }</Text>
        {this.props.children}
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
  icon: {
    color: 'white',
    alignSelf: 'center'
  },
  title: {
    fontSize: 20,
    fontFamily: 'roboto medium',
    color: 'white'
  }
});
