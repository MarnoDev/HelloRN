import React, {Component} from 'react';
import {ToastAndroid} from 'react-native';
/**
 * Created by marno on 2017/1/18
 * Desc:Toast工具类
 */
export default class ToastUtil {

    static show(hint) {
        ToastAndroid.show(hint, ToastAndroid.SHORT);
    }

}