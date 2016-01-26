import React, {
  Component,
  StyleSheet,
  View,
  Text,
  WebView,
  ToastAndroid,
  PixelRatio
} from 'react-native';
import { Surface, Shape, Path, Group, Pattern } from 'ReactNativeART';
import { Actions } from 'react-native-router-flux';
import moment from 'moment';
import { bstyles, fonts, colors, onepixel } from '../Styles';
import StatusButton from '../components/StatusButton';
import TextCounter from '../components/TextCounter';
import { WidthWrapper } from '../components/Measure';
import Graph from '../components/Graph';
import Counter from '../components/Counter';
import Day from '../components/Day';
import rulesets from '../rulesets';

function durationFormat(d) {
  //return d.format('s hh:mm:ss').split(' ')[1];
  return d.format('s hh:mm').split(' ')[1];
}


export default class Today extends Component {
  renderCounters() {
    const { dispatch, ruleset, currentState, drivingState: { drivingWindowLeft, drivingTimeLeft, dutyTimeLeft } } = this.props;
    return (
      <View style={[{paddingHorizontal: 16}]}>
      <View style={[bstyles.row, bstyles.center, {paddingTop: 16}]}>
        <WidthWrapper style={{flex: 1.25}}>
          <Counter />
        </WidthWrapper>
        <View style={[bstyles.container, {}]}>
          <TextCounter
            text='DRIVING WINDOW'
            color='orange'
            value={durationFormat(drivingWindowLeft)}
            ratio={0.5}
            />
          <TextCounter
            text='DRIVING TIME'
            color='lightblue'
            value={durationFormat(drivingTimeLeft)}
            ratio={0.75}
            />
          <TextCounter
            text='DUTY TIME'
            color='purple'
            value={durationFormat(dutyTimeLeft)}
            ratio={0.25}
            />
        </View>
      </View>
      <Day />
      </View>
    );
  }

  handleStateChange(name) {
    const { currentState } = this.props;
    if (currentState != name) {
      Actions.status({to: name});
    }
    //const { dispatch } = this.props;
    //dispatch({type: 'CHANGE_STATE', state: name});
  }

  render() {
    // TODO Totally from ruleset configurations
    const { dispatch, ruleset, currentState, drivingState: { drivingWindowLeft, drivingTimeLeft, dutyTimeLeft } } = this.props;
    //const { dimension: { width, height } } = this.props;
    return (
      <View style={bstyles.container}>
        <View style={bstyles.row}>
        {
          ruleset.types.map(
            ({name, icon, text}, i) =>
            <StatusButton key={i} size={90 * 0.6} icon={icon} text={text} active={name==currentState} onPress={() => this.handleStateChange(name)} />)
        }
        </View>
        {
          this.renderCounters()
        }
      </View>
    );
  }
}

const styles = StyleSheet.create({
});
