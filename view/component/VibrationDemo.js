/**
 * Created by liaoye on 2016/8/16.
 * 学习使用Vibration api 用于屏幕的震动
 */
import React,{Component} from 'react';
import {
    Vibration,
    View,
    Text
} from 'react-native';
import CustomButton from './CustomButton';
import StyleUtil from '../util/StyleUtil';
import LeftButton from './LeftButton';
import StatusBars from './StatusBars';
import NavigationBar from 'react-native-navbar';

export default class VibrationDemo extends Component{
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
                    ToolbarAndroid示例
                </Text>
                <CustomButton
                    text="点击设备震动"
                    onPress={()=>Vibration.vibrate()}/>
            </View>
        );
    }
}