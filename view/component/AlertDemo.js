/**
 * Created by liaoye on 2016/8/4.
 * 对话框的使用
 */
import React,{Component} from 'react';
import {
    Text,
    View,
    ToastAndroid,
    StyleSheet,
    Alert,
} from 'react-native';
import CustomButton from './CustomButton';
import StyleUtil from '../util/StyleUtil';
import LeftButton from './LeftButton';
import StatusBars from './StatusBars';
import NavigationBar from 'react-native-navbar';

export default class AlertDemo extends Component{

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
                    弹出框示例
                </Text>
                <CustomButton text='点击弹出默认Alert'
                              onPress={()=>Alert.alert('温馨提醒','确定退出吗?')}
                />
                <CustomButton text='点击弹出两个按钮的Alert'
                              onPress={()=>Alert.alert('温馨提醒','确定退出吗?',[
                                  {text:'取消',onPress:()=>ToastAndroid.show('你点击了取消~',ToastAndroid.SHORT)},
                                  {text:'确定',onPress:()=>ToastAndroid.show('你点击了确定~',ToastAndroid.SHORT)}
                              ])}
                />
                <CustomButton text='点击弹出三个按钮的Alert'
                              onPress={()=>Alert.alert('温馨提醒','确定退出吗?',[
                                  {text:'One',onPress:()=>ToastAndroid.show('你点击了One~',ToastAndroid.SHORT)},
                                  {text:'Two',onPress:()=>ToastAndroid.show('你点击了Two~',ToastAndroid.SHORT)},
                                  {text:'Three',onPress:()=>ToastAndroid.show('你点击了Three~',ToastAndroid.SHORT)}
                              ])}
                />
            </View>
        );

    }
}

