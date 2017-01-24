/**
 用于倒计时显示的Text组件
 1 声明组件
 <CountDownText ref='countDownText' startText='开始计时' endText='结束计时' intervalText={(sec) => '还有' + sec + 's'} />

 2 开始计时
 this.refs.countDownText.start();

 3 结束计时
 this.refs.countDownText.end();
 */

'use strict'

import React, {Component} from 'react';

import {Text, StyleSheet, View} from 'react-native'
import countDown from './countDown';

var update = React.addons.update;

export default  class CountDownText extends Component {
    constructor(props) {
        super(props);
        this.state = {
            counter: null
        };
    }

    // 计时器
    // 定时回调
   static getDefaultProps() {
        return {
            countType: "seconds",
            onEnd: null, // 结束回调
            timeLeft: 0,//正向计时 时间起点为0秒
            step: -1, // 计时步长，以秒为单位，正数则为正计时，负数为倒计时
            startText: null, // 开始的文本
            intervalText: null, // 定时的文本，可以是回调函数
            endText: null, // 结束的文本
            auto: false, // 是否自动开始
        };
    }

    getInitialState() {
        return {
            text: this.props.startText, // 要显示文本
        }
    }

    // 判断两个时间是否相等，如果两个时间差在阀值之内，则可认为是相等
    isTimeEquals(t1, t2) {
        var threshold = 2;
        return Math.abs(t1 - t2) < threshold;
    }

    // 当更新
    componentWillReceiveProps(nextProps) {
        // 判断是否要重新计时
        var updating = true;
        if (this.props.step == nextProps.step && this.props.step < 0) { // 倒计时的情况
            if (this.props.endTime) { // 1 按起始日期来计时
                // console.log('prev: startTime: ' + this.props.startTime + ' endTime: ' + this.props.endTime)
                // console.log('next: startTime: ' + nextProps.startTime + ' endTime: ' + nextProps.endTime)
                updating = /* typeof(this.props.startTime) == 'undefined' && */ !this.isTimeEquals(this.props.endTime, nextProps.endTime); // 如果以当前时间为开始时间，则比较结束时间
            } else { // 2 按间隔秒数来计时
                // console.log('prev: timeLeft: ' + this.state.counter.timePassed)
                // console.log('next: timeLeft: ' + nextProps.timeLeft)
                updating = !this.isTimeEquals(nextProps.timeLeft, this.state.counter.timePassed); // 比较剩余时间
            }
        }
        // console.log('countDown updating: ' + updating);
        if (updating) {
            // 重置：清空计数 + 停止计时
            this.state.counter.reset();
            // 重新初始化计时器
            var config = update(nextProps, { // 不能直接修改 this.props，因此使用 update.$merge
                $merge: {
                    onInterval: this.onInterval, // 定时回调
                    onEnd: this.onEnd // 结束回调
                }
            });
            this.state.counter.setData(config);
            // 开始计时
            if (nextProps.auto) {
                this.start();
            }
        }
    }

    // 定时调用 intervalText 来更新状态 text
    onInterval() {
        this.setState({text: this.props.intervalText.apply(null, arguments)})
    }

    onEnd(timePassed) {
        this.setState({text: this.props.endText});
        this.props.afterEnd && this.props.afterEnd(timePassed);
    }

    componentDidMount() {
        /*
         this.state.counter = countDown({
         countType: "seconds",
         onInterval: (sec) => {},// 定时回调
         onEnd: (timePassed) => {}, // 结束回调
         timeLeft: 60,//正向计时 时间起点为0秒
         step: -1, // 计时步长，以秒为单位，正数则为正计时，负数为倒计时
         });
         */
        // 创建计时器
        var config = update(this.props, { // 不能直接修改 this.props，因此使用 update.$merge
            $merge: {
                onInterval: this.onInterval, // 定时回调
                onEnd: this.onEnd // 结束回调
            }
        });
        this.state.counter = countDown(config);

        // 判断是否结束
        if (this.state.counter.timeLeft <= 0 && this.state.counter.step <= 0) {
            this.end();
            return;
        }

        // 自动开始
        if (this.props.auto) {
            this.start();
        }
    }

    componentWillUnmount() {
        // 重置倒计时
        this.reset();
    }

    // 开始计时
    start() {
        this.state.counter.start();
    }

    // 结束计时
    end() {
        this.state.counter.end();
    }

    // 重置
    reset() {
        this.state.counter.reset();
    }

    render() {
        return <Text style={this.props.style}>{this.state.text}</Text>
    }

    getTimePassed() {
        return this.state.counter.timePassed;
    }
}
