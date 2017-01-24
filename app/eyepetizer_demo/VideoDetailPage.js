/**
 * Created by marno on 2017/1/19
 * Function:视频详情页面
 * Desc:
 */
import React, {Component} from 'react';
import {Text, Navigator} from 'react-native';
import {
    Container, Header, Title, Content, Button, Icon
} from "native-base";
import JsonUtil from '../utils/JsonUtil';

export default class VideoDetailPage extends Component {
    constructor(props) {
        super(props);
        //注意，如果不进行bind，是拿不到传递过来的默认属性的
        this._onBackPress = this._onBackPress.bind(this);
    }

    render() {
        return (
            <Container>
                <Header style={{backgroundColor:'#333333',height:48}}>

                    <Button transparent onPress={this._onBackPress}>
                        <Icon name='md-arrow-back'/>
                    </Button>

                    <Title>Beauty</Title>

                </Header>

                <Content>
                    <Text>{JsonUtil.jsonToString(this.props.rowData)}</Text>
                </Content>
            </Container>
        )
    }

    _onBackPress() {
        const {navigator} = this.props;
        if(navigator) {
            navigator.pop();
        }
    }
}