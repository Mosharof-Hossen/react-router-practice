import { useLoaderData, useNavigate } from "react-router-dom";


const PostDetails = () => {
    const { title, body, id } = useLoaderData();
    const navigate = useNavigate();
    const handelBack = () => {
        navigate(-1)
    }
    return (
        <div className="text-center">
            <h1>Post Details {id}</h1>
            <p className="text-2xl">{title}</p>
            <p>{body}</p>
            <button onClick={handelBack} className="btn">--Go Back</button>
        </div>
    );
};

export default PostDetails;