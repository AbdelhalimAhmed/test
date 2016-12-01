import React, { Component, } from 'react';
import { KeyboardAwareScrollView } from 'react-native-keyboard-aware-scroll-view';
import Icon from 'react-native-vector-icons/FontAwesome';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

var React1 = require('react-native');
var t = require('tcomb-form-native');
var t = require('tcomb-form-native/lib');
var templates = require('tcomb-form-native/lib/templates/bootstrap');
// override globally the default stylesheet
t.form.Form.stylesheet = stylesheet;
// set defaults
t.form.Form.templates = templates;
t.form.Form.i18n = i18n;
var i18n = require('tcomb-form-native/lib/i18n/en');
var LABEL_COLOR = '#000000';
var INPUT_COLOR = '#000000';
var ERROR_COLOR = '#a94442';
var HELP_COLOR = '#999999';
var BORDER_COLOR = '#cccccc';
var DISABLED_COLOR = '#777777';
var DISABLED_BACKGROUND_COLOR = '#eeeeee';
var FONT_SIZE = 12;
var FONT_WEIGHT = '500';
var {
    View,
    Text,
    StyleSheet,
    TextInput,
    TouchableHighlight
} = React1;

// define a stylesheet (see lib/stylesheets/bootstrap for an example)
var stylesheet  = Object.freeze({
   fieldset: {},
  // the style applied to the container of all inputs
  formGroup: {
    normal: {
      marginBottom: 10
    },
    error: {
      marginBottom: 10
    }
  },
  controlLabel: {
    normal: {
      color: LABEL_COLOR,
      fontSize: FONT_SIZE,
      marginBottom: 7,
      fontWeight: FONT_WEIGHT
    },
    // the style applied when a validation error occours
    error: {
      color: ERROR_COLOR,
      fontSize: FONT_SIZE,
      marginBottom: 7,
      fontWeight: FONT_WEIGHT
    }
  },
  helpBlock: {
    normal: {
      color: HELP_COLOR,
      fontSize: FONT_SIZE,
      marginBottom: 2
    },
    // the style applied when a validation error occours
    error: {
      color: HELP_COLOR,
      fontSize: FONT_SIZE,
      marginBottom: 2
    }
  },
  errorBlock: {
    fontSize: FONT_SIZE,
    marginBottom: 2,
    color: ERROR_COLOR
  },
  textbox: {
    normal: {
      color: INPUT_COLOR,
      fontSize: FONT_SIZE,
      height: 36,
      padding: 7,
      width: 300,
      borderRadius: 4,
      borderColor: '#48BBEC',
      borderWidth: 1,
      marginBottom: 5
    },
    // the style applied when a validation error occours
    error: {
      color: INPUT_COLOR,
      fontSize: FONT_SIZE,
      height: 36,
      padding: 7,
      borderRadius: 4,
      width: 300,
      borderColor: ERROR_COLOR,
      borderWidth: 1,
      marginBottom: 5
    },
    // the style applied when the textbox is not editable
    notEditable: {
      fontSize: FONT_SIZE,
      height: 36,
      padding: 7,
      borderRadius: 4,
      borderColor: BORDER_COLOR,
      borderWidth: 1,
      width: 300,
      marginBottom: 5,
      color: DISABLED_COLOR,
      backgroundColor: DISABLED_BACKGROUND_COLOR
    }
  },
  checkbox: {
    normal: {
      marginBottom: 4
    },
    // the style applied when a validation error occours
    error: {
      marginBottom: 4
    }
  },
  select: {
    normal: {
      marginBottom: 4
    },
    // the style applied when a validation error occours
    error: {
      marginBottom: 4
    }
  },
  pickerTouchable: {
    normal: {
      height: 44,
      flexDirection: 'row',
      alignItems: 'center'
    },
    error: {
      height: 44,
      flexDirection: 'row',
      alignItems: 'center'
    }
  },
  pickerValue: {
    normal: {
      fontSize: FONT_SIZE,
      paddingLeft: 7
    },
    error: {
      fontSize: FONT_SIZE,
      paddingLeft: 7
    }
  },
  datepicker: {
    normal: {
      marginBottom: 4
    },
    // the style applied when a validation error occours
    error: {
      marginBottom: 4
    }
  },
  dateTouchable: {
    normal: {},
    error: {}
  },
  dateValue: {
    normal: {
      color: INPUT_COLOR,
      fontSize: FONT_SIZE,
      padding: 7,
      marginBottom: 5
    },
    error: {
      color: ERROR_COLOR,
      fontSize: FONT_SIZE,
      padding: 7,
      marginBottom: 5
    }
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
}
});



var Form = t.form.Form;
var Button = require('../common/button');
//var Email = t.refinement(t.String, function (n) { return n == "halim0"; });

// if you define a getValidationErrorMessage function, it will be called on validation errors
// Email.getValidationErrorMessage = function (value, path, context) {
//   return 'Email already exist ' + context.locale;
// };

var Person = t.struct({
  name: t.String,              // a required string
  username: t.String, 
  nickname: t.maybe(t.String),// an optional string
  email:t.String,
  password: t.String,
  phone: t.Number,               // a required number
  location: t.String,        // a boolean
  website: t.maybe(t.String),// an optional string
  //age: Age
  
});

