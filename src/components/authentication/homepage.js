import React, { Component } from 'react';
import {AppRegistry,
    StyleSheet,
    Text,
    View,
    ListView,
    TouchableOpacity,
    AlertIndicator,
    DrawerLayoutAndroid,
    ActivityIndicator,
    TouchableHighlight,
    ToolbarAndroid,
    Alert,
    Image} from 'react-native';
import DrawerLayout from 'react-native-drawer-layout';

//var DrawerLayoutAndroid = require('react-native-drawer-layout');
//var React1 = require('react-native');

const DropDown = require('react-native-dropdown');
const {
  Select,
  Option,
  OptionList,
  updatePosition
} = DropDown;

// var { 
  
// } = React1;



var Button = require('../common/button');
var DrawerView = require('../common/DrawerView');
//var Details = require('../authentication/details');
var ToolBar = require('../authentication/ToolBar');

var test =-1;
var rows = [];

module.exports = React.createClass({ 

    getInitialState: function () {
        var getSectionData = (dataBlob, sectionID) => {
            return dataBlob[sectionID];
        }

        var getNameView = (data, index) =>
        {
            return data[index];
        }
        this.state = {
            canada: ''
        };

        return {
            loaded : false,
            dataSource : new ListView.DataSource({
                getSectionData          : getSectionData,
                rowHasChanged           : (r1, r2) => r1 !== r2
            }),
            nameView: getNameView
        }
    },
    componentDidMount: function () {
        updatePosition(this.refs['SELECT1']);
        updatePosition(this.refs['OPTIONLIST']);
        this.fetchData();
    },
    _getOptionList() {
    return this.refs['OPTIONLIST'];
  },
  _canada(province) {

    this.setState({
      ...this.state,
      canada: province
    });
  },
    
    fetchData: function () {
        //rowApi = rowApi +10; 
        //alert(this.props.data[1]);
        var API_URL = 'http://imageinterior-merged.rhcloud.com/ImageInterior/rest/getDayProducts';
        fetch(API_URL, {  
              method: 'POST',
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
              },}).then((response) => response.json()).then((responseData) => {
            var organizations = responseData.products,

                length = organizations.length,
                dataBlob = [],
                //sectionIDs = [],
                // title,
                // introtext_without_html_tags,
                url,
                apiAll,
                j;

                for (var i = 0; i < length ;  i++) {
                    //sectionIDs[i] = organizations[i].userId;
                    //rows[i] = organizations[i].userId;
                    dataBlob[i] = organizations[i];
                 
                 }

                 //this.Show(rows);
                    this.setState({
                        dataSource : this.state.dataSource.cloneWithRows(dataBlob),
                        loaded     : true
                    });
                
                //alert(dataBlob[organizations[0].id]);
        }).done(); 
              
    },

    renderLoadingView: function () {
        return (
            <View style={styles.header}>
                <Text style={styles.headerText}>NEWSAPP</Text>
                <View style={styles.container}>
                    <ActivityIndicator
                        animating={!this.state.loaded}
                        style={[styles.activityIndicator, {height: 80}]}
                        size="large"
                    />
                </View>
            </View>
        );
    },
    
    onActionSelected: function() {
       this.refs['DRAWER_REF'].openDrawer();
  
    },

    renderListView: function () {
       
        const Header = () => (
            
            <ToolBar onPress = {() => this.onActionSelected()}/>    
           
        )
        return (
            <DrawerLayoutAndroid
                  drawerWidth={300}
                  drawerLockMode = {'unlocked'}
                  drawerPosition={DrawerLayoutAndroid.positions.Right}
                  renderNavigationView={() => this.NavigationView(this.props.data1, this.props.data2) }
                  onDrawerOpen = {this.onOpen}
                  ref={'DRAWER_REF'}>


            <View style={styles.container}>
                 <Header/>
                 <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
                      <Select
                        width={250}
                        ref="SELECT1"
                        optionListRef={this._getOptionList.bind(this)}
                        defaultValue="Select a Province in Canada ..."
                        onSelect={this._canada.bind(this)}>
                        <Option>Alberta</Option>
                        <Option>British Columbia</Option>
                        <Option>Manitoba</Option>
                        <Option>New Brunswick</Option>
                        <Option>Newfoundland and Labrador</Option>
                        <Option>Northwest Territories</Option>
                        <Option>Nova Scotia</Option>
                        <Option>Nunavut</Option>
                        <Option>Ontario</Option>
                        <Option>Prince Edward Island</Option>
                        <Option>Quebec</Option>
                        <Option>Saskatchewan</Option>
                        <Option>Yukon</Option>
                      </Select>

                      <Text>Selected provicne of Canada: {this.state.canada}</Text>

                      <OptionList ref="OPTIONLIST"/>
                  </View>
                <ListView
                    dataSource = {this.state.dataSource}
                    style      = {styles.listview}
                    renderRow  = {this.renderRow}              
                />
                
            </View>
            </DrawerLayoutAndroid>
        );///
    },

    NavigationView: function(myName, myId){
       return (<DrawerView text={'Welcome ' + myName} Name={myName} id={myId} navigator={this.props.navigator}/>);
    },///

    onOpen: function(){
        //alert('bla la bla')
    },

    
    
    renderRow: function(rowData) {
        test +=1;
        //var names = this.state.nameView[test];
       //   alert(names); 
        return (
            
                    <View style = {styles.rowContainer1}>
                        <View style={styles.section}>
                            <Text >{rowData.catName}</Text>
                        </View>
                        
                        <Text  style={styles.textContainer}>{rowData.name}</Text>
                        <Button text={'Details'} onPress = {() => this.onSignPress(names, rowData.title, rowData.body, rowData.id, this.props.data1, this.props.data2)}/>
                        <Text style = {styles.rowLine}>{ '_____________________________________________'} </Text>
                     </View>
                
        ); /////
                       
    },

    onSignPress: function(rowData,rowData1,rowData2,rowData3,myName,myId) {
        this.props.navigator.push({
            component: 'details',
            data: rowData,
            data1: rowData1,
            data2: rowData2,
            data3: rowData3,
            data4: myName,
            data5: myId
        }); 
        

    },


    render: function() {

        if (!this.state.loaded) {
            return this.renderLoadingView();
        }

        else {
        return this.renderListView();
        }
    },

    
});



var styles = StyleSheet.create({
    container: {
        flex: 1
    },
    rowLine:{
        padding: 2,
        alignSelf:'center'   
    },
     rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 8
  },
  rowContainer1: {
    flexDirection: 'column',
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
    alignSelf: 'flex-start'
  },
  textContainer1: {
    flex: 1,
    alignItems: 'center',
    padding:5,
    flexDirection: 'column',
    justifyContent: 'space-between'
  },
    activityIndicator: {
        alignItems: 'center',
        justifyContent: 'center',
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
    subText: {
        fontSize: 14,
        color: '#757575'
    },
    section: {
        padding: 5, 
        backgroundColor: '#2196F3',
        alignSelf: 'flex-start',
    },
});
