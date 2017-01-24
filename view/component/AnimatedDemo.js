/**
 * Created by liaoye on 2016/8/26.
 * 学习Animated api的使用
 */

import React,{Component} from 'react';
import {
    View,
    Image,
    Animated,
    Easing
} from 'react-native';

export default class AnimatedDemo extends Component{
    constructor(props){
        super(props);
        this.state = {
            bounceValue: new Animated.Value(0),
            fadeOutOpacity: new Animated.Value(0),
            translateValue: new Animated.ValueXY({x:0,y:0}),
        };
    }

    componentDidMount() {
        this.state.bounceValue.setValue(1.5);     // 动画开始的时候 设置一个比较大的值
        this.state.fadeOutOpacity.setValue(1);
        this.state.translateValue.setValue({x:0, y:0});
        Animated.spring(                          // 动画可选类型: spring, decay, timing
            this.state.bounceValue,                 // Animate `bounceValue`
            {
                toValue: 0.6,                         // Animate to smaller size
                friction: 1,                          // Bouncier spring
            }
        ).start();                                // 开始执行动画

        Animated.timing(this.state.fadeOutOpacity, {
            toValue: 0.2,
            duration: 2000,
            easing: Easing.linear,// 线性的渐变函数
        }).start();

        Animated.decay(this.state.translateValue, {
            velocity: 10, // 起始速度，必填参数。
            deceleration: 0.8, // 速度衰减比例，默认为0.997。
        }).start();
    }

    render(){
        return(
            <View style={{flex:1}}>
                <Animated.Image                         // 基础组件: Image, Text, View
                    source={{uri: 'http://i.imgur.com/XMKOH81.jpg'}}
                    style={{
                        width:360,
                        height:100,
                        transform: [                        // `transform`   有顺序的数组
                            {scale: this.state.bounceValue},  // Map `bounceValue` to `scale`
                        ]
                    }}
                />

                <Animated.Image                         // 基础组件: Image, Text, View
                    source={{uri: 'http://i.imgur.com/XMKOH81.jpg'}}
                    style={{
                        width:360,
                        height:100,
                        opacity:this.state.fadeOutOpacity
                    }}
                />

                <Animated.Image                         // 基础组件: Image, Text, View
                    source={{uri: 'http://i.imgur.com/XMKOH81.jpg'}}
                    style={{
                        width:60,
                        height:100,
                        transform:[
                            {translateX: this.state.translateValue.x},
                            {translateY: this.state.translateValue.y}
                        ]
                    }}
                />
            </View>
        );
    }
}