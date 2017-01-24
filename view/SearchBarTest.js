/**
 * Created by liaoye on 2016/8/3.
 * 学习使用react-native-search-bar 控件
 */
import React,{Component} from 'react';
import {
    View,
    Text,
    StyleSheet,
} from 'react-native';

import SearchBar from 'react-native-search-bar';

export default class SearchBarTest extends Component{
    render(){
        return(
            <View>
                <SearchBar
                    placeholder='Search'
                    textFieldBackgroundColor='blue'/>
            </View>
        );
    }
}
