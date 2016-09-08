/**
 *
 *
 *      计数器
 *
 * */
'use strict';
import * as types from '../actions/actionType';

const initialState = {
  count:0
};

export default function changeCount(state=initialState,action) {
    switch (action.type){
        case types.COUNT_DOWN_ACTION:
            return Object.assign({},state,{
                count:action.count+1
            });
        case types.COUNT_UP_ACTION:
            return Object.assign({},state,{
                count:action.count-1
            });
        default:
            return state;
    }
}