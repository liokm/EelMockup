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
import Card from '../components/Card';
import Day from '../components/Day';


class DayList extends Component {
  render() {
    const now = moment();
    const actions = [
      {icon: 'edit', onPress: Actions.dayview, style: {icon: {color: 'gray'}}},
      {icon: 'check', onPress: () => {}, style: {icon: {color: 'gray'}}}
    ];
    return (
      <ScrollView style={[bstyles.container, {padding: 8, backgroundColor: '#eee'}]}>
      {
        Array.from(Array(8), (x, k) => now.add(-1, 'day').clone()).map((day, i) => {
          return <Card key={i} actions={actions}><Day day={day} style={{title: { alignItems: 'flex-start' }}} /></Card>
        })
      }
        <View style={{height: 8}}/>
      </ScrollView>
    )
  }
}

export default class MainPage extends Component {
  render() {
    // TODO Totally from ruleset configurations
    const { dispatch, ruleset, driver={ name: 'Alan Turing', vehicle: 'FQU819' }, online, onlineText, currentState, drivingState: { drivingWindowLeft, drivingTimeLeft, dutyTimeLeft } } = this.props;
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
            <Text style={[fonts.caption, {color: 'white'}]}>{ onlineText }</Text>
          </View>
        </View>

        <TabView
          tabBarUnderlineColor='white'
          tabBarBackgroundColor={colors.main}
          tabBarActiveTextColor='white'
          tabBarInactiveTextColor='orange'
          style={{paddingBottom: 2}}
        >
          <Today tabLabel='TODAY' {...this.props} />
          <DayList tabLabel='8 DAYS' {...this.props} />
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
});
