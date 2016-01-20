import React, {
  Component,
  StyleSheet,
  DrawerLayoutAndroid,
  Image,
  PixelRatio,
  ScrollView,
  Text,
  ToastAndroid,
  ToolbarAndroid,
  TouchableNativeFeedback,
  View,
} from 'react-native';
//import { Surface, Shape, Path, Group } from 'ReactNativeART';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { Actions } from 'react-native-router-flux';
import TabView from 'react-native-scrollable-tab-view';
import { fonts, colors, bstyles } from '../Styles';
import StatusButton from '../components/StatusButton';
import TextCounter from '../components/TextCounter';
import Toolbar from '../components/Toolbar';
import IconItem from '../components/IconItem';
import Today from './Today';

function durationFormat(d) {
  return d.format('s hh:mm:ss').split(' ')[1];
}

const BG_PATH = "M3.00191459,1 C1.34400294,1 0,2.34785514 0,4.00550479 L0,217.994495 C0,219.65439 1.34239483,221 3.00191459,221 L276.998085,221 C278.655997,221 280,219.652145 280,217.994495 L280,4.00550479 C280,2.34561033 278.657605,1 276.998085,1 L3.00191459,1 Z M3.00191459,1";
const RING_ONE_PATH = "M84,121 C130.391921,121 168,106.673113 168,89 C168,71.3268871 130.391921,57 84,57 C37.6080787,57 0,71.3268871 0,89 C0,106.673113 37.6080787,121 84,121 Z M84,121";


class DayList extends Component {
  render() {
    return (
      <View style={[styles.container]}>
        <Text>8 DAYS</Text>
      </View>
    )
  }
}

export default class MainPage extends Component {
  render() {
    // TODO Totally from ruleset configurations
    const { dispatch, ruleset, driver={ name: 'Alan Turing', vehicle: 'FQU819' }, online, currentState, drivingState: { drivingWindowLeft, drivingTimeLeft, dutyTimeLeft } } = this.props;
    const { openMenu } = this.props;
    //const { dimension: { width, height } } = this.props;
    return (
      <View style={styles.container}>
        <Toolbar
          logo={require('../img/logo.png')}
          title='EROAD DRIVER'
          onPress={null}
          actions={[
            //{logo: require('../img/logo.png') },
            {icon: 'menu', onPress: openMenu },
          ]}
        />

        {/* Header part */}
        <View style={{backgroundColor: colors.main}}>
          <View style={styles.row}>
            <Text style={[fonts.subheading, {color: 'white'}]}>{ driver.name }</Text>
            <Text style={[fonts.subheading, {color: 'white'}]}>{ driver.vehicle }</Text>
          </View>
          <View style={[styles.row, {paddingLeft: 0}]}>
            <IconItem icon='assignment' count={3} onPress={() => {}} />
            <Text style={[fonts.caption, {color: 'white'}]}>{ online? 'ONLINE': 'OFFLINE' }</Text>
          </View>
        </View>

        <TabView
          tabBarUnderlineColor='white'
          tabBarBackgroundColor={colors.main}
          tabBarActiveTextColor='white'
          tabBarInactiveTextColor='orange'
          style={{paddingBottom: 2}}
        >
          <Today tabLabel='TODAY' {...this.props} style={{height: 100}}/>
          <DayList tabLabel='8 DAYS' {...this.props} />
        </TabView>

        <View style={{flexDirection: 'column', justifyContent: 'space-around'}}>
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
    backgroundColor: '#ee3124'
  },
  counters: {
    flex: 1,
    flexDirection: 'row'
  },
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  rowText: {
    color: 'white',
  }
});
