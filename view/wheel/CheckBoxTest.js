/**
 * Created by liaoye on 2016/8/4.
 */

import React,{Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    DatePickerAndroid,
    TouchableOpacity,
} from 'react-native';

import CheckBox from 'react-native-checkbox';
import NavigationBar from 'react-native-navbar';

export default class CheckBoxTest extends Component{
    constructor(props){
        super(props);
        this.state={
            check1:true,
            check2:false,
            check3:true,};
    }
    render(){
        return(
            <View>
                <Text style={{margin:10, fontSize:20}}>复选框的学习(react-native-checkbox)</Text>
                <CheckBox
                    label={'复选框1'}
                    labelStyle={{fontSize:20}}
                    checked={this.state.check1}
                    onChange={(checked)=>this.setState({check1:checked})}
                    uncheckedImage={require('./../../images/choice2.png')}
                    checkedImage={require('./../../images/choice1.png')}
                    checkboxStyle={{width:30, height:30}}/>
                <CheckBox
                    label={'复选框2'}
                    labelStyle={{fontSize:20}}
                    checked={this.state.check2}
                    onChange={(checked)=>this.setState({check2:checked})}
                    uncheckedImage={require('./../../images/choice2.png')}
                    checkedImage={require('./../../images/choice1.png')}
                    checkboxStyle={{width:30, height:30}}/>
                <CheckBox
                    label={'复选框3'}
                    labelStyle={{fontSize:20}}
                    checked={this.state.check3}
                    onChange={(checked)=>this.setState({check3:checked})}
                    uncheckedImage={require('./../../images/choice2.png')}
                    checkedImage={require('./../../images/choice1.png')}
                    checkboxStyle={{width:30, height:30}}/>
            </View>
        );
    }
}
