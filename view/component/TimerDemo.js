/**
 * Created by liaoye on 2016/8/19.
 * 学习Timer 定时器
 */


import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
} from 'react-native';
import timerMixin from 'react-native-timer-mixin';
import CustomButton from './CustomButton';
import StyleUtil from '../util/StyleUtil';
import LeftButton from './LeftButton';
import StatusBars from './StatusBars';
import NavigationBar from 'react-native-navbar';


export  default  class TimerDemo extends Component {
    constructor(props) {
        super(props);
        this.state={
            content:'',
            count:'',
            sending:'',
        }
    }

    back(){
        this.props.navigator&& this.props.navigator.pop();
    }

    componentDidMount() {
        //时间结束后调用这个方法
        this.timer = setTimeout(
            () => {
                this.setState({content:'我是定时器打印的内容...One'})
            },
            5000
        );
        this.timer_two = setTimeout(
            () => {
                this.setState({msg:'我是定时器打印的内容...Two'})
            },
            10000
        );
    }
    componentWillUnmount() {
        this.timer && clearTimeout(this.timer);
        this.timer_two && clearTimeout(this.timer_two);
    }

    sendMessage(){
        if(this.state.sending){
            return;
        }

        this.setState({
            sending: true,
            count: 60,
        });
        let weakthis = this;
        var clearId = timerMixin.setInterval(function () {
            if (weakthis.state.count > 0) {
                weakthis.setState({
                    count: weakthis.state.count - 1,
                });
            }
            else {
                weakthis.setState({
                    sending: false,
                });
                this.clearInterval(clearId);
            }
        }, 1000);
    }

    render() {
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
                    定时器示例
                </Text>
                <Text>{this.state.content}</Text>
                <Text>{this.state.msg}</Text>
                <CustomButton
                    text={this.state.sending ? this.state.count+' 秒 ':'获取验证码'}
                    onPress={this.sendMessage.bind(this)}/>
            </View>
        );
    }

}