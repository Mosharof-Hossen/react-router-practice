
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const Post = ({post}) => {
    const {id, title} = post;
    return (
        <div className='w-72 border p-5'>
            <h3 className='text-2xl'>Id: {id}</h3>
            <h4 className='text-xl '>{title}</h4>
            <Link className='btn btn-primary' to={`/post/${id}`} >Post Detail</Link>
        </div>
    );
};

Post.propTypes = {
    post:PropTypes.object.isRequired,
};

export default Post;