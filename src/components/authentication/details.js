import React, { Component, } from 'react';
var React1 = require('react-native');
var {
    View,
    ScrollView,
    Text,
    Image,
    TouchableHighlight,
    StyleSheet,
    DrawerLayoutAndroid,
    ActivityIndicator,
    TouchableHighlight,
    ToolbarAndroid,
    ListView,
    TouchableOpacity,
    
} = React1;

var Button = require('../common/button');
var DrawerView = require('../common/DrawerView');
var ToolBar = require('../authentication/ToolBar');

import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

module.exports = React.createClass({
    

    onActionSelected: function(){
        this.refs['DRAWER_REF'].openDrawer();
    },

    render: function() {
        //alert(this.props.data3);
        //alert("haa")
        const Header = () => (
            
            <ToolBar onPress = {() => this.onActionSelected()}/>    
           
        )///
        
        return (
        <DrawerLayoutAndroid
                  drawerWidth={300}
                  drawerLockMode = {'unlocked'}
                  drawerPosition={DrawerLayoutAndroid.positions.Right}
                  renderNavigationView={() => this.NavigationView(this.props.data4, this.props.data5) }
                  onDrawerOpen = {this.onOpen}
                  ref={'DRAWER_REF'}>
            
            <View style = {styles.container}>

           <Header/>
           <MaterialIcons name="favorite" size={30} color="#900" />
                <View style={styles.section}>
                    <Text style = {{fontWeight: 'bold',fontSize: 18,color: 'white'}}>Name:{'\n'}{this.props.data}</Text>
                </View>

                <Text style = {styles.textContainer} >Description:{'\n'}{this.props.data1}</Text>
                <Text style = {styles.textContainer}>Price:{'\n'}{this.props.data2}</Text>
                 
    
            <Button text={'Back To ListProducts...'} onPress = {this.onPopPress}/> 
             </View>
           
        </DrawerLayoutAndroid>
        );
        ////
    },

     NavigationView: function(myName, myId){
       return (<DrawerView text={'Welcome ' + myName} id={myId} navigator={this.props.navigator}/>);
    },///

    onPopPress: function() {
    
        this.props.navigator.pop();

    },

});

var styles = StyleSheet.create({
    container: {
        flex: 1,
    },
  section: { 
        backgroundColor: '#2196F3',
    },
    input:{
    	padding: 2,
    	height: 40,
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
     rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8
  },
    thumb: {
    width: 80,
    height: 80,
    padding:5,
    alignItems: 'center'
  },
  textContainer: {
    padding:5,
    fontSize:15,
    marginBottom:10
  },
  textContainer1: {
    padding:5,
    fontSize:20,
    marginBottom:10,
    color: '#2196F3'
  },
    activityIndicator: {
        alignItems: 'center',
        justifyContent: 'center',
    },
    header: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        flexDirection: 'column',
        paddingTop: 15
    },
    headerText: {
        fontWeight: 'bold',
        fontSize: 25,
        color: 'white'
    },
    text: {
        color: 'white',
        paddingHorizontal: 8,
        fontSize: 16
    },
    rowStyle: {
        paddingVertical: 20,
        paddingLeft: 16,
        borderTopColor: 'white',
        borderLeftColor: 'white',
        borderRightColor: 'white',
        borderBottomColor: '#E0E0E0',
        borderWidth: 1
    },
    rowText: {
        color: '#212121',
        fontSize: 16
    },
    
    
});