import SimpleBlogApiService from '../../services/simple-blog-api-service';

export const FETCH_POSTS_BEGIN  = 'FETCH_POSTS_BEGIN';
export const FETCH_POSTS_SUCCESS = "FETCH_POSTS_SUCCESS";
export const FETCH_POSTS_FAILURE = "FETCH_POSTS_FAILURE";

export const fetchPostsBegin = () => ({
    type: FETCH_POSTS_BEGIN
});
export const fetchPostsSuccess = (posts: any) => ({
    type: FETCH_POSTS_SUCCESS ,
    payload: { posts }
});
export const fetchPostsFailure = (error: any) => ({
    type: FETCH_POSTS_FAILURE,
    payload: { error }
});

const service = new SimpleBlogApiService ();

export function fetchPosts() {
    return (dispatch: any) => {
        dispatch(fetchPostsBegin());
        return service.getAllPosts()
            .then(posts => {
                dispatch(fetchPostsSuccess(posts));
                return posts;
            })
            .catch(error =>
                dispatch(fetchPostsFailure(error))
            );
    };
}