import { useRouter } from 'next/router'
import Link from 'next/link'
import styled from "styled-components";
import { useSelector } from "react-redux";


const Post = () => {
    const router = useRouter();
    const { id } = router.query;
    const posts = useSelector((state:<typeof reducer>)=> state.posts);
    const currentPost = posts.filter((post:any)=>post.id === id)[0];
    console.dir(router );

    return (
        <>
            <h1>Post: {id}</h1>
            <BodyView>
                <p>{currentPost.body}</p>
            </BodyView>

            <ul>
                <li>
                    <Link href="/post/[id]/[comment]" as={`/post/${id}/first-comment`}>
                        <a>First comment</a>
                    </Link>
                </li>
                <li>
                    <Link href="/post/[id]/[comment]" as={`/post/${id}/second-comment`}>
                        <a>Second comment</a>
                    </Link>
                </li>
            </ul>
        </>
    )
};

export default Post;


const BodyView = styled.div`
    width : 500px;
    border: 1px solid gray;
    border-radius: 3px;    
`;