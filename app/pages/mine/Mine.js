/**
 *
 *          个人中心
 *
 * */
'use strict';
import React,{Component} from 'react';

import {

    View,
    Text,

} from 'react-native';

export default class Mine extends Component{


    render(){
        return(
            <View style={{flex:1,justifyContent:'center',alignItems:'center'}}>
                <Text>我是个人中心</Text>
            </View>
        );
    }


};