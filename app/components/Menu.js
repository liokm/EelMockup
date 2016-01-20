import React, {
  Component,
  StyleSheet,
  View,
  DrawerLayoutAndroid,
  ScrollView,
} from 'react-native';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Actions } from 'react-native-router-flux';
import MenuItem from './MenuItem';

// TODO dynamic
function getMenu() {
  return (
    <ScrollView style={styles.menu}>
      <MenuItem icon='description' text='Terms & Conditions' onPress={Actions.terms} />
      <MenuItem icon='info' text='Safe Driving' />
      <MenuItem icon='playlist-add-check' text='Vehicle Inspection' />
      <MenuItem icon='explore' text='Driver Action Center' />
      <MenuItem icon='record-voice-over' text='Feedback' />
      {/* airport-shuttle child-friendly rv-hookup */}
      <MenuItem icon='compare-arrows' text='Change Vehicle' />
      <MenuItem icon='library-books' text='HOS Rules' />
      <MenuItem icon='exit-to-app' text='Sign out' />
      <MenuItem icon='help-outline' text='Help' onPress={Actions.help} />
      {/* placeholder */}
      <View style={{height: 20}} />
    </ScrollView>
  );
}

export function wrapMenu(component) {
  return React.createClass({
    displayName: `Wrapped${component.displayName || component.name}`,
    render() {
      return <Menu>{ React.createElement(component, this.props) }</Menu>;
    }
  })
}

export default class Menu extends Component {
  render() {
    const { menu=getMenu, width=360-56 } = this.props;
    return (
      <DrawerLayoutAndroid
        drawerWidth={width}
        drawerPosition={DrawerLayoutAndroid.positions.Right}
        renderNavigationView={menu}
        ref={'DRAWER'}
      >
        {
          React.Children.map(this.props.children, child => React.cloneElement(child, {openMenu: () => this.refs.DRAWER.openDrawer() }))
        }
      </DrawerLayoutAndroid>
    )
  }
}

const styles = StyleSheet.create({
  menu: {
    flex: 1,
    backgroundColor: 'black',
    //backgroundColor: 'rgba(255, 255, 255, 0.85)',
    paddingHorizontal: 16,
    paddingTop: 8,
  },
  toolbar: {
    height: 48,
    backgroundColor: 'red'
  },
});
