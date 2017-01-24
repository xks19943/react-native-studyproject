/**
 * Created by liaoye on 2016/12/28.
 */
import React,{Component} from 'react';
import {
    Text,
    StyleSheet,
    View,
    ListView,
    TouchableOpacity
} from 'react-native';

import StyleUtil from '../util/StyleUtil';
import LeftButton from './LeftButton';
import StatusBars from './StatusBars';
import NavigationBar from 'react-native-navbar';
import ItemCell from './ItemCell';

var insure = [
        {title:'在保情况',content:['在保','停保']},
    {title:'险种',content:['车险','寿险','健康险','财产险']},
    {title:'保险公司',content:['中国人寿','平安保险','太平洋','中国石油','中国平安']}
];

export default class GridViewDemo extends Component{
    constructor(props){
        super(props);

        var ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1 !== r2});

        this.state={
            dataSource:ds.cloneWithRows(insure)
        }
        this.renderRow = this.renderRow.bind(this);
    }

    back(){
        this.props.navigator&& this.props.navigator.pop();
    }


    renderRow(rowData,sectionID,rowID){
        return(
            <View>
                <ItemCell children={rowData.title}
                          icon={{uri:'http://img5.duitang.com/uploads/item/201504/17/20150417H5529_JuTGY.thumb.224_0.jpeg'}}
                          showDisclosureIndicator={false}/>
                <ChildView content={rowData.content}/>
            </View>
        );
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
                <ListView
                    style={{flex:1}}
                    dataSource={this.state.dataSource}
                    renderRow={this.renderRow}/>
            </View>
        );
    }
}

class ChildView extends Component{
    constructor(props){
        super(props);
        let content = this.props.content;
        var ds = new ListView.DataSource({rowHasChanged:(r1,r2)=>r1 !== r2});
        this.state={
            dataSource:ds.cloneWithRows(content)
        }
    }

    check(rowData,selected){
        console.log(rowData);
        rowData.selected = !selected;
    }

    renderItem(rowData,sectionID,rowID){
        rowData.selected=false;
        return(
            <TouchableOpacity
                onPress={this.check.bind(this,rowData,rowData.selected)}
                style={{marginVertical:8, marginLeft:8, backgroundColor:(rowData.select?'blue':'#ccc')}}>
                <Text style={{fontSize:14,color:'#000000', marginHorizontal:16, textAlign:'center'}}>
                    {rowData}
                </Text>
            </TouchableOpacity>
        );
    }

    render(){

        return(
            <ListView
                contentContainerStyle={styles.list}
                dataSource={this.state.dataSource}
                renderRow={this.renderItem.bind(this)}/>
        );
    }
}

const styles = StyleSheet.create({
    list:{
        flexDirection:'row',
        flexWrap:'wrap',
        alignItems:'center',
    }
})