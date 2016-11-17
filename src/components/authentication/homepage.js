import React, { Component, } from 'react';
import GridView from "react-native-easy-grid-view";
var React1 = require('react-native');
var {
    View,
    ScrollView,
    Text,
    Image,
    TouchableHighlight,
    StyleSheet,
    ToolbarAndroid,
    DrawerLayoutAndroid,
    ListView,
    TouchableOpacity,
    
} = React1;

var Button = require('../common/button');
var ToolBar = require('../authentication/ToolBar');
var DrawerView = require('../common/DrawerView');


module.exports = React.createClass({
    getInitialState: function () {
        var getSectionData = (dataBlob, sectionID) => {
            return dataBlob[sectionID];
        }

        return {
            loaded : false,
            dataSource : new GridView.DataSource({
                getSectionData          : getSectionData,
                rowHasChanged           : (r1, r2) => r1 !== r2
            }),
        }
    },
    componentDidMount: function () {
      // this.fetchData();
      this.setState({
        dataSource : this.state.dataSource.cloneWithCells([
                {
                    text: 1,
                    backgroundColor:'#f00'
                }
                , {
                    text: 2,
                    backgroundColor:'#0f0'

                }, {
                    text: 3,
                    backgroundColor:'#00f'

                }, {
                    text: 4,
                    backgroundColor:'#f0f'

                }, {
                    text: 5,
                    backgroundColor:'#fff'

                }, {
                    text: 6,
                    backgroundColor:'#000'

                }], 2),
            cellWidth: 110,
            cellHeight: 110
      });
    },

    // fetchData: function () {
    //     var API_URL = 'http://imageinterior-merged.rhcloud.com/ImageInterior/rest/getDayProducts';
    //     fetch(API_URL).then((response) => response.json()).then((responseData) => {
    //         var organizations = responseData;
    //             //  length = organizations.length,
    //             //  dataBlob = [],
    //             //  name,
    //             //  body,
    //             //  j;

    //             // for (var i = 0; i < length ;  i++) {
    //             //     dataBlob[i] = organizations[i];
                 
    //             //  }

    //                 // this.setState({
    //                 //     dataSource : this.state.dataSource.cloneWithCells(organizations.image,3),
    //                 //     loaded     : true
    //                 // });
                
    //     }).done(); 
              
    // },

// 
    renderRow: function(rowData) {
        return (
    
        <View >
          <View style={styles.row}>
            <Image
                style={styles.thumb}
                source={{uri: 'https://facebook.github.io/react/img/logo_og.png'}}/>
          </View>
        </View>
    
                     
                
        ); /////
                       
    },

    render: function() {
        // const Header = () => (
        //     //alert(this.props.data3);
        //      //<ToolBar />  
        // )

         const Main = () => (
             <ScrollView>
                <GridView 
                    dataSource = {this.state.dataSource}
                    spacing={1}
                    style={{padding:5}}
                    renderCell  = {this.renderRow}  

                    />
            </ScrollView>
         )
        return (

            <View style={styles.container}>
            <DrawerLayoutAndroid
                  drawerWidth={300}
                  drawerLockMode = {'unlocked'}
                  drawerPosition={DrawerLayoutAndroid.positions.Right}
                  renderNavigationView={() => this.NavigationView() }
                  onDrawerOpen = {this.onOpen}
                  ref={'DRAWER_REF'}>
            
                <ToolBar onPress = {this.onToolPress}/> 
                
                <Main/>  

                <View>
                    <Button text={'Back To AlbumPosts...'} onPress = {this.onPopPress}/> 
                </View>
            </DrawerLayoutAndroid>
            </View>
    
        );
      ///
    },
    NavigationView: function(){
       return (<DrawerView text = {'ahmed'}/>);
    },///
    onPress: function() {
        //alert("bla la bla");
       
  
    },


    onOpen: function(){
        //alert('bla la bla')
    },

    onToolPress: function(){
        this.refs['DRAWER_REF'].openDrawer();
    },

    onPopPress: function() {
    
        this.props.navigator.pop();

    },

});

var styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    row: {
    justifyContent: 'center',
    padding: 5,
    margin: 10,
    width: 100,
    height: 100,
    backgroundColor: '#F6F6F6',
    alignItems: 'center',
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#CCC'
  },

  section: { 
        backgroundColor: '#2196F3',
    },
    thumb: {
    width: 100,
    height: 100,
    padding:5,
    alignItems: 'center'
  },
    header: {
        height: 50,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'black',
        flexDirection: 'column',
        paddingTop: 15
    },

    text: {
        color: 'white',
        paddingHorizontal: 8,
        fontSize: 16
    },
    
    
});