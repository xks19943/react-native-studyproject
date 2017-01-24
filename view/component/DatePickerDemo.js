/**
 * Created by liaoye on 2016/8/4.
 * 学习DatePickerAndroid的项目
 */
import React,{Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    DatePickerAndroid,
    TouchableOpacity,
} from 'react-native';

import CustomButton from './CustomButton';
import StyleUtil from '../util/StyleUtil';
import LeftButton from './LeftButton';
import StatusBars from './StatusBars';
import NavigationBar from 'react-native-navbar';

export default class DatePickerDemo extends Component{
    constructor(props){
        super(props);
        this.state={
            presetDate: new Date(2016, 3, 5),
            allDate: new Date(2020, 4, 5),
            simpleText: '选择日期,默认今天',
            minText: '选择日期,不能比今日再早',
            maxText: '选择日期,不能比今日再晚',
            presetText: '选择日期,指定2016/3/5',
        };
    }
    //进行创建时间日期选择器
    async showPicker(stateKey, options) {
        try {
            var newState = {};
            const {action, year, month, day} = await DatePickerAndroid.open(options);
            if (action === DatePickerAndroid.dismissedAction) {
                newState[stateKey + 'Text'] = 'dismissed';
            } else {
                var date = new Date(year, month, day);
                newState[stateKey + 'Text'] = date.toLocaleDateString();
                newState[stateKey + 'Date'] = date;
            }
            this.setState(newState);
        } catch ({code, message}) {
            console.warn(`Error in example '${stateKey}': `, message);
        }
    }

    back(){
        this.props.navigator&& this.props.navigator.pop();
    }

    render(){
        let NavTintColor = StyleUtil.getNavTintColor();
        let name = this.props.name;
        let titleConfig = {
            title: name,
            tintColor:'#ffffff',
        };
        return(
            <View>
                <StatusBars/>
                <NavigationBar
                    tintColor={NavTintColor}
                    title={titleConfig}
                    leftButton={<LeftButton onPress={this.back.bind(this)}/>}/>
                <Text style={{height:40,color:'black',margin:10, fontSize:16,textAlign:'center'}}>
                    android日期选择
                </Text>
                <CustomButton text={'点击弹出基本日期选择器'}
                              onPress={this.showPicker.bind(this, 'simple', {date: this.state.simpleDate})}/>
                <CustomButton text={this.state.presetText}
                              onPress={this.showPicker.bind(this, 'preset', {date: this.state.presetDate})}/>
                <CustomButton text={this.state.minText}
                              onPress={this.showPicker.bind(this, 'min', {
                                  date: this.state.minDate,
                                  minDate: new Date()
                              })}/>
                <CustomButton text={this.state.maxText}
                              onPress={this.showPicker.bind(this, 'max', {
                                  date: this.state.maxDate,
                                  maxDate: new Date()
                              })}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    button: {
        margin:5,
        backgroundColor: 'white',
        padding: 15,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#cdcdcd',
    }
});