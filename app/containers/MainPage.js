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
import { fonts, colors, bstyles, onepixel } from '../Styles';
import StatusButton from '../components/StatusButton';
import TextCounter from '../components/TextCounter';
import Toolbar from '../components/Toolbar';
import IconItem from '../components/IconItem';
import Today from './Today';
import moment from 'moment';

function durationFormat(d) {
  return d.format('s hh:mm:ss').split(' ')[1];
}

//import { Card } from 'react-native-material-design';
import Day from '../components/Day';

class Card extends Component {
  render() {
    const { elevation=1, children, actions=[1] } = this.props;
    return (
      <View style={[styles.card, {elevation}]}>
      { children }
      {
        actions.length
          ? (
            <View style={[styles.actions, {}]}>
              <IconItem icon='check' onPress={() => {}} />
            </View>
          )
          : null
      }
      </View>
    )
  }
}

class DayList extends Component {
  render() {
    return (
      <ScrollView style={[bstyles.container, {padding: 8, backgroundColor: '#f0f0f0'}]}>
      {
        Array.from(Array(8), (x, k) => moment()).map((day, i) => {
          return <Card><Day /></Card>
        })
      }
        <View style={{height: 20}}/>
      </ScrollView>
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
      <View style={bstyles.container}>
        <Toolbar
          //logo={require('../img/logo.png')}
          icon='menu'
          onPress={openMenu}
          subtitle='EROAD DRIVER'
          actions={[
            //{logo: require('../img/logo.png') },
            //{icon: 'menu', onPress: openMenu },
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
          <DayList tabLabel='8 DAYS' {...this.props} />
          <Today tabLabel='TODAY' {...this.props} />
        </TabView>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 16,
  },
  rowText: {
    color: 'white',
  },
  card: {
     borderRadius: 2,
     // Check Card implementation
     elevation: 2,
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
    backgroundColor: colors.main
  }
});
