import React, {
  StyleSheet,
  Component,
  View,
  Text,
  TouchableNativeFeedback,
  Dimensions
} from 'react-native';

import Icon from 'react-native-vector-icons/MaterialIcons';

//import  { Actions, Router, Route, Schema, Animations, TabBar } from 'react-native-router-flux';

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#eee',
    flex: 1,
  },
  active: {

  },
  text: {
    backgroundColor: '#ccc',
    alignSelf: 'stretch',
    color: 'white',
    textAlign: 'center',
  },
  icon: {
    textAlign: 'center',
    color: 'white',
  }
});
//#74d9cd
//#57d1c2
//#e2e2e2
//#dcdcdc

//
export default class StatusButton extends Component {
  render() {
    const { active, name, size, onPress, text } = this.props;
    // TODO Measure the size at upper place
    const { width, height } = Dimensions.get('window');

    let bs = {};
    let ts = {};
    if (active) {
      bs = { backgroundColor: '#74d9cd' };
      ts = { backgroundColor: '#57d1c2' };
    }

    return (
       <TouchableNativeFeedback>
         <View style={ styles.button }>
          <Icon name={name} size={width / 4 * 0.65} style={ styles.icon } />
          <Text style={styles.text}>{ text }</Text>
         </View>
       </TouchableNativeFeedback>
    )
  }
}
