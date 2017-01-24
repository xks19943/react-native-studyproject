/**
 * Created by liaoye on 2016/12/26.
 */
/**
 * Created by liaoye on 2016/12/26.
 */
import React, { Component } from 'react';
import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Image,
    ListView,
    PixelRatio
} from 'react-native';

import StyleUtil from '../util/StyleUtil';
import LeftButton from '../component/LeftButton';
import StatusBars from '../component/StatusBars';
import NavigationBar from 'react-native-navbar';
import ParallaxScrollView from 'react-native-parallax-scroll-view';

export default class ParallaxScrollViewTest extends Component{
    constructor(props){
        super(props);
        this.state =  {
            dataSource: new ListView.DataSource({
                rowHasChanged: (r1, r2) => r1 !== r2
            }).cloneWithRows([
                '大王叫我来巡山哦',
                '专门抓那个孙悟空哟',
                '伊尔哟，伊尔伊尔哟',
                '巡完南山，巡北山哟',
                '伊尔哟，伊尔伊尔哟',
            ])
        };
    }

    back(){
        this.props.navigator&& this.props.navigator.pop();
    }
    render(){
        const NavTintColor = StyleUtil.getNavTintColor();
        let name = this.props.name;
        let titleConfig = {
            title: name,
            tintColor:'#ffffff',
        };
        const { onScroll = () => {} } = this.props;
        return(

           /* <View style={{flex:1}}>
             <StatusBars/>
             <ParallaxScrollView
             style={{ flex: 1, backgroundColor: 'hotpink', overflow: 'hidden' }}
             renderBackground={() => <Image source={{ uri: `https://placekitten.com/414/350`, width: window.width, height: 350 }}/>}
             renderFixedHeader={() => <Text style={{ textAlign: 'right', color: 'white', padding: 5, fontSize: 20 }}>Hello</Text>}
             parallaxHeaderHeight={ 350 }>
             <View style={{ alignItems: 'center' }}><Text style={{ fontSize: 30 }}>Meow!</Text></View>
             </ParallaxScrollView>
             </View>*/

            <ListView
                ref="ListView"
                style={styles.container}
                dataSource={ this.state.dataSource }
                renderRow={(rowData) => (
                    <View key={rowData} style={ styles.row }>
                        <Text style={ styles.rowText }>
                            { rowData }
                        </Text>
                    </View>
                )}
                renderScrollComponent={props => (
                    <ParallaxScrollView
                        onScroll={onScroll}
                        //contentBackgroundColor={NavTintColor}
                        //headerBackgroundColor={NavTintColor}
                        backgroundColor={NavTintColor}
                        stickyHeaderHeight={ STICKY_HEADER_HEIGHT }
                        parallaxHeaderHeight={ PARALLAX_HEADER_HEIGHT }
                        backgroundSpeed={10}

                        //渲染背景
                        renderBackground={() => (
                            <View key="background">
                                <Image source={{uri: 'https://placekitten.com/414/350',
                                    width: window.width,
                                    height: PARALLAX_HEADER_HEIGHT}}/>
                                <View style={{position: 'absolute',
                                    top: 0,
                                    width: window.width,
                                    backgroundColor: 'rgba(0,0,0,.4)',
                                    height: PARALLAX_HEADER_HEIGHT}}/>
                            </View>
                        )}
                        //渲染前景
                        renderForeground={() => (
                            <View key="parallax-header" style={ styles.parallaxHeader }>
                                <Image style={ styles.avatar } source={{
                                    uri: 'http://img5.duitang.com/uploads/item/201504/17/20150417H5529_JuTGY.thumb.224_0.jpeg',
                                    width: AVATAR_SIZE,
                                    height: AVATAR_SIZE
                                }}/>
                                <Text style={ styles.sectionSpeakerText }>
                                    明明大爷
                                </Text>
                                <Text style={ styles.sectionTitleText }>
                                    好好学习，天天向上！
                                </Text>
                            </View>
                        )}
                        //渲染粘性头
                        renderStickyHeader={() => (
                            <View key="sticky-header" style={styles.stickySection}>
                                <Text style={styles.stickySectionText}>这是粘性头</Text>
                            </View>
                        )}
                        //渲染固定的头
                        renderFixedHeader={() => (
                            <View key="fixed-header" style={styles.fixedSection}>
                                <LeftButton onPress={this.back.bind(this)}/>
                                <Text style={styles.fixedSectionText}
                                      onPress={() => this.refs.ListView.scrollTo({ x: 0, y: 0 })}>
                                    固定头2
                                </Text>
                            </View>
                        )}/>
                )}
            />
        );


    }
}

const window = Dimensions.get('window');

const AVATAR_SIZE = 120;
const ROW_HEIGHT = 60;
const PARALLAX_HEADER_HEIGHT = 350;
const STICKY_HEADER_HEIGHT = 70;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor:'black'
    },
    background: {
        position: 'absolute',
        top: 0,
        left: 0,
        width: window.width,
        height: PARALLAX_HEADER_HEIGHT
    },
    stickySection: {
        height: STICKY_HEADER_HEIGHT,
        width: 300,
        justifyContent: 'center',
        alignItems:'center',
        flexDirection:'row'
    },
    stickySectionText: {
        color: 'white',
        fontSize: 20,
    },
    fixedSection: {
        position: 'absolute',
        left: 0,
        right: 0,
        top: 0,
        bottom: 0,
        marginHorizontal:16,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    fixedSectionText: {
        color: 'white',
        fontSize: 20
    },
    parallaxHeader: {
        alignItems: 'center',
        flex: 1,
        flexDirection: 'column',
        paddingTop: 100
    },
    avatar: {
        marginBottom: 10,
        borderRadius: AVATAR_SIZE / 2
    },
    sectionSpeakerText: {
        color: 'white',
        fontSize: 24,
        paddingVertical: 5
    },
    sectionTitleText: {
        color: 'white',
        fontSize: 18,
        paddingVertical: 5
    },
    row: {
        overflow: 'hidden',
        paddingHorizontal: 10,
        height: ROW_HEIGHT,
        backgroundColor: 'white',
        borderColor: '#ccc',
        borderBottomWidth: 1,
        justifyContent: 'center'
    },
    rowText: {
        fontSize: 20
    }
});