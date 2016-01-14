'use strict';

import React from 'react-native';
const {
  AppRegistry,
  StyleSheet,
  Component,
  Navigator,
  Text,
  View,
  TouchableNativeFeedback,
  ScrollView
} = React;
import  { Actions, Router, Route, Schema, Animations, TabBar } from 'react-native-router-flux';
import ScrollableTabView from 'react-native-scrollable-tab-view';

import StatusButton from './app/components/StatusButton';


//var EelMockup = React.createClass({
//  render: function() {
//    return (
//      <View style={styles.container}>
//        <Text style={styles.welcome}>
//          Welcome to React Native!
//        </Text>
//        <Text style={styles.instructions}>
//          To get started, edit index.android.js
//        </Text>
//        <Text style={styles.instructions}>
//          Shake or press menu button for dev menu
//        </Text>
//      </View>
//    );
//  }
//});

class Today extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Text> Today </Text>
        <TouchableNativeFeedback onPress={ Actions.launch }>
        <View>
        <Text>Launch</Text>
        </View>
        </TouchableNativeFeedback>
      </View>
    )
  }
}

class Home extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Text> Home </Text>
        <TouchableNativeFeedback onPress={ Actions.launch }>
        <View>
        <Text>Launch</Text>
        </View>
        </TouchableNativeFeedback>
      </View>
    )
  }
}

class Days extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Text> 8 Days </Text>
        <TouchableNativeFeedback onPress={ Actions.launch }>
        <View>
        <Text>Launch</Text>
        </View>
        </TouchableNativeFeedback>
      </View>
    )
  }
}

class Launch extends Component {
  render() {
    return (
      <View style={styles.container}>
      <View style={{ flexDirection: 'row', flex: 1 }}>
        <StatusButton name='access-time' text="ON DUTY" />
        <StatusButton name='local-shipping' size={30} text="DRIVING" />
        <StatusButton name='snooze' size={90} text="SLEEPER" />
        <StatusButton name='local-cafe' text="OFF DUTY" active={true}/>
      </View>
      <ScrollableTabView initialPage={0}>
        <ScrollView tabLabel="TODAY" style={styles.cont}>
          <Text> Foo </Text>
        </ScrollView>
        <ScrollView tabLabel="8 DAYS" style={styles.cont}>
          <Text> Bar </Text>
        </ScrollView>
      </ScrollableTabView>
        <Text>Launch Page</Text>
        <TouchableNativeFeedback onPress={ Actions.today }>
        <View>
        <Text>Today</Text>
        </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={ Actions.days }>
        <View>
        <Text>8 Days</Text>
        </View>
        </TouchableNativeFeedback>
        <TouchableNativeFeedback onPress={ Actions.home }>
        <View>
        <Text>Home</Text>
        </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
}

class EelMockup extends Component {
  render() {
    return (
       <Router hideNavBar={true}>
         <Schema name="modal" sceneConfig={ Navigator.SceneConfigs.FloatFromBottom}/>
         <Schema name="default" sceneConfig={ Navigator.SceneConfigs.FloatFromRight}/>

         <Route name="launch" component={Launch} initial={true} title="Launch" />
         <Route name="today" component={Today} title="Today" sceneConfig={ Navigator.SceneConfigs.FloatFromLeft } schema="modal" />
         <Route name="days" component={Days} title="8 Days" type="replace" sceneConfig={ Navigator.SceneConfigs.FloatFromBottom } />
         <Route name="home" component={Home} title="Home" sceneConfig={ Navigator.SceneConfigs.FadeTheRight } />
       </Router>
    )
  }
}

var styles = StyleSheet.create({
  cont: {
    flex: 1
  },
  //container: {
  //  flex: 1,
  //  justifyContent: 'center',
  //  alignItems: 'center',
  //  backgroundColor: '#F5FCFF',
  //},
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,
  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,
  },
});

AppRegistry.registerComponent('EelMockup', () => EelMockup);
