import React, {
  Component,
  StyleSheet,
  View,
  Text,
  ToolbarAndroid,
  ToastAndroid,
  Image,
  TouchableNativeFeedback,
  DrawerLayoutAndroid,
  ScrollView,
  PixelRatio
} from 'react-native';
//import { Surface, Shape, Path, Group } from 'ReactNativeART';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Actions } from 'react-native-router-flux';
import StatusButton from '../components/StatusButton';
import TextCounter from '../components/TextCounter';

function durationFormat(d) {
  return d.format('s hh:mm:ss').split(' ')[1];
}

const BG_PATH = "M3.00191459,1 C1.34400294,1 0,2.34785514 0,4.00550479 L0,217.994495 C0,219.65439 1.34239483,221 3.00191459,221 L276.998085,221 C278.655997,221 280,219.652145 280,217.994495 L280,4.00550479 C280,2.34561033 278.657605,1 276.998085,1 L3.00191459,1 Z M3.00191459,1";
const RING_ONE_PATH = "M84,121 C130.391921,121 168,106.673113 168,89 C168,71.3268871 130.391921,57 84,57 C37.6080787,57 0,71.3268871 0,89 C0,106.673113 37.6080787,121 84,121 Z M84,121";


const s2 = StyleSheet.create({
  menu: {
    flex: 1,
    backgroundColor: 'black',
    paddingHorizontal: 10,
    paddingTop: 6,
  },
  item: {
    flexDirection: 'row',
    borderBottomColor: 'white',
    borderBottomWidth: 1 / PixelRatio.get(),
    alignItems: 'center',
    overflow: 'visible',
  },
  icon: {
    color: 'red',
    marginRight: 8,
  },
  text: {
    color: 'white'
  }
});

class MenuItem extends Component {
  render() {
    const {
      onPress,
      text,
      icon,
      iconSize=32,
    } = this.props;
    //delayPressIn={10}
    return (
      <TouchableNativeFeedback
        onPress={ onPress || (() => ToastAndroid.show(text, ToastAndroid.LONG)) }
        background={TouchableNativeFeedback.Ripple('white')}>
        <View style={[s2.item, {height: iconSize + 12}]}>
          <Icon name={icon} size={iconSize} style={s2.icon} />
          <Text style={s2.text}>{ text }</Text>
        </View>
      </TouchableNativeFeedback>
    );
  }
}

function getMenu() {
  return (
    <ScrollView style={s2.menu}>
      <MenuItem icon='description' text='Terms & Conditions' />
      <MenuItem icon='info' text='Safe Driving' />
      <MenuItem icon='playlist-add-check' text='Vehicle Inspection' />
      <MenuItem icon='explore' text='Driver Action Center' />
      <MenuItem icon='record-voice-over' text='Feedback' />
      {/* airport-shuttle child-friendly rv-hookup */}
      <MenuItem icon='compare-arrows' text='Change Vehicle' />
      <MenuItem icon='library-books' text='HOS Rules' />
      <MenuItem icon='exit-to-app' text='Sign out' />
      <MenuItem icon='help-outline' text='Help' />
      <View style={{height: 20}} />
    </ScrollView>
  );
}

class MenuWrapper extends Component {
  // TODO Click the menu icon
  // this.refs.DRAWER.openDrawer()
  render() {
    const { menu=getMenu, width=300 } = this.props;
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

export default class MainPage extends Component {
  render() {
    // TODO Totally from ruleset configurations
    const { dispatch, ruleset, currentState, drivingState: { drivingWindowLeft, drivingTimeLeft, dutyTimeLeft } } = this.props;
    //const { dimension: { width, height } } = this.props;
    //console.log(this.props);
    return (
      <MenuWrapper>
      <View style={styles.container}>
        <ToolbarAndroid
          logo={require('../img/logo.png')}
          subtitle=' EROAD Driver'
          style={styles.toolbar}
          subtitleColor='white'
          >
          <View style={{height: 48, alignItems: 'center'}}>
          <TouchableNativeFeedback>
          <View>
            <Icon name='menu' size={32} style={{color: 'white'}} />
          </View>
          </TouchableNativeFeedback>
          </View>
        </ToolbarAndroid>
        <View style={styles.buttons}>
        {
          ruleset.types.map(({name, icon, text}, i) =>
                            <StatusButton key={i} size={90 * 0.6} icon={icon} text={text} active={name==currentState} onPress={ () => dispatch({type: 'CHANGE_STATE', state: name})} />)
        }
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-around'}}>
          <TextCounter
            text='DRIVING WINDOW'
            color='orange'
            value={durationFormat(drivingWindowLeft)}
            ratio={0.5}
            />
          <TextCounter
            text='DRIVING TIME'
            color='lightblue'
            value={durationFormat(drivingTimeLeft)}
            ratio={0.75}
            />
          <TextCounter
            text='DUTY TIME'
            color='purple'
            value={durationFormat(dutyTimeLeft)}
            ratio={0.25}
            />
        </View>
        <View style={styles.counters}>
          <View>
          <Text>Left Part</Text>
          </View>
        </View>
      </View>
      </MenuWrapper>
    );
  }
}

//class DurationCounter extends Component {
//  render() {
//    const { duration, maxDuration=duration()...props } = this.props;
//    return (
//      <TextCounter {...props} value={ durationFormat(duration) } />
//    )
//  }
//}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  toolbar: {
    height: 48,
    backgroundColor: 'red'
  },
  buttons: {
    flexDirection: 'row'
  },
  counters: {
    flex: 1,
    flexDirection: 'row'
  }
});
