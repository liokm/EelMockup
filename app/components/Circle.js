import React, { Component } from 'react-native';
import { Shape } from 'ReactNativeART';

export default class Circle extends Component {
  render() {
    const { x, y, r, startAngle, endAngle, ...props } = this.props;
    return (
      <Shape {...props} d={this.describeArc(x, y, r, startAngle, endAngle)} />
    );
  }

  polarToCartesian(centerX, centerY, radius, angleInDegrees) {
    const angleInRadians = (angleInDegrees - 90) * Math.PI / 180.0;
    return {
      x: centerX + (radius * Math.cos(angleInRadians)),
      y: centerY + (radius * Math.sin(angleInRadians))
    };
  }

  describeArc(x, y, radius, startAngle, endAngle) {
    const start = this.polarToCartesian(x, y, radius, endAngle);
    const end = this.polarToCartesian(x, y, radius, startAngle);

    var d = [
        'M', start.x, start.y,
        'A', radius, radius, 0,
        endAngle - startAngle <= 180 ? '0' : '1',
        0, end.x, end.y
    ].join(' ');
    return d;
  }
}

