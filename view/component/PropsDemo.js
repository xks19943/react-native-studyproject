/**
 * props(属性)的学习，所谓的属性就是控件的属性。
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Text,
} from 'react-native';

import StyleUtil from '../util/StyleUtil';
import LeftButton from './LeftButton';
import StatusBars from './StatusBars';
import NavigationBar from 'react-native-navbar';


export default class PropsDemo extends Component{
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
        //通过this.props来设置对应的属性的值,当属性没有设置的时候就不使用对应的属性值
        return(
            <View>
                <StatusBars/>
                <NavigationBar
                    tintColor={NavTintColor}
                    title={titleConfig}
                    leftButton={<LeftButton onPress={this.back.bind(this)}/>}/>
                <Text style={{height:40,color:'black',margin:10, fontSize:16,textAlign:'center'}}>
                    Props示例
                </Text>
                <Getting name='属性值1' other='嘻嘻'/>
                <Getting name='属性值2'/>
                <Getting name='属性值3'/>
            </View>
        );
    }
}

class Getting extends Component{

    render(){
       return(
           <View>
                <Text>这是{this.props.name}</Text>
                <Text>{this.props.other}</Text>
           </View>
        );
    }
}