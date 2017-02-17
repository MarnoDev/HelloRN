import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet, Navigator} from 'react-native';
import {
    Container, Header, Title, Content, Icon, Button, Left, Body
} from "native-base";
import ToastUtil from "../utils/ToastUtil";
import stroage from '../utils/StorageUtil';

/**
 * Created by marno on 2017/1/24
 * Function:检测用户输入
 * Desc:
 */
export default class TextInputTest extends Component {
    constructor(props) {
        super(props);
        this.state = {
            account: '',
            password: '',
            verifyString: '获取验证码',
            isCounting: false,
        };
    }

    render() {
        return (
            <Container>
                <Header style={{backgroundColor: 'white', height: 48}}>

                    <Left>
                        <Button transparent onPress={()=>this._onCloseClick()}>
                            <Icon name='arrow-back' style={{color: '#333'}}/>
                        </Button>
                    </Left>

                    <Body>
                    <Title style={{color: '#333'}}>登录</Title>

                    </Body>

                </Header>

                <Content style={{backgroundColor: 'white'}}>
                    <View style={{marginTop: 60}}>
                        <View style={TextInputStyle.view_account_input_container}>
                            <Icon name="ios-person" style={TextInputStyle.icon_account}/>
                            <TextInput
                                style={TextInputStyle.input_account}
                                placeholder={'手机号'}
                                placeholderTextColor={'#b2b2b2'}
                                keyboardType={'numeric'}
                                maxLength={11}
                                returnKeyType={'next'}
                                underlineColorAndroid={'transparent'}
                                onChangeText={(input)=> {
                                    this.setState({account: input})
                                }}
                            />
                        </View>
                        <View style={TextInputStyle.view_password_input_container}>
                            <TextInput
                                style={TextInputStyle.input_password}
                                placeholder={'验证码'}
                                placeholderTextColor={'#b2b2b2'}
                                keyboardType={'numeric'}
                                maxLength={6}
                                returnKeyType={'next'}
                                clearTextOnFocus={true}
                                underlineColorAndroid={'transparent'}
                                onChangeText={(input)=> {
                                    this.setState({password: input})
                                }}
                            />

                            <Text
                                onPress={()=>this._fetchVerifyCode()}
                                style={TextInputStyle.tv_verify_code}>{this.state.verifyString}</Text>

                        </View>
                        <Button block
                                onPress={()=>this._onLoginButtonClick()}
                                style={TextInputStyle.btn_commit}>
                            <Text style={{fontSize: 18, color: 'white'}}>登录</Text>
                        </Button>
                    </View>

                </Content>
            </Container>
        )
    }

    //点击关闭页面
    _onCloseClick() {
        const {navigator} = this.props;
        if (navigator) {
            navigator.pop();
        }
    }

    //点击登录
    _onLoginButtonClick() {
        if (!this.state.account) {
            return ToastUtil.show("请输入手机号");
        } else if (this.state.account.length < 11) {
            return ToastUtil.show("手机号格式有误");
        } else if (!this.state.password) {
            return ToastUtil.show("请输入验证码");
        } else if (this.state.password.length < 6) {
            return ToastUtil.show("验证码必须为6位数")
        }
        this._login();
    }

    //模拟登录操作
    _login() {
        ToastUtil.show("登录成功");
        // 使用key来保存数据。这些数据一般是全局独有的，常常需要调用的。
        // 除非你手动移除，这些数据会被永久保存，而且默认不会过期。
        storage.save({
            key: 'loginState',  // 注意:请不要在key中使用_下划线符号!
            rawData: {
                from: 'some other site',
                userid: 'some userid',
                token: 'some token'
            },

            // 如果不指定过期时间，则会使用defaultExpires参数
            // 如果设为null，则永不过期
            expires: 1000 * 3600
        });
        if (this.props.getIsLogin) {
            this.props.getIsLogin(true);
        }
        this._onCloseClick();
    }

    //获取验证码
    _fetchVerifyCode() {
        if (!this.state.account) {
            return ToastUtil.show("请输入手机号");
        } else if (this.state.account.length < 11) {
            return ToastUtil.show("手机号格式有误");
        }
        if (this.state.isCounting) {
            return;
        } else {
            this._startCounting();
        }

    }

    _startCounting() {
        var total = 60;
        this.interval = setInterval(()=> {
            this.setState({
                verifyString: total-- + 's 后重新获取',
                isCounting: true,
            })

            if (total <= 0) {
                this.interval && clearInterval(this.interval);
                this.setState({
                    verifyString: '重新获取',
                    isCounting: false,
                })
            }
        }, 1000);
    }

    componentWillUnMount() {
        this.interval && clearInterval(this.interval);
    }
}


const TextInputStyle = StyleSheet.create({
    view_account_input_container: {
        borderBottomWidth: 0.5,
        borderBottomColor: '#E9E9E9',
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 14,
        marginBottom: 8,

    },
    view_password_input_container: {
        borderBottomWidth: 0.5,
        borderBottomColor: '#E9E9E9',
        flexDirection: 'row',
        alignItems: 'center',
        marginHorizontal: 14,

    },
    input_account: {
        flex: 1,
        fontSize: 14,
        paddingVertical: 8,
    },
    input_password: {
        flexGrow: 4,
        fontSize: 14,
        paddingVertical: 8,
    },
    icon_account: {
        fontSize: 26,
        marginRight: 16,
        marginLeft: 8,
        color: '#b2b2b2'
    },
    tv_verify_code: {
        color: '#333',
        flexGrow: 1,
        textAlign: 'center'
    },
    btn_commit: {
        height: 48,
        backgroundColor: '#333',
        marginTop: 38,
        marginHorizontal: 14,
    }
})