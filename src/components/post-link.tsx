import styled from "styled-components";
import Link from 'next/link';
import SimpleBlogApiService from '../../services/simple-blog-api-service'

type post = {
    id: number
    title: string
    body: string
    updatePosts: any
}


const Post = ({ id, title, body, updatePosts}: post )=> {
    const service = new SimpleBlogApiService();
    const remove = async ()=>{
        await service.removePost(id).then(updatePosts)
    };

    return (
        <Li>
            <span>{id}</span>
            <h2>{title}</h2>
            <p>{body}</p>
            <button
                onClick={remove}
            >
                Remove post
            </button>
            <Link href="/post/[id]" as={`/post/${id}`}>
                <a>read more...</a>
            </Link>
        </Li>
    )
};

export default Post;

const Li = styled.li`
    border-radius: 3px;
    border: 1px solid gray;
    margin-top: 4px;
    a {
        text-decoration: none;
    }
`;