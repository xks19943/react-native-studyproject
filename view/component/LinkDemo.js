/**
 * Created by liaoye on 2016/8/26.
 *学习Linking api的用法
 */

import React,{Component} from 'react';
import {
    Text,
    View,
    Linking,
    ToastAndroid
} from 'react-native';

import CustomButton from './CustomButton';
import StyleUtil from '../util/StyleUtil';
import LeftButton from './LeftButton';
import StatusBars from './StatusBars';
import NavigationBar from 'react-native-navbar';


export default class LinkDemo extends Component{

    openLink(url){
        Linking.canOpenURL(url).then(supported=>{
            if(supported){
                Linking.openURL(url);
            }else{
                ToastAndroid.show("不能打开连接"+url,ToastAndroid.LONG);
            }
        })
    }

    componentDidMount() {
        var url = Linking.getInitialURL().then((url) => {
            if (url) {
                console.log('捕捉的URL地址为: ' + url);
            }
        }).catch(err => console.error('错误信息为:', err));
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
                    外部链接示例
                </Text>
                <CustomButton text={'打开http连接'}
                              onPress={this.openLink.bind(this,('http://www.lcode.org'))}/>
                <CustomButton text={'打开https连接'}
                              onPress={this.openLink.bind(this,('https://www.baidu.com'))}/>
                <CustomButton text={'发送短信'}
                              onPress={this.openLink.bind(this,('smsto:10086'))}/>
                <CustomButton text={'拨打电话'}
                              onPress={this.openLink.bind(this,('tel:10086'))}/>
                <CustomButton text={'发送邮件'}
                              onPress={this.openLink.bind(this,('mailto:1185078115@qq.com'))}/>
            </View>
        );
    }
}