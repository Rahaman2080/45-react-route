import PropTypes from 'prop-types'
import { Link, useNavigate } from 'react-router-dom';

const User = ({user}) => {
    const {id, name, email, phone}= user;
    const navigate = useNavigate();

    const handleShowDetails = () => {
        navigate(`/user/${id}`)
    }
    return (
        <div className=" p-10 rounded-lg bg-indigo-200 text-indigo-600">
            <h1 className='text-3xl font-bold'>{name}</h1>
            <p className='text 2xl font-semibold'>Email: {email}</p>
            <p className='text-xl'>Phone: {phone}</p>
            <div className='flex justify-between items-center'>
            <Link to={`/user/${id}`}>
                <button className='bg-blue-500 mt-5 py-1 px-3 font-bold text-white rounded-xl'>Show details</button>
                </Link>
                <button onClick={handleShowDetails} className='bg-blue-500 mt-5 py-1 px-3 font-bold text-white rounded-xl'>Show details</button>
            </div>
        </div>
    );
};
User.propTypes ={
    user: PropTypes.object
}
export default User;