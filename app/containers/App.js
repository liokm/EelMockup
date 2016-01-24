import React, {
  Component, Dimensions, Navigator, View, Text, TouchableNativeFeedback, StyleSheet ,
  WebView,
  ToolbarAndroid,
  ProgressBar,
  NetInfo
} from 'react-native';
import { createStore, applyMiddleware, combineReducers, bindActionCreators } from 'redux';
import { Provider, connect } from 'react-redux';
import thunk from 'redux-thunk';
import { Actions, Router, Route, Schema, Animations, TabBar } from 'react-native-router-flux';
//import Orientation from 'react-native-orientation';
import Today from './Today';
import MainPage from './MainPage';
import { wrapMenu } from '../components/Menu';
import Toolbar from '../components/Toolbar';
//import Terms from './Terms';
import rulesets from '../rulesets';
import { duration } from 'moment';
import Icon from 'react-native-vector-icons/MaterialIcons';

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
  },
  online(state='true', action) {
    switch (action.type) {
      case 'NETINFO_CHANGED':
        //return action.connectivityType.toLowerCase() != 'none';
        return action.connectivityType;
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
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  toolbar: {
    height: 48,
    backgroundColor: '#ee3124',
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

function getDrivingState({currentState}) {
  return {
    state: currentState,
    drivingWindowLeft: duration(12, 'hour').add(9, 'minute').add(9, 'second'),
    drivingTimeLeft: duration(55, 'minute'),
    dutyTimeLeft: duration(12, 'second'),
  }
}

function select(state) {
  return {
    counter: state.counter,
    dimension: getDimension(state.orientation),
    ruleset: rulesets.get(state.rulesetName),
    currentState: state.currentState,
    drivingState: getDrivingState(state),
    // TODO logic for state.online
    //onlineText: (online => online ? 'ONLINE' : 'OFFLINE')(state.online),
    onlineText: (online => online)(state.online),
  }
}

const connected = [
  wrapMenu(MainPage), // wrappedMainPage
  Today,
  Launch,
  //Terms,
].reduce((o, x) => {
  o[x.name || x.displayName] = connect(select)(x)
  return o;
}, {});


class WebPage extends Component {
  render() {
    const { url, title } = this.props;
    return (
      <View style={{flex: 1}}>
        <Toolbar title={title} />
        <WebView
          style={{flex: 1}}
          url={url}
          startInLoadingState={true}
          //renderLoading={ProgressBar}
        />
      </View>
    );
  }
}

class App extends Component {
  render() {
    return (
      <Router hideNavBar={true}>
        <Schema name="default" sceneConfig={ Navigator.SceneConfigs.FloatFromRight} />
        <Route name="launch" component={connected.Launch} initial={false} title="Launch" />
        <Route name="today" component={connected.Today} initial={false} title="Today" sceneConfig={ Navigator.SceneConfigs.FloatFromBottom } />
        <Route name="main" component={connected.WrappedMainPage} initial={true} title="" sceneConfig={ Navigator.SceneConfigs.FloatFromBottom } />
        <Route name="terms" component={() => <WebPage title='Terms & Conditions' url='https://help.eroad.com/nz/driver-app/logbook/nz-logbook-overview/' />} />
        <Route name="help" component={() => <WebPage title='Help' url='https://help.eroad.com/nz/driver-app/logbook/nz-logbook-overview/' />} />
      </Router>
    );
  }
}

export default class Root extends Component {
  handleConnectionInfoChange(e) {
    store.dispatch({type: 'NETINFO_CHANGED', connectivityType: e});
  }
  componentDidMount() {
    NetInfo.addEventListener(
      'change',
      this.handleConnectionInfoChange
    );
  }
  componentWillUnmount() {
    NetInfo.removeEventListener(
      'change',
      this.handleConnectionInfoChange
    );
  }
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
