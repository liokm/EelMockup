import React, {
  Component,
  View,
  StyleSheet,
  ToastAndroid
} from 'react-native';
import { Actions } from 'react-native-router-flux';
import StatusButton from '../components/StatusButton';

export default class Today extends Component {
  render() {
    const { currentState, ruleset, dispatch } = this.props;
    //const { dimension: { width, height } } = this.props;
    //console.log(this.props);
    return (
      <View style={styles.container}>
        <View style={styles.buttons}>
        {
          ruleset.types.map(({name, icon, text}, i) => <StatusButton key={i} size={90 * 0.6} icon={icon} text={text} active={name==currentState} onPress={ () => dispatch({type: 'CHANGE_STATE', state: name})} />)
        }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
     flex: 1
  },
  buttons: {
     flexDirection: 'row'
  }
});
