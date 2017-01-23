/**
 * Created by marno on 2017/1/23
 * Function:个人中心页面
 * Desc:
 */
import React, {Component} from 'react';
import {StyleSheet, View, Image, Text, ScrollView, TouchableWithoutFeedback} from 'react-native';
import {List, ListItem} from 'native-base';

import VideoDetailPage from '../eyepetizer_demo/VideoDetailPage';
import ToastUtil from "../utils/ToastUtil";

/**
 * 个人中心，头像，昵称部分
 */
class Header extends Component {
    render() {
        return (
            <View style={ProfilePageStyle.container}>
                <View style={{alignItems: 'flex-end'}}>
                    <TouchableWithoutFeedback onPress={this.props.onSettingClick}>
                        <Image
                            source={require('../../imgs/ic_menu_more.png')}
                            style={ProfilePageStyle.btn_setting}/>
                    </TouchableWithoutFeedback>

                </View>
                <View style={ProfilePageStyle.container_avater}>
                    <TouchableWithoutFeedback onPress={this.props.onAvatarClick}>
                        <Image
                            style={ProfilePageStyle.img_avatar}
                            source={require('../../imgs/avatar.png')}
                        /></TouchableWithoutFeedback>
                    <Text onPress={this.props.onNameClick}>Marno</Text>
                </View>
                <View style={ProfilePageStyle.container_favority_and_reply}>
                    <TouchableWithoutFeedback onPress={this.props.onFavorityClick}>
                        <View style={ProfilePageStyle.container_favority}>
                            <Image
                                style={ProfilePageStyle.img_favority}
                                source={require('../../imgs/ic_action_favorites_grey.png')}/>
                            <Text style={ProfilePageStyle.tv_favority}>收藏</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={this.props.onReplyClick}>
                        <View style={ProfilePageStyle.container_reply}>
                            <Image
                                style={ProfilePageStyle.img_reply}
                                source={require('../../imgs/ic_action_reply_grey.png')}/>
                            <Text style={ProfilePageStyle.tv_reply}>评论</Text>
                        </View>
                    </TouchableWithoutFeedback>
                </View>
            </View>
        )
    }
}

const MYITEM = ['MyMessage', 'MyFollow', 'MyCache', 'Feedback', 'Contribute'];
/**
 * 个人中心【我的**】item布局
 */
class MyItem extends Component {
    render() {
        return (
            <Text
                tag={this.props.tag}
                style={ProfilePageStyle.tv_myItem}
                onPress={()=>this._onItemClick()}
            >{this.props.title}</Text>
        )
    }

    _onItemClick() {
        let tag = this.props.tag;
        switch (tag) {
            default:
                ToastUtil.show("点击了 => " + this.props.title);
                break;
        }
    }
}


export default class ProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {

        return (
            <View>
                <Header
                    onSettingClick={()=>this._onSettingClick()}
                    onAvatarClick={()=>this._onAvatarClick()}
                    onNameClick={()=>this._onNameClick()}
                    onFavorityClick={()=>this._onFavorityClick()}
                    onReplyClick={()=>this._onReplyClick()}
                />
                <ScrollView
                    style={{backgroundColor: 'white'}}
                    showsVerticalScrollIndicator={false}
                >
                    <MyItem tag={MYITEM[0]} title="我的消息"/>
                    <MyItem tag={MYITEM[1]} title="我的关注"/>
                    <MyItem tag={MYITEM[2]} title="我的缓存"/>
                    <MyItem tag={MYITEM[3]} title="意见反馈"/>
                    <MyItem tag={MYITEM[4]} title="我要投稿"/>
                </ScrollView>
            </View>
        )

    }

    //点击跳转设置界面
    _onSettingClick() {
        const {navigator} = this.props;
        if (navigator) {
            navigator.push({
                name: 'VideoDetailPage',
                component: VideoDetailPage,
                params: {
                    rowData: '123',
                }
            })
        }
    }

    //头像点击事件
    _onAvatarClick() {
        ToastUtil.show("点击了头像");
    }

    //昵称点击事件
    _onNameClick() {
        ToastUtil.show("点击了昵称");
    }

    //收藏点击事件
    _onFavorityClick() {
        ToastUtil.show("点击了收藏");
    }

    //评论点击事件
    _onReplyClick() {
        ToastUtil.show("点击了评论");
    }
}

const ProfilePageStyle = StyleSheet.create({
    container: {
        paddingBottom: 20,
        borderBottomWidth: 0.5,
        borderBottomColor: '#B5B5B5',
        backgroundColor: 'white',
    },
    container_favority_and_reply: {
        flexDirection: 'row',
    },
    container_favority: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        borderRightWidth: 0.5,
        borderRightColor: '#B5B5B5'
    },
    container_reply: {
        flexDirection: 'row',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    container_avater: {
        alignItems: 'center',
        marginBottom: 32,
    },
    header: {
        backgroundColor: '#333333',
        height: 240,
    },
    btn_setting: {
        height: 40,
        width: 40,
    },
    img_avatar: {
        borderRadius: 80,
        height: 80,
        width: 80,
        marginBottom: 16,
    },
    tv_favority: {
        color: '#888888',
    },
    tv_reply: {
        color: '#888888',
    },
    img_favority: {
        height: 20,
        width: 20,
        resizeMode: 'contain',
        marginRight: 8,
    },
    img_reply: {
        height: 20,
        width: 20,
        resizeMode: 'contain',
        marginRight: 8,
    },
    tv_myItem: {
        height: 80,
        textAlign: 'center',
        textAlignVertical: 'center'
    },
})