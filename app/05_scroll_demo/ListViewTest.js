/**
 * Created by marno on 2017/1/17
 * Desc:使用ListView展示网络数据
 */
import React, {Component} from "react";
import {ListView, Text, RefreshControl} from "react-native";
import VideoListItem from "./VideoListItem";
import ToastUtil from "../utils/ToastUtil";
import BannerTest from "../03_library_demo/BannerTest";

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
            return (
                <ListView
                    dataSource={this.state.dataSource.cloneWithRows(this.state.data)}
                    renderRow={(rowData, sectionId, rowId)=>this._renderRow(rowData, rowId)}
                    enableEmptySections={true}
                    refreshControl={
                        <RefreshControl
                            refreshing={this.state.isRefreshing}
                            onRefresh={()=>this.fetchVideoList()}
                        />}
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
        ToastUtil.show("点击了" + rowId);
        const {navigator} = this.props;
        if(navigator) {
            navigator.push({
                name: 'BannerTest',
                component: BannerTest,
            });
        }

    }

    //发起网络请求，获取数据
    fetchVideoList() {
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
        ToastUtil.show("组件加载完成，开始网络请求");
        this.fetchVideoList();
    }
}