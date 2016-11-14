import React, { Component, } from 'react';
var React1 = require('react-native');
var {
    View,
    Text,
    StyleSheet,
    ToolbarAndroid,
    TouchableHighlight
} = React1;
var Button = require('../common/button');
var textName;
module.exports = React.createClass({
     
    onMyPostesPress: function(userId, userName){
      this.props.navigator.push({
            component: 'MyPosts',
            data: userId,
            data1:userName,
        });   
    },
    onMyAlbumesPress: function(userId, userName){
        this.props.navigator.push({
            component: 'MyAlbumes',
            data: userId,
            data1:userName,
        });
    },
    onMyTodoPress: function(userId, userName){
        alert(userId);
    },
    render: function() {
        //alert(this.props.id)
        
        return (
           <View style={{flex: 1, backgroundColor: '#fff'}}>
            <Text style={{margin: 10, fontSize: 18, textAlign: 'left',backgroundColor: '#2196F3'}}>{this.props.text}</Text>
            <Button text={'My Posts'} onPress={ () => this.onMyPostesPress(this.props.id, this.props.Name)}/>
            <Button text={'My Albums'} onPress={() => this.onMyAlbumesPress(this.props.id, this.props.Name)}/> 
            <Button text={'My Todo'} onPress={() => this.onMyTodoPress(this.props.id, this.props.Name)}/>                                                                  
            </View>
        )
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