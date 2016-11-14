import React, { Component, } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';

var React1 = require('react-native');

var {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableHighlight
} = React1;

var Button = require('../common/button');

module.exports = React.createClass({
    getInitialState: function() {
        return {
            username:'',
            password:'',
            passwordConfirmation:'',
            errorMassage:''

        }
    },

    render: function() {
        return (
            <KeyboardAwareScrollView ref='scroll'>
            <View style={styles.container}>
                <Text>Sign Up </Text>
                <View style={styles.container1}>
                    <Text style = {styles.label}>Username:</Text>
                    <TextInput
                    onFocus={(event: Event) => 
                    this._scrollToInput(ReactNative.findNodeHandle(event.target))}
                    value={this.state.username}
                    onChangeText={(text) => this.setState({username: text})}
                    style={styles.input}/>
                </View>

                <View style={styles.container1}>
                    <Text style = {styles.label}>Password:</Text>
                    <TextInput
                    nFocus={(event: Event) => 
                    this._scrollToInput(ReactNative.findNodeHandle(event.target))}
                    secureTextEntry = {true}
                    value={this.state.password}
                    onChangeText={(text) => this.setState({password: text})}
                    style={styles.input}/>
                </View>

                <View style={styles.container1}>
                    <Text style = {styles.label}>Confirm Password:</Text>
                    <TextInput
                    nFocus={(event: Event) => 
                    this._scrollToInput(ReactNative.findNodeHandle(event.target))}
                    secureTextEntry = {true}
                    value={this.state.passwordConfirmation}
                    onChangeText={(text) => this.setState({passwordConfirmation: text})}
                    style={styles.input}/>
                </View>

                <View style={styles.container1}>
                    <Text style = {styles.label}>nickname:</Text>
                    <TextInput
                    nFocus={(event: Event) => 
                    this._scrollToInput(ReactNative.findNodeHandle(event.target))}
                    secureTextEntry = {true}
                    value={this.state.password}
                    onChangeText={(text) => this.setState({nickname: text})}
                    style={styles.input}/>
                </View>
                
                <View style={styles.container1}>
                    <Text style = {styles.label}>email:</Text>
                    <TextInput
                    nFocus={(event: Event) => 
                    this._scrollToInput(ReactNative.findNodeHandle(event.target))}
                    secureTextEntry = {true}
                    value={this.state.password}
                    onChangeText={(text) => this.setState({email: text})}
                    style={styles.input}/>
                </View>
                
                <View style={styles.container1}>
                    <Text style = {styles.label}>website:</Text>
                    <TextInput
                    nFocus={(event: Event) => 
                    this._scrollToInput(ReactNative.findNodeHandle(event.target))}
                    secureTextEntry = {true}
                    value={this.state.password}
                    onChangeText={(text) => this.setState({website: text})}
                    style={styles.input}/>
                </View>

                <View style={styles.container1}>
                    <Text style = {styles.label}>phone:</Text>
                    <TextInput
                    nFocus={(event: Event) => 
                    this._scrollToInput(ReactNative.findNodeHandle(event.target))}
                    secureTextEntry = {true}
                    value={this.state.password}
                    onChangeText={(text) => this.setState({phone: text})}
                    style={styles.input}/>
                </View>
                
                <View style={styles.container1}>
                    <Text style = {styles.label}>location:</Text>
                    <TextInput
                    nFocus={(event: Event) => 
                    this._scrollToInput(ReactNative.findNodeHandle(event.target))}
                    secureTextEntry = {true}
                    value={this.state.password}
                    onChangeText={(text) => this.setState({location: text})}
                    style={styles.input}/>
                </View>

                <Text style={styles.label}>{this.state.errorMassage}</Text>
                <Button text={'Sign Up'} onPress={this.onSignUpPress}/>

                <TouchableHighlight onPress={this.onSigninPress}>
                <Text style={styles.label1}>{'I have an account...'}</Text>
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
        alignItems: 'center',
        backgroundColor: 'white'
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
    }
});