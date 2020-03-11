// import Post from '../components/post/post';
import Layout from '../components/Layout';
import styled from "styled-components";
import {connect} from 'react-redux';
// import {initStore} from '../store/';
// import withRedux from "next-redux-wrapper";
import {fetchPosts} from "../store/actions/actions";

// // import { connect} from 'react-store';
// import { fetchPosts } from '../store/actions/actions'
//
// // interface postInterface {
// //     id: number
// //     title: string
// //     body: string
// // }
// //
// // type postList = {posts: [postInterface] };

const Posts = (props) => {
    console.log(props)
    // if (!posts) {
    //     return <h1>Loading...</h1>
    // }
    //
    // const items = posts.map((post, index) => <Post key={index} {...post}/>);

    return (
        <Layout>
            <PostListView>
                {/*{items}*/}
            </PostListView>
        </Layout>
    );
};

// Option 1 - Returning the Promise
// Posts.getInitialProps = ({ store }) => store.dispatch(fetchItems());
// Option 2 - Using async / await
Posts.getInitialProps = async ({ store }) => {
    await store.dispatch(fetchPosts());
};

const mapStateToProps = (state) => ({
    posts : state.posts
});

export default connect(mapStateToProps)(Posts);

const PostListView = styled.ul`   
    list-style: none;
`;


