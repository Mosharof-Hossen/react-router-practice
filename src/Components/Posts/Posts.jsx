
import { useLoaderData } from 'react-router-dom';
import Post from '../Post/Post';

const Posts = () => {
    const posts = useLoaderData();
    console.log(posts);
    return (
        <div>
            <h1 className='text-3xl'>Posts : {posts.length}</h1>
            <div className='flex flex-wrap text-center p-5 gap-5 justify-center'>
                {
                    posts.map((post,i)=><Post key={i} post={post}></Post>)
                }
            </div>
        </div>
    );
};

export default Posts;