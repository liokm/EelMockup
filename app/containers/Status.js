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
} from 'react-native';
import rulesets from '../rulesets';
import { duration } from 'moment';
import { Actions, Router, Route, Schema, Animations, TabBar } from 'react-native-router-flux';
import Icon from 'react-native-vector-icons/MaterialIcons';
import { bstyles, colors, onepixel } from '../Styles';
import Toolbar from '../components/Toolbar';
import { DialogButton } from '../components/Button';

// Current ruleset => statuses => specify which one to change to
export default class Status extends Component {
  render() {
    const ruleset = rulesets.get();
    const { to=ruleset.getDefaultState() } = this.props;
    const state = ruleset.getByType(to);
    return (
      <View style={[bstyles.container]}>
        <Toolbar subtitle={`Start ${ state.text }`}>
          <View style={[bstyles.container, bstyles.right]}>
            <DialogButton text='confirm' style={{text: {color: colors.main2}}} />
          </View>
        </Toolbar>
        <View style={[bstyles.panel]}>
          {/*
          <Text>Foo</Text>
          <TextInput
            style={{height: 40, borderColor: 'gray', borderWidth: 1}}
            placeholder
            onChangeText={(text) => this.setState({text})}
            value={this.state.text}
          />
          */}
        <TextInput
        style = {styles.titleInput}
        returnKeyType = {"next"}
        autoFocus = {true}
        placeholder = "Title"
        onSubmitEditing={(event) => {
          this.refs.SecondInput.focus();
        }}
        />
        <TextInput
        ref='SecondInput'
        style = {styles.descriptionInput}
        multiline = {true}
        maxLength = {200}
        placeholder = "Description" />
         <TextInput
         placeholder='foobar'
         placeholderTextColor='gray'
         style={{borderWidth: onepixel, borderColor: 'gray'}}
         />
         <TextInput />
         <TextInput />
         <TextInput />
         <TextInput />
         <TextInput />
         <TextInput />
        </View>

      </View>
    )
  }
}

const styles = StyleSheet.create({
});
