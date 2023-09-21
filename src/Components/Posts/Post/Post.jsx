import PropTypes from 'prop-types'
import { Link } from 'react-router-dom';

const Post = ({post}) => {
    console.log(post);
    const {title, id} = post;
    return (
        <div className='p-6 bg-sky-400 rounded-lg'>
            <h2>Title: {title}</h2>
            <Link to={`/post/${id}`}>
            <button className='mt-10'>Post details</button>
            </Link>
        </div>
    );
};

Post.propTypes = {
    post: PropTypes.object
}
export default Post;