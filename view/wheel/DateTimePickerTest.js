/**
 * Created by liaoye on 2016/9/30.
 */
import React,{Component} from 'react';
import {
    View,
    Text,
} from 'react-native';

import DateTimePicker from 'react-native-datetime';
import NavigationBar from 'react-native-navbar';

import CustomButton from '../component/CustomButton';
import StyleUtil from '../util/StyleUtil';
import LeftButton from '../component/LeftButton';
import StatusBars from '../component/StatusBars';

export default class DateTimePickerTest extends Component{
    constructor(props){
        super(props);
        this.state={
            date:new Date(),
        }
        this.showDatePicker = this.showDatePicker.bind(this);
        this.showTimePicker = this.showTimePicker.bind(this);
        this.showDateTimePicker = this.showDateTimePicker.bind(this);
    }

    showDatePicker(){
        let date = this.state.date;
        this.picker.showDatePicker(date, (d)=>{
            this.setState({date:d});
        });
    }

    showTimePicker(){
        let date = this.state.date;
        this.picker.showTimePicker(date, (d)=>{
            this.setState({date:d});
        });
    }

    showDateTimePicker(){
        let date = this.state.date;
        this.picker.showDateTimePicker(date, (d)=>{
            this.setState({date:d});
        });
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
                <Text style={{height:40,color:'black',margin:10,fontSize:16,textAlign:'center'}}>
                    时间日期选择控件
                </Text>
                <CustomButton text={'选择日期'} onPress={this.showDatePicker}/>
                <CustomButton text={'选择时间'} onPress={this.showTimePicker}/>
                <CustomButton text={'选择日期和时间'} onPress={this.showDateTimePicker}/>
                <DateTimePicker ref={(picker)=>{this.picker=picker}}/>
            </View>
        );
    }


}