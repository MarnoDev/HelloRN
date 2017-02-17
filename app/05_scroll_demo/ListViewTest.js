/**
 * Created by marno on 2017/1/17
 * Desc:使用ListView展示网络数据
 */
import React, {Component} from "react";
import {ListView, Text, RefreshControl, StyleSheet, View, Image} from "react-native";

import VideoListItem from "./VideoListItem";
import ToastUtil from "../utils/ToastUtil";
import VideoDetailPage from '../eyepetizer_demo/video_detail/VideoDetailPage';
import ParallaxScrollView from 'react-native-parallax-scroll-view';
import DimensUtil from '../utils/DimensUtil';

//视频地址，下一页链接会在json中一起返回
const videoUrl = 'http://baobab.wandoujia.com/api/v1/feed?num=1';

export default class ListViewTest extends Component {
    constructor(props) {
        super(props)
        /**
         * 使用DataSource作为ListView的数据源
         * 该构造函数接收四个参数
         * getRowData(dataBlob, sectionID, rowID)
         * getSectionHeaderData(dataBlob, sectionID)
         * rowHasChanged(prevRowData, nextRowData)
         * sectionHeaderHasChanged(prevSectionData, nextSectionData)
         */
        let defaultDS = new ListView.DataSource(
            //指定更新row数据的策略，一般都是判断前后两行不相等的时候进行更新
            {rowHasChanged: (prevRowData, nextRowData)=>prevRowData !== nextRowData}
        );

        this.state = {
            dataSource: defaultDS,
            data: [],
            nextPageUrl: '',
            isRefreshing: false,
        }
    }

    //渲染视图
    render() {
        return (
            this._renderList()
        )
    }

    //渲染列表
    _renderList() {
        if (this.state.data) {
            //通过解构赋值
            const {
                onScroll = ()=> {
                }
            } = this.props;
            return (
                <ListView
                    dataSource={this.state.dataSource.cloneWithRows(this.state.data)}
                    renderRow={(rowData, sectionId, rowId)=>this._renderRow(rowData, rowId)}
                    enableEmptySections={true}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.isRefreshing}
                            onRefresh={()=>this._fetchVideoList()}
                        />}
                    renderScrollComponent={props=>(
                        <ParallaxScrollView
                            onScroll={onScroll}
                            parallaxHeaderHeight={210}
                            backgroundSpeed={0}
                            fadeOutForeground={false}
                            renderBackground={()=>(
                                <View key="background">
                                    <Image
                                        style={styles.img_header_background}
                                        source={require('../imgs/home_page_header_cover.jpg')}>
                                        <View key="parallax-header" style={ styles.parallaxHeader }>
                                            <Image style={ styles.avatar }
                                                   source={require('../imgs/home_page_header_icon.png')}/>
                                            <Text style={ styles.sectionSpeakerText }>
                                                {new Date().getFullYear()}
                                            </Text>
                                        </View>

                                    </Image>
                                </View>
                            )}


                        />
                    )}

                />
            )
        } else {
            return (
                <Text style={{flex: 1, textAlignVertical: 'center', textAlign: 'center'}}>加载中...</Text>
            )
        }
    }

    //渲染列表项
    _renderRow(rowData, rowId) {
        return <VideoListItem
            onItemClick={()=>this._onItemClick(rowData, rowId)}
            imgUrl={rowData.coverForFeed}
            title={rowData.title}/>
    }

    //处理列表item的点击事件
    _onItemClick(rowData, rowId) {
        //ToastUtil.show("点击了" + rowId);
        const {navigator} = this.props;
        if (navigator) {
            navigator.push({
                name: 'VideoDetailPage',
                //这里跳转到VideoDetailPage后，后自动向该页面属性中注入navigator对象
                //在VideoDetailPage就可以直接通过props获取，其他地方也一样
                component: VideoDetailPage,
                params: {
                    rowData: rowData,
                    rowId: rowId,
                }
            });
        }

    }

    //发起网络请求，获取数据
    _fetchVideoList() {
        fetch(videoUrl)
            .then((response)=>response.json())
            .then(
                (responseJson)=> {
                    let videos = responseJson.dailyList[0].videoList;
                    let nextPage = responseJson.nextPageUrl;
                    ToastUtil.show("网络请求完成")
                    console.log(videos);
                    console.log("下一页：" + nextPage)
                    this.setState({
                        data: videos,
                        nextPageUrl: nextPage,
                        isRefreshing: false,

                    })
                }
            )
            .catch((error)=> {
                console.error(error);
                this.setState({
                    isRefreshing: false,
                })
            })
    }

    //页面渲染完成后会主动回调该方法
    componentDidMount() {
        // ToastUtil.show("组件加载完成，开始网络请求");
        this._fetchVideoList();
    }
}

const styles = StyleSheet.create({
    parallaxHeader: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',

    },
    sectionSpeakerText: {
        color: 'white',
        fontSize: 15,
    },
    avatar: {
        height: 150,
        width: 150,
    },
    img_header_background: {
        width: DimensUtil.getScreenWidth(),
        height: 210,
        resizeMode: 'cover'
    }

})