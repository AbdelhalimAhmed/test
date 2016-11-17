
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
            <DrawerLayoutAndroid
                  drawerWidth={300}
                  drawerLockMode = {'unlocked'}
                  drawerPosition={DrawerLayoutAndroid.positions.Right}
                  renderNavigationView={() => this.NavigationView() }
                  onDrawerOpen = {this.onOpen}
                  ref={'DRAWER_REF'}>

            <ToolbarAndroid 
                    style={styles.header}
                    titleColor={'#2196F3'}
                    title="AwesomeApp"
                    actions={[{title: 'Settings', icon: require('../authentication/icon_settings.png'), show: 'always', contentInsetEnd: 'always'}]}
                    onActionSelected={ this.onPress}
                    />
                    
            </DrawerLayoutAndroid>
        )
    },///
    onPress: function() {
        //alert("bla la bla");
       this.refs['DRAWER_REF'].openDrawer();
  
    },


    NavigationView: function(){
       return (<DrawerView text={'Welcome '} />);
    },///

    onOpen: function(){
        //alert('bla la bla')
    },

    
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