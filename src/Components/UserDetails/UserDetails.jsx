
import { useLoaderData } from 'react-router-dom';

const UserDetails = () => {
    const {id,name,username,email,website} = useLoaderData();
    
    return (
        <div>
            <h1 className='text-3xl'>User Details</h1>
            <p>Id: {id}</p>
            <p>Name: {name}</p>
            <p>UserName: {username}</p>
            <p>Email: {email}</p>
            <p>Website: {website}</p>
        </div>
    );
};


export default UserDetails;