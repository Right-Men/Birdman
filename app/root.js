/**
 *
 *
 *      整个项目的入口
 *
 * */
'use strict';
import React,{Component} from 'react';

import App from './constainers/App';


import {Provider} from 'react-redux';

import configureStore from './store/configureStore';

const store = configureStore();

export default class root extends Component{
    

    render(){
        return(
            <Provider store={store}>
                <App />
            </Provider>
        );
    };





};






