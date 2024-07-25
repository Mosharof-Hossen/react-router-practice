import { useLoaderData } from "react-router-dom";
import User from "../User/User";


const Users = () => {
    const users = useLoaderData();
    return (
        <div>
            <h1 className="text-5xl font-bold">Users {users.length}</h1>
            <div className="flex flex-wrap gap-6 justify-center">
                {
                    users.map((user ,i )=><User key={i} user={user}></User>)
                }
            </div>
        </div>
    );
};

export default Users;