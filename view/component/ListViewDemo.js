/**
 * Created by liaoye on 2016/8/18.
 * 学习使用listview的用法
 */
import React,{Component} from 'react';
import {
    Text,
    View,
    ListView,
} from 'react-native';

import StyleUtil from '../util/StyleUtil';
import LeftButton from './LeftButton';
import StatusBars from './StatusBars';
import NavigationBar from 'react-native-navbar';

export default class ListViewDemo extends Component{
    constructor(props){
        super(props);
        var ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1 !== r2});
        var data = new Array(10);
        for(var i=0;i<data.length;i++){
            data[i] = 'rows' + i;
        }

        this.state={
            dataSource:ds.cloneWithRows(data)
        }
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
                <ListView
                    style={{flex:1}}
                    dataSource={this.state.dataSource}
                    renderRow={(rowData) => <Text>{rowData}</Text>}
                    renderHeader={(rowData) => <Text style={{backgroundColor:'#31c2f7',color:'#fff'}}>{'这是头部'}</Text>}
                    renderFooter={(rowData) => <Text style={{backgroundColor:'#31c2f7',color:'#fff'}}>{'这是尾部'}</Text>}
                />
            </View>
        );
    }
}

