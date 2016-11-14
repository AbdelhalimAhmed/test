import React, { Component, } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

var React1 = require('react-native');
var t = require('tcomb-form-native');
var {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableHighlight
} = React1;

var Form = t.form.Form;
var Button = require('../common/button');

var Person = t.struct({
  name: t.String,              // a required string
  surname: t.maybe(t.String),  // an optional string
  age: t.Number,               // a required number
  rememberMe: t.Boolean        // a boolean
});

var options = {}; // optional rendering options (see documentation)

module.exports = React.createClass({
    getInitialState: function() {
        return {
            username:'',
            password:'',
            passwordConfirmation:'',
            errorMassage:''

        }
    },
    onPress: function () {
    // call getValue() to get the values of the form
    var value = this.refs.form.getValue();
    if (value) { // if validation fails, value will be null
      console.log(value); // value here is an instance of Person
    }
  },

    render: function() {
        return (
            <KeyboardAwareScrollView ref='scroll'>
                <View style={styles.container}>
                {/* display */}
                <Form
                  ref="form"
                  type={Person}
                  options={options}
                />
                <TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor='#99d9f4'>
                  <Text style={styles.buttonText}>Save</Text>
                </TouchableHighlight>
             </View>
            </KeyboardAwareScrollView>

        );
    },
    _scrollToInput (reactNode: any) {
      // Add a 'scroll' ref to your ScrollView
      this.refs.scroll.scrollToFocusedInput(reactNode)
    },

    onSignUpPress: function() {
        if(this.state.password !== this.state.passwordConfirmation){
            return this.setState({errorMassage: 'your passwords do not match'});
        }
        else{
            return this.setState({errorMassage: ''});
        }
    },

    onSigninPress: function() {
        this.props.navigator.pop(); 
    }

});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        marginTop: 10,
        padding: 10,
        backgroundColor: '#ffffff',
    },
    container1: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'white',
        flexDirection:'row'
    },
    input:{
    	padding: 8,
    	height: 30,
    	borderColor: 'red',
    	borderWidth: 1,
    	borderRadius: 5,
    	margin: 5,
    	width: 200,
    	alignSelf:'center'
    },
    label: {
    	fontSize: 18
    },
    label1: {
        fontSize: 12,
        textDecorationLine: "underline",
        textDecorationColor: "red"
    },
    title: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 30
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  }
});