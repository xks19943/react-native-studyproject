/**
 * Created by liaoye on 2016/8/2.
 * 这是ProgressBarAndroid的测试
 */
import React,{Component} from 'react';

import {
    StyleSheet,
    View,
    ProgressBarAndroid,
    Text,
    TouchableOpacity,
} from 'react-native';


import StyleUtil from '../util/StyleUtil';
import LeftButton from './LeftButton';
import StatusBars from './StatusBars';
import NavigationBar from 'react-native-navbar';

export default class ProgressBarDemo extends Component{

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
                    Android进度条示例
                </Text>
                <ProgressBarAndroid  color={'red'} styleAttr={'Inverse'} />
                <ProgressBarAndroid  color={'green'} styleAttr='Horizontal' progress={0.2}
                                     indeterminate={false} style={{marginTop:10}}/>
                <ProgressBarAndroid  color="green" styleAttr='Horizontal'
                                     indeterminate={true} style={{marginTop:10}}/>
                <ProgressBarAndroid  color="black" styleAttr='SmallInverse'
                                     style={{marginTop:10}}/>
                <ProgressBarAndroid  styleAttr='LargeInverse'
                                     style={{marginTop:10}}/>
            </View>
        );
    }
}