/**
 * Created by liaoye on 2016/8/4.
 * 学习使用Switch控件
 *
 */

import React,{Component} from 'react';
import {
    View,
    AppRegistry,
    Text,
    Switch,
    StyleSheet,
} from 'react-native';

import StyleUtil from '../util/StyleUtil';
import LeftButton from './LeftButton';
import StatusBars from './StatusBars';
import NavigationBar from 'react-native-navbar';

export default class SwitchDemo extends Component{
    constructor(){
        super();
        this.state={
            trueValue:true,
            falseValue:false
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
                    滑动开关示例
                </Text>

                <Switch
                    disabled={true}
                    onValueChange={(value)=>this.setState({falseValue:value})}
                    style={{marginTop:10, marginBottom:10}}
                    value={this.state.falseValue}/>

                <Switch
                    style={{marginTop:10, marginBottom:10}}
                    //当切换过程中就将对应的值复制给状态 然后更换状态的值
                    onValueChange={(value)=>this.setState({trueValue:value})}
                    value={this.state.trueValue}/>
            </View>
        );
    }
}

