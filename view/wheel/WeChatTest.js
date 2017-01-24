/**
 * Created by liaoye on 2016/10/20.
 */
import React,{Component} from 'react';
import {
    Text,
    View,
    ToastAndroid
} from 'react-native';

import NavigationBar from 'react-native-navbar';
import CustomButton from '../component/CustomButton';
import StyleUtil from '../util/StyleUtil';
import LeftButton from '../component/LeftButton';
import StatusBars from '../component/StatusBars';
import * as WeChat from 'react-native-wechat';

export default class WeChatTest extends Component {

    constructor(props) {
        super(props);
        WeChat.registerApp('wxd698bd44b65585c6');
    }

    back(){
        this.props.navigator&& this.props.navigator.pop();
    }

    //分享给朋友链接
    shareLink(){
        WeChat.isWXAppInstalled().then((isInstalled)=>{
            if(isInstalled){
                WeChat.shareToSession({
                    type:'news',
                    title:'react-native-studyproject',
                    description: '这是一个汇集react-native的原生和第三方组件的学习项目',
                    thumbImage: 'http://mta.zttit.com:8080/images/ZTT_1404756641470_image.jpg',
                    webpageUrl: 'http://www.lcode.org'
                }).catch((e)=>{
                    ToastAndroid.showToast(e.message,ToastAndroid.SHORT);
                })
            }else{
                ToastAndroid.showToast('请先安装微信客户端!',ToastAndroid.SHORT);
            }
        })
    }

    //分享给朋友文本
    shareText(){
        WeChat.isWXAppInstalled().then((isInstalled)=>{
            if(isInstalled){
                WeChat.shareToSession({
                    type:'text',
                    description: '这是一个汇集react-native的原生和第三方组件的学习项目',
                }).catch((e)=>{
                    ToastAndroid.showToast(e.message,ToastAndroid.SHORT);
                })
            }else{
                ToastAndroid.showToast('请先安装微信客户端!',ToastAndroid.SHORT);
            }
        })
    }

    //分享链接到朋友圈
    shareLinkSession(){
        WeChat.isWXAppInstalled().then((isInstalled)=>{
            if(isInstalled){
                WeChat.shareToTimeline({
                    type:'news',
                    title:'react-native-studyproject',
                    description: '这是一个汇集react-native的原生和第三方组件的学习项目',
                    thumbImage: 'http://mta.zttit.com:8080/images/ZTT_1404756641470_image.jpg',
                    webpageUrl: 'http://www.lcode.org'
                }).catch((e)=>{
                    ToastAndroid.showToast(e.message,ToastAndroid.SHORT);
                })
            }else{
                ToastAndroid.showToast('请先安装微信客户端!',ToastAndroid.SHORT);
            }
        })
    }

    //分享文本到朋友圈
    shareTextSession(){
        WeChat.isWXAppInstalled().then((isInstalled)=>{
            if(isInstalled){
                WeChat.shareToTimeline({
                    type:'text',
                    description: '这是一个汇集react-native的原生和第三方组件的学习项目',
                }).catch((e)=>{
                    ToastAndroid.showToast(e.message,ToastAndroid.SHORT);
                })
            }else{
                ToastAndroid.showToast('请先安装微信客户端!',ToastAndroid.SHORT);
            }
        })
    }

    render() {
        let NavTintColor = StyleUtil.getNavTintColor();
        let name = this.props.name;
        let titleConfig = {
            title: name,
            tintColor: '#ffffff',
        };

        return (
            <View>
                <StatusBars/>
                <NavigationBar
                    tintColor={NavTintColor}
                    title={titleConfig}
                    leftButton={<LeftButton onPress={this.back.bind(this)}/>}/>
                <Text style={{height: 40, color: 'black', margin: 10, fontSize: 16, textAlign: 'center'}}>
                    微信分享
                </Text>
                <CustomButton text={'分享链接到朋友圈'} onPress={this.shareLinkSession.bind(this)}/>
                <CustomButton text={'分享文本到朋友圈'} onPress={this.shareTextSession.bind(this)}/>
                <CustomButton text={'分享链接给朋友'} onPress={this.shareLink.bind(this)}/>
                <CustomButton text={'分享文本给朋友'} onPress={this.shareText.bind(this)}/>
            </View>
        )
    }
}
