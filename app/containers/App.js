import React, { Component, Dimensions, Navigator, View, Text, TouchableNativeFeedback, StyleSheet } from 'react-native';
import { createStore, applyMiddleware, combineReducers, bindActionCreators } from 'redux';
import { Provider, connect } from 'react-redux';
import thunk from 'redux-thunk';
import { Actions, Router, Route, Schema, Animations, TabBar } from 'react-native-router-flux';
//import Orientation from 'react-native-orientation';
import Today from './Today';
import rulesets from '../rulesets';

// TODO
//import * as reducers from '../reducers';
//import CounterApp from './counterApp';
const INC = 'INC';
const reducers = {
  counter(state=0, action={}) {
    switch (action.type) {
      case INC:
        return state + (action.num || 1);
      default:
        return state;
    }
  },
  rulesetName(state=rulesets.get().getName(), action) {
    switch (action.type) {
      case 'CHANGE_RULESET':
        return action.ruleset;
      default:
        return state;
    }
  },
  // PORTRAIT, LANDSCAPE, UNKNOWN, PORTRAITUPSIDEDOWN
  orientation(state='PORTRAIT', action) {
    switch (action.type) {
      case ORIENTATION_CHANGE:
        return action.orientation;
      default:
        return state;
    }
  },
  currentState(state=rulesets.get().getDefaultState(), action) {
    switch (action.type) {
      case 'CHANGE_STATE':
        return action.state;
      default:
        return state;
    }
  }
};

const createStoreWithMiddleware = applyMiddleware(thunk)(createStore);
const reducer = combineReducers(reducers);
const store = createStoreWithMiddleware(reducer);

const ORIENTATION_CHANGE = 'ORIENTATION_CHANGE';
// add orientation handler
// TODO If we set PORTRAIT by default, what is the value if the real orientation was LANDSCAPE
// Could we rectify the value by firstly locking to PORTRAIT and then unlock it, like following lines.
// XXX Disable following lines at first because they fails
//Orientation.lockToPortrait();
//(store => Orientation.addOrientationListener(orientation =>  store.dispatch({ type: ORIENTATION_CHANGE, orientation })))(store);
//Orientation.unlockAllOrientations();


class Launch extends Component {
  render() {
    return (
      <View style={styles.container}>
      <Text> Launch </Text>
        <TouchableNativeFeedback onPress={ () => { this.props.dispatch({type: INC}); Actions.today() }}>
        <View>
        <Text>Today</Text>
        </View>
        </TouchableNativeFeedback>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
  }
});

// Get dimension & orientation info
function getDimension(orientation) {
  const { width, height } = Dimensions.get('window');
  return {
    orientation,
    width,
    height,
    min: Math.min(width, height)
  };
}

function select(state) {
  return {
    counter: state.counter,
    dimension: getDimension(state.orientation),
    ruleset: rulesets.get(state.rulesetName),
    currentState: state.currentState
  }
}

const connected = [Today, Launch].reduce((o, x) => {
  o[x.name] = connect(select)(x)
  return o;
}, {});

class App extends Component {
  render() {
    return (
      <Router hideNavBar={true}>
        <Schema name="default" sceneConfig={ Navigator.SceneConfigs.FloatFromRight} />
        <Route name="launch" component={connected.Launch} initial={false} title="Launch" />
        <Route name="today" component={connected.Today} initial={true} title="Today" sceneConfig={ Navigator.SceneConfigs.FloatFromBottom } />
      </Router>
    );
  }
}

export default class Root extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
