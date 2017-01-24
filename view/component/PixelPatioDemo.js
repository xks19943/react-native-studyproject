/**
 * Created by liaoye on 2016/8/16.
 * 学习使用PixelPatio api 像素比率
 */
import React,{Component} from 'react';
import{
    StyleSheet,
    Text,
    View,
    PixelRatio,
} from 'react-native';

import StyleUtil from '../util/StyleUtil';
import LeftButton from './LeftButton';
import StatusBars from './StatusBars';
import NavigationBar from 'react-native-navbar';

export default class PixelPatioDemo extends Component {
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
                    屏幕像素比率示例
                </Text>
                <Text style={styles.instructions}>
                    当前的屏幕像素密度比例为:{PixelRatio.get()};
                </Text>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    instructions: {
        textAlign: 'center',
        color: '#333333',
        marginBottom: 5,
    },
});