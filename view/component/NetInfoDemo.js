/**
 * Created by liaoye on 2016/8/26.
 * 学习netInfo api的使用
 */
import React,{Component} from 'react';
import {
    NetInfo,
    ToastAndroid,
    View,
    Text,
} from 'react-native';
import CustomButton from './CustomButton';
import StyleUtil from '../util/StyleUtil';
import LeftButton from './LeftButton';
import StatusBars from './StatusBars';
import NavigationBar from 'react-native-navbar';

export default class NetInfoDemo extends Component{
    constructor(props){
        super(props);
        this.state={
            isConnected:'',
            connectionInfo:'',
            isExpensive:''
        }
    }

    //当组件渲染完成时候
    componentDidMount() {
        NetInfo.addEventListener('change',this.handleConnectionMessage)
    }

    getNetState(){
        NetInfo.isConnected.fetch().done(
            (isConnected) => {
                this.setState({isConnected:isConnected})
            }
        )
    }

    getNetInfo(){
        NetInfo.fetch().done(
            (connectionInfo) => {
                this.setState({connectionInfo:connectionInfo})
            }
        )
    }

    //
    componentWillUnMount() {
        NetInfo.removeEventListener('change',this.handleConnectionMessage)
    }

    handleConnectionMessage(isConnect){
        ToastAndroid.show((isConnect ? '网络在线' : '网络离线'),ToastAndroid.SHORT)
    }

    getNetExpansive(){
        this.setState({isExpensive:(NetInfo.isConnectionExpensive == true ? '需要' : '不需要')})
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
                    NetInfo示例
                </Text>
                <CustomButton text={'当前的网络状态'} onPress={this.getNetState.bind(this)}/>
                <Text style={{margin:10}}>{this.state.isConnected ? '网络在线' : '离线'}</Text>
                <CustomButton text={'当前网络连接类型'} onPress={this.getNetInfo.bind(this)}/>
                <Text style={{margin:10}}>{this.state.connectionInfo}</Text>
                <CustomButton text={'当前网络是否计费'} onPress={this.getNetExpansive.bind(this)}/>
                <Text style={{margin:10}}>{this.state.isExpensive}</Text>
            </View>
        );
    }
}