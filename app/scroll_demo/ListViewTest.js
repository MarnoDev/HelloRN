/**
 * Created by marno on 2017/1/17
 * Desc:
 */
import React, {Component} from "react";
import {ListView} from "react-native";
import VideoListItem from "./VideoListItem";

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
            (prevRowData, nextRowData)=>prevRowData !== nextRowData,
        );

        this.state = {
            dataSource: defaultDS,
            data: [],
        }
    }

    render() {
        return (
            <View>
                {this._renderList()}
            </View>
        )
    }

    _renderList() {
        if (this.state.data && this.state.data.length > 0) {
            return(
                <ListView
                    dataSource={this.state.dataSource.cloneWithRows(this.state.data)}
                    renderRow={(rowData, sectionId, rowId)=>this._renderRow(rowData)}
                />
            )
        } else {
            return false
        }
    }

    _renderRow(rowData) {
        return <VideoListItem imgUrl={rowData.coverForFeed} titl={rowData.title}/>
    }

}