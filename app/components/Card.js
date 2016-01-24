import React, {
  Component,
  StyleSheet,
  Text,
  View,
} from 'react-native';
import { fonts, colors, bstyles, onepixel } from '../Styles';
import IconItem from '../components/IconItem';

export default class Card extends Component {
  renderActions(actions) {
    return actions.map(({icon, title, onPress}) => <IconItem icon={icon} onPress={onPress} />)
  }
  render() {
    const { elevation=2, children, actions=[{icon: 'menu'}, {icon: 'menu'}] } = this.props;
    return (
      <View style={[styles.card, {elevation}]}>
      { children }
      {
        actions.length
          ? (
            <View style={[styles.actions, {}]}>
            {
              actions.map(({icon, title, onPress=()=>{}}) => <IconItem icon={icon} onPress={onPress} />)
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
    //backgroundColor: colors.main,
    //borderBottomLeftRadius: 2,
    //borderBottomRightRadius: 2,
  }
});
