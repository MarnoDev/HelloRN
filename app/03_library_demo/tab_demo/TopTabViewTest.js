import React, {Component} from 'react';
import {View, StyleSheet} from 'react-native';
import {TabViewAnimated, TabBarTop} from 'react-native-tab-view';
import FlexTest from "../../01_flex_demo/FlexTest";
import FlexDiceTest from "../../01_flex_demo/FlexDiceTest";
import FetchNetData from "../../02_fetch_demo/FetchNetData";
import BannerTest from '..//BannerTest';

/**
 * Created by marno on 2017/1/16
 * Desc:使用tab
 */

export default class TopTabViewTest extends Component {
    state = {
        index: 0,
        routes: [
            {key: '1', title: '新闻'},
            {key: '2', title: '热点'},
            {key: '3', title: '科技'},
            {key: '4', title: '数码'},
        ],
    };

    //处理tab切换时的索引
    _handleChangeTab = (index) => {
        this.setState({index});
    };

    //optional callback which renders a header, useful for a top tab bar
    _renderHeader = (props) => {
        return <TabBarTop {...props} />;
    };

    //callback which renders a single scene
    _renderScene = ({route}) => {
        switch (route.key) {
            case '1':
                return <FlexTest/>;
            case '2':
                return <FlexDiceTest/>;
            case '3':
                return <FetchNetData/>;
            case '4':
                return <BannerTest/>;
            default:
                return null;
        }
    };

    render() {
        return (
            <TabViewAnimated
                style={TabViewTestStyle.container}
                navigationState={this.state}
                renderScene={this._renderScene}
                renderHeader={this._renderHeader}
                onRequestChangeTab={this._handleChangeTab}
            />
        );
    }
}

const TabViewTestStyle = StyleSheet.create({
    container: {
        flex: 1,
    },
    page: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
});