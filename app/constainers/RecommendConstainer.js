/**
 *
 *          推荐
 *
 * */
'use strict';
import React,{Component} from 'react';

import Recommend from '../pages/recommend/Recommend';

import {connect} from 'react-redux';

class RecommendConstainer extends Component{


    render(){
        return(
            <Recommend {...this.props}/>
        );
    }


};

export default connect((state) => {
    const {Recommend} = state;
    return{
        Recommend
    }
})(RecommendConstainer);