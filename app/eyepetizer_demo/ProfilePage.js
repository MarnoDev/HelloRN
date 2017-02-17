/**
 * Created by marno on 2017/1/23
 * Function:个人中心页面
 * Desc:
 */
import React, {Component} from 'react';
import {StyleSheet, View, Image, Text, ScrollView, TouchableWithoutFeedback} from 'react-native';

import ToastUtil from "../utils/ToastUtil";
import VideoDetailPage from './video_detail/VideoDetailPage';
import LoginPage from '../06_input_demo/TextInputTest';

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
                            source={require('../imgs/ic_menu_more.png')}
                            style={ProfilePageStyle.btn_setting}/>
                    </TouchableWithoutFeedback>

                </View>
                <View style={ProfilePageStyle.container_avater}>
                    <TouchableWithoutFeedback onPress={this.props.onAvatarClick}>
                        <Image
                            style={ProfilePageStyle.img_avatar}
                            source={require('../imgs/avatar.png')}
                        /></TouchableWithoutFeedback>
                    <Text onPress={this.props.onNameClick}>Marno</Text>
                </View>
                <View style={ProfilePageStyle.container_favority_and_reply}>
                    <TouchableWithoutFeedback onPress={this.props.onFavorityClick}>
                        <View style={ProfilePageStyle.container_favority}>
                            <Image
                                style={ProfilePageStyle.img_favority}
                                source={require('../imgs/ic_action_favorites_grey.png')}/>
                            <Text style={ProfilePageStyle.tv_favority}>收藏</Text>
                        </View>
                    </TouchableWithoutFeedback>
                    <TouchableWithoutFeedback onPress={this.props.onReplyClick}>
                        <View style={ProfilePageStyle.container_reply}>
                            <Image
                                style={ProfilePageStyle.img_reply}
                                source={require('../imgs/ic_action_reply_grey.png')}/>
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
                onPress={this.props.onItemClick}
            >{this.props.title}</Text>
        )
    }
}

/**
 * 个人中心页面
 */
export default class ProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isLogin: false,
        };
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
                    <MyItem title="我的消息" onItemClick={()=>this._onItemClick(MYITEM[0])}/>
                    <MyItem title="我的关注" onItemClick={()=>this._onItemClick(MYITEM[1])}/>
                    <MyItem title="我的缓存" onItemClick={()=>this._onItemClick(MYITEM[2])}/>
                    <MyItem title="意见反馈" onItemClick={()=>this._onItemClick(MYITEM[3])}/>
                    <MyItem title="我要投稿" onItemClick={()=>this._onItemClick(MYITEM[4])}/>
                </ScrollView>
            </View>
        )

    }

    //item点击事件
    _onItemClick(tag) {
        switch (tag) {
            default:
                // ToastUtil.show("点击了 => " + tag);
                this._toLoginPage();
                break;
        }
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

    //跳转到登录页面
    _toLoginPage() {
        if (this.state.isLogin) {
            return ToastUtil.show("您已登录，无需重复登录！若要打开登录界面，请在设置中退出登录");
        }
        ToastUtil.show('请先登录')
        const {navigator} = this.props;
        if (navigator) {
            navigator.push({
                name: 'LoginPage',
                component: LoginPage,
                params: {
                    //该方法用于下一个页面的数据回传
                    getIsLogin:(isLogin)=>{this.setState({
                        isLogin:isLogin
                    })}

                }
            })
        }
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