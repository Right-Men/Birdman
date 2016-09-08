/**
 *
 *          首页
 *
 * */
'use strict';
import React,{Component} from 'react';

import Home from '../pages/home/Home';

import {connect} from 'react-redux';

class HomeConstainer extends Component{


    render(){
        return(
            <Home {...this.props}/>
        );
    }


};

export default connect((state) => {
    const {Home} = state;
    return{
        Home
    }
})(HomeConstainer);