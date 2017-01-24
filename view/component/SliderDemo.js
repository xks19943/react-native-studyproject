/**
 * Created by liaoye on 2016/8/15.
 * 学习使用Slider 就是seekbar
 */
import React,{Component} from 'react';
import {
    Text,
    Slider,
    StyleSheet,
    View,
} from 'react-native';

import StyleUtil from '../util/StyleUtil';
import LeftButton from './LeftButton';
import StatusBars from './StatusBars';
import NavigationBar from 'react-native-navbar';

export default class  SliderDemo extends Component{
    constructor(props){
        super(props)
        this.state = {value:0};
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
                    滑动条示例
                </Text>
                <Slider
                    onValueChange={(value) => this.setState({value: value})}/>
           </View>
        );
    }
}