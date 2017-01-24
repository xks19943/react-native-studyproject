/**
 * Created by liaoye on 2016/10/21.
 */

import React,{Component} from 'react';
import {
    Text,
    View,
    StyleSheet,
    TouchableOpacity,
    DeviceEventEmitter,
    Alert
} from 'react-native';

import CustomButton from './CustomButton';
import StyleUtil from '../util/StyleUtil';
import LeftButton from './LeftButton';
import StatusBars from './StatusBars';
import NavigationBar from 'react-native-navbar';

export default class DeviceEventEmitterDemo extends Component{

    back(){
        this.props.navigator&& this.props.navigator.pop();
    }

    //这里发送事件(数据)
    registEvent(){
        DeviceEventEmitter.emit('sendEvent','好好学习,天天向上!');
    }

    //这里接收事件(数据) 从而实现跨组件之间的数据传递 类似于Android下的EventBus
    receiveEvent(){
        DeviceEventEmitter.addListener('sendEvent',function (data) {
            Alert.alert(data);
        })
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
                    DeviceEventEmitter发送或者接收事件
                </Text>
                <CustomButton text={'创建事件的监听'} onPress={this.receiveEvent.bind(this)}/>
                <CustomButton text={'发送事件'} onPress={this.registEvent.bind(this)}/>
            </View>
        )
    }
}