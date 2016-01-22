import React, {
  Component,
  StyleSheet,
  View,
  Text,
} from 'react-native';
import { Surface, Shape } from 'ReactNativeART';
import { bstyles, fonts, colors, onepixel } from '../Styles';
import Circle from '../components/Circle';

export default class Counter extends Component {
  render() {
    const {
      width, heightRatio=1, startAngle=0, endAngle=359.99, ratio=0.75, stroke=colors.main, strokeWidth=10,
      getRadius=(width, strokeWidth) => (width - strokeWidth ) / 2,
    } = this.props;
    const height = width * heightRatio;
    const radius = getRadius(width, strokeWidth);
    const w2 = width / 2;
    const texts = [
      {style: [fonts.caption], text: 'DRIVING TIME'},
      {style: [fonts.small, { color: 'lightgray' }], text: 'REMAINING'},
      {style: [fonts.display1], text: '12:00'},
      {style: [fonts.caption, { color: colors.main }], text: 'REST REQUIRED'},
    ];
    // TODO { this.props.children } fails...

    return (
      <View style={bstyles.container}>
        <Surface width={width} height={height}>
          <Circle x={w2} y={w2} r={radius} startAngle={startAngle} endAngle={endAngle} stroke='gray' strokeWidth={onepixel} />
          <Circle x={w2} y={w2} r={radius} startAngle={startAngle} endAngle={startAngle + (endAngle - startAngle) * ratio} stroke={stroke} strokeWidth={strokeWidth} />
        </Surface>
        <View style={[bstyles.absolute, bstyles.center, {height, justifyContent: 'center'}]}>
        {
          texts.map(({text, style}, i) => {
            return <Text style={style} key={i}>{ text }</Text>;
          })
        }
        </View>
      </View>
    );
  }
}

export class MeterCounter extends Component {
  render() {
    return (
      <Counter heightRatio={3/4} startAngle={-120} endAngle={120} {...this.props} />
    );
  }
}

const styles = StyleSheet.create({
});
