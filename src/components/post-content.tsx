import {useState} from 'react'
import SimpleBlogApiService from '../services/simple-blog-api-service';

const BodyPost = ({updatePosts}: any) => {

    const [text, setText]=useState('');
    const [sendDataToServ, setSendDataToServ] =useState(false);
    const service = new SimpleBlogApiService();

    const addPost = async()=>{
        await service.addPost(text)
            .then(()=>{
                setSendDataToServ(false);
                updatePosts();
            });
        setSendDataToServ(true);
    };

    return (
        <div>
            {sendDataToServ?
             <h2>Send Post...</h2>:
                <>
                    <textarea
                        onChange={(e)=>setText(e.target.value)}
                        name="post-text" id="">

            </textarea>
                    <button
                        onClick={addPost}
                    >Save
                    </button>
                </>
            }
        </div>

    );
};

export default BodyPost ;

