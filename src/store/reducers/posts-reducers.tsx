import {
    FETCH_POSTS_BEGIN,
    FETCH_POSTS_SUCCESS,
    FETCH_POSTS_FAILURE
} from "../actions/actions";

export const initialState = {
    posts: null,
    loading: false,
    error: null
};

export default function postsReducer(
    state = initialState,
    action: any
) {
    switch (action.type) {
        case FETCH_POSTS_BEGIN:
            return {
                ...state,
                loading: true,
                error: null
            };

        case FETCH_POSTS_SUCCESS:
            return {
                ...state,
                loading: false,
                posts: action.payload.posts
            };

        case FETCH_POSTS_FAILURE:
            return {
                ...state,
                loading: false,
                error: action.payload.error,
                posts: null
            };

        default:
            return state;
    }
}
