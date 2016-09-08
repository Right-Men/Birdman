/**
 *
 *  闪屏
 *
 *
 * */
'use strict';
import React,{Component} from 'react';

import {
    View,
    Image,
    InteractionManager,
    Dimensions
} from 'react-native';

import AppMain from '../constainers/AppMain';

var maxWidth = Dimensions.get('window').width;
var maxHeight = Dimensions.get('window').height;

export default class Splash extends Component{

    // 构造
    constructor(props) {
        super(props);
    }
    //闪屏的动画
    componentDidMount() {
        const {navigator} = this.props;
        this.timer = setTimeout(() => {
            InteractionManager.runAfterInteractions(() =>{
                navigator.resetTo({
                    component:AppMain,
                    name:'AppMain'
                });
            });
        },2000);
    }
    //执行倒计时,卸载倒计时
    componentWillUnMount() {
        this.timer && clearTimeout(this.timer);
    }



    render(){

        return(
            <View style={{flex:1}}>

                <Image
                    source={require('../imgs/splash/ic_splash.jpg')}
                    style={{width:maxWidth,height:maxHeight,}}
                />

            </View>
        );



    };


};

