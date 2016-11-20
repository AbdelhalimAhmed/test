import React, { Component, } from 'react';
var React1 = require('react-native');
var {
    StyleSheet,
    Navigator
} = React1;

var Signin = require('./components/authentication/signin');
var Signup = require('./components/authentication/signup');

// var MyPosts = require('./components/authentication/MyPosts');
// var MyAlbumes = require('./components/authentication/MyAlbumes');
// var MyTodo = require('./components/authentication/MyTodo');
var Homepage = require('./components/authentication/homepage');
// var DrawerView = require('./components/common/DrawerView');

var Mainpage = require('./components/authentication/mainpage');
// var Details = require('./components/authentication/details');

var ROUTES = {
    signin: Signin,
    signup: Signup,
    mainpage: Mainpage,
    // details: Details,

    // MyPosts: MyPosts,
    // MyAlbumes: MyAlbumes,
    // MyTodo: MyTodo,
    homepage: Homepage
    // DrawerView: DrawerView
}


module.exports = React.createClass({

    renderScene: function(route, navigator){
       // var Component = ROUTES[route.component];
        //return <Component route = {route} navigator={navigator} data = {route.data}/>;
    _navigator = navigator;
    switch (route.component) {
        case 'signup':
            return (<Signup navigator={navigator} data = {route.data} data1 = {route.data1} data2 = {route.data2} data3 = {route.data3} data4 = {route.data4} data5 = {route.data5}/>);
        case 'signin':
            return (<Signin navigator={navigator} data = {route.data} data1 = {route.data1} data2 = {route.data2} data3 = {route.data3} data4 = {route.data4} data5 = {route.data5}/>);
        case 'homepage':
            return (<Homepage navigator={navigator} data = {route.data} data1 = {route.data1} data2 = {route.data2} data3 = {route.data3} data4 = {route.data4} data5 = {route.data5}/>);
        case 'mainpage':
             return (<Mainpage navigator={navigator} data = {route.data} data1 = {route.data1} data2 = {route.data2} data3 = {route.data3} data4 = {route.data4} data5 = {route.data5}/>);
        /// case 'MyPosts':
        //     return (<MyPosts navigator={navigator} data = {route.data} data1 = {route.data1} data2 = {route.data2} data3 = {route.data3} data4 = {route.data4} data5 = {route.data5}/>);
        // case 'MyAlbumes':
        //     return (<MyAlbumes navigator={navigator} data = {route.data} data1 = {route.data1} data2 = {route.data2} data3 = {route.data3} data4 = {route.data4} data5 = {route.data5}/>);
        // case 'MyTodo':
        //     return (<MyTodo navigator={navigator} data = {route.data} data1 = {route.data1} data2 = {route.data2} data3 = {route.data3} data4 = {route.data4} data5 = {route.data5}/>);
        
    }
    },
    render: function() {
        return (
            <Navigator
            style = {styles.container}
            initialRoute={{component: 'homepage'}}
            renderScene={this.renderScene}
            configureScene={() => {return Navigator.SceneConfigs.FloatFromRight}}

            />
        );
    }
});

var styles = StyleSheet.create({
    container: {
        flex: 1,
    }
});