/**
 * Created by liaoye on 2016/8/12.
 * ViewPager的学习
 */
import React,{Component} from 'react';
import {
    Image,
    View,
    StyleSheet,
    ViewPagerAndroid,
    Dimensions,
} from 'react-native';

var IMAGE_URIS = [
    'http://apod.nasa.gov/apod/image/1410/20141008tleBaldridge001h990.jpg',
    'http://apod.nasa.gov/apod/image/1409/volcanicpillar_vetter_960.jpg',
    'http://apod.nasa.gov/apod/image/1409/m27_snyder_960.jpg',
    'http://apod.nasa.gov/apod/image/1409/PupAmulti_rot0.jpg',
    'http://apod.nasa.gov/apod/image/1510/lunareclipse_27Sep_beletskycrop4.jpg',
];
//获取屏幕的宽度和高度
var screenWidth = Dimensions.get('window').width;
var screenHeight = Dimensions.get('window').height;

import StyleUtil from '../util/StyleUtil';
import LeftButton from './LeftButton';
import StatusBars from './StatusBars';
import NavigationBar from 'react-native-navbar';

export default class ViewPagerDemo extends Component{
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
            <View style={{flex:1}}>
                <StatusBars/>
                <NavigationBar
                    tintColor={NavTintColor}
                    title={titleConfig}
                    leftButton={<LeftButton onPress={this.back.bind(this)}/>}/>
                <ViewPagerAndroid style={{flex:1}} initialPage={0} scrollEnabled={true}>
                    <View><Image source={{uri:IMAGE_URIS[0]}} style={styles.img} resizeMode={'stretch'}/></View>
                    <View><Image source={{uri:IMAGE_URIS[1]}} style={styles.img} resizeMode={'stretch'}/></View>
                    <View><Image source={{uri:IMAGE_URIS[2]}} style={styles.img} resizeMode={'stretch'}/></View>
                    <View><Image source={{uri:IMAGE_URIS[3]}} style={styles.img} resizeMode={'stretch'}/></View>
                    <View><Image source={{uri:IMAGE_URIS[4]}} style={styles.img} resizeMode={'stretch'}/></View>
                </ViewPagerAndroid>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    img:{
        width:screenWidth,
        height:screenHeight,
    }
});