var options = {
    fields: {
    name: {
      //label: 'My name label' // <= label for the name field
        //placeholder: 'Your placeholder here'
        error: 'Insert a your Name',
        stylesheet: stylesheet
    },
    password: {
      //label: 'My name label' // <= label for the name field
        //placeholder: 'Your placeholder here'
        error: 'Insert a your password',
        stylesheet: stylesheet
    },
    username: {
      //label: 'My name label' // <= label for the name field
        //placeholder: 'Your placeholder here'
        stylesheet: stylesheet,
        error: 'Insert a your User Name'
    },
    nickname: {
      //label: 'My name label' // <= label for the name field
        //placeholder: 'Your placeholder here'
        stylesheet: stylesheet
    },email: {
      //label: 'My name label' // <= label for the name field
        //placeholder: 'Your placeholder here'
        error: 'Insert a valid email',
        stylesheet: stylesheet
    },phone: {
      //label: 'My name label' // <= label for the name field
        //placeholder: 'Your placeholder here'
        error: 'Insert a valid phone',
        stylesheet: stylesheet
    },location: {
      //label: 'My name label' // <= label for the name field
        //placeholder: 'Your placeholder here'
        error: 'Insert a your location',
        stylesheet: stylesheet
    },website: {
      //label: 'My name label' // <= label for the name field
        //placeholder: 'Your placeholder here'
        stylesheet: stylesheet
    }
  }
  //auto: 'placeholders'
}; // optional rendering options (see documentation)

module.exports = React.createClass({
    getInitialState: function() {
      this.state = {
                userId:''
            }
        return {
            username:'',
            password:'',
            passwordConfirmation:'',
            errorMassage:''

        }
    },
    onPress: function () {
    // call getValue() to get the values of the form
    var value = this.refs.form.getValue();
    if (value) {
    fetch('http://imageinterior-merged.rhcloud.com/ImageInterior/rest/signup?email='+value.email+'&pass='+value.password
        +'&uname='+value.username+'&nickname='+value.nickname+'&website='+value.website+'&phone='+value.phone
        +'&location='+value.location, {  
              method: 'POST',
              headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
              },
            }).then((response) => response.json())
                .then((responseData) => {
                    organizations = responseData;

                    if(organizations.state == 'false'){
                    alert('already exist');

                    }else{
                        alert('add successfully');
                        this.setState({userId:organizations.id});
                        this.props.navigator.push({
                        component: 'homepage',
                          data: this.state.userId,
                          data1:'success'
                        });
                    }

                }).done();
    // if (value) { // if validation fails, value will be null
    //   alert(value.name); // value here is an instance of Person
    //   this.clearForm();
     }
  },

  onChange(value) {
    this.setState({ value });
  },

  clearForm() {
    // clear content from all textbox
    this.setState({ value: null });
  },
  onClosePress:function(){
       this.props.navigator.pop();
    },
    render: function() {
        const Header = () => (
            <MaterialIcons name='close' size={30} color="gray" onPress = {this.onClosePress}/>      
           )///
        return (
            <KeyboardAwareScrollView ref='scroll'>
            <View style = {styles.container11}>
            <Header/>
                <View style={styles.container}>
                {/* display */}
                <Form
                  ref="form"
                  type={Person}
                  options={options}
                  value={this.state.value}
                  context={{locale: 'it-IT'}}
                />
                <TouchableHighlight style={styles.button} onPress={this.onPress} underlayColor='#99d9f4'>
                  <Text style={styles.buttonText}>Save</Text>
                </TouchableHighlight>
             </View>
             </View>
            </KeyboardAwareScrollView>

        );///
    },
    _scrollToInput (reactNode: any) {
      // Add a 'scroll' ref to your ScrollView
      this.refs.scroll.scrollToFocusedInput(reactNode)
    },

    onSignUpPress: function() {
        if(this.state.password !== this.state.passwordConfirmation){
            return this.setState({errorMassage: 'your passwords do not match'});
        }
        else{
            return this.setState({errorMassage: ''});
        }
    },

    onSigninPress: function() {
        this.props.navigator.pop(); 
    }

});

var styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: 15,
        
    },
    container11: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'flex-end',
        flexDirection:'column',
        margin: 15,
        

    },
    container1: {
        flex: 1,
        justifyContent: 'flex-start',
        alignItems: 'center',
        backgroundColor: 'white',
        flexDirection:'row'
    },
    input:{
    	padding: 8,
    	height: 30,
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
    label1: {
        fontSize: 12,
        textDecorationLine: "underline",
        textDecorationColor: "red"
    },
    title: {
    fontSize: 30,
    alignSelf: 'center',
    marginBottom: 30
  },
  buttonText: {
    fontSize: 18,
    color: 'white',
    alignSelf: 'center'
  },
  button: {
    height: 36,
    backgroundColor: '#48BBEC',
    borderColor: '#48BBEC',
    borderWidth: 1,
    borderRadius: 8,
    marginBottom: 10,
    alignSelf: 'stretch',
    justifyContent: 'center'
  },
   
});
