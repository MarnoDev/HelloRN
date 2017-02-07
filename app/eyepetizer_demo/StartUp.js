import React, {Component} from "react";
import {
    Navigator,
    BackAndroid,
    Platform,
} from "react-native";
import MainPage from "./MainPage";
import ToastUtil from "../utils/ToastUtil";

//标记是第几次按下返回键
let isFirstQuit = 0;
/**
 * Created by marno on 2017/1/19
 * Desc:全局配置Navigator,并且需要将该页面在index中设置为启动页
 */
export default class InitApp extends Component {
    constructor(props) {
        super(props);
        this.state = {};
        this.onBackAndroid = this.onBackAndroid.bind(this);
    }

    render() {

        return (
            <Navigator
                ref="navigator"
                //初始化默认页面，也就是启动app后看到的第一屏
                initialRoute={{name: 'MainPage', component: MainPage}}

                /**
                 *  配置页面之间跳转的动画，还有其他动画可以使用,所有动画均带手势
                 *  动画效果有三种:Push,Float,Swipe,支持上下左右四个方向
                 *  如果使用webstrom的话，可以点进去看下源码，或者看我附上的文章
                 */
                configureScene={(route)=> {
                    var config;
                    //先判断一下传入页面是否自己定义了转场动画
                    if (route.sceneConfig) {
                        config = route.sceneConfig;
                    } else {
                        config = Navigator.SceneConfigs.HorizontalSwipeJump;
                    }
                    //禁用config中的手势返回，否则会导致页面可以左右滑动
                    config.gestures = null;
                    return config;
                }}

                //这里需要注意，Navigator一经初始化后，就可以多处使用，整个工程维持一个就好了
                renderScene={(route, navigator)=> {
                    let Component = route.component;
                    return <Component {...route.params} navigator={navigator}/>
                }}
            />
        );
    }


    componentDidMount() {
        if (Platform.OS === 'android') {
            BackAndroid.addEventListener('hardwareBackPress', this.onBackAndroid);
        }
    }

    componentWillUnMount() {
        this.timer && clearTimeout(this.timer);
        if (Platform.OS === 'android') {
            BackAndroid.removeEventListener('hardwareBackPress', this.onBackAndroid);
        }
    }

    /**
     * 监听安卓物理返回键事件,页面返回功能正常，
     * 但是退出目前有些问题，只有第一次可以退出App，第二次就会报错
     */
    onBackAndroid() {
        const nav = this.refs.navigator;
        if (nav && nav.getCurrentRoutes().length > 1) {
            nav.pop();
            return true;//返回true表示消费该事件
        } else {
            if (isFirstQuit == 0) {
                ToastUtil.show('再按一次退出应用');
                isFirstQuit = 1;
                this.timer = setTimeout(()=> {
                    isFirstQuit = 0;
                }, 1000)
                return true;
            } else if (isFirstQuit == 1) {
                return false;//返回false，表示执行系统默认实现
            }
        }
    };
}