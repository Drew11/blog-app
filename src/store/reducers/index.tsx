import { combineReducers } from 'redux';
import postsReducer from "./posts-reducers";

const rootReducer = combineReducers({
    posts: postsReducer,
});

export default rootReducer;