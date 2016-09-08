/**
 *
 *          个人中心
 *
 * */
'use strict';
import React,{Component} from 'react';

import Mine from '../pages/mine/Mine';

import {connect} from 'react-redux';

class MineConstainer extends Component{


    render(){
        return(
            <Mine {...this.props}/>
        );
    }


};

export default connect((state) => {
    const {Mine} = state;
    return{
        Mine
    }
})(MineConstainer);