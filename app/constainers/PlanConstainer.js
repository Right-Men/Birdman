/**
 *
 *          计划
 *
 * */
'use strict';
import React,{Component} from 'react';

import Plan from '../pages/plan/Plan';

import {connect} from 'react-redux';

class PlanConstainer extends Component{


    render(){
        return(
            <Plan {...this.props}/>
        );
    }


};

export default connect((state) => {
    const {Plan} = state;
    return{
        Plan
    }
})(PlanConstainer);