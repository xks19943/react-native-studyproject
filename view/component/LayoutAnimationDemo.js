/**
 * Created by liaoye on 2016/8/26.
 * 学习使用LayoutAnimation api的使用
 * caseInEaseOut:淡入淡出
 * linear：线性
 * spring：弹幕
 */
import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    View,
    LayoutAnimation,
    TouchableHighlight,
    ToastAndroid,
    Platform,
    UIManager
} from 'react-native';

import StyleUtil from '../util/StyleUtil';
import LeftButton from './LeftButton';
import StatusBars from './StatusBars';
import NavigationBar from 'react-native-navbar';
import CustomButton from './CustomButton';

var CustomLayoutAnimation = {
    duration: 800,
    create: {
        type: LayoutAnimation.Types.easeInEaseOut,
        property: LayoutAnimation.Properties.opacity,
    },
    update: {
        type: LayoutAnimation.Types.easeInEaseOut,
    },
};

export default class LayoutAnimationDemo extends Component {
    constructor(props) {
        super(props);
        this.state={
            views:[],
            num:0,
        }
        // Enable LayoutAnimation under Android
        if (Platform.OS === 'android') {
            UIManager.setLayoutAnimationEnabledExperimental(true)
        }
    }

    //当组件更新的时候
    componentWillUpdate() {
        console.log('componentWillUpdate...');
        //LayoutAnimation.spring();
        //或者可以使用如下的自定义的动画效果
        LayoutAnimation.configureNext(CustomLayoutAnimation);
    }
    _onPressAddView() {
        this.setState({num:Number.parseInt(this.state.num)+1});
    }
    _onPressRemoveView() {
        this.setState({num:Number.parseInt(this.state.num)-1});
    }

    _renderAddedView(i) {
        return (
            <View key={i} style={styles.view}>
                <Text style={{color:'#fff'}}>{i}</Text>
            </View>
        );
    }

    back(){
        this.props.navigator&& this.props.navigator.pop();
    }

    render() {
        this.state.views.length=0;
        for(var i=0;i<this.state.num;i++){
            this.state.views.push(this._renderAddedView(i));
        }

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
                    布局动画示例
                </Text>
                <CustomButton text="添加View"  onPress={this._onPressAddView.bind(this)}/>
                <CustomButton text="删除View"  onPress={this._onPressRemoveView.bind(this)}/>
                <View style={styles.viewContainer}>
                    {this.state.views}
                </View>
            </View>
        );
    }
}
const styles = StyleSheet.create({
    welcome: {
        fontSize: 20,
        textAlign: 'center',
        margin: 10,
    },
    button: {
        margin:5,
        backgroundColor: 'white',
        padding: 15,
        borderBottomWidth: StyleSheet.hairlineWidth,
        borderBottomColor: '#cdcdcd',
    },
    viewContainer: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    view: {
        height: 50,
        width: 50,
        backgroundColor: 'green',
        margin: 8,
        alignItems: 'center',
        justifyContent: 'center',
    },
});