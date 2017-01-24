/**
 * Created by liaoye on 2016/8/15.
 * 学习使用 PullToRefreshViewAndroid
 */

import React,{Component} from 'react';
import {
    ScrollView,
    Text,
    RefreshControl,
    StyleSheet,
    View,
    ToastAndroid,
} from 'react-native';

import StyleUtil from '../util/StyleUtil';
import LeftButton from './LeftButton';
import StatusBars from './StatusBars';
import NavigationBar from 'react-native-navbar';

class Row extends Component{
    render(){
        return (
            <View style={styles.row}>
                <Text style={styles.text}>
                    {this.props.data.text}
                </Text>
            </View>
        );
    }
}

export default class PullToRefreshDemo extends Component{
    constructor(props){
        super(props);
        this.state = {
            isRefreshing: false,
            loaded: 0,
            rowData: Array.from(new Array(20)).map(
                (val, i) => ({text: '初始行' + i})
            ),
        }
    }

    back(){
        this.props.navigator&& this.props.navigator.pop();
    }

    render() {
        const rows = this.state.rowData.map((row, ii) => {
            return <Row key={ii} data={row} />;
        });
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
                <ScrollView
                    style={styles.scroll}
                    refreshControl={<RefreshControl
                        refreshing={this.state.isRefreshing}
                        onRefresh={this._onRefresh.bind(this)}
                        colors={['#ff0000', '#00ff00', '#0000ff', '#3ad564']}
                        progressBackgroundColor="#ffffff"/>} >
                    {rows}
                </ScrollView>
             </View>
        );
    }

    _onRefresh() {
        this.setState({isRefreshing: true});
        setTimeout(() => {
            // 进行准备5项新数据
            const rowData = Array.from(new Array(5))
                .map((val, i) => ({
                    text: '下拉刷新行' + (+this.state.loaded + i)
                }))
                .concat(this.state.rowData);

            this.setState({
                loaded: this.state.loaded + 5,
                isRefreshing: false,
                rowData: rowData,
            });
        }, 5000);
    }
}


const styles = StyleSheet.create({
    row: {
        borderColor: 'red',
        borderWidth: 2,
        padding: 20,
        backgroundColor: '#3ad734',
        margin: 5,
    },
    text: {
        alignSelf: 'center',
        color: '#fff',
    },
    layout: {
        flex: 1,
    },
    scroll: {
        flex: 1,
    },
});