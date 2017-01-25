import React, {Component} from 'react';
import {View, Text, TextInput, StyleSheet, Navigator} from 'react-native';
import {
    Container, Header, Title, Content, Icon, Button
} from "native-base";
import ToastUtil from "../utils/ToastUtil";

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

                    <Button transparent onPress={()=>this._onCloseClick()}>
                        <Icon name='md-arrow-back' style={{color: '#333'}}/>
                    </Button>

                    <Title style={{color: '#333'}}>登录</Title>

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
                        <Button
                            onPress={()=>this._onLoginButtonClick()}
                            textStyle={{fontSize: 18}}
                            block style={TextInputStyle.btn_commit}>登录</Button>
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
        ToastUtil.show("登录成功")
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