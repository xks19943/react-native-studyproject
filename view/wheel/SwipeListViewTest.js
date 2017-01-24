/**
 * Created by liaoye on 2016/12/26.
 */
import React,{Component} from 'react';
import {
    ListView,
    View,
    StyleSheet,
    Text,
    Image
} from 'react-native';
import { SwipeListView } from 'react-native-swipe-list-view'
import StyleUtil from '../util/StyleUtil';
import LeftButton from '../component/LeftButton';
import StatusBars from '../component/StatusBars';
import NavigationBar from 'react-native-navbar';
import ItemCell from '../component/ItemCell';
const NavTintColor = StyleUtil.getNavTintColor();
export default class SwipeListViewTest extends Component{
    constructor(props){
        super(props);
        var ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
        this.state =  {
            dataSource: ds.cloneWithRows([
                '月已深宵',
                '冷风轻飘',
                '一张俏脸',
                '伴着半点的醉意',
                '夜已醉了',
                '夜已醉倒了',
                '让她安静到天早',
                '月已深宵',
                '冷风轻飘',
                '一张俏脸',
                '伴着半点的醉意',
                '夜已醉了',
                '夜已醉倒了',
                '让她安静到天早',
            ])
        };
    }

    back(){
        this.props.navigator&& this.props.navigator.pop();
    }

    render(){

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
                <SwipeListView
                    dataSource={this.state.dataSource}
                    renderRow={ data => (
                        <ItemCell
                            icon={{uri:'http://img5.duitang.com/uploads/item/201504/17/20150417H5529_JuTGY.thumb.224_0.jpeg'}}
                            children={data}
                            showDisclosureIndicator={false}/>
                    )}
                    renderHiddenRow={ data => (
                        <View style={styles.rowBack}>
                            <Text style={{color:'white', marginHorizontal:8,fontSize:16}}>左</Text>
                            <Text style={{color:'white', marginHorizontal:8,fontSize:16}}>右</Text>
                        </View>
                    )}
                    leftOpenValue={75}
                    rightOpenValue={-75}
                />
            </View>
        );
    }
}

const styles = StyleSheet.create({
    rowBack: {
        alignItems: 'center',
        backgroundColor: NavTintColor,
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal:16
    },
})