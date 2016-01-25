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


// TODO Render path, sum value
export class LabeledGraph extends Component {
  render() {
    const { width,
      style: {label: labelStyle, graph: graphStyle} = {},
      ...props
    } = this.props;
    // Left + Right: 5 blocks, Center: (24 + 1) blocks
    const block = width / 30;
    const sideWidth = 2.5 * block;
    // XXX Experimental value
    const fontSize = sideWidth / 3.5;
    return (
      <View style={[bstyles.row, {alignItems: 'stretch'}]}>
        <View style={[bstyles.center, styles.side]}>
        {
          ['OFF', 'SB', 'D', 'ON', ''].map(
            (x, i) => <View key={i} style={bstyles.container}><Text style={[{fontSize, labelStyle}]}>{x}</Text></View>
          )
        }
        </View>
        <WidthWrapper>
          <Graph style={graphStyle} {...props} />
        </WidthWrapper>
        <View style={[bstyles.center, styles.side]}>
        {
          [1,2,3,4].map((_, i) => <View key={i} style={bstyles.container}><Text style={[{fontSize, labelStyle}]}>02:03</Text></View>)
        }
        <View style={bstyles.container, bstyles.d} />
        </View>
      </View>
    );
  }
}

export default class Day extends Component {
  renderTitle() {
    const { showTitle=true, day, style: {titleText: titleTextStyle, title: titleStyle} = {} } = this.props;
    if (!showTitle) {
      return;
    }
    return (
      <View style={[bstyles.center, {marginBottom: 8}, titleStyle]}>
        <Text style={[fonts.subheading, titleTextStyle]}>
          { day.format('LL') }
        </Text>
      </View>
    )
  }

  render() {
    return (
      <View>
      { this.renderTitle() }
        <WidthWrapper>
          <LabeledGraph {...this.props} />
        </WidthWrapper>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  side: {
    //justifyContent: 'space-between',
    alignSelf: 'stretch'
  }
});
