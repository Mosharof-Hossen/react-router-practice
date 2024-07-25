
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const User = ({user}) => {
    const {id,name,email} = user;
    return (
        <div className='w-64 border text-center p-1'>
            <p>ID: {id}</p>
            <h3>Name: {name}</h3>
            <h3>Email: {email}</h3>
            <Link className='btn  btn-primary' to={`/user/${id}`}>Show Details</Link>
        </div>
    );
};

User.propTypes = {
    user :PropTypes.object.isRequired,
};

export default User;