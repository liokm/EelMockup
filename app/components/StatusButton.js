import React, {
  StyleSheet,
  Component,
  View,
  Text,
  TouchableNativeFeedback,
  Dimensions,
  ToastAndroid
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';

export default class StatusButton extends Component {
  render() {
    const { active, icon, size, onPress, text } = this.props;
    return (
       <TouchableNativeFeedback onPress={onPress} background={TouchableNativeFeedback.SelectableBackground()} delayPressIn={0} >
         <View style={active?styles.buttonActive:styles.button}>
          <View style={styles.iconWrapper}>
            <Icon name={icon} size={size} style={styles.icon} />
          </View>
          <View style={active?styles.textWrapperActive:styles.textWrapper}>
            <Text style={styles.text}>{ text }</Text>
          </View>
         </View>
       </TouchableNativeFeedback>
    )
  }
}

const buttonStyle = {
  backgroundColor: '#e2e2e2',
  flex: 1,
  alignItems: 'center',
  justifyContent: 'center',
};

const textWrapperStyle = {
  alignItems: 'center',
  alignSelf: 'stretch',
  backgroundColor: '#dcdcdc',
  padding: 8,
};

const styles = StyleSheet.create({
  active: {
  },
  button: buttonStyle,
  buttonActive: {
    ...buttonStyle,
    backgroundColor: '#74d9cd',
  },
  textWrapper: textWrapperStyle,
  textWrapperActive: {
    ...textWrapperStyle,
    backgroundColor: '#57d1c2',
  },
  text: {
    fontWeight: 'bold',
    color: 'white',
  },
  iconWrapper: {
    alignItems: 'center',
    padding: 6,
  },
  icon: {
    color: 'white',
  }
});
