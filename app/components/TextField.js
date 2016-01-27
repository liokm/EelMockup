import React, {
  Component,
} from 'react-native';
import { bstyles, colors, onepixel } from '../Styles';
import FloatLabelTextField from '../components/FloatLabelTextField';


export default class TextField extends Component {
  focus() {
    this.refs.input.focus();
  }

  render() {
    const { next } = this.props;
    return (
      <FloatLabelTextField
        ref='input'
        visible={true}
        noBorder={true}
        //underlineColorAndroid={colors.bg2}
        //returnKeyType='Next'
        style={{focusLabel: {color: colors.bg2}}}
        {...this.props}
      />
    );
  }
}
