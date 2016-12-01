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
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

var textName;
module.exports = React.createClass({
    getInitialState: function () {
    
        return {
            name: '',
        }
    },

    onSignoutPress: function(userId, userName){
      this.props.navigator.push({
            component: 'homepage',
            data: '',
            data1:'',
        });   
    },
    onFacebookPress:function(){
        alert("hellowwwwwwww")
    },
    render: function() {
        //alert(this.props.id)
        
        return (
            <View style={{flex: 1, backgroundColor: '#fff', padding: 10}}>
                <Text style={{margin: 10, fontSize: 18, textAlign: 'left',backgroundColor: '#2196F3'}}>{'welcome '+this.props.id}
                </Text>
                <View style={{justifyContent: 'center',alignItems: 'center',flexDirection:'column'}}>
                    <MaterialIcons name='account-circle' size={70} color="black" onPress = {this.onClosePress}/>  
                    <Text style={{fontFamily: 'Arial', fontSize: 15}}>  User Name </Text>
                </View>
                <Icon.Button style={{backgroundColor:'#fff'}} name={'home'}  color={'black'} onPress={ this.props.onPress}>
                    <Text style={{fontFamily: 'Arial', fontSize: 15}}>  Home </Text>
                </Icon.Button>
                <Icon.Button style={{backgroundColor:'#fff'}} name={'sign-out'}  color={'black'} onPress = {this.onSignoutPress}>
                    <Text style={{fontFamily: 'Arial', fontSize: 15}}>  Sign out </Text>
                </Icon.Button>
                <Icon.Button style={{backgroundColor:'#fff'}} name={'bars'} color={'black'} onPress = {this.onFacebookPress}>
                    <Text style={{fontFamily: 'Arial', fontSize: 15}}>  Catalogs </Text>
                </Icon.Button>
                <Icon.Button style={{backgroundColor:'#fff'}} name={'shopping-bag'} color={'black'} onPress = {this.onFacebookPress}>
                    <Text style={{fontFamily: 'Arial', fontSize: 15}}>  Products </Text>
                </Icon.Button>
                <Icon.Button style={{backgroundColor:'#fff'}} name={'bed'} color={'black'} onPress = {this.onFacebookPress}>
                    <Text style={{fontFamily: 'Arial', fontSize: 15}}>  Showrooms </Text>
                </Icon.Button>
                <Icon.Button style={{backgroundColor:'#fff'}} name={'paint-brush'} color={'black'} onPress = {this.onFacebookPress}>
                    <Text style={{fontFamily: 'Arial', fontSize: 15}}>  Designer </Text>
                </Icon.Button>
                <Icon.Button style={{backgroundColor:'#fff'}} name={'home'} color={'black'} onPress = {this.onFacebookPress}>
                    <Text style={{fontFamily: 'Arial', fontSize: 15}}>  Houses </Text>
                </Icon.Button>
                <Icon.Button style={{backgroundColor:'#fff'}} name={'desktop'} color={'black'} onPress = {this.onFacebookPress}>
                    <Text style={{fontFamily: 'Arial', fontSize: 15}}>  En Vogue </Text>
                </Icon.Button>
                <Icon.Button style={{backgroundColor:'#fff'}} name={'info-circle'} color={'black'} onPress = {this.onFacebookPress}>
                    <Text style={{fontFamily: 'Arial', fontSize: 15}}>  About Us </Text>
                </Icon.Button>
                </View>
           
        )
    },///<Button text={'My Albums'} onPress={() => this.onMyAlbumesPress(this.props.id, this.props.Name)}/> 
               // <Button text={'My Todo'} onPress={() => this.onMyTodoPress(this.props.id, this.props.Name)}/>                                                                  
            
    
    
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