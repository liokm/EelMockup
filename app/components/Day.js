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
    // Left + Right: (4 + 1) blocks (1 block for placeholder), Center: (24 + 1) blocks
    const block = width / 30;
    const height = block * (4 + 1);
    const sideWidth = 2.5 * block;
    const graphWidth = width - 2 * sideWidth;
    // XXX Experimental value
    const fontSize = sideWidth / 3.5;
    return (
      <View style={[bstyles.row, {alignItems: 'stretch'}]}>
        <View style={[bstyles.center, styles.side, {width: sideWidth, height}]}>
        {
          ['OFF', 'SB', 'D', 'ON', ''].map(
            (x, i) => <Text key={i} style={[{fontSize}, labelStyle]}>{x}</Text>
          )
        }
        </View>
        {/* No need to measure twice
          <WidthWrapper>
            <Graph />
          </WidthWrapper>
        */}
        <Graph width={graphWidth} style={graphStyle} {...props} />
        <View style={[bstyles.center, styles.side, {width: sideWidth, height}]}>
        {
          ['00:00', '00:00', '00:00', '00:00', ''].map((x, i) => <Text key={i} style={[{fontSize}, labelStyle]}>{x}</Text>)
        }
        </View>
      </View>
    );
  }
}

export default class Day extends Component {
  renderTitle() {
    const { showTitle=true, day=moment(), style: {titleText: titleTextStyle, title: titleStyle} = {} } = this.props;
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
