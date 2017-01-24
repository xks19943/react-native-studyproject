/**
 * Picker的学习
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    View,
    Picker,
    Text
} from 'react-native';

import StyleUtil from '../util/StyleUtil';
import LeftButton from './LeftButton';
import StatusBars from './StatusBars';
import NavigationBar from 'react-native-navbar';

export  default class PickerDemo extends Component{
    constructor(props) {
        super(props);
        //定义一个状态 其中属性为language,值为空
        this.state = {language: ''};
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
                    Picker示例
                </Text>
                <View style={styles.bg}>
                    <Picker
                        //设置展示的方式为向下
                        mode={'dropdown'}
                        //设置选中的状态的初始值
                        selectedValue={this.state.language}
                        //当选中的时候改变对应的值
                        onValueChange={(lang) => this.setState({language: lang})}>
                            <Picker.Item label={'Java'} value={'java'}/>
                            <Picker.Item label={'JavaScript'} value={'JavaScript'}/>
                    </Picker>
                </View>
            </View>
        );
    }
}

const styles = StyleSheet.create({
   bg:{
       borderWidth:1,
       borderRadius:5,
       borderColor:'#efeff4',
   },
});
