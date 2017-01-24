/**
 * Created by liaoye on 2016/8/16.
 */
import React,{Component} from 'react';
import {
    StatusBar,
} from 'react-native';

import styleUtil from  '../util/StyleUtil';

export default class StatusBars extends Component{

    render(){
        var navTintColor= styleUtil.getNavTintColor();
        return(
            <StatusBar
                barStyle={'light-content'}
                animated={true}
                backgroundColor={navTintColor}/>
        );
    }
}