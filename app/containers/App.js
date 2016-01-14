import React, { Component, Navigator, View, Text, TouchableNativeFeedback, StyleSheet } from 'react-native';
import { createStore, applyMiddleware, combineReducers, bindActionCreators } from 'redux';
import { Provider, connect } from 'react-redux';
import thunk from 'redux-thunk';
import { Actions, Router, Route, Schema, Animations, TabBar } from 'react-native-router-flux';

// TODO
//import * as reducers from '../reducers';
//import CounterApp from './counterApp';
const reducers = {
  counter(state=0, action) {
    return state + 1;
  }
};

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

export default class App extends Component {
  render() {
    //
    return (
      <Provider store={store}>
        <Router hideNavBar={true}>
          <Schema name="default" sceneConfig={ Navigator.SceneConfigs.FloatFromRight} />
          <Route name="launch" component={connect(state => ({ state }))(Launch)} initial={true} title="Launch" />
          <Route name="today" component={connect(state => ({ state }))(Today)} title="Today" sceneConfig={ Navigator.SceneConfigs.FloatFromBottom } />
        </Router>
      </Provider>
    );
  }
}

class Launch extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Text> Launch </Text>
        <TouchableNativeFeedback onPress={ Actions.today }>
        <View>
        <Text>Today</Text>
        </View>
        </TouchableNativeFeedback>
      </View>
    )
  }
}

class Today extends Component {
  render() {
    const { state: { counter } } = this.props;
    return (
      <View style={styles.container}>
      <Text> Today { counter } </Text>
        <TouchableNativeFeedback onPress={ Actions.launch }>
        <View>
        <Text>Launch</Text>
        </View>
        </TouchableNativeFeedback>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {}
});