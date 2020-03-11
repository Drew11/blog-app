import { createStore } from 'redux';
import nextConnectRedux from 'next-connect-redux';
import {initialState} from './reducers/posts-reducers';
import reducer from './reducers/';

export const initStore = () => {
    return createStore(reducer, initialState);
};

console.log(initStore)

export const nextConnect = nextConnectRedux(initStore);

