import { useLoaderData, useNavigate } from "react-router-dom";

const UserDetail = () => {
    const user = useLoaderData();
    const {name, website, phone, username, address,} = user;

    const navigate = useNavigate();

    const handleBack = () =>{
        navigate(-1);
    }

    return (
        <div className="bg-indigo-200 shadow rounded-lg p-8 w-80">
            <h1>Name: {name}</h1>
            <p>User name: {username}</p>
            <p>Website: {website}</p>
            <p>Phone: {phone}</p>
            <p>Address: City-{address.city}, Street-{address.street}, ZipCode-{address.zipcode}</p>
            <button onClick={handleBack} className="mt-6 text-center bg-blue-500 font-bold text-white rounded-lg py-1 px-3">Go back</button>
        </div>
    );
};

export default UserDetail;