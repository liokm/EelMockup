import React, {
  Component,
  StyleSheet,
  ScrollView,
  Text,
  ToastAndroid,
  ToolbarAndroid,
  View,
  TouchableNativeFeedback,
} from 'react-native';

import { fonts, colors, bstyles, onepixel } from '../Styles';
import Toolbar from '../components/Toolbar';
import IconItem from '../components/IconItem';
import Button from '../components/Button';
import moment from 'moment';

import Day from '../components/Day';


class EventRow extends Component {
  render() {
    return (
      <View style={[bstyles.container, {borderBottomWidth: onepixel, borderBottomColor: 'gray', padding: 16}]}>
        <IconItem icon='snooze' onPress={() => {}} />
        <Text>DRIVE</Text>
        <Text>7:00 AM - 3:21 AM</Text>
        <Text>1h 31m</Text>
        <Text>EBG153</Text>
      </View>
    );
  }
}

const EVENT_TYPES = [
];


export default class DayView extends Component {
  render() {
    return (
      <View style={bstyles.container}>
        <Toolbar
          icon='arrow-back'
          subtitle={moment().format('LL')}
        />
        <View style={[{paddingHorizontal: 16, backgroundColor: colors.main, paddingBottom: Button.DEFAULT_WIDTH / 2}]}>
          <Day showTitle={false} style={{graph: {color: 'white'}, label: {color: 'white'}}} />
        </View>
        <View style={bstyles.container}>
        <ScrollView style={{}}>
        {
          [ 1, 2, 1, 2, 1, 2, 1, 2, ].map((e, i) => <EventRow key={i} />)
        }
        </ScrollView>
        <Button style={{wrapper: Button.styles.rightTop}}/>
        </View>
      </View>
    );
  }
}
