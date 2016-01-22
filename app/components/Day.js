import React, {
  Component,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import moment from 'moment';
import { bstyles, fonts, colors, onepixel } from '../Styles';
import { WidthWrapper } from '../components/Measure';
import Graph from '../components/Graph';
import Counter from '../components/Counter';

export default class Day extends Component {
  render() {
    const { day=moment(), style={} } = this.props;
    return (
      <View>
        <View style={[bstyles.center, {marginBottom: 8}, style.day ]}>
          <Text style={fonts.subheading}>
          { day.format('LL') }
          </Text>
        </View>
        <View style={[bstyles.row, {alignItems: 'stretch'}]}>
          <View style={[bstyles.center, {justifyContent: 'space-between', alignSelf: 'stretch'}]}>
          {
            ['OFF', 'SB', 'D', 'ON', ''].map(
              (x, i) => <View style={bstyles.container}><Text style={[fonts.small]} key={i}>{x}</Text></View>
            )
          }
          </View>
          <WidthWrapper>
            <Graph />
          </WidthWrapper>
          <View style={[bstyles.center, {justifyContent: 'space-between', alignSelf: 'stretch'}]}>
          {
            [1,2,3,4].map(() => <View style={bstyles.container}><Text style={[fonts.small]}>02:03</Text></View>)
          }
          <View style={bstyles.container, bstyles.d} />
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
});
