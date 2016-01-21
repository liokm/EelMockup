import React, {
  Component,
  StyleSheet,
  View,
} from 'react-native';
import { bstyles } from '../Styles';


// There are ways to respond to rotation.
// Here simply apply width to children whenever it changes and is not 0.
export class WidthWrapper extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }
  handleLayout({nativeEvent: {layout: {width}}}) {
    this.setState({width});
  }
  render() {
    const { width } = this.state;
    return (
      <View onLayout={ e => this.handleLayout(e) } style={[bstyles.container]} >
      {
        width
          ? (
            React.Children.map(this.props.children, child => React.cloneElement(child, {width, ...this.props}))
          )
          : null
      }
      </View>
    );
  }
}
