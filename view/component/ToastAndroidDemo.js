/**
 * Created by liaoye on 2016/8/4.
 * 关于toast的学习Demo
 */
import React,{Component} from 'react';
import {
    View,
    AppRegistry,
    Text,
    ToastAndroid,
} from 'react-native';
import CustomButton from './CustomButton';
import StyleUtil from '../util/StyleUtil';
import LeftButton from './LeftButton';
import StatusBars from './StatusBars';
import NavigationBar from 'react-native-navbar';

export default class ToastAndroidDemo extends Component{
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
                    ToastAndroid示例
                </Text>
                <Text>
                    点击弹出短时间的toast
                </Text>
                <CustomButton text="点击弹出短时间toast"
                              onPress={()=>ToastAndroid.show('点击我好疼,短时间的~',ToastAndroid.SHORT)}/>
                <Text>
                    点击弹出长时间的toast
                </Text>
                <CustomButton text="点击弹出长时间toast"
                              onPress={()=>ToastAndroid.show('点击我好疼,长时间的~',ToastAndroid.LONG)}/>
            </View>
        );
    }
}

