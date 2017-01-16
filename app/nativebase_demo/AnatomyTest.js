import React, {Component} from "react";
import {Container, Header, Title, Content, Footer, FooterTab, Button, Icon} from "native-base";
import FetchNetData from "../fetch_demo/FetchNetData";

/**
 * Created by marno on 2017/1/16
 * Desc:
 */

export default class AnatomyTest extends Component {
    render() {
        return (
            <Container>
                <Header>
                    <Button>
                        <Icon name='sidebar'/>
                    </Button>
                    <Title>游戏头条</Title>


                    <Button>
                        <Icon name='ios-call'/>
                    </Button>
                </Header>

                <Content>
                    <FetchNetData/>
                </Content>

                <Footer>
                    <FooterTab>
                        <Button >
                            <Icon name='ios-call'/>
                        </Button>
                        <Button transparent>
                            <Icon name='ios-call'/>
                        </Button>
                        <Button transparent>
                            <Icon name='ios-call'/>
                        </Button>
                        <Button transparent>
                            <Icon name='ios-call'/>
                        </Button>
                    </FooterTab>
                </Footer>
            </Container>
        )
    }
}
