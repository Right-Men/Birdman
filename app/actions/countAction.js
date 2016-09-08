/**
 *
 *          计数器的Action
 *
 *
 * */
'use strict';

import * as types from './actionType';

export function changeCountAction(count){
    return dispatch => {
        dispatch(changeCountType(count));
    }
}

function changeCountType(count){
  return{
      type:types.COUNT_DOWN_ACTION,
      count
  }
}





