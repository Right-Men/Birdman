/**
 * 
 *  
 *      所有的reducer的统一入口
 * 
 * 
 * */
'use strict';
import {combineReducers} from 'redux';

import countReducer from './countReducer';

const rootReducer = combineReducers({
    countReducer
});

export default rootReducer;







