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
    ScrollView,
    Alert,
    Image} from 'react-native';
import DrawerLayout from 'react-native-drawer-layout';
import Menu, {
  MenuContext,
  MenuOptions,
  MenuOption,
  MenuTrigger
} from 'react-native-menu';

var Button = require('../common/button');
var DrawerView = require('../common/DrawerView');
//var Details = require('../authentication/details');
var ToolBar = require('../authentication/ToolBar');
var DrawerViewin = require('../common/DrawerViewin');

var test =-1;
var rows = [];

module.exports = React.createClass({ 

    getInitialState: function () {
        var getSectionData = (dataBlob, sectionID) => {
            return dataBlob[sectionID];
        }

        this.state = {
                
            }

        var getNameView = (data, index) =>
        {
            return data[index];
        }
    
        return {
            loaded : false,
            dropdownSelection: '-- Choose --',
            dataSource : new ListView.DataSource({
                getSectionData          : getSectionData,
                rowHasChanged           : (r1, r2) => r1 !== r2
            }),
            
        }
    },
    componentDidMount: function () {
       this.fetchData();
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

    fetchFilterData: function(value){
        this.setState({dropdownSelection: value});
        //
        var brandId;
        if (value == "brand 1"){
            brandId = "1";
        }
        if (value == "brand 2") {
            brandId = "2";
        }
        //alert(brandId)
        var API_URL1 = 'http://imageinterior-merged.rhcloud.com/ImageInterior/rest/filterProductsGroup?brands='+brandId;
        fetch(API_URL1, {  
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
                <Text style={styles.headerText}>Loading.....</Text>
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
    onDrawSelected: function(){
        this.refs['DRAWER_REF'].closeDrawer();
    },

    renderListView: function () {
       
        const Header = () => (
            
            <ToolBar onPress = {() => this.onActionSelected()}/> 
            
           
        )///
        return (
            <DrawerLayoutAndroid
                  drawerWidth={300}
                  drawerLockMode = {'unlocked'}
                  drawerPosition={DrawerLayoutAndroid.positions.Right}
                  renderNavigationView={() => this.NavigationView(this.props.data1, this.props.data2) }
                  onDrawerOpen = {this.onOpen}
                  ref={'DRAWER_REF'}>

                  <Header/>
                  <MenuContext style={{ flex: 1 }} ref="MenuContext">
                <View style={styles.content}>
                  <Text style={styles.contentText}>
                    Choose your brand ...
                  </Text>
                  <Menu style={styles.dropdown} onSelect={ (value) => this.fetchFilterData(value)}>
                    <MenuTrigger>
                      <Text>{this.state.dropdownSelection}</Text>
                    </MenuTrigger>
                    <MenuOptions optionsContainerStyle={styles.dropdownOptions}
                                 renderOptionsContainer={(options) => <ScrollView><Text>CHOOSE SOMETHING....</Text>{options}</ScrollView>}>
                      <MenuOption value="brand 1">
                        <Text>brand 1</Text>
                      </MenuOption>
                      <MenuOption value="brand 2">
                        <Text>brand 2</Text>
                      </MenuOption>
                    </MenuOptions>
                  </Menu>
                </View>
                <View style={styles.container}>
                 
                 
                <ListView
                    dataSource = {this.state.dataSource}
                    style      = {styles.listview}
                    renderRow  = {this.renderRow}              
                />
                
            </View>
        </MenuContext>   
            
            </DrawerLayoutAndroid>
        );///
    },

    NavigationView: function(){
        if(this.props.data1 == 'success'){
            // alert(this.props.data1)
            return (<DrawerViewin text={'Welcome '+ this.props.data} id={this.props.data} navigator={this.props.navigator} onPress = {() => this.onDrawSelected() }/>);
        }
        else{
            // alert('la2yaba')
            return (<DrawerView navigator={this.props.navigator} onPress = {() => this.onDrawSelected() }/>);
        }
       
    },///

    onOpen: function(){
        // //
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
                        <Button text={'Details'} onPress = {() => this.onDetailsPress(rowData.name, rowData.desc, rowData.price)}/>
                        <Text style = {styles.rowLine}>{ '_____________________________________________'} </Text>
                     </View>
                
        ); /////
                       
    },
    
    onDetailsPress: function(rowData,rowData1,rowData2) {
        
        this.props.navigator.push({
            component: 'details',
            data: rowData,
            data1: rowData1,
            data2: rowData2
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
        flex: 3
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
    header:{
        flex:1,
        backgroundColor: '#2196F3',
    },
    section: {
        padding: 5, 
        backgroundColor: '#2196F3',
        alignSelf: 'flex-start',
    },
    disabled: {
    color: '#ccc'
  },
  divider: {
    marginVertical: 5,
    marginHorizontal: 2,
    borderBottomWidth: 1,
    borderColor: '#ccc'
  },
  content: {
    backgroundColor: 'white',
    paddingHorizontal: 10,
    paddingTop: 20,
    paddingBottom: 30,
    borderBottomWidth: 1,
    borderColor: '#ccc'
  },
  contentText: {
    fontSize: 18
  },
  dropdown: {
    width: 300,
    borderColor: '#999',
    borderWidth: 1,
    padding: 5
  },
  dropdownOptions: {
    marginTop: 30,
    borderColor: '#ccc',
    borderWidth: 2,
    width: 300,
    height:100
}
});
