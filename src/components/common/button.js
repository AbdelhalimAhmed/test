import React, { Component, } from 'react';
var React1 = require('react-native');
var {
    View,
    Text,
    StyleSheet,
    TouchableHighlight
} = React1;

module.exports = React.createClass({
    render: function() {
        return (
            <TouchableHighlight 
            style={styles.button}
            underlayColor={'gray'}
            onPress={this.props.onPress}
            >
                <Text style = {styles.buttonText}>{this.props.text}</Text>
            </TouchableHighlight>
        )
    }
});

var styles = StyleSheet.create({
    button: {
        justifyContent: 'center',
        alignItems: 'center',
        borderWidth: 1,
        borderRadius: 5,
        padding: 5,
        borderColor: 'black',
        height:40,
        marginTop: 10
    },
    buttonText: {
        flex: 1,
        alignSelf: 'center',
        fontSize: 15
    }
});