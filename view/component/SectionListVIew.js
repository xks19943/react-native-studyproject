/**
 * Created by liaoye on 2016/12/28.
 */
import React,{Component} from 'react';
import {
    Text,
    StyleSheet,
    View,
    ListView
} from 'react-native';

import StyleUtil from '../util/StyleUtil';
import LeftButton from './LeftButton';
import StatusBars from './StatusBars';
import NavigationBar from 'react-native-navbar';
import ItemCell from './ItemCell';

var insure = [
        {title:'在保情况',content:['在保','停保']},
    {title:'险种',content:['车险','寿险','健康险','财产险']},
    {title:'保险公司',content:['中国人寿','平安保险','太平洋','中国平安']}
];

export default class SectionListVIew extends Component{
    constructor(props){
        super(props);

        //设置提取标题数据的方法
        var getSectionData = (dataBlob, sectionID) => {
            return dataBlob[sectionID];
        }

        //设置提取行数据的方法
        var getRowData = (dataBlob, sectionID, rowID) => {
            return dataBlob[sectionID + ':' + rowID];
        }

        /*
        * 你可以在构造函数中针对section标题和行数据提供自定义的提取方法和hasChanged比对方法。
        * 如果不提供，则会使用默认的defaultGetRowData和defaultGetSectionHeaderData方法来提取行数据和section标题*/
        var ds = new ListView.DataSource({
            getSectionData:getSectionData,
            getRowData:getRowData,
            rowHasChanged:(r1,r2)=>r1 !== r2,
            sectionHeaderHasChanged: (s1, s2) => s1 !== s2
        });

        var dataBlob = {};
        var sectionIDs = [];
        var insures = [];
        var rowIDs = [];

        for(let i=0;i<insure.length;i++){
            sectionIDs.push(i);
            dataBlob[i] = insure[i].title;
            insures = insure[i].content;
            //在数组里面再建一个数组
            rowIDs[i] = [];
            for (let j=0;j<insures.length;j++){
                rowIDs[i].push(j);
                dataBlob[i+':'+j] = insures[j];
            }
        }

        /*console.log('数据为：',dataBlob);
        console.log('sectionIDs为：',sectionIDs);
        console.log('sectionIDs为：',rowIDs);*/

        this.state={
            dataSource:ds.cloneWithRowsAndSections(dataBlob,sectionIDs,rowIDs)
        }
        this.renderSection = this.renderSection.bind(this);
        this.renderRow = this.renderRow.bind(this);
    }

    back(){
        this.props.navigator&& this.props.navigator.pop();
    }

    renderSection(sectionData,sectionID){
        return(
            <Text style={{margin:8, fontSize:20}}>{sectionData}</Text>
        );
    }

    renderRow(rowData,sectionID,rowID){
        return(
            <ItemCell children={rowData}
                      icon={{uri:'http://img5.duitang.com/uploads/item/201504/17/20150417H5529_JuTGY.thumb.224_0.jpeg'}}
                      showDisclosureIndicator={false}/>
        );
    }

    render(){
        let NavTintColor = StyleUtil.getNavTintColor();
        let name = this.props.name;
        let titleConfig = {
            title: name,
            tintColor:'#ffffff',
        };
        //console.log('哈哈',this.state.dataSource);
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
                    renderRow={this.renderRow}
                    renderSectionHeader={this.renderSection}/>
            </View>
        );
    }
}