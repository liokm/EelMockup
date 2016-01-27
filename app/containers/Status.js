import React, {
  Component,
  StyleSheet,
  ProgressBar,
  Text,
  ToolbarAndroid,
  TouchableNativeFeedback,
  View,
  WebView,
  TextInput,
  ScrollView,
  ToastAndroid,
} from 'react-native';
import rulesets from '../rulesets';
import { duration } from 'moment';
import { Actions, Router, Route, Schema, Animations, TabBar } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { bstyles, colors, onepixel } from '../Styles';
import Toolbar from '../components/Toolbar';
import { DialogButton } from '../components/Button';
import IconItem from '../components/IconItem';
import TextField from '../components/TextField';


export default class Status extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    const ruleset = rulesets.get();
    const { to=ruleset.getDefaultState() } = this.props;
    const state = ruleset.getByType(to);
    // TODO ruleset => status => specific view logic bound to ruleset itself
    const func = this[`render${ to }`];
    return func ? func.call(this, ruleset, state) : <Text>TODO</Text>;
  }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      geolocation => {
        const { timestamp, coords: {latitude, longitude} } = geolocation;
        fetch(`http://maps.googleapis.com/maps/api/geocode/json?latlng=${latitude},${longitude}&sensor=true_or_false`)
          .then(resp => resp.json())
          .then(({results, status}) => {
            if (status == 'OK' && results.length) {
              this.setState({location: results[0].formatted_address});
              //dispatch({
              //  type: 'RECEIVE_GEO',
              //  data: {
              //    timestamp,
              //    geolocation, // {timestamp, coords: {altitude, latitude, longitude, heading, ...}}
              //    latitude,
              //    longitude,
              //    text: results[0].formatted_address
              //  }
              //})
            }
          })
          .catch(e => ToastAndroid.show(e, ToastAndroid.LONG));
      }
    );
  }

  renderON(ruleset, state) {
    return this.renderD(ruleset, state);
  }

  renderOFF(ruleset, state) {
    return this.renderD(ruleset, state);
  }

  renderSB(ruleset, state) {
    return this.renderD(ruleset, state);
  }

  renderD(ruleset, state) {
    return (
      <View style={[bstyles.container]}>
        <Toolbar subtitle={`Start ${ state.text }`}>
          <View style={[bstyles.container, bstyles.right]}>
            <DialogButton text='confirm' style={{text: {color: colors.main2}}} />
          </View>
        </Toolbar>
        <ScrollView style={[bstyles.panel]}>
          <View>
            <View style={[bstyles.container, bstyles.row]}>
              <TextField
                //autoFocus={true}
                placeHolder='Location'
                onSubmitEditing={() => this.refs.truckNumber.focus()}
                value={this.state.location}
                onChangeText={location => this.setState({ location })}
              />
              <IconItem icon='my-location' style={{icon: {color: 'gray'}}} onPress={() => {}} />
            </View>
          </View>

          <TextField
            ref='truckNumber'
            onSubmitEditing={() => this.refs.distance.focus()}
            placeHolder='Truck Number'
            autoCapitalize='characters'
          />

          <TextField
            ref='distance'
            onSubmitEditing={() => this.refs.trailer.focus()}
            placeHolder='Distance Reading'
            keyboardType='numeric'
          />

          <TextField
            ref='trailer'
            placeHolder='Trailer'
            autoCapitalize='characters'
          />
        </ScrollView>
      </View>
    )
  }
}

const styles = StyleSheet.create({
});
