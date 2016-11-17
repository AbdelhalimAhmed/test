
import React, { Component, } from 'react';
var React1 = require('react-native');
var {
    View,
    Text,
    StyleSheet,
    ToolbarAndroid,
    TouchableHighlight,
    DrawerLayoutAndroid
} = React1;

var DrawerView = require('../common/DrawerView');

module.exports = React.createClass({
    render: function() {
        return (
            

            <ToolbarAndroid 
                    style={styles.header}
                    titleColor={'#2196F3'}
                    title="AwesomeApp"
                    actions={[{title: 'Settings', icon: require('../authentication/icon_settings.png'), show: 'always', contentInsetEnd: 'always'}]}
                    onActionSelected={ this.props.onPress}  
                    />

            
        )
    },///
    // onPress: function() {
    //     //alert("bla la bla");
       
  
    // },


    

    
});

var styles = StyleSheet.create({
    header: {
        height: 50,
        backgroundColor: 'black',
        flexDirection: 'column',
        paddingTop: 15
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 25,
        color: 'white'
    },
});