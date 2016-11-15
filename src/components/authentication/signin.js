import React, { Component, } from 'react';
//import DrawerLayout from 'react-native-drawer-layout';
import AwesomeButton from 'react-native-awesome-button';

//var DrawerLayoutAndroid = require('react-native-drawer-layout');
var React1 = require('react-native');
var {
    View,
    Text,
    StyleSheet,
    TextInput,
    ToolbarAndroid,
    TouchableHighlight
} = React1;

var Button = require('../common/button'),
    user,
    ids;

    var organizations ;
    var namesIds = [];
    
module.exports = React.createClass({
    

	getInitialState: function() {
        var getNameIds = (data, row,colum) =>
        {
            return data[row][colum];
        }
        this.state = {
                buttonState: 'idle',
                check :'',
            }
        //this.logIn = this.logIn.bind(this)
		return{
			username1: '',
			password: '',
            errorMassage:'',
            check :'',
            users:'',
            nameIds: getNameIds
		};
	},
    
    logIn:function() {
        this.setState({ buttonState: 'busy' })
        this.onLoginPress(this.state.username1,this.state.password)
        //this.setState({ buttonState: 'busy' })
        // setTimeout(() => {
        //   this.setState({ buttonState: 'success' })
        // }, 2000);
        // setTimeout(() => {this.onLoginPress(this.state.username1,this.state.password)},100);
    },
  
    render: function() {
        return (  

                <View style = {styles.container}>
                <View style = {styles.container}>
                    <Text>  Sign In </Text>
                    <Text style = {styles.label}>Username:</Text>
                    <TextInput 
                        style = {styles.input}
                        value = {this.state.username1}
                        onChangeText={(text) => this.setState({username1: text})}
                    />
                    
                    <Text style = {styles.label}>Password:</Text>
                    <TextInput 
                    secureTextEntry = {true} 
                    style = {styles.input}
                    value1 = {this.state.password}
                    onChangeText={(text) => this.setState({password: text})}
                    />
                    <Text style={styles.labelerror}>{this.state.errorMassage}</Text>
                    <View style = {styles.container1}>
                    <AwesomeButton  backgroundStyle={styles.loginButtonBackground}
                        labelStyle={styles.loginButtonLabel}
                        transitionDuration={200}
                        states={{
                          idle: {
                            text: 'Log In',
                            onPress: this.logIn,
                            backgroundColor: '#1155DD',
                          },
                          busy: {
                            text: 'Logging In',
                            backgroundColor: '#002299',
                            spinner: true,
                          },
                          success: {
                            text: 'Logged In',
                            onPress: this.logIn,
                            backgroundColor: '#339944'
                          },
                          wrong: {
                            text: 'Log In',
                            onPress: this.logIn,
                            backgroundColor: '#000000'
                          }
                        }}
                        buttonState={this.state.buttonState}
                        />
                    </View>
                     <TouchableHighlight onPress={this.onLoginPress}>
                            <Text style={styles.label1}>I don't have an account...</Text>
                    </TouchableHighlight>
                    </View>
                    </View>
                
                  
                
            
            
        );
        //<Button text={'Sign In'} onPress = { () => this.onLoginPress(this.state.username1,this.state.password)}/>
                    //sdasd<Button text={'Sign In'} onPress = { () => {this.onLoginPress(this.state.username1,this.state.password),this.onDataPress(this.state.username1)}}/>            
    },


    onLoginPress: function(value,value1) {
        // var API_URL = 'http://jsonplaceholder.typicode.com/users?username='+value+'&id='+value1;
        // //check = 0;
        // fetch(API_URL).then((response) => response.json()).then((responseData) => {
        //     organizations = responseData;

        fetch('http://imageinterior-merged.rhcloud.com/ImageInterior/rest/login?email='+value+'&pass='+value1, {  
              method: 'POST',
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
              },
            }).then((response) => response.json())
                .then((responseData) => {
                    organizations = responseData;

                    //alert(organizations.state);
                    if(organizations.state == 'false'){
                    this.setState({check:'0',buttonState: 'wrong'});
                    //this.onCheck (this.state.check,organizations[0].name,organizations[0].id);
                    //alert(this.state.check);
                    //this.setState({ buttonState: 'wrong' });
                    this.onCheck ('0');
                }else{
                    this.setState({check:'1',buttonState: 'success',errorMassage:'' });
                    //alert(this.state.check);
                    //this.setState({ buttonState: 'success' });
                    this.onCheck ('1');
                }

                }).done();
                                
                

        // }).done();


    },

    onCheck : function(lol){ 
        //alert(lol);
    	if(lol == '1'){
            //alert("bs");
            // //alert(this.state.nameIds[4]);
            // var API_URL1 = 'http://jsonplaceholder.typicode.com/users';
            // fetch(API_URL1).then((response) => response.json()).then((responseData) => {
            //     var organizations1 = responseData,
            //     //alert(organizations1[1].name);
            //     length = organizations1.length;
                
            //     for (var s = 0; s < length; s++){
            //         namesIds[s] = new Array(2);
            //     }

            //     for (var j = 0; j < length; j++) {
            //         namesIds[j][0] = organizations1[j].name;
            //     }

            //     for (var j = 0; j < length; j++) {
            //         namesIds[j][1] = organizations1[j].id;
            //     }
            this.setState({ buttonState: 'idle',errorMassage:'' })
            this.props.navigator.push({
                    component: 'homepage',
                    
            });
            // }).done();
            
        }else{
            return this.setState({errorMassage: 'UserName or Password is Not valid Try Again.'});
            //this.setState({ buttonState: 'busy' })
        }
        },

});

var styles = StyleSheet.create({
    container1: {
        //flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection:'row',
        margin: 20,
        

    },
    container: {
    flex: 1,
    //flexDirection: 'column',
    margin: 20,
    alignItems: 'center',
    justifyContent: 'center'
  },
  loginButtonBackground: {
    flex: 1,
    height: 40,
    borderRadius: 5
  },
  loginButtonLabel: {
    color: 'white'
  },
    input:{
    	padding: 2,
    	height: 40,
    	borderColor: 'gray',
    	borderWidth: 1,
    	borderRadius: 5,
    	margin: 5,
    	width: 200,
    	alignSelf:'center'
    },
    label: {
    	fontSize: 18,
    	marginTop: 8
    },
    labelerror: {
        fontSize: 18,
        marginTop: 8,
        alignSelf:'center',
        justifyContent: 'center',
        alignItems: 'center',
    },
    header: {
        height: 50,
        alignItems: 'flex-end',
        backgroundColor: 'black',
        flexDirection: 'column',
        paddingTop: 15
    },
    label1: {
        fontSize: 12,
        textDecorationLine: "underline",
        textDecorationColor: "red"
    }
});