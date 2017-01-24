/**
 * Created by liaoye on 2016/12/27.
 */
import React,{Component} from 'react';
import {
    View,
    StyleSheet,
    ScrollView
} from 'react-native';
import Chart from 'react-native-chart';
import StyleUtil from '../util/StyleUtil';
import LeftButton from '../component/LeftButton';
import StatusBars from '../component/StatusBars';
import NavigationBar from 'react-native-navbar';

const data = [
    [0, 1],
    [1, 3],
    [3, 7],
    [4, 9],
];
const NavTintColor = StyleUtil.getNavTintColor();
export default class ChartTest extends Component{

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
                <ScrollView style={styles.container}
                    contentContainerStyle={{alignItems:'center'}}>
                    <Chart
                        style={styles.chart}
                        data={data}
                        hideVerticalGridLines={true}
                        hideHorizontalGridLines={true}
                        type="bar"
                        showDataPoint={true}/>

                    <Chart
                        style={styles.chart}
                        data={data}
                        verticalGridStep={6}
                        type={'line'}
                        showDataPoint={true}/>

                    <Chart
                        style={styles.chart}
                        showAxis={false}
                        data={data}
                        type={'pie'}
                        showDataPoint={true}/>

                </ScrollView>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
    },
    chart: {
        marginTop:16,
        width: 300,
        height: 300,
    },
});


