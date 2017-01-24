/**
 * Created by liaoye on 2016/8/29.
 * 学习使用react-native-viewpager
 *
 */

import React,{Component} from 'react';
import {
    Image,
    View,
    Dimensions,
    StyleSheet,
} from 'react-native';

import ViewPager from 'react-native-viewpager';

import StyleUtil from '../util/StyleUtil';
import LeftButton from '../component/LeftButton';
import StatusBars from '../component/StatusBars';
import NavigationBar from 'react-native-navbar';

var IMAGE_URIS = [
    'http://apod.nasa.gov/apod/image/1410/20141008tleBaldridge001h990.jpg',
    'http://apod.nasa.gov/apod/image/1409/volcanicpillar_vetter_960.jpg',
    'http://apod.nasa.gov/apod/image/1409/m27_snyder_960.jpg',
    'http://apod.nasa.gov/apod/image/1409/PupAmulti_rot0.jpg',
    'http://apod.nasa.gov/apod/image/1510/lunareclipse_27Sep_beletskycrop4.jpg',
];


export default class ViewPagerTest extends Component{
    constructor(props){
        super(props);
        // 用于构建DataSource对象
        var dataSource = new ViewPager.DataSource({
            pageHasChanged: (p1, p2) => p1 !== p2,
        });

        this.state = {
            dataSource: dataSource.cloneWithPages(IMAGE_URIS)
        }
    }

     _renderPage(data,pageID) {
        return (
            <Image
                source={{uri: data}}
                style={styles.page}
                resizeMode={'stretch'}/>
        );
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
                <ViewPager
                    style={{height:200}}
                    dataSource={this.state.dataSource}
                    renderPage={(data,pageID)=>this._renderPage(data,pageID)}
                    isLoop={true}
                    autoPlay={true}/>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    page:{
        flex:1,
        height:200,
        resizeMode: 'stretch'
    }
})