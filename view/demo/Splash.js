/**
 * Created by liaoye on 2016/10/2.
 */

import React,{Component} from 'react';
import {
    Image,
    View,
    Dimensions,
    StyleSheet,
    Animated
} from 'react-native';
import Home from './Home';
let width = Dimensions.get('window').width;
let height = Dimensions.get('window').height;
let image = 'http://sjbz.fd.zol-img.com.cn/t_s320x510c/g5/M00/00/03/ChMkJlfJV62IWzfuAFjqjPZd6d0AAU-FQH4roAAWOqk276.jpg';
export default class Splash extends Component{
    constructor(props){
        super(props);

        this.state = {
            bounceValue: new Animated.Value(1)
        };
    }

    //组件渲染完成之后
    componentDidMount() {
        Animated.timing(
            this.state.bounceValue, { toValue: 1.2, duration: 1000 }
        ).start();
        const { navigator } = this.props;

        setTimeout(function () {
            navigator.resetTo({                 //
                component: Home,
                name: '首页',
            });
        },1000);
    }

    render(){
        return(
            <View style={{flex:1}}>
                <Animated.Image
                    style={{ width: width, height: height,
                        transform: [{ scale: this.state.bounceValue }] }}
                    source={{uri:image}}
                />
            </View>
        );
    }

}
