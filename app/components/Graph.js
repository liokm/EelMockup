import React, {
  Component,
  StyleSheet,
} from 'react-native';
import { Surface, Shape, Path, Group } from 'ReactNativeART';
import { bstyles, fonts, onepixel } from '../Styles';


// onRotate() => Measure (async)
// onLayout() => pass in width
const H = 24;
const V = 4;
export default class Graph extends Component {
  // Not a good idea to use WebView
  // Neither we could use React.renderToStaticMarkup(svgElement)
  getSize() {
    const { width } = this.props;
    const block = Math.max(0, width / (H + 1));
    const innerHeight = block * V + 1;
    return {
      block,
      innerWidth: block * H + 1,
      innerHeight,
      width,
      height: innerHeight + block,
    };
  }
  render() {
    const { block, innerWidth, innerHeight, width, height } = this.getSize();
    const b = block;
    const b2 = block / 2;
    const b4 = block / 4;

    // XXX Dunno how to fill by pattern in ART...
    const bg = [];
    for (let row=0; row < V; row++) {
      for (let col=0; col < H; col++) {
        let path = Path()
          .moveTo(col * block, row * block)
          .line(b, 0).move(-b, 0).line(0, b).move(0, -b);
          if (row < 2) {
            path = path
              .move(b4, 0).line(0, b4).move(0, -b4)
              .move(b4, 0).line(0, b2).move(0, -b2)
              .move(b4, 0).line(0, b4).move(0, -b4);
          } else {
            path = path.move(0, b)
              .move(b4, 0).line(0, -b4).move(0, b4)
              .move(b4, 0).line(0, -b2).move(0, b2)
              .move(b4, 0).line(0, -b4).move(0, b4);
          }
        bg.push(
          <Shape stroke="#ccc" strokeWidth={onepixel} d={path} />
        )
      }
    }
    bg.push(
      <Shape stroke="#ccc" strokeWidth={onepixel} d={Path().moveTo(H * block, 0).line(0, V * block).line(-H * block, 0)} />
    );

    return (
      <Surface width={width} height={height}>
        <Group x={b2} y={onepixel}>
        {bg}
        </Group>
      </Surface>
    );
  }
}

const styles = StyleSheet.create({
});
