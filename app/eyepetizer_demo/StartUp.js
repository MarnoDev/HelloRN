import React, {Component} from 'react';
import {Navigator} from 'react-native';

import MainPage from './MainPage';
/**
 * Created by marno on 2017/1/19
 * Desc:全局配置Navigator,并且需要将该页面在index中设置为启动页
 */
export default class StartUp extends Component {
    render() {

        return (
            <Navigator
                //初始化默认页面，也就是启动app后看到的第一屏
                initialRoute={{name: 'MainPage', component: MainPage}}

                /**
                 *  配置页面之间跳转的动画，还有其他动画可以使用,所有动画均带手势
                 *  动画效果有三种:Push,Float,Swipe,支持上下左右四个方向
                 *  如果使用webstrom的话，可以点进去看下源码，或者看我附上的文章
                 */
                configureScene={(route)=> {
                    //先判断一下传入页面是否自己定义了转场动画
                    if (route.sceneConfig) {
                        return route.sceneConfig;
                    }
                    return Navigator.SceneConfigs.HorizontalSwipeJump;
                    gestures = {pop: false}
                }}

                //这里需要注意，Navigator一经初始化后，就可以多处使用，整个工程维持一个就好了
                renderScene={(route, navigator)=> {
                    let Component = route.component;
                    return <Component {...route.params} navigator={navigator}/>
                }}
            />
        );
    }
}