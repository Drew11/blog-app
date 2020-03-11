import styled , { createGlobalStyle } from 'styled-components';
import reset from 'styled-reset';
// import PostList from '../post-list/post-list';
import SimpleBlogApiService from "../../services/simple-blog-api-service";


function App() {
    const service = new SimpleBlogApiService();
    service.getAllPosts().then(res=>console.log(res));

    return (
            <Container>
                 <GlobalStyle />

                <Header>
                    <h1>Hello World</h1>
                </Header>

                <main>
                    {/*<PostList />*/}
                </main>
            </Container>
    );
}

export default App;

const Container = styled.div`  
    background: #8ae9ec;
`;

const Header = styled.header`
    background: gray;
    margin-top:10px;
    display: flex;
    justify-content: center;

`;

const GlobalStyle = createGlobalStyle`
    ${reset}
`;

