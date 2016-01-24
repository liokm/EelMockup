import React, {
  Component,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { fonts, colors, bstyles, onepixel } from '../Styles';
import IconItem from '../components/IconItem';

// TODO use react-native-material-design
export default class Card extends Component {
  render() {
    const { elevation=2, children, actions=[] } = this.props;
    return (
      <View style={[styles.card, {elevation}]}>
      { children }
      {
        actions.length
          ? (
            <View style={[styles.actions, bstyles.row, {}]}>
            {
              actions.map((action, i) => <IconItem key={i} {...action} />)
            }
            </View>
          )
          : null
      }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  card: {
     borderRadius: 2,
     // Check Card implementation
     //elevation: 2,
     backgroundColor: 'white',
     marginBottom: 8,
     paddingTop: 8,
     paddingHorizontal: 16,
  },
  actions: {
    height: 48,
    marginHorizontal: -16,
    borderTopWidth: onepixel,
    borderTopColor: 'gray',
    justifyContent: 'flex-end',
    //backgroundColor: colors.main,
    //borderBottomLeftRadius: 2,
    //borderBottomRightRadius: 2,
  }
});
