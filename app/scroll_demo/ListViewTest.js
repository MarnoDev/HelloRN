import React, {Component} from 'react';
import {ListView} from 'react-native';

/**
 * Created by marno on 2017/1/17
 * Desc:
 */
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
    }
